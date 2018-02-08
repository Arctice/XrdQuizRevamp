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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1645_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<a href=\"javascript:void(0)\"","onclick=\"xrd_quiz.core.answer(","'",cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question),"', ","'",cljs.core.clj__GT_js(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(question)),"', ","'",cljs.core.clj__GT_js(p1__1645_SHARP_),"')\">","<img src=\"img/",cljs.core.clj__GT_js(p1__1645_SHARP_),".png\" width=\"40px\" height=\"40px\"></img>","</a>"], null));
}),xrd_quiz.characters.roster))),"<p><a href=\"javascript:void(0)\"","onclick=\"xrd_quiz.core.answer(","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question)),"', ","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(cljs.core.cst$kw$skip)),"', ","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(cljs.core.cst$kw$skip)),"')\">","I want to to skip this question</a></p>"].join('');
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1646_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<li> <a href=\"javascript:void(0)\"","onclick=\"xrd_quiz.core.answer(","'",cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question),"', ","'",cljs.core.clj__GT_js(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(question)),"', ","'",cljs.core.clj__GT_js(cljs.core.first(p1__1646_SHARP_)),"')\">",cljs.core.second(p1__1646_SHARP_),"</a></li>"], null));
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
var and__3828__auto__ = (function (){var G__1648 = cljs.core.cst$kw$rushdown_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
var G__1648__$1 = (((G__1648 instanceof cljs.core.Keyword))?G__1648.fqn:null);
switch (G__1648__$1) {
case "priority":
case "yes":
return true;

break;
default:
return false;

}
})();
if(cljs.core.truth_(and__3828__auto__)){
var G__1649 = cljs.core.cst$kw$zoning_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
var G__1649__$1 = (((G__1649 instanceof cljs.core.Keyword))?G__1649.fqn:null);
switch (G__1649__$1) {
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
return ((function (){var G__1653 = cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(question);
var fexpr__1652 = cljs.core.deref(xrd_quiz.core.answered);
return (fexpr__1652.cljs$core$IFn$_invoke$arity$1 ? fexpr__1652.cljs$core$IFn$_invoke$arity$1(G__1653) : fexpr__1652.call(null,G__1653));
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
var G__1654 = cljs.core.cst$kw$tier.cljs$core$IFn$_invoke$arity$1(character);
var G__1654__$1 = (((G__1654 instanceof cljs.core.Keyword))?G__1654.fqn:null);
switch (G__1654__$1) {
case "high":
var G__1655 = tier_answer;
var G__1655__$1 = (((G__1655 instanceof cljs.core.Keyword))?G__1655.fqn:null);
switch (G__1655__$1) {
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
var G__1656 = tier_answer;
var G__1656__$1 = (((G__1656 instanceof cljs.core.Keyword))?G__1656.fqn:null);
switch (G__1656__$1) {
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
var G__1657 = tier_answer;
var G__1657__$1 = (((G__1657 instanceof cljs.core.Keyword))?G__1657.fqn:null);
switch (G__1657__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1654__$1)].join('')));

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
var G__1662 = cljs.core.cst$kw$skill_DASH_level.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__1662)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1662)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new,G__1662)){
var G__1663 = cljs.core.cst$kw$character_DASH_difficulty.cljs$core$IFn$_invoke$arity$1(character);
var G__1663__$1 = (((G__1663 instanceof cljs.core.Keyword))?G__1663.fqn:null);
switch (G__1663__$1) {
case "beginner":
return (1);

break;
case "medium":
case "high":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1663__$1)].join('')));

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$intermediate,G__1662)){
var G__1664 = cljs.core.cst$kw$character_DASH_difficulty.cljs$core$IFn$_invoke$arity$1(character);
var G__1664__$1 = (((G__1664 instanceof cljs.core.Keyword))?G__1664.fqn:null);
switch (G__1664__$1) {
case "beginner":
case "medium":
return (1);

break;
case "high":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1664__$1)].join('')));

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$passionate,G__1662)){
return (1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1662)].join('')));

}
}
}
}
}
});
xrd_quiz.core.character_favouritism = (function xrd_quiz$core$character_favouritism(character,type){
var char_tag = (function (){var G__1667 = cljs.core.deref(xrd_quiz.core.profile);
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(G__1667) : type.call(null,G__1667));
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

var G__1668 = cljs.core.cst$kw$character_DASH_morals.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__1668)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1668)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$good,G__1668)){
var G__1669 = morals;
var G__1669__$1 = (((G__1669 instanceof cljs.core.Keyword))?G__1669.fqn:null);
switch (G__1669__$1) {
case "good":
case "grey":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$chaotic_DASH_good,G__1668)){
var G__1670 = morals;
var G__1670__$1 = (((G__1670 instanceof cljs.core.Keyword))?G__1670.fqn:null);
switch (G__1670__$1) {
case "grey":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$white_DASH_good,G__1668)){
var G__1671 = morals;
var G__1671__$1 = (((G__1671 instanceof cljs.core.Keyword))?G__1671.fqn:null);
switch (G__1671__$1) {
case "good":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$neutral,G__1668)){
var G__1672 = morals;
var G__1672__$1 = (((G__1672 instanceof cljs.core.Keyword))?G__1672.fqn:null);
switch (G__1672__$1) {
case "neutral":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$villain,G__1668)){
var G__1673 = morals;
var G__1673__$1 = (((G__1673 instanceof cljs.core.Keyword))?G__1673.fqn:null);
switch (G__1673__$1) {
case "villain":
return (1);

break;
default:
return (0);

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1668)].join('')));

}
}
}
}
}
}
}
});
xrd_quiz.core.zoning_value = (function xrd_quiz$core$zoning_value(character){
return (cljs.core.cst$kw$zoning.cljs$core$IFn$_invoke$arity$1(character) * (function (){var G__1679 = cljs.core.cst$kw$zoning_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$priority,G__1679)){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$yes,G__1679)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__1679)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1679)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no,G__1679)){
return (-1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1679)].join('')));

}
}
}
}
}
})());
});
xrd_quiz.core.rushdown_value = (function xrd_quiz$core$rushdown_value(character){
return (cljs.core.cst$kw$rushdown.cljs$core$IFn$_invoke$arity$1(character) * (function (){var G__1680 = cljs.core.cst$kw$rushdown_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$priority,G__1680)){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$yes,G__1680)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__1680)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1680)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no,G__1680)){
return (-1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1680)].join('')));

}
}
}
}
}
})());
});
xrd_quiz.core.hybrid_value = (function xrd_quiz$core$hybrid_value(character){
if(((cljs.core.cst$kw$zoning.cljs$core$IFn$_invoke$arity$1(character) > (0))) && ((cljs.core.cst$kw$rushdown.cljs$core$IFn$_invoke$arity$1(character) > (0)))){
var G__1681 = cljs.core.cst$kw$mixed_DASH_playstyle_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$yes,G__1681)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1681)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$priority,G__1681)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no,G__1681)){
return (-1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1681)].join('')));

}
}
}
}
} else {
return (0);
}
});
xrd_quiz.core.gameplan_focus_value = (function xrd_quiz$core$gameplan_focus_value(character){
if(cljs.core.truth_(cljs.core.some((function (p1__1682_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$player_DASH_focus.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__1682_SHARP_);
}),cljs.core.cst$kw$focus.cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.range_value = (function xrd_quiz$core$range_value(character){
if(cljs.core.truth_(cljs.core.some((function (p1__1683_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$range_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__1683_SHARP_);
}),cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.gender_value = (function xrd_quiz$core$gender_value(character){
var gender_pref = cljs.core.cst$kw$gender_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
var G__1684 = cljs.core.cst$kw$gender.cljs$core$IFn$_invoke$arity$1(character);
var G__1684__$1 = (((G__1684 instanceof cljs.core.Keyword))?G__1684.fqn:null);
switch (G__1684__$1) {
case "M":
var G__1685 = gender_pref;
var G__1685__$1 = (((G__1685 instanceof cljs.core.Keyword))?G__1685.fqn:null);
switch (G__1685__$1) {
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
var G__1686 = gender_pref;
var G__1686__$1 = (((G__1686 instanceof cljs.core.Keyword))?G__1686.fqn:null);
switch (G__1686__$1) {
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
var G__1687 = gender_pref;
var G__1687__$1 = (((G__1687 instanceof cljs.core.Keyword))?G__1687.fqn:null);
switch (G__1687__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1684__$1)].join('')));

}
});
xrd_quiz.core.character_strengths_value = (function xrd_quiz$core$character_strengths_value(character){
if(cljs.core.truth_(cljs.core.some((function (p1__1692_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$strength_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__1692_SHARP_);
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

var G__1693 = cljs.core.cst$kw$resource_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disregard,G__1693)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1693)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$priority,G__1693)){
var G__1694 = resource_style;
var G__1694__$1 = (((G__1694 instanceof cljs.core.Keyword))?G__1694.fqn:null);
switch (G__1694__$1) {
case "heavy":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$yes,G__1693)){
var G__1695 = resource_style;
var G__1695__$1 = (((G__1695 instanceof cljs.core.Keyword))?G__1695.fqn:null);
switch (G__1695__$1) {
case "light":
return (1);

break;
default:
return (0);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fine,G__1693)){
var G__1696 = resource_style;
var G__1696__$1 = (((G__1696 instanceof cljs.core.Keyword))?G__1696.fqn:null);
switch (G__1696__$1) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no,G__1693)){
var G__1697 = resource_style;
var G__1697__$1 = (((G__1697 instanceof cljs.core.Keyword))?G__1697.fqn:null);
switch (G__1697__$1) {
case "none":
return (1);

break;
default:
return (0);

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1693)].join('')));

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
if(cljs.core.truth_(cljs.core.some((function (p1__1702_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mixup_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__1702_SHARP_);
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
if(cljs.core.truth_(cljs.core.some((function (p1__1703_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$setplay_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__1703_SHARP_);
}),cljs.core.cst$kw$setplay.cljs$core$IFn$_invoke$arity$1(character)))){
return (1);
} else {
return (0);
}
});
xrd_quiz.core.charge_value = (function xrd_quiz$core$charge_value(character){
var charge_pref = cljs.core.cst$kw$charge_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile));
var G__1704 = cljs.core.cst$kw$charge.cljs$core$IFn$_invoke$arity$1(character);
var G__1704__$1 = (((G__1704 instanceof cljs.core.Keyword))?G__1704.fqn:null);
switch (G__1704__$1) {
case "heavy":
var G__1705 = charge_pref;
var G__1705__$1 = (((G__1705 instanceof cljs.core.Keyword))?G__1705.fqn:null);
switch (G__1705__$1) {
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
var G__1706 = charge_pref;
var G__1706__$1 = (((G__1706 instanceof cljs.core.Keyword))?G__1706.fqn:null);
switch (G__1706__$1) {
case "light":
return (1);

break;
default:
return (0);

}

break;
case "none":
var G__1707 = charge_pref;
var G__1707__$1 = (((G__1707 instanceof cljs.core.Keyword))?G__1707.fqn:null);
switch (G__1707__$1) {
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
if(cljs.core.truth_(cljs.core.some((function (p1__1712_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$projectile_DASH_preference.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xrd_quiz.core.profile)),p1__1712_SHARP_);
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
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1713_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__1713_SHARP_),xrd_quiz.core.evaluate_character(cljs.core.second(p1__1713_SHARP_))],null));
}),xrd_quiz.characters.characters)],null));
}));
});
xrd_quiz.core.render_results = (function xrd_quiz$core$render_results(){
var sorted_results = cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__1715_SHARP_,p2__1714_SHARP_){
return cljs.core.compare(cljs.core.second(p2__1714_SHARP_),cljs.core.second(p1__1715_SHARP_));
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
