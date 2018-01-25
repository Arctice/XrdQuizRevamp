(ns xrd-quiz.characters)

(defrecord character
    [name gender morals
     playstyle focus strengths
     zoning rushdown vortex
     reversal range projectile
     stance charge
     resource-management resource-type
     mixups setplay oneplayer-game
     tier skill-requirement])

(def roster
  ["sol" "ky" "may" "faust" "millia" "chipp" "ino" "axl" "venom" "zato"
   "slayer" "potemkin" "ram" "bedman" "sin" "elphelt" "leo" "jacko" "jam"
   "johnny" "kum" "raven" "dizzy"])

(def characters
  {
   :sol
   (map->character
    {:name "Sol Badguy" :gender :M :morals :grey
     :playstyle :prepared :focus [:conditioning] :strengths [:all-rounder]
     :zoning 0.0 :rushdown 1.0 :vortex :none
     :reversal :dp :range [:short :mid] :projectile [:limited]
     :stance :no :charge :none
     :resource-management :none :resource-type :none
     :mixups [:grapple :block-pressure] :setplay [:none] :oneplayer-game :sometimes
     :tier :high :character-difficulty :beginner })
   :ky
   (map->character
    {:name "Ky Kiske" :gender :M :morals :good
     :playstyle :prepared :focus [:neutral :conditioning] :strengths [:all-rounder]
     :zoning 0.5 :rushdown 0.5 :vortex :basic
     :reversal :dp :range [:all] :projectile [:standard]
     :stance :no :charge :none
     :resource-management :light :resource-type :limiting
     :mixups [:frame-traps] :setplay [:oki] :oneplayer-game :no
     :tier :high :character-difficulty :beginner })
   :may
   (map->character
    {:name "May" :gender :F :morals :neutral
     :playstyle :prepared :focus [:combos] :strengths [:tools :mobility]
     :zoning 0.25 :rushdown 0.75 :vortex :basic
     :reversal :metered :range [:mid] :projectile [:limited :special]
     :stance :no :charge :heavy
     :resource-management :heavy :resource-type :limiting
     :mixups [:grapple :high-low] :setplay [:neutral :oki] :oneplayer-game :no
     :tier :mid :character-difficulty :medium })
   :faust
   (map->character
    {:name "Faust" :gender :M :morals :neutral
     :playstyle :specialist :focus [:neutral] :strengths [:tools]
     :zoning 1.0 :rushdown 0.0 :vortex :none
     :reversal :metered :range [:mid :long] :projectile [:limited :special]
     :stance :no :charge :none
     :resource-management :heavy :resource-type :limiting
     :mixups [:unblockable] :setplay [:neutral] :oneplayer-game :no
     :tier :mid :character-difficulty :beginner })
   :millia
   (map->character
    {:name "Millia Rage" :gender :F :morals :grey
     :playstyle :specialist :focus [:mixups :neutral] :strengths [:mobility :tools]
     :zoning 0.0 :rushdown 1.0 :vortex :50-50s
     :reversal :metered :range [:mid :short] :projectile [:special :limited]
     :stance :no :charge :none
     :resource-management :light :resource-type :limiting
     :mixups [:high-low] :setplay [:oki] :oneplayer-game :yes
     :tier :high :character-difficulty :medium })
   :chipp
   (map->character
    {:name "Chipp Zanuff" :gender :M :morals :good
     :playstyle :prepared :focus [:conditioning :neutral] :strengths [:mobility :tools]
     :zoning 0.5 :rushdown 0.5 :vortex :none
     :reversal :dp :range [:short] :projectile [:limited]
     :stance :no :charge :none
     :resource-management :none :resource-type :none
     :mixups [:crossups :high-low] :setplay [:none] :oneplayer-game :sometimes
     :tier :mid :character-difficulty :high })
   :ino
   (map->character
    {:name "I-No" :gender :F :morals :villain
     :playstyle :rewarding :focus [:mixups] :strengths [:mobility]
     :zoning 0.0 :rushdown 1.0 :vortex :50-50s
     :reversal :metered :range [:short] :projectile [:special]
     :stance :no :charge :none
     :resource-management :light :resource-type :none
     :mixups [:high-low] :setplay [:neutral] :oneplayer-game :yes
     :tier :mid :character-difficulty :high })
   :axl
   (map->character
    {:name "Axl Low" :gender :M :morals :neutral
     :playstyle :specialist :focus [:neutral :conditioning] :strengths [:all-rounder]
     :zoning 1.0 :rushdown 0.0 :vortex :none
     :reversal :dp :range [:mid :long] :projectile [:none]
     :stance :yes :charge :heavy
     :resource-management :none :resource-type :none
     :mixups [:frame-traps :block-pressure] :setplay [:none] :oneplayer-game :sometimes
     :tier :mid :character-difficulty :medium })
   :venom
   (map->character
    {:name "Venom" :gender :M :morals :neutral
     :playstyle :rewarding :focus [:neutral] :strengths [:tools]
     :zoning 0.75 :rushdown 0.25 :vortex :basic
     :reversal :none :range [:mid :long] :projectile [:standard :special]
     :stance :no :charge :heavy
     :resource-management :heavy :resource-type :limiting
     :mixups [:block-pressure] :setplay [:neutral] :oneplayer-game :sometimes
     :tier :mid :character-difficulty :high })
   :zato
   (map->character
    {:name "Zato=1" :gender :M :morals :neutral
     :playstyle :specialist :focus [:combos :mixups] :strengths [:tools :damage]
     :zoning 0.25 :rushdown 0.75 :vortex :50-50s
     :reversal :metered :range [:all] :projectile [:special]
     :stance :yes :charge :none
     :resource-management :heavy :resource-type :meter
     :mixups [:unblockable :grapple :block-pressure] :setplay [:neutral] :oneplayer-game :yes
     :tier :high :character-difficulty :high })
   :slayer
   (map->character
    {:name "Slayer" :gender :M :morals :grey
     :playstyle :rewarding :focus [:combos] :strengths [:damage :mobility]
     :zoning 0.0 :rushdown 1.0 :vortex :none
     :reversal :metered :range [:short] :projectile [:none]
     :stance :no :charge :none
     :resource-management :none :resource-type :none
     :mixups [:crossups :frame-traps] :setplay [:none] :oneplayer-game :no
     :tier :low :character-difficulty :high })
   :potemkin
   (map->character
    {:name "Potemkin" :gender :M :morals :neutral
     :playstyle :rewarding :focus [:conditioning] :strengths [:defense :damage]
     :zoning 0.0 :rushdown 0.0 :vortex :none
     :reversal :metered :range [:short] :projectile [:none]
     :stance :no :charge :heavy
     :resource-management :none :resource-type :none
     :mixups [:grapple] :setplay [:none] :oneplayer-game :no
     :tier :low :character-difficulty :high })
   :ram
   (map->character
    {:name "Ramlethal Valentine" :gender :F :morals :neutral
     :playstyle :rewarding :focus [:mixups] :strengths [:tools]
     :zoning 0.25 :rushdown 0.75 :vortex :basic
     :reversal :metered :range [:mid] :projectile [:limited]
     :stance :yes :charge :none
     :resource-management :heavy :resource-type :limiting
     :mixups [:high-low :grapple] :setplay [:oki] :oneplayer-game :yes
     :tier :low :character-difficulty :medium })
   :bedman
   (map->character
    {:name "Bedman" :gender :M :morals :villain
     :playstyle :specialist :focus [:neutral] :strengths [:tools :mobility :defense]
     :zoning 0.25 :rushdown 0.75 :vortex :basic
     :reversal :metered :range [:all] :projectile [:standard]
     :stance :no :charge :none
     :resource-management :heavy :resource-type :limiting
     :mixups [:crossups :high-low :block-pressure] :setplay [:neutral :oki] :oneplayer-game :sometimes
     :tier :mid :character-difficulty :medium })
   :sin
   (map->character
    {:name "Sin Kiske" :gender :M :morals :good
     :playstyle :prepared :focus [:neutral :combos] :strengths [:damage]
     :zoning 0.0 :rushdown 1.0 :vortex :none
     :reversal :dp :range [:mid] :projectile [:special]
     :stance :no :charge :none
     :resource-management :heavy :resource-type :meter
     :mixups [:frame-traps :block-pressure] :setplay [:oki] :oneplayer-game :sometimes
     :tier :high :character-difficulty :beginner })
   :elphelt
   (map->character
    {:name "Elphelt Valentine" :gender :F :morals :good
     :playstyle :prepared :focus [:neutral :combos] :strengths [:damage :tools :all-rounder]
     :zoning 0.25 :rushdown 0.75 :vortex :none
     :reversal :metered :range [:all] :projectile [:special]
     :stance :yes :charge :none
     :resource-management :light :resource-type :limiting
     :mixups [:block-pressure :frame-traps :unblockable] :setplay [:oki :neutral] :oneplayer-game :sometimes
     :tier :high :character-difficulty :medium })
   :leo
   (map->character
    {:name "Leo Whitefang" :gender :M :morals :good
     :playstyle :rewarding :focus [:conditioning :mixups] :strengths [:damage :defense]
     :zoning 0.0 :rushdown 1.0 :vortex :none
     :reversal :dp :range [:short] :projectile [:standard]
     :stance :yes :charge :light
     :resource-management :none :resource-type :none
     :mixups [:block-pressure :crossups :high-low :frame-traps] :setplay [:none] :oneplayer-game :no
     :tier :mid :character-difficulty :beginner })
   :jacko
   (map->character
    {:name "Jack-O Valentine" :gender :F :morals :grey
     :playstyle :specialist :focus [:mixups :combos] :strengths [:tools]
     :zoning 1.0 :rushdown 0.0 :vortex :none
     :reversal :dp :range [:all] :projectile [:limited]
     :stance :no :charge :none
     :resource-management :heavy :resource-type :meter
     :mixups [:block-pressure :high-low] :setplay [:neutral :oki] :oneplayer-game :yes
     :tier :mid :character-difficulty :beginner })
   :jam
   (map->character
    {:name "Jam Kuradoberi" :gender :F :morals :neutral
     :playstyle :rewarding :focus [:combos :neutral] :strengths [:damage :mobility]
     :zoning 0.0 :rushdown 1.0 :vortex :none
     :reversal :dp :range [:short] :projectile [:none]
     :stance :no :charge :none
     :resource-management :heavy :resource-type :limiting
     :mixups [:frame-traps :block-pressure] :setplay [:none] :oneplayer-game :no
     :tier :low :character-difficulty :medium })
   :johnny
   (map->character
    {:name "Johnny Sfondi" :gender :M :morals :grey
     :playstyle :rewarding :focus [:combos :mixups :conditioning] :strengths [:damage]
     :zoning 0.0 :rushdown 1.0 :vortex :none
     :reversal :metered :range [:mid :long] :projectile [:limited :special]
     :stance :yes :charge :none
     :resource-management :light :resource-type :limiting
     :mixups [:unblockable :block-pressure :frame-traps] :setplay [:oki] :oneplayer-game :sometimes
     :tier :high :character-difficulty :high })
   :kum
   (map->character
    {:name "Kum Haehyun" :gender :F :morals :good
     :playstyle :prepared :focus [:combos :mixups] :strengths [:damage :defense :all-rounder]
     :zoning 0.25 :rushdown 0.75 :vortex :50-50s
     :reversal :metered :range [:all] :projectile [:standard]
     :stance :no :charge :none
     :resource-management :none :resource-type :none
     :mixups [:high-low] :setplay [:oki] :oneplayer-game :no
     :tier :mid :character-difficulty :medium })
   :raven
   (map->character
    {:name "Raven" :gender :M :morals :villain
     :playstyle :prepared :focus [:neutral] :strengths [:all-rounder :tools]
     :zoning 0.5 :rushdown 0.5 :vortex :basic
     :reversal :metered :range [:all] :projectile [:standard]
     :stance :yes :charge :none
     :resource-management :none :resource-type :none
     :mixups [:grapple :high-low] :setplay [:oki] :oneplayer-game :no
     :tier :high :character-difficulty :beginner })
   :dizzy
   (map->character
    {:name "Dizzy" :gender :F :morals :good
     :playstyle :specialist :focus [:mixups :combos :neutral] :strengths [:tools :mobility]
     :zoning 0.75 :rushdown 0.25 :vortex :basic
     :reversal :metered :range [:long] :projectile [:special]
     :stance :no :charge :none
     :resource-management :heavy :resource-type :limiting
     :mixups [:high-low :frame-traps] :setplay [:neutral :oki] :oneplayer-game :sometimes
     :tier :mid :character-difficulty :medium })
   }
  )
