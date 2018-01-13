(ns xrd-quiz.questions
  (:require [clojure.string :as str]))


(def questions
  [
   {:num "1"
    :question "What tier of character do you want to play?"
    :answers
    [
     [:high "High"]
     [:mid "Mid"]
     [:low "Low"]
     [:not-high "Any but high"]
     [:not-low "Any but low"]
     [:any "Any"]
     ]
    :result :tier
    }
   {:num "2"
    :question "What's most important to you?"
    :answers
    [
     [:specialist "Doing one thing and doing it well."]
     [:prepared "Having tools for every situation."]
     [:emotional "How well I emotionally connect with my character."]
     [:rewarding "Aesthetics/feeling suitably rewarded when I perform well."]
     ]
    :result :playstyle
    }
   {:num "3"
    :question "What's your current skill level in fighting games?"
    :answers
    [
     [:new "I am new to fighting games."]
     [:intermediate "I have played some fighting games, or have played Guilty Gear for a while."]
     [:passionate "I am passionate about fighting games, either on a casual or competitive level."]
     [:disregard "Don't factor my skill in. I'll play who I want."]
     ]
    :result :skill-level
    
    }
   ]

  )
