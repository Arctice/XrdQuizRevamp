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
   "johnny" "kum" "raven" "dizzy" "answer" "baiken"])

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
     :tier :mid :character-difficulty :beginner })
   :ky
   (map->character
    {:name "Ky Kiske" :gender :A :morals :good
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
     :playstyle :rewarding :focus [:combos] :strengths [:tools :mobility]
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
     :tier :mid :character-difficulty :medium })
   :chipp
   (map->character
    {:name "Chipp Zanuff" :gender :M :morals :good
     :playstyle :prepared :focus [:conditioning :neutral] :strengths [:mobility :tools]
     :zoning 0.5 :rushdown 0.5 :vortex :none
     :reversal :dp :range [:short] :projectile [:limited]
     :stance :no :charge :none
     :resource-management :none :resource-type :none
     :mixups [:crossups :high-low] :setplay [:none] :oneplayer-game :sometimes
     :tier :high :character-difficulty :high })
   :ino
   (map->character
    {:name "I-No" :gender :F :morals :villain
     :playstyle :rewarding :focus [:mixups] :strengths [:mobility]
     :zoning 0.0 :rushdown 1.0 :vortex :50-50s
     :reversal :metered :range [:short] :projectile [:special]
     :stance :no :charge :none
     :resource-management :none :resource-type :none
     :mixups [:high-low] :setplay [:neutral] :oneplayer-game :yes
     :tier :mid :character-difficulty :high })
   :axl
   (map->character
    {:name "Axl Low" :gender :M :morals :neutral
     :playstyle :specialist :focus [:neutral :conditioning] :strengths [:all-rounder]
     :zoning 1.0 :rushdown 0.0 :vortex :none
     :reversal :dp :range [:mid :long] :projectile [:none]
     :stance :no :charge :light
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
     :playstyle :rewarding :focus [:combos :mixups] :strengths [:tools :damage]
     :zoning 0.25 :rushdown 0.75 :vortex :50-50s
     :reversal :metered :range [:all] :projectile [:special]
     :stance :yes :charge :none
     :resource-management :heavy :resource-type :meter
     :mixups [:unblockable :grapple :block-pressure] :setplay [:neutral] :oneplayer-game :yes
     :tier :mid :character-difficulty :high })
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
     :playstyle :specialist :focus [:mixups] :strengths [:tools]
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
   :answer
   (map->character
    {:name "Answer" :gender :M :morals :neutral
     :playstyle :prepared :focus [:mixups :combos :neutral] :strengths [:tools :mobility]
     :zoning 0 :rushdown 1 :vortex :50-50s
     :reversal :dp :range [:mid :close] :projectile [:limited]
     :stance :yes :charge :none
     :resource-management :heavy :resource-type :limiting
     :mixups [:high-low :frame-traps] :setplay [:neutral :oki] :oneplayer-game :no
     :tier :low :character-difficulty :high })
   :baiken
   (map->character
    {:name "Baiken" :gender :F :morals :good
     :playstyle :prepared :focus [:neutral :combos] :strengths [:tools :all-rounder]
     :zoning 0.5 :rushdown 0.5 :vortex :basic
     :reversal :metered :range [:mid] :projectile [:special :limited]
     :stance :yes :charge :none
     :resource-management :none :resource-type :none
     :mixups [:frame-traps :grapple] :setplay [:none] :oneplayer-game :no
     :tier :low :character-difficulty :beginner })
   })


(defrecord content-links
    [dustloop discord bits])

(def character-content
  {
   :sol
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Sol_Badguy"
     :discord "https://discordapp.com/invite/0fnjEdA32QziBwra"
     :bits "https://drunkardshade.com/2017/05/01/guilty-bits-xrd-sol/"
     })
   :ky
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Ky_Kiske"
     :discord "https://discordapp.com/invite/0u3qom4GahOTTByB"
     :bits "https://drunkardshade.com/2017/05/02/guilty-bits-xrd-ky/"
     })
   :may
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/May"
     :discord "https://discordapp.com/invite/0TarBXRJrjkBni3s"
     :bits "https://drunkardshade.com/2017/05/05/guilty-bits-xrd-may/"
     })
   :faust
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Faust"
     :discord "https://discordapp.com/invite/0YsZMsyXsk0fki0z"
     :bits "https://drunkardshade.com/2017/05/06/guilty-bits-xrd-faust/"
     })
   :millia
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Millia_Rage"
     :discord "https://discordapp.com/invite/0fzWmoA2f5VuNtid"
     :bits "https://drunkardshade.com/2017/05/09/guilty-bits-xrd-millia/"
     })
   :chipp
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Chipp_Zanuff"
     :discord "https://discord.gg/0hwyckGQ2bQKtOGE"
     :bits "https://drunkardshade.com/2017/05/08/guilty-bits-xrd-chipp/"
     })
   :ino
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/I-No"
     :discord "https://discord.gg/0wwNU581DjmZkkdp"
     :bits "https://drunkardshade.com/2017/05/13/guilty-bits-xrd-i-no/"
     })
   :axl
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Axl_Low"
     :discord "https://discord.gg/0sTNLglD2uMibgWs"
     :bits "https://drunkardshade.com/2017/05/04/guilty-bits-xrd-axl/"
     })
   :venom
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Venom"
     :discord "https://discord.gg/010mtfwzqq54ecePm"
     :bits "https://drunkardshade.com/2017/05/11/guilty-bits-xrd-venom/"
     })
   :zato
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Zato-1"
     :discord "https://discordapp.com/invite/0o3wPdUINR4kewtO"
     :bits "https://drunkardshade.com/2017/05/07/guilty-bits-xrd-zato-1/"
     })
   :slayer
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Slayer"
     :discord "https://discord.gg/0108GJa0BJP2rV2vX"
     :bits "https://drunkardshade.com/2017/05/12/guilty-bits-xrd-slayer/"
     })
   :potemkin
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Potemkin"
     :discord "https://discord.gg/010msuSsL8Ur5Nb1P"
     :bits "https://drunkardshade.com/2017/05/03/guilty-bits-xrd-potemkin/"
     })
   :ram
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Ramlethal_Valentine"
     :discord "https://discord.gg/0YLh9Ml3Li1foiDc"
     :bits "https://drunkardshade.com/2017/05/16/guilty-bits-xrd-ramlethal/"
     })
   :bedman
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Bedman"
     :discord "https://discord.gg/0zFfsuE4onR1bvVG"
     :bits "https://drunkardshade.com/2017/05/15/guilty-bits-xrd-bedman/"
     })
   :sin
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Sin_Kiske"
     :discord "https://discord.gg/0ZcD43zJDeX7qFMx"
     :bits "https://drunkardshade.com/2017/05/17/guilty-bits-xrd-sin/"
     })
   :elphelt
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Elphelt_Valentine"
     :discord "https://discord.gg/0g2PWaA3VYwX2c7Z"
     :bits "https://drunkardshade.com/2017/05/14/guilty-bits-xrd-elphelt/"
     })
   :leo
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Leo_Whitefang"
     :discord "https://discord.gg/010paK4rwvO6cN3t4"
     :bits "https://drunkardshade.com/2017/05/18/guilty-bits-xrd-leo/"
     })
   :jacko
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Jack-O%27"
     :discord "https://discord.gg/0XbyOuifGoWPv1G3"
     :bits "https://drunkardshade.com/2017/05/18/guilty-bits-xrd-jack-o/"
     })
   :jam
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Jam_Kuradoberi"
     :discord "https://discord.gg/0vIKAGeYQhoLj8mY"
     :bits "https://drunkardshade.com/2017/05/21/guilty-bits-xrd-jam/"
     })
   :johnny
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Johnny"
     :discord "https://discord.gg/0sTHJeygKh7PsSvq"
     :bits "https://drunkardshade.com/2017/05/19/guilty-bits-xrd-johnny/"
     })
   :kum
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Kum_Haehyun"
     :discord "https://discord.gg/0rpeN0Gem4oCDaLm"
     :bits "https://drunkardshade.com/2017/05/22/guilty-bits-xrd-haehyun/"
     })
   :raven
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Raven"
     :discord "https://discord.gg/0rflCoHYS3OFEK7h"
     :bits "https://drunkardshade.com/2017/05/10/guilty-bits-xrd-raven/"
     })
   :dizzy
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Dizzy"
     :discord "https://discord.gg/010mhBiZ6iFf6edGL"
     :bits "https://drunkardshade.com/2017/05/23/guilty-bits-xrd-dizzy/"
     })
   :answer
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Answer"
     :discord "https://discord.gg/BGPyACV"
     :bits "https://drunkardshade.com/2017/05/25/guilty-bits-xrd-answer/"
     })
   :baiken
   (map->content-links
    {:dustloop "http://www.dustloop.com/wiki/index.php?title=GGXRD-R2/Baiken"
     :discord "https://discordapp.com/invite/utnudAF"
     :bits "https://drunkardshade.com/2017/05/25/guilty-bits-xrd-answer/"
     })
   }
  )
