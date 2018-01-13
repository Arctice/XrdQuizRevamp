(require '[cljs.build.api :as b])

(println "Building ...")

(let [start (System/nanoTime)]
  (b/build "src"
    {:main 'xrd-quiz.core
     :output-to "main.js"
     :output-dir "out"
;     :verbose true
;     :source-paths ["src"]
;     :optimizations :advanced
;     :pseudo-names true
;     :closure-warnings {:check-types :warning}
;     :externs ["externs/externs.js"]
;     :pretty-print true
     }
)
  (println "... done. Elapsed" (/ (- (System/nanoTime) start) 1e9) "seconds"))

