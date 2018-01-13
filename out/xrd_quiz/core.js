// Compiled by ClojureScript 1.9.908 {}
goog.provide('xrd_quiz.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('xrd_quiz.questions');
goog.require('xrd_quiz.characters');
xrd_quiz.core.log = (function xrd_quiz$core$log(x){
console.log(x);

return x;
});
xrd_quiz.core.character_name = (function xrd_quiz$core$character_name(char_key){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(char_key.call(null,xrd_quiz.characters.characters));
});
xrd_quiz.core.profile = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
xrd_quiz.core.answered = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
xrd_quiz.core.results = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
xrd_quiz.core.answers_html = (function xrd_quiz$core$answers_html(question){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(question),new cljs.core.Keyword(null,"roster","roster",-2092272532))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__8953_SHARP_){
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<a href=\"javascript:void(0)\"","onclick=\"xrd_quiz.core.answer(","'",new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(question),"', ","'",cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(question)),"', ","'",cljs.core.clj__GT_js.call(null,p1__8953_SHARP_),"')\">","<img src=\"img/",cljs.core.clj__GT_js.call(null,p1__8953_SHARP_),".png\" width=\"40px\" height=\"40px\"></img>","</a>"], null));
}),xrd_quiz.characters.roster))),"<p><a href=\"javascript:void(0)\"","onclick=\"xrd_quiz.core.answer(","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(question)),"', ","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"skip","skip",602715391))),"', ","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"skip","skip",602715391))),"')\">","I want to to skip this question</a></p>"].join('');
} else {
return clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__8954_SHARP_){
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<li> <a href=\"javascript:void(0)\"","onclick=\"xrd_quiz.core.answer(","'",new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(question),"', ","'",cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(question)),"', ","'",cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,p1__8954_SHARP_)),"')\">",cljs.core.second.call(null,p1__8954_SHARP_),"</a></li>"], null));
}),new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(question)));
}
});
xrd_quiz.core.question_html = (function xrd_quiz$core$question_html(question){
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<div>","<h2>",new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question),"</h2>","<ul>",xrd_quiz.core.answers_html.call(null,question),"</ul>","</div>"], null));
});
xrd_quiz.core.answered_filter = (function xrd_quiz$core$answered_filter(question){
return (cljs.core.deref.call(null,xrd_quiz.core.answered).call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(question)) == null);
});
xrd_quiz.core.render_questions = (function xrd_quiz$core$render_questions(){
return clojure.string.join.call(null,cljs.core.map.call(null,xrd_quiz.core.question_html,cljs.core.filter.call(null,xrd_quiz.core.answered_filter,xrd_quiz.questions.questions)));
});
xrd_quiz.core.tier_value = (function xrd_quiz$core$tier_value(character){
var tier_answer = new cljs.core.Keyword(null,"tier","tier",-1071893374).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile));
var G__8955 = new cljs.core.Keyword(null,"tier","tier",-1071893374).cljs$core$IFn$_invoke$arity$1(character);
var G__8955__$1 = (((G__8955 instanceof cljs.core.Keyword))?G__8955.fqn:null);
switch (G__8955__$1) {
case "high":
var G__8956 = tier_answer;
var G__8956__$1 = (((G__8956 instanceof cljs.core.Keyword))?G__8956.fqn:null);
switch (G__8956__$1) {
case "high":
case "not-low":
case "any":
return (1);

break;
default:
return (0);

}

break;
case "mid":
var G__8957 = tier_answer;
var G__8957__$1 = (((G__8957 instanceof cljs.core.Keyword))?G__8957.fqn:null);
switch (G__8957__$1) {
case "mid":
case "not-high":
case "not-low":
case "any":
return (1);

break;
default:
return (0);

}

break;
case "low":
var G__8958 = tier_answer;
var G__8958__$1 = (((G__8958 instanceof cljs.core.Keyword))?G__8958.fqn:null);
switch (G__8958__$1) {
case "low":
case "not-high":
case "any":
return (1);

break;
default:
return (0);

}

break;
case "nil":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8955__$1)].join('')));

}
});
xrd_quiz.core.playstyle_value = (function xrd_quiz$core$playstyle_value(character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playstyle","playstyle",118027776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),new cljs.core.Keyword(null,"playstyle","playstyle",118027776).cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.emotional_value = (function xrd_quiz$core$emotional_value(character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playstyle","playstyle",118027776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),new cljs.core.Keyword(null,"emotional","emotional",-973905001))){
return 1.5;
} else {
return (1);
}
});
xrd_quiz.core.skill_requirement = (function xrd_quiz$core$skill_requirement(character){
var G__8963 = new cljs.core.Keyword(null,"skill-level","skill-level",-512504658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"disregard","disregard",1391692279),G__8963)){
return (0);
} else {
if(cljs.core._EQ_.call(null,null,G__8963)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),G__8963)){
var G__8964 = new cljs.core.Keyword(null,"character-difficulty","character-difficulty",399913112).cljs$core$IFn$_invoke$arity$1(character);
var G__8964__$1 = (((G__8964 instanceof cljs.core.Keyword))?G__8964.fqn:null);
switch (G__8964__$1) {
case "beginner":
return (1);

break;
case "medium":
case "high":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8964__$1)].join('')));

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"intermediate","intermediate",369199812),G__8963)){
var G__8965 = new cljs.core.Keyword(null,"character-difficulty","character-difficulty",399913112).cljs$core$IFn$_invoke$arity$1(character);
var G__8965__$1 = (((G__8965 instanceof cljs.core.Keyword))?G__8965.fqn:null);
switch (G__8965__$1) {
case "beginner":
case "medium":
return (1);

break;
case "high":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8965__$1)].join('')));

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"passionate","passionate",-1598958759),G__8963)){
return (1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8963)].join('')));

}
}
}
}
}
});
xrd_quiz.core.character_favouritism = (function xrd_quiz$core$character_favouritism(character,type){
var char_tag = type.call(null,cljs.core.deref.call(null,xrd_quiz.core.profile));
if((char_tag == null)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(char_tag.call(null,xrd_quiz.characters.characters)))){
return (1);
} else {
return (0);
}
}
});
xrd_quiz.core.morals_preference = (function xrd_quiz$core$morals_preference(character){
var morals = new cljs.core.Keyword(null,"morals","morals",216777585).cljs$core$IFn$_invoke$arity$1(character);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([morals]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"good","good",511701169),new cljs.core.Keyword(null,"grey","grey",1875582333),new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"villain","villain",433947524)], null)))){
} else {
throw (new Error("Assert failed: (some #{morals} [:good :grey :neutral :villain])"));
}

var G__8968 = new cljs.core.Keyword(null,"character-morals","character-morals",1440624874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"disregard","disregard",1391692279),G__8968)){
return (0);
} else {
if(cljs.core._EQ_.call(null,null,G__8968)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"good","good",511701169),G__8968)){
var G__8969 = morals;
var G__8969__$1 = (((G__8969 instanceof cljs.core.Keyword))?G__8969.fqn:null);
switch (G__8969__$1) {
case "good":
case "grey":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"chaotic-good","chaotic-good",-780240108),G__8968)){
var G__8970 = morals;
var G__8970__$1 = (((G__8970 instanceof cljs.core.Keyword))?G__8970.fqn:null);
switch (G__8970__$1) {
case "grey":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white-good","white-good",-727538287),G__8968)){
var G__8971 = morals;
var G__8971__$1 = (((G__8971 instanceof cljs.core.Keyword))?G__8971.fqn:null);
switch (G__8971__$1) {
case "good":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"neutral","neutral",-1941956087),G__8968)){
var G__8972 = morals;
var G__8972__$1 = (((G__8972 instanceof cljs.core.Keyword))?G__8972.fqn:null);
switch (G__8972__$1) {
case "neutral":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"villain","villain",433947524),G__8968)){
var G__8973 = morals;
var G__8973__$1 = (((G__8973 instanceof cljs.core.Keyword))?G__8973.fqn:null);
switch (G__8973__$1) {
case "villain":
return (1);

break;
default:
return (0);

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8968)].join('')));

}
}
}
}
}
}
}
});
xrd_quiz.core.zoning_value = (function xrd_quiz$core$zoning_value(character){
return (new cljs.core.Keyword(null,"zoning","zoning",-1214543832).cljs$core$IFn$_invoke$arity$1(character) * (function (){var G__8979 = new cljs.core.Keyword(null,"zoning-preference","zoning-preference",1545196315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715),G__8979)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"yes","yes",182838819),G__8979)){
return (1);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"disregard","disregard",1391692279),G__8979)){
return (0);
} else {
if(cljs.core._EQ_.call(null,null,G__8979)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no","no",-390373634),G__8979)){
return (-1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8979)].join('')));

}
}
}
}
}
})());
});
xrd_quiz.core.rushdown_value = (function xrd_quiz$core$rushdown_value(character){
return (new cljs.core.Keyword(null,"rushdown","rushdown",149509751).cljs$core$IFn$_invoke$arity$1(character) * (function (){var G__8980 = new cljs.core.Keyword(null,"rushdown-preference","rushdown-preference",442051861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715),G__8980)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"yes","yes",182838819),G__8980)){
return (1);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"disregard","disregard",1391692279),G__8980)){
return (0);
} else {
if(cljs.core._EQ_.call(null,null,G__8980)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no","no",-390373634),G__8980)){
return (-1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8980)].join('')));

}
}
}
}
}
})());
});
xrd_quiz.core.hybrid_value = (function xrd_quiz$core$hybrid_value(character){
if(((new cljs.core.Keyword(null,"zoning","zoning",-1214543832).cljs$core$IFn$_invoke$arity$1(character) > (0))) && ((new cljs.core.Keyword(null,"rushdown","rushdown",149509751).cljs$core$IFn$_invoke$arity$1(character) > (0)))){
var G__8981 = new cljs.core.Keyword(null,"mixed-playstyle-preference","mixed-playstyle-preference",-2069633464).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"yes","yes",182838819),G__8981)){
return (0);
} else {
if(cljs.core._EQ_.call(null,null,G__8981)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715),G__8981)){
return (1);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no","no",-390373634),G__8981)){
return (-1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8981)].join('')));

}
}
}
}
} else {
return (0);
}
});
xrd_quiz.core.gameplan_focus_value = (function xrd_quiz$core$gameplan_focus_value(character){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8982_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player-focus","player-focus",-467637158).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),p1__8982_SHARP_);
}),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.range_value = (function xrd_quiz$core$range_value(character){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8983_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"range-preference","range-preference",-1806231446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),p1__8983_SHARP_);
}),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.gender_value = (function xrd_quiz$core$gender_value(character){
var gender_pref = new cljs.core.Keyword(null,"gender-preference","gender-preference",-661885676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile));
var G__8984 = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(character);
var G__8984__$1 = (((G__8984 instanceof cljs.core.Keyword))?G__8984.fqn:null);
switch (G__8984__$1) {
case "M":
var G__8985 = gender_pref;
var G__8985__$1 = (((G__8985 instanceof cljs.core.Keyword))?G__8985.fqn:null);
switch (G__8985__$1) {
case "only-male":
return (2);

break;
case "male":
return (1);

break;
default:
return (0);

}

break;
case "F":
var G__8986 = gender_pref;
var G__8986__$1 = (((G__8986 instanceof cljs.core.Keyword))?G__8986.fqn:null);
switch (G__8986__$1) {
case "only-female":
return (2);

break;
case "female":
return (1);

break;
default:
return (0);

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8984__$1)].join('')));

}
});
xrd_quiz.core.character_strengths_value = (function xrd_quiz$core$character_strengths_value(character){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8990_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"strength-preference","strength-preference",161732393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),p1__8990_SHARP_);
}),new cljs.core.Keyword(null,"strengths","strengths",1562769538).cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.resource_management_value = (function xrd_quiz$core$resource_management_value(character){
var resource_style = new cljs.core.Keyword(null,"resource-management","resource-management",626481808).cljs$core$IFn$_invoke$arity$1(character);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([resource_style]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"heavy","heavy",2126165008)], null)))){
} else {
throw (new Error("Assert failed: (some #{resource-style} [:none :light :heavy])"));
}

var G__8991 = new cljs.core.Keyword(null,"resource-preference","resource-preference",1992133105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"disregard","disregard",1391692279),G__8991)){
return (0);
} else {
if(cljs.core._EQ_.call(null,null,G__8991)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715),G__8991)){
var G__8992 = resource_style;
var G__8992__$1 = (((G__8992 instanceof cljs.core.Keyword))?G__8992.fqn:null);
switch (G__8992__$1) {
case "heavy":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"yes","yes",182838819),G__8991)){
var G__8993 = resource_style;
var G__8993__$1 = (((G__8993 instanceof cljs.core.Keyword))?G__8993.fqn:null);
switch (G__8993__$1) {
case "light":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fine","fine",-873037193),G__8991)){
var G__8994 = resource_style;
var G__8994__$1 = (((G__8994 instanceof cljs.core.Keyword))?G__8994.fqn:null);
switch (G__8994__$1) {
case "light":
return (1);

break;
case "none":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no","no",-390373634),G__8991)){
var G__8995 = resource_style;
var G__8995__$1 = (((G__8995 instanceof cljs.core.Keyword))?G__8995.fqn:null);
switch (G__8995__$1) {
case "none":
return (1);

break;
default:
return (0);

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8991)].join('')));

}
}
}
}
}
}
});
xrd_quiz.core.resource_type_value = (function xrd_quiz$core$resource_type_value(character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resource-type","resource-type",1844262326).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),new cljs.core.Keyword(null,"resource-type","resource-type",1844262326).cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.reversal_value = (function xrd_quiz$core$reversal_value(character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dp-preference","dp-preference",1291543066).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),new cljs.core.Keyword(null,"reversal","reversal",1685579434).cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.stance_value = (function xrd_quiz$core$stance_value(character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"stance-preference","stance-preference",-1329934722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),new cljs.core.Keyword(null,"stance","stance",1737508388).cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.vortex_value = (function xrd_quiz$core$vortex_value(character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"oki-preference","oki-preference",-377473347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),new cljs.core.Keyword(null,"vortex","vortex",-1926036526).cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.mixup_value = (function xrd_quiz$core$mixup_value(character){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9000_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mixup-preference","mixup-preference",1963124574).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),p1__9000_SHARP_);
}),new cljs.core.Keyword(null,"mixups","mixups",-1678369362).cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.oneplayer_value = (function xrd_quiz$core$oneplayer_value(character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"1p-preference","1p-preference",1813903102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),new cljs.core.Keyword(null,"oneplayer-game","oneplayer-game",2056120562).cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.setplay_value = (function xrd_quiz$core$setplay_value(character){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9001_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"setplay-preference","setplay-preference",-1118340225).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),p1__9001_SHARP_);
}),new cljs.core.Keyword(null,"setplay","setplay",-265858571).cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.charge_value = (function xrd_quiz$core$charge_value(character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"charge-preference","charge-preference",-1599439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),new cljs.core.Keyword(null,"charge","charge",426796560).cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.projectile_value = (function xrd_quiz$core$projectile_value(character){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9002_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"projectile-preference","projectile-preference",-1705406271).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xrd_quiz.core.profile)),p1__9002_SHARP_);
}),new cljs.core.Keyword(null,"projectile","projectile",1810544084).cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.evaluate_character = (function xrd_quiz$core$evaluate_character(character){
return ((((((((((((((((((((xrd_quiz.core.tier_value.call(null,character) + xrd_quiz.core.playstyle_value.call(null,character)) + (xrd_quiz.core.emotional_value.call(null,character) * (((((xrd_quiz.core.character_favouritism.call(null,character,new cljs.core.Keyword(null,"story-favourite","story-favourite",1706238198)) + xrd_quiz.core.character_favouritism.call(null,character,new cljs.core.Keyword(null,"visuals-favourite","visuals-favourite",24274347))) + xrd_quiz.core.character_favouritism.call(null,character,new cljs.core.Keyword(null,"sympathy-favourite","sympathy-favourite",347316922))) + (- xrd_quiz.core.character_favouritism.call(null,character,new cljs.core.Keyword(null,"visuals-dislike","visuals-dislike",2015389999)))) + (- xrd_quiz.core.character_favouritism.call(null,character,new cljs.core.Keyword(null,"general-dislike","general-dislike",-770590151)))) + xrd_quiz.core.morals_preference.call(null,character)))) + xrd_quiz.core.skill_requirement.call(null,character)) + xrd_quiz.core.zoning_value.call(null,character)) + xrd_quiz.core.rushdown_value.call(null,character)) + xrd_quiz.core.hybrid_value.call(null,character)) + xrd_quiz.core.gameplan_focus_value.call(null,character)) + xrd_quiz.core.range_value.call(null,character)) + xrd_quiz.core.gender_value.call(null,character)) + xrd_quiz.core.character_strengths_value.call(null,character)) + xrd_quiz.core.resource_management_value.call(null,character)) + xrd_quiz.core.resource_type_value.call(null,character)) + xrd_quiz.core.reversal_value.call(null,character)) + xrd_quiz.core.stance_value.call(null,character)) + xrd_quiz.core.vortex_value.call(null,character)) + xrd_quiz.core.mixup_value.call(null,character)) + xrd_quiz.core.oneplayer_value.call(null,character)) + xrd_quiz.core.setplay_value.call(null,character)) + xrd_quiz.core.charge_value.call(null,character)) + xrd_quiz.core.projectile_value.call(null,character));
});
xrd_quiz.core.calculate_results = (function xrd_quiz$core$calculate_results(){
return cljs.core.swap_BANG_.call(null,xrd_quiz.core.results,(function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,(function (p1__9003_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,p1__9003_SHARP_),xrd_quiz.core.evaluate_character.call(null,cljs.core.second.call(null,p1__9003_SHARP_))],null));
}),xrd_quiz.characters.characters)],null));
}));
});
xrd_quiz.core.render_results = (function xrd_quiz$core$render_results(){
var sorted_results = cljs.core.sort.call(null,(function (p1__9005_SHARP_,p2__9004_SHARP_){
return cljs.core.compare.call(null,cljs.core.second.call(null,p2__9004_SHARP_),cljs.core.second.call(null,p1__9005_SHARP_));
}),cljs.core.first.call(null,cljs.core.deref.call(null,xrd_quiz.core.results)));
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<p>Your result is...</p>","<h3>","<div><img src=\"img/",cljs.core.name.call(null,cljs.core.first.call(null,cljs.core.first.call(null,sorted_results))),".png\"></img></div> ",xrd_quiz.core.character_name.call(null,cljs.core.first.call(null,cljs.core.first.call(null,sorted_results))),"!</h3>","<p>Close behind...</p>","<ul>","<li>",xrd_quiz.core.character_name.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,sorted_results,(1)))),"</li>","<li>",xrd_quiz.core.character_name.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,sorted_results,(2)))),"</li>","<li>",xrd_quiz.core.character_name.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,sorted_results,(3)))),"</li>","</ul>"], null));
});
xrd_quiz.core.render_page = (function xrd_quiz$core$render_page(){
(document.getElementById("questions")["innerHTML"] = xrd_quiz.core.render_questions.call(null));

xrd_quiz.core.calculate_results.call(null);

return (document.getElementById("results")["innerHTML"] = ((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,xrd_quiz.core.answered_filter,xrd_quiz.questions.questions))))?xrd_quiz.core.render_results.call(null):""));
});
xrd_quiz.core.answer = (function xrd_quiz$core$answer(num,result,value){
var result__$1 = cljs.core.keyword.call(null,result);
var value__$1 = cljs.core.keyword.call(null,value);
cljs.core.swap_BANG_.call(null,xrd_quiz.core.profile,cljs.core.assoc,result__$1,value__$1);

cljs.core.swap_BANG_.call(null,xrd_quiz.core.answered,cljs.core.assoc,num,value__$1);

return xrd_quiz.core.render_page.call(null);
});
xrd_quiz.core.render_page.call(null);

//# sourceMappingURL=core.js.map
