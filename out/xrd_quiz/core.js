// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('xrd_quiz.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('xrd_quiz.questions');
goog.require('xrd_quiz.characters');
xrd_quiz.core.log = (function xrd_quiz$core$log(x){
console.log(x);

return x;
});
xrd_quiz.core.character_name = (function xrd_quiz$core$character_name(char_key){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((char_key.cljs$core$IFn$_invoke$arity$1 ? char_key.cljs$core$IFn$_invoke$arity$1(xrd_quiz.characters.characters) : char_key.call(null,xrd_quiz.characters.characters)));
});
xrd_quiz.core.profile = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
xrd_quiz.core.answered = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
xrd_quiz.core.results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
xrd_quiz.core.answers_html = (function xrd_quiz$core$answers_html(question){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$answers.cljs$core$IFn$_invoke$arity$1(question),cljs.core.cst$kw$roster)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__4369_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<a href=\"javascript:void(0)\"","onclick=\"xrd_quiz.core.answer(","'",cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question),"', ","'",cljs.core.clj__GT_js(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(question)),"', ","'",cljs.core.clj__GT_js(p1__4369_SHARP_),"')\">","<img src=\"img/",cljs.core.clj__GT_js(p1__4369_SHARP_),".png\" width=\"40px\" height=\"40px\"></img>","</a>"], null));
}),xrd_quiz.characters.roster))),"<p><a href=\"javascript:void(0)\"","onclick=\"xrd_quiz.core.answer(","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question)),"', ","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(cljs.core.cst$kw$skip)),"', ","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(cljs.core.cst$kw$skip)),"')\">","I want to to skip this question</a></p>"].join('');
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__4370_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<li> <a href=\"javascript:void(0)\"","onclick=\"xrd_quiz.core.answer(","'",cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question),"', ","'",cljs.core.clj__GT_js(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(question)),"', ","'",cljs.core.clj__GT_js(cljs.core.first(p1__4370_SHARP_)),"')\">",cljs.core.second(p1__4370_SHARP_),"</a></li>"], null));
}),cljs.core.cst$kw$answers.cljs$core$IFn$_invoke$arity$1(question)));
}
});
xrd_quiz.core.question_html = (function xrd_quiz$core$question_html(question){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<div>","<h2> Question ",cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question)," - ",cljs.core.cst$kw$question.cljs$core$IFn$_invoke$arity$1(question),"</h2>","<ul>",xrd_quiz.core.answers_html(question),"</ul>","</div>"], null));
});
xrd_quiz.core.show_hybrid_playstyle_question = (function xrd_quiz$core$show_hybrid_playstyle_question(question){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("12.5",cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question)))){
return true;
} else {
var and__3828__auto__ = (function (){var G__4372 = cljs.core.cst$kw$rushdown_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
var G__4372__$1 = (((G__4372 instanceof cljs.core.Keyword))?G__4372.fqn:null);
switch (G__4372__$1) {
case "priority":
case "yes":
return true;

break;
default:
return false;

}
})();
if(cljs.core.truth_(and__3828__auto__)){
var G__4373 = cljs.core.cst$kw$zoning_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
var G__4373__$1 = (((G__4373 instanceof cljs.core.Keyword))?G__4373.fqn:null);
switch (G__4373__$1) {
case "priority":
case "yes":
return true;

break;
default:
return false;

}
} else {
return and__3828__auto__;
}
}
});
xrd_quiz.core.answered_filter = (function xrd_quiz$core$answered_filter(question){
return ((function (){var G__4377 = cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question);
var fexpr__4376 = cljs.core.deref(xrd_quiz.core.answered);
return (fexpr__4376.cljs$core$IFn$_invoke$arity$1 ? fexpr__4376.cljs$core$IFn$_invoke$arity$1(G__4377) : fexpr__4376.call(null,G__4377));
})() == null);
});
xrd_quiz.core.remaining_questions = (function xrd_quiz$core$remaining_questions(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(xrd_quiz.core.question_html,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(xrd_quiz.core.answered_filter,xrd_quiz.core.show_hybrid_playstyle_question),xrd_quiz.questions.questions));
});
xrd_quiz.core.render_questions = (function xrd_quiz$core$render_questions(){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(xrd_quiz.core.remaining_questions());
});
xrd_quiz.core.tier_value = (function xrd_quiz$core$tier_value(character){
var tier_answer = cljs.core.cst$kw$tier.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
var G__4378 = cljs.core.cst$kw$tier.cljs$core$IFn$_invoke$arity$1(character);
var G__4378__$1 = (((G__4378 instanceof cljs.core.Keyword))?G__4378.fqn:null);
switch (G__4378__$1) {
case "high":
var G__4379 = tier_answer;
var G__4379__$1 = (((G__4379 instanceof cljs.core.Keyword))?G__4379.fqn:null);
switch (G__4379__$1) {
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
var G__4380 = tier_answer;
var G__4380__$1 = (((G__4380 instanceof cljs.core.Keyword))?G__4380.fqn:null);
switch (G__4380__$1) {
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
var G__4381 = tier_answer;
var G__4381__$1 = (((G__4381 instanceof cljs.core.Keyword))?G__4381.fqn:null);
switch (G__4381__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4378__$1)].join('')));

}
});
xrd_quiz.core.playstyle_value = (function xrd_quiz$core$playstyle_value(character){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$playstyle.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),cljs.core.cst$kw$playstyle.cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.emotional_value = (function xrd_quiz$core$emotional_value(character){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$playstyle.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),cljs.core.cst$kw$emotional)){
return 1.5;
} else {
return (1);
}
});
xrd_quiz.core.skill_requirement = (function xrd_quiz$core$skill_requirement(character){
var G__4386 = cljs.core.cst$kw$skill_DASH_level.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__4386)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__4386)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new,G__4386)){
var G__4387 = cljs.core.cst$kw$character_DASH_difficulty.cljs$core$IFn$_invoke$arity$1(character);
var G__4387__$1 = (((G__4387 instanceof cljs.core.Keyword))?G__4387.fqn:null);
switch (G__4387__$1) {
case "beginner":
return (1);

break;
case "medium":
case "high":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4387__$1)].join('')));

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$intermediate,G__4386)){
var G__4388 = cljs.core.cst$kw$character_DASH_difficulty.cljs$core$IFn$_invoke$arity$1(character);
var G__4388__$1 = (((G__4388 instanceof cljs.core.Keyword))?G__4388.fqn:null);
switch (G__4388__$1) {
case "beginner":
case "medium":
return (1);

break;
case "high":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4388__$1)].join('')));

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$passionate,G__4386)){
return (1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4386)].join('')));

}
}
}
}
}
});
xrd_quiz.core.character_favouritism = (function xrd_quiz$core$character_favouritism(character,type){
var char_tag = (function (){var G__4391 = cljs.core.deref(xrd_quiz.core.profile);
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(G__4391) : type.call(null,G__4391));
})();
if((char_tag == null)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(character),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((char_tag.cljs$core$IFn$_invoke$arity$1 ? char_tag.cljs$core$IFn$_invoke$arity$1(xrd_quiz.characters.characters) : char_tag.call(null,xrd_quiz.characters.characters))))){
return (1);
} else {
return (0);
}
}
});
xrd_quiz.core.morals_preference = (function xrd_quiz$core$morals_preference(character){
var morals = cljs.core.cst$kw$morals.cljs$core$IFn$_invoke$arity$1(character);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([morals]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$good,cljs.core.cst$kw$grey,cljs.core.cst$kw$neutral,cljs.core.cst$kw$villain], null)))){
} else {
throw (new Error("Assert failed: (some #{morals} [:good :grey :neutral :villain])"));
}

var G__4392 = cljs.core.cst$kw$character_DASH_morals.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__4392)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__4392)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$good,G__4392)){
var G__4393 = morals;
var G__4393__$1 = (((G__4393 instanceof cljs.core.Keyword))?G__4393.fqn:null);
switch (G__4393__$1) {
case "good":
case "grey":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$chaotic_DASH_good,G__4392)){
var G__4394 = morals;
var G__4394__$1 = (((G__4394 instanceof cljs.core.Keyword))?G__4394.fqn:null);
switch (G__4394__$1) {
case "grey":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$white_DASH_good,G__4392)){
var G__4395 = morals;
var G__4395__$1 = (((G__4395 instanceof cljs.core.Keyword))?G__4395.fqn:null);
switch (G__4395__$1) {
case "good":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$neutral,G__4392)){
var G__4396 = morals;
var G__4396__$1 = (((G__4396 instanceof cljs.core.Keyword))?G__4396.fqn:null);
switch (G__4396__$1) {
case "neutral":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$villain,G__4392)){
var G__4397 = morals;
var G__4397__$1 = (((G__4397 instanceof cljs.core.Keyword))?G__4397.fqn:null);
switch (G__4397__$1) {
case "villain":
return (1);

break;
default:
return (0);

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4392)].join('')));

}
}
}
}
}
}
}
});
xrd_quiz.core.zoning_value = (function xrd_quiz$core$zoning_value(character){
return (cljs.core.cst$kw$zoning.cljs$core$IFn$_invoke$arity$1(character) * (function (){var G__4403 = cljs.core.cst$kw$zoning_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$priority,G__4403)){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$yes,G__4403)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__4403)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__4403)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no,G__4403)){
return (-1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4403)].join('')));

}
}
}
}
}
})());
});
xrd_quiz.core.rushdown_value = (function xrd_quiz$core$rushdown_value(character){
return (cljs.core.cst$kw$rushdown.cljs$core$IFn$_invoke$arity$1(character) * (function (){var G__4404 = cljs.core.cst$kw$rushdown_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$priority,G__4404)){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$yes,G__4404)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__4404)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__4404)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no,G__4404)){
return (-1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4404)].join('')));

}
}
}
}
}
})());
});
xrd_quiz.core.hybrid_value = (function xrd_quiz$core$hybrid_value(character){
if(((cljs.core.cst$kw$zoning.cljs$core$IFn$_invoke$arity$1(character) > (0))) && ((cljs.core.cst$kw$rushdown.cljs$core$IFn$_invoke$arity$1(character) > (0)))){
var G__4405 = cljs.core.cst$kw$mixed_DASH_playstyle_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$yes,G__4405)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__4405)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$priority,G__4405)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no,G__4405)){
return (-1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4405)].join('')));

}
}
}
}
} else {
return (0);
}
});
xrd_quiz.core.gameplan_focus_value = (function xrd_quiz$core$gameplan_focus_value(character){
if(cljs.core.truth_(cljs.core.some((function (p1__4406_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$player_DASH_focus.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__4406_SHARP_);
}),cljs.core.cst$kw$focus.cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.range_value = (function xrd_quiz$core$range_value(character){
if(cljs.core.truth_(cljs.core.some((function (p1__4407_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$range_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__4407_SHARP_);
}),cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.gender_value = (function xrd_quiz$core$gender_value(character){
var gender_pref = cljs.core.cst$kw$gender_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
var G__4408 = cljs.core.cst$kw$gender.cljs$core$IFn$_invoke$arity$1(character);
var G__4408__$1 = (((G__4408 instanceof cljs.core.Keyword))?G__4408.fqn:null);
switch (G__4408__$1) {
case "M":
var G__4409 = gender_pref;
var G__4409__$1 = (((G__4409 instanceof cljs.core.Keyword))?G__4409.fqn:null);
switch (G__4409__$1) {
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
var G__4410 = gender_pref;
var G__4410__$1 = (((G__4410 instanceof cljs.core.Keyword))?G__4410.fqn:null);
switch (G__4410__$1) {
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
case "A":
var G__4411 = gender_pref;
var G__4411__$1 = (((G__4411 instanceof cljs.core.Keyword))?G__4411.fqn:null);
switch (G__4411__$1) {
case "gender-subversive":
return (2);

break;
case "male":
return (1);

break;
case "female":
return (1);

break;
default:
return (0);

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4408__$1)].join('')));

}
});
xrd_quiz.core.character_strengths_value = (function xrd_quiz$core$character_strengths_value(character){
if(cljs.core.truth_(cljs.core.some((function (p1__4416_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$strength_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__4416_SHARP_);
}),cljs.core.cst$kw$strengths.cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.resource_management_value = (function xrd_quiz$core$resource_management_value(character){
var resource_style = cljs.core.cst$kw$resource_DASH_management.cljs$core$IFn$_invoke$arity$1(character);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([resource_style]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none,cljs.core.cst$kw$light,cljs.core.cst$kw$heavy], null)))){
} else {
throw (new Error("Assert failed: (some #{resource-style} [:none :light :heavy])"));
}

var G__4417 = cljs.core.cst$kw$resource_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__4417)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__4417)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$priority,G__4417)){
var G__4418 = resource_style;
var G__4418__$1 = (((G__4418 instanceof cljs.core.Keyword))?G__4418.fqn:null);
switch (G__4418__$1) {
case "heavy":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$yes,G__4417)){
var G__4419 = resource_style;
var G__4419__$1 = (((G__4419 instanceof cljs.core.Keyword))?G__4419.fqn:null);
switch (G__4419__$1) {
case "light":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fine,G__4417)){
var G__4420 = resource_style;
var G__4420__$1 = (((G__4420 instanceof cljs.core.Keyword))?G__4420.fqn:null);
switch (G__4420__$1) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no,G__4417)){
var G__4421 = resource_style;
var G__4421__$1 = (((G__4421 instanceof cljs.core.Keyword))?G__4421.fqn:null);
switch (G__4421__$1) {
case "none":
return (1);

break;
default:
return (0);

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4417)].join('')));

}
}
}
}
}
}
});
xrd_quiz.core.resource_type_value = (function xrd_quiz$core$resource_type_value(character){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$resource_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),cljs.core.cst$kw$resource_DASH_type.cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.reversal_value = (function xrd_quiz$core$reversal_value(character){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dp_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),cljs.core.cst$kw$reversal.cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.stance_value = (function xrd_quiz$core$stance_value(character){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stance_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),cljs.core.cst$kw$stance.cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.vortex_value = (function xrd_quiz$core$vortex_value(character){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oki_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),cljs.core.cst$kw$vortex.cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.mixup_value = (function xrd_quiz$core$mixup_value(character){
if(cljs.core.truth_(cljs.core.some((function (p1__4426_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mixup_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__4426_SHARP_);
}),cljs.core.cst$kw$mixups.cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.oneplayer_value = (function xrd_quiz$core$oneplayer_value(character){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$1p_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),cljs.core.cst$kw$oneplayer_DASH_game.cljs$core$IFn$_invoke$arity$1(character))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.setplay_value = (function xrd_quiz$core$setplay_value(character){
if(cljs.core.truth_(cljs.core.some((function (p1__4427_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$setplay_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__4427_SHARP_);
}),cljs.core.cst$kw$setplay.cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.charge_value = (function xrd_quiz$core$charge_value(character){
var charge_pref = cljs.core.cst$kw$charge_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
var G__4428 = cljs.core.cst$kw$charge.cljs$core$IFn$_invoke$arity$1(character);
var G__4428__$1 = (((G__4428 instanceof cljs.core.Keyword))?G__4428.fqn:null);
switch (G__4428__$1) {
case "heavy":
var G__4429 = charge_pref;
var G__4429__$1 = (((G__4429 instanceof cljs.core.Keyword))?G__4429.fqn:null);
switch (G__4429__$1) {
case "heavy":
return (2);

break;
case "light":
return (1);

break;
default:
return (0);

}

break;
case "light":
var G__4430 = charge_pref;
var G__4430__$1 = (((G__4430 instanceof cljs.core.Keyword))?G__4430.fqn:null);
switch (G__4430__$1) {
case "light":
return (1);

break;
default:
return (0);

}

break;
case "none":
var G__4431 = charge_pref;
var G__4431__$1 = (((G__4431 instanceof cljs.core.Keyword))?G__4431.fqn:null);
switch (G__4431__$1) {
case "none":
return (1);

break;
default:
return (0);

}

break;
default:
return (0);

}
});
xrd_quiz.core.projectile_value = (function xrd_quiz$core$projectile_value(character){
if(cljs.core.truth_(cljs.core.some((function (p1__4436_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$projectile_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__4436_SHARP_);
}),cljs.core.cst$kw$projectile.cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.evaluate_character = (function xrd_quiz$core$evaluate_character(character){
return ((((((((((((((((((((xrd_quiz.core.tier_value(character) + xrd_quiz.core.playstyle_value(character)) + (xrd_quiz.core.emotional_value(character) * (((((xrd_quiz.core.character_favouritism(character,cljs.core.cst$kw$story_DASH_favourite) + xrd_quiz.core.character_favouritism(character,cljs.core.cst$kw$visuals_DASH_favourite)) + xrd_quiz.core.character_favouritism(character,cljs.core.cst$kw$sympathy_DASH_favourite)) + (- xrd_quiz.core.character_favouritism(character,cljs.core.cst$kw$visuals_DASH_dislike))) + (- xrd_quiz.core.character_favouritism(character,cljs.core.cst$kw$general_DASH_dislike))) + xrd_quiz.core.morals_preference(character)))) + xrd_quiz.core.skill_requirement(character)) + xrd_quiz.core.zoning_value(character)) + xrd_quiz.core.rushdown_value(character)) + xrd_quiz.core.hybrid_value(character)) + xrd_quiz.core.gameplan_focus_value(character)) + xrd_quiz.core.range_value(character)) + xrd_quiz.core.gender_value(character)) + xrd_quiz.core.character_strengths_value(character)) + xrd_quiz.core.resource_management_value(character)) + xrd_quiz.core.resource_type_value(character)) + xrd_quiz.core.reversal_value(character)) + xrd_quiz.core.stance_value(character)) + xrd_quiz.core.vortex_value(character)) + xrd_quiz.core.mixup_value(character)) + xrd_quiz.core.oneplayer_value(character)) + xrd_quiz.core.setplay_value(character)) + xrd_quiz.core.charge_value(character)) + xrd_quiz.core.projectile_value(character));
});
xrd_quiz.core.calculate_results = (function xrd_quiz$core$calculate_results(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(xrd_quiz.core.results,(function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__4437_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__4437_SHARP_),xrd_quiz.core.evaluate_character(cljs.core.second(p1__4437_SHARP_))],null));
}),xrd_quiz.characters.characters)],null));
}));
});
xrd_quiz.core.render_results = (function xrd_quiz$core$render_results(){
var sorted_results = cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__4439_SHARP_,p2__4438_SHARP_){
return cljs.core.compare(cljs.core.second(p2__4438_SHARP_),cljs.core.second(p1__4439_SHARP_));
}),cljs.core.first(cljs.core.deref(xrd_quiz.core.results)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<p>Your result is...</p>","<h3>","<div><img src=\"img/",cljs.core.name(cljs.core.first(cljs.core.first(sorted_results))),".png\"></img></div> ",xrd_quiz.core.character_name(cljs.core.first(cljs.core.first(sorted_results))),"!</h3>","<p>Close behind...</p>","<ul>","<li>",xrd_quiz.core.character_name(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_results,(1)))),"</li>","<li>",xrd_quiz.core.character_name(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_results,(2)))),"</li>","<li>",xrd_quiz.core.character_name(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_results,(3)))),"</li>","</ul>"], null));
});
xrd_quiz.core.render_page = (function xrd_quiz$core$render_page(){
(document.getElementById("questions")["innerHTML"] = xrd_quiz.core.render_questions());

xrd_quiz.core.calculate_results();

return (document.getElementById("results")["innerHTML"] = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(xrd_quiz.core.remaining_questions())))?xrd_quiz.core.render_results():""));
});
xrd_quiz.core.answer = (function xrd_quiz$core$answer(num,result,value){
var result__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(result);
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(xrd_quiz.core.profile,cljs.core.assoc,result__$1,value__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(xrd_quiz.core.answered,cljs.core.assoc,num,value__$1);

return xrd_quiz.core.render_page();
});
goog.exportSymbol('xrd_quiz.core.answer', xrd_quiz.core.answer);
xrd_quiz.core.render_page();
