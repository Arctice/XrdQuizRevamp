(ns xrd-quiz.questions)

(def questions
  [
   
   {:question "What's most important to you?"
    :num "1"
    :answers
    [
     [:specialist "Doing one thing and doing it well."]
     [:prepared "Having tools for every situation."]
     [:emotional "How well I emotionally connect with my character."]
     [:rewarding "Aesthetics/feeling suitably rewarded when I perform well."]
     ]
    :result :playstyle
    }
   {:question "Who's your favourite character in the story?"
    :num "2"
    :answers :roster
    :result :story-favourite} 
   {:question "Which character do you think looks the best?"
    :num "3"
    
    :answers :roster
    :result :visuals-favourite}
   {:question "Which character do you relate to the most?"
    :num "4"
    :answers :roster
    :result :sympathy-favourite}
   {:question "Which character do you think looks the worst?"
    :num "5"
    :answers :roster
    :result :visuals-dislike}
   {:question "Which character is your least favourite in general?"
    :num "6"
    :answers :roster
    :result :general-dislike}
   {:question "What sort of moral system do you like in a character?"
    :num "7"
    :answers
    [
     [:good "Any sort of \"good\". I don't really enjoy playing as assholes."]
     [:chaotic-good "I like characters with good intentions that bend the rules to accomplish their goals. Like either Chaotic Good or a jerk with a heart of gold."]
     [:white-good "I like pure \"good\" or heroic characters, not the morally grey sort."]
     [:neutral "I like neutral characters."]
     [:villain "I love to play the villain!"]
     [:disregard "I have no strong feelings one way or another."]
     ]
    :result :character-morals}
   {:question "Do you have a character gender preference?"
    :num "8"
    :answers
    [[:only-male "Strongly male."]
     [:male "Male."]
     [:female "Female."]
     [:only-female "Strongly female."]
     [:gender-subversive "I specifically like gender subversive or androgynous characters."]
     [:disregard "None. Please don't factor gender into my result."]]
    :result :gender-preference}

   {:question "When in a match, what's your primary focus or favourite thing to do?"
    :num "9"
    :answers
    [
     [:mixups "Keeping the pressure on my opponent."]
     [:neutral "Outmanoeuvring the foe."]
     [:conditioning "Mindgames!"]
     [:combos "Executing the right combos in the right situations."]
     [:other "None of the above/I haven't played any fighting games yet."]]
    :result :player-focus}
   {:question "What's the most important or enjoyable quality in a character for you?"
    :num "10"
    :answers
    [[:damage "Damage. Everything else is secondary."]
     [:defense "Health points. I want to last long in combat."]
     [:mobility "Mobility. I like going fast or enjoy unconventional movement options."]
     [:tools "Utility. Give me a lot of tricks, tools and options to play with."]
     [:all-rounder "I would prefer to play an all-rounder."]]
    :result :strength-preference}
   {:question "Do you have fun when zoning?"
    :num "11"
    :answers
    [
     [:priority "Yes! Very much so."]
     [:yes "Yes."]
     [:disregard "No/no preference."]
     [:no "HELL no."]]
    :result :zoning-preference}
   {:question "Do you have fun playing with a rushdown playstyle?"
    :num "12"
    
    :answers
    [
     [:priority "Definitely!"]
     [:yes "I do."]
     [:disregard "No/no preference."]
     [:no "I hate rushdown gameplay."]]
    :result :rushdown-preference}
   {:question "You indicated you like both Rushdown and Zoning. What would you think of a character who does both?"
    :num "12.5"
    
    :answers
    [
     [:priority "I'd like that. Please make it a priority."]
     [:yes "Fine by me if I get one."]
     [:no "No. I'd prefer playing one or the other."]]
    :result :mixed-playstyle-preference}
   {:question "Do you enjoy playing the one player game?"
    :num "13"
    :answers 
    [[:yes "I love getting opponent into a situation where they cannot really do anything."]
     [:sometimes "I am fine with doing it sometimes, if the need arises."]
     [:no "I would rather play a more footsies/neutral/two player game"]
     [:disregard "No preference."]]
    :result :1p-preference}

   {:question "What range are you most comfortable fighting at?"
    :num "14"
    :answers
    [[:close "I'm a close-range fighter."]
     [:mid "I feel most comfortable at mid range."]
     [:long "I most enjoy fighting at long ranges."]
     [:all "I want to be able to handle all ranges!"]
     [:disregard "No idea/anything goes."]]
    :result :range-preference}
   {:question "Does the idea of stances or multiple movesets in the same character sound appealing?"
    :num "15"
    :answers
    [
     [:yes "I like the idea and it can help my game or sounds really fun."]
     [:no "I would prefer to just play a character with one moveset."]
     [:disregard "No preference."]]
    :result :stance-preference}
   {:question "Are you ok with charge motions for your special moves?"
    :num "16"
    
    :answers
    [[:heavy "I like using them for a lot for my combos, spacing and setups."]
     [:light "If it is just for the occasional neutral/defensive use, they are cool with me"]
     [:none "I want to use a character that has 0 charge motions for their special moves"]
     [:disregard "No preference."]]
    :result :charge-preference}
   {:question "What is your preferred way of opening people up?"
    :num "17"
    :answers
    [[:frame-traps "The simple Frame Trap/throw game."]
     [:block-pressure "RISC/Blockstring Pressure."]
     [:grapple "Command Grabs."]
     [:high-low "The High/Low mixup."]
     [:crossups "The Left/Right mixup."]
     [:unblockable "An Unblockable setup."]
     [:disregard "No preference."]]
    :result :mixup-preference}
   {:question "Are you ok with having setplay in your moveset?"
    :num "18"
    
    :answers
    [[:neutral "I like the idea of setplay as a basis for starting my offense/neutral."]
     [:oki "I'm fine with setplay as a way of setting pressure up on the opponent on knockdown"]
     [:none "I would rather have a moveset that has minimal to no setplay"]
     [:disregard "No preference."]]
    :result :setplay-preference}

   {:question "Would you like a projectile?"
    :num "19"
    :answers
    [[:standard "I want at least a standard full screen horizontal moving one."]
     [:limited "As long as it controls good space it doesn't have to be full screen or horizontal moving"]
     [:special "I want a tricky, meter-only, controllable, or some kind of unique projectile people have trouble dealing with"]
     [:none "I do not need projectiles to win"]
     [:disregard "No preference."]]
    :result :projectile-preference}
   {:question "Do you want a meterless or metered reversal?"
    :num "20"
    :answers
    [
     [:dp "I need a DP/meterless reversal."]
     [:metered "Metered-only Reversals are fine in exchange for more neutral/offensive options."]
     [:disregard "No preference."]]
    :result :dp-preference}
   {:question "Would you feel comfortable managing resources while playing your character?"
    :num "21"
    :answers
    [[:priority "Yes, please! I'd like a character that focuses on managing a resource."]
     [:yes "I'd like to manage a moderate amount!"]
     [:fine "I'm okay with some."]
     [:no "No, thanks. I just want to focus on my opponent and I."]
     [:disregard "Doesn't matter."]]
    :result :resource-preference}
   {:question "Pick the character resource type that sounds the most fun:"
    :num "22"
    :answers
    [[:meter "Managing an additional meter sounds fun."]
     [:limiting "Maybe something like ammunition, or a summoned projectile that I have to keep track of."]
     [:none "Nothing special. I'll stick to the basic meter."]
     [:disregard"No preference."]]
    :result :resource-type}
   {:question "How good do you want your vortex/knockdown pressure to be?"
    :num "23"
    :answers
    [[:none "The same options I would have starting a neutral blockstring is fine"]
     [:basic "I want the setplay/projectile pressure as they are getting up."]
     [:50-50s "I want to have so many mixup options that the opponent will have to make a big guess on wakeup or risk getting blown up."]
     [:disregard "No preference."]]
    :result :oki-preference}

   {:question "What tier of character do you want to play?"
    :num "24"
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
   {:question "What's your current skill level in fighting games?"
    :num "25"
    
    :answers
    [
     [:new "I am new to fighting games."]
     [:intermediate "I have played some fighting games, or have played Guilty Gear for a while."]
     [:passionate "I am passionate about fighting games, either on a casual or competitive level."]
     [:disregard "Don't factor my skill in. I'll play who I want."]
     ]
    :result :skill-level}   
   ])
