(ns xrd-quiz.core
  (:require [clojure.string :as str]
            [clojure.walk :as ah]
            [xrd-quiz.questions :refer [questions]]))

(def profile
  (atom
   {}
   ))

(def answered
  (atom
   {}
   ))

(defn question-html [question]
  (str/join
   ["<div>"
    "<h2>" (:question question) "</h2>"
    "<ul>"
    (str/join
              (map
               #(
                 str/join
                 [
                  "<li> <a href=\"javascript:void(0)\""
                  "onclick=\"xrd_quiz.core.answer("
                  (:num question) ", "
                  "'" (clj->js (:result question)) "', "
                  "'" (clj->js (first %1)) "')\">"
                  (second %1) 
                  "</a></li>"]
                 )
               (:answers question))
              )
    "</ul>"
    "</div>"]))


(defn render-questions []
  (str/join (map question-html questions)))

(defn render-page []
  (do
    (aset (js/document.getElementById "questions") "innerHTML"
          (render-questions))
    (aset (js/document.getElementById "profile") "innerHTML"
          (deref profile) )
    )
  
  )

(defn answer [num result value]
  (let [result (keyword result)
        value (keyword value)]
    (swap! profile assoc result value)
    (swap! answered assoc num value)
    (render-page)
    ))

(render-page)
