(ns xrd-quiz.core
  (:require [clojure.string :as str]
            [clojure.walk :as ah]
            [xrd-quiz.questions :refer [questions]]
            [xrd-quiz.characters :refer [characters roster]]))

(defn log [x]
  (do
    (js/console.log x)
    x))

(defn character-name [char-key]
  (:name (char-key characters)))

(def profile (atom {}))
(def answered (atom {})) 
(def results (atom {}))


(defn answers-html [question]
  (if (= (:answers question) :roster)
    (str
     (str/join
      (map
       #(str/join
         ["<a href=\"javascript:void(0)\""
          "onclick=\"xrd_quiz.core.answer("
          "'" (:num question) "', "
          "'" (clj->js (:result question)) "', "
          "'" (clj->js %1) "')\">"
          "<img src=\"img/" (clj->js %1) ".png\" width=\"40px\" height=\"40px\"></img>"
          "</a>"
          ])
       roster)
      )
     "<p><a href=\"javascript:void(0)\""
     "onclick=\"xrd_quiz.core.answer("
     "'" (:num question) "', "
     "'" (clj->js :skip) "', "
     "'" (clj->js :skip) "')\">"
     "I want to to skip this question</a></p>"
     )
    (str/join
     (map
      #(str/join
        ["<li> <a href=\"javascript:void(0)\""
         "onclick=\"xrd_quiz.core.answer("
         "'" (:num question) "', "
         "'" (clj->js (:result question)) "', "
         "'" (clj->js (first %1)) "')\">"
         (second %1) 
         "</a></li>"])
      (:answers question))
     )))
(defn question-html [question]
  (str/join
   ["<div>"
    "<h2> Question " (:num question) " - " (:question question) "</h2>"
    "<ul>"
    (answers-html question)
    "</ul>"
    "</div>"]))

(defn show-hybrid-playstyle-question [question]
  (if (not (= "11.5" (:num question)))
    true
    (and
     (case (:rushdown-preference (deref profile))
       (:priority :yes) true false)
     (case (:zoning-preference (deref profile))
       (:priority :yes) true false))
    ))
(defn answered-filter [question]
  (nil?
   ((deref answered) (:num question))))
(defn remaining-questions []
  (map question-html
        (filter
         (every-pred
            answered-filter
            show-hybrid-playstyle-question)
         questions)))
(defn render-questions []
  (str/join (remaining-questions)))


(defn tier-value [character]
  (let [tier-answer (:tier (deref profile))]
   (case (:tier character)
     :high (case tier-answer
             (:high :not-low :any) 1
             0)
     :mid (case tier-answer
            (:mid :not-high :not-low :any) 1
            0)
     :low (case tier-answer
            (:low :not-high :any) 1
            0)
     :nil 0
     )))
(defn playstyle-value [character]
  (if (= (:playstyle (deref profile)) (:playstyle character))
    1
    0))
(defn emotional-value [character]
  (if (= (:playstyle (deref profile)) :emotional)
    1.5
    1))
(defn skill-requirement [character]
  (case (:skill-level (deref profile))
    (:disregard nil) 0
    :new (case (:character-difficulty character)
           :beginner 1
           (:medium :high) 0)
    :intermediate (case (:character-difficulty character)
              (:beginner :medium) 1
              :high 0)
    :passionate 1
    ))
(defn character-favouritism [character type]
  (let [char-tag (type (deref profile))]
    (if (nil? char-tag)
      0
      (if (=
           (:name character)
           (:name (char-tag characters)))
        1
        0))))
(defn morals-preference [character]
  (let [morals (:morals character)]
    (assert (some #{morals} [:good :grey :neutral :villain]))
    (case (:character-morals (deref profile))
      (:disregard nil) 0
      :good (case morals
              (:good :grey) 1
              0)
      :chaotic-good (case morals
                      :grey 1
                      0)
      :white-good (case morals
                    :good 1
                    0)
      :neutral (case morals
                 :neutral 1
                 0)
      :villain (case morals
                 :villain 1
                 0)
      )))
(defn zoning-value [character]
  (* (:zoning character)
   (case (:zoning-preference (deref profile))
     :priority 2
     :yes 1
     (:disregard nil) 0
     :no -1)))
(defn rushdown-value [character]
  (* (:rushdown character)
   (case (:rushdown-preference (deref profile))
     :priority 2
     :yes 1
     (:disregard nil) 0
     :no -1)))
(defn hybrid-value [character]
  (if
      (and (> (:zoning character) 0) (> (:rushdown character) 0))
    (case (:mixed-playstyle-preference (deref profile))
      (:yes nil) 0
      :priority 1
      :no -1)
    0))
(defn gameplan-focus-value [character]
  (if (some
       #(= (:player-focus (deref profile)) %)
       (:focus character))
    1 0))
(defn range-value [character]
  (if (some
       #(= (:range-preference (deref profile)) %)
       (:range character))
    1 0))
(defn gender-value [character]
  (let [gender-pref (:gender-preference (deref profile))]
    (case (:gender character)
      :M (case gender-pref
           :only-male 2
           :male 1
           0)
      :F (case gender-pref
           :only-female 2
           :female 1
           0))))
(defn character-strengths-value [character]
  (if (some
       #(= (:strength-preference (deref profile)) %)
       (:strengths character))
    1 0))
(defn resource-management-value [character]
  (let [resource-style (:resource-management character)]
    (assert (some #{resource-style}
                  [:none :light :heavy]))
    (case (:resource-preference (deref profile))
      (:disregard nil) 0
      :priority (case resource-style :heavy 1 0)
      :yes (case resource-style :light 1 0)
      :fine (case resource-style :light 1 :none 1 0)
      :no (case resource-style :none 1 0)
      )))
(defn resource-type-value [character]
  (if
      (=
       (:resource-type (deref profile))
       (:resource-type character))
    1 0)
  )
(defn reversal-value [character]
    (if
      (=
       (:dp-preference (deref profile))
       (:reversal character))
    1 0))
(defn stance-value [character]
  (if
      (=
       (:stance-preference (deref profile))
       (:stance character))
    1 0)
  )
(defn vortex-value [character]
  (if
      (=
       (:oki-preference (deref profile))
       (:vortex character))
    1 0)  
  )
(defn mixup-value [character]
    (if (some
       #(= (:mixup-preference (deref profile)) %)
       (:mixups character))
    1 0))
(defn oneplayer-value [character]
    (if
      (=
       (:1p-preference (deref profile))
       (:oneplayer-game character))
    1 0))
(defn setplay-value [character]
  (if (some
       #(= (:setplay-preference (deref profile)) %)
       (:setplay character))
    1 0))
(defn charge-value [character]
  (if
      (=
       (:charge-preference (deref profile))
       (:charge character))
    1 0))
(defn projectile-value [character]
  (if (some
       #(= (:projectile-preference (deref profile)) %)
       (:projectile character))
    1 0))

(defn evaluate-character [character]
  (+
   (tier-value character)
   (playstyle-value character)
   (* (emotional-value character)
     (+
      (character-favouritism character :story-favourite)
      (character-favouritism character :visuals-favourite)
      (character-favouritism character :sympathy-favourite)
      (- (character-favouritism character :visuals-dislike))
      (- (character-favouritism character :general-dislike))
      (morals-preference character)
      )
     )
   (skill-requirement character)
   (zoning-value character)
   (rushdown-value character)
   (hybrid-value character)
   (gameplan-focus-value character)
   (range-value character)
   (gender-value character)
   (character-strengths-value character)
   (resource-management-value character)
   (resource-type-value character)
   (reversal-value character)
   (stance-value character)
   (vortex-value character)
   (mixup-value character)
   (oneplayer-value character)
   (setplay-value character)
   (charge-value character)
   (projectile-value character)
))


(defn calculate-results []
  (swap!
   results
   (fn []
     (vector
      (map
       #(vector (first %) (evaluate-character (second %)))
       characters
       ))
     )
   ))

(defn render-results []
  (let [sorted-results (sort
                        #(compare (second %2) (second %1))
                        (first (deref results)))]
    (str/join
     ["<p>Your result is...</p>"
      "<h3>"
      "<div><img src=\"img/" (name (first (first sorted-results)))
      ".png\"></img></div> "
      (character-name (first (first sorted-results))) "!</h3>"
      "<p>Close behind...</p>"
      "<ul>"
      "<li>" (character-name (first (nth sorted-results 1))) "</li>"
      "<li>" (character-name (first (nth sorted-results 2))) "</li>"
      "<li>" (character-name (first (nth sorted-results 3))) "</li>"
      "</ul>"
      ])
    ))

(defn render-page []
  (do
    (aset (js/document.getElementById "questions") "innerHTML"
          (render-questions))
    (calculate-results)
    (aset (js/document.getElementById "results") "innerHTML"
          (if (= 0 (count (remaining-questions)))
            (render-results)
            "")
          )
  ))

(defn answer [num result value]
  (let [result (keyword result)
        value (keyword value)]
    (swap! profile assoc result value)
    (swap! answered assoc num value)
    (render-page)
    ))


(render-page)
