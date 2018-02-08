// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('xrd_quiz.characters');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
xrd_quiz.characters.character = (function (name,gender,morals,playstyle,focus,strengths,zoning,rushdown,vortex,reversal,range,projectile,stance,charge,resource_management,resource_type,mixups,setplay,oneplayer_game,tier,skill_requirement,__meta,__extmap,__hash){
this.name = name;
this.gender = gender;
this.morals = morals;
this.playstyle = playstyle;
this.focus = focus;
this.strengths = strengths;
this.zoning = zoning;
this.rushdown = rushdown;
this.vortex = vortex;
this.reversal = reversal;
this.range = range;
this.projectile = projectile;
this.stance = stance;
this.charge = charge;
this.resource_management = resource_management;
this.resource_type = resource_type;
this.mixups = mixups;
this.setplay = setplay;
this.oneplayer_game = oneplayer_game;
this.tier = tier;
this.skill_requirement = skill_requirement;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
xrd_quiz.characters.character.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4084__auto__,k__4085__auto__){
var self__ = this;
var this__4084__auto____$1 = this;
return this__4084__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4085__auto__,null);
});

xrd_quiz.characters.character.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4086__auto__,k4301,else__4087__auto__){
var self__ = this;
var this__4086__auto____$1 = this;
var G__4305 = k4301;
var G__4305__$1 = (((G__4305 instanceof cljs.core.Keyword))?G__4305.fqn:null);
switch (G__4305__$1) {
case "name":
return self__.name;

break;
case "gender":
return self__.gender;

break;
case "morals":
return self__.morals;

break;
case "playstyle":
return self__.playstyle;

break;
case "focus":
return self__.focus;

break;
case "strengths":
return self__.strengths;

break;
case "zoning":
return self__.zoning;

break;
case "rushdown":
return self__.rushdown;

break;
case "vortex":
return self__.vortex;

break;
case "reversal":
return self__.reversal;

break;
case "range":
return self__.range;

break;
case "projectile":
return self__.projectile;

break;
case "stance":
return self__.stance;

break;
case "charge":
return self__.charge;

break;
case "resource-management":
return self__.resource_management;

break;
case "resource-type":
return self__.resource_type;

break;
case "mixups":
return self__.mixups;

break;
case "setplay":
return self__.setplay;

break;
case "oneplayer-game":
return self__.oneplayer_game;

break;
case "tier":
return self__.tier;

break;
case "skill-requirement":
return self__.skill_requirement;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4301,else__4087__auto__);

}
});

xrd_quiz.characters.character.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4098__auto__,writer__4099__auto__,opts__4100__auto__){
var self__ = this;
var this__4098__auto____$1 = this;
var pr_pair__4101__auto__ = ((function (this__4098__auto____$1){
return (function (keyval__4102__auto__){
return cljs.core.pr_sequential_writer(writer__4099__auto__,cljs.core.pr_writer,""," ","",opts__4100__auto__,keyval__4102__auto__);
});})(this__4098__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4099__auto__,pr_pair__4101__auto__,"#xrd-quiz.characters.character{",", ","}",opts__4100__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gender,self__.gender],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$morals,self__.morals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$playstyle,self__.playstyle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$focus,self__.focus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$strengths,self__.strengths],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$zoning,self__.zoning],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rushdown,self__.rushdown],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vortex,self__.vortex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reversal,self__.reversal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$range,self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$projectile,self__.projectile],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stance,self__.stance],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$charge,self__.charge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$resource_DASH_management,self__.resource_management],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$resource_DASH_type,self__.resource_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mixups,self__.mixups],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$setplay,self__.setplay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$oneplayer_DASH_game,self__.oneplayer_game],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tier,self__.tier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$skill_DASH_requirement,self__.skill_requirement],null))], null),self__.__extmap));
});

xrd_quiz.characters.character.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__4300){
var self__ = this;
var G__4300__$1 = this;
return (new cljs.core.RecordIter((0),G__4300__$1,21,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$gender,cljs.core.cst$kw$morals,cljs.core.cst$kw$playstyle,cljs.core.cst$kw$focus,cljs.core.cst$kw$strengths,cljs.core.cst$kw$zoning,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$vortex,cljs.core.cst$kw$reversal,cljs.core.cst$kw$range,cljs.core.cst$kw$projectile,cljs.core.cst$kw$stance,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$mixups,cljs.core.cst$kw$setplay,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$tier,cljs.core.cst$kw$skill_DASH_requirement], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

xrd_quiz.characters.character.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4082__auto__){
var self__ = this;
var this__4082__auto____$1 = this;
return self__.__meta;
});

xrd_quiz.characters.character.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4079__auto__){
var self__ = this;
var this__4079__auto____$1 = this;
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,self__.__hash));
});

xrd_quiz.characters.character.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4088__auto__){
var self__ = this;
var this__4088__auto____$1 = this;
return (21 + cljs.core.count(self__.__extmap));
});

xrd_quiz.characters.character.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4080__auto__){
var self__ = this;
var this__4080__auto____$1 = this;
var h__3942__auto__ = self__.__hash;
if(!((h__3942__auto__ == null))){
return h__3942__auto__;
} else {
var h__3942__auto____$1 = (function (){var fexpr__4306 = ((function (h__3942__auto__,this__4080__auto____$1){
return (function (coll__4081__auto__){
return (-1786289924 ^ cljs.core.hash_unordered_coll(coll__4081__auto__));
});})(h__3942__auto__,this__4080__auto____$1))
;
return fexpr__4306(this__4080__auto____$1);
})();
self__.__hash = h__3942__auto____$1;

return h__3942__auto____$1;
}
});

xrd_quiz.characters.character.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this4302,other4303){
var self__ = this;
var this4302__$1 = this;
return (!((other4303 == null))) && ((this4302__$1.constructor === other4303.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.name,other4303.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.gender,other4303.gender)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.morals,other4303.morals)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.playstyle,other4303.playstyle)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.focus,other4303.focus)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.strengths,other4303.strengths)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.zoning,other4303.zoning)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.rushdown,other4303.rushdown)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.vortex,other4303.vortex)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.reversal,other4303.reversal)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.range,other4303.range)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.projectile,other4303.projectile)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.stance,other4303.stance)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.charge,other4303.charge)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.resource_management,other4303.resource_management)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.resource_type,other4303.resource_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.mixups,other4303.mixups)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.setplay,other4303.setplay)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.oneplayer_game,other4303.oneplayer_game)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.tier,other4303.tier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.skill_requirement,other4303.skill_requirement)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4302__$1.__extmap,other4303.__extmap));
});

xrd_quiz.characters.character.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4093__auto__,k__4094__auto__){
var self__ = this;
var this__4093__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [cljs.core.cst$kw$skill_DASH_requirement,null,cljs.core.cst$kw$playstyle,null,cljs.core.cst$kw$tier,null,cljs.core.cst$kw$strengths,null,cljs.core.cst$kw$stance,null,cljs.core.cst$kw$zoning,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$reversal,null,cljs.core.cst$kw$mixups,null,cljs.core.cst$kw$charge,null,cljs.core.cst$kw$resource_DASH_management,null,cljs.core.cst$kw$morals,null,cljs.core.cst$kw$oneplayer_DASH_game,null,cljs.core.cst$kw$vortex,null,cljs.core.cst$kw$projectile,null,cljs.core.cst$kw$setplay,null,cljs.core.cst$kw$resource_DASH_type,null,cljs.core.cst$kw$rushdown,null,cljs.core.cst$kw$focus,null,cljs.core.cst$kw$gender,null,cljs.core.cst$kw$range,null], null), null),k__4094__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4093__auto____$1),self__.__meta),k__4094__auto__);
} else {
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4094__auto__)),null));
}
});

xrd_quiz.characters.character.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4091__auto__,k__4092__auto__,G__4300){
var self__ = this;
var this__4091__auto____$1 = this;
var pred__4307 = cljs.core.keyword_identical_QMARK_;
var expr__4308 = k__4092__auto__;
if(cljs.core.truth_((function (){var G__4310 = cljs.core.cst$kw$name;
var G__4311 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4310,G__4311) : pred__4307.call(null,G__4310,G__4311));
})())){
return (new xrd_quiz.characters.character(G__4300,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4312 = cljs.core.cst$kw$gender;
var G__4313 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4312,G__4313) : pred__4307.call(null,G__4312,G__4313));
})())){
return (new xrd_quiz.characters.character(self__.name,G__4300,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4314 = cljs.core.cst$kw$morals;
var G__4315 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4314,G__4315) : pred__4307.call(null,G__4314,G__4315));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,G__4300,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4316 = cljs.core.cst$kw$playstyle;
var G__4317 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4316,G__4317) : pred__4307.call(null,G__4316,G__4317));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,G__4300,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4318 = cljs.core.cst$kw$focus;
var G__4319 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4318,G__4319) : pred__4307.call(null,G__4318,G__4319));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,G__4300,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4320 = cljs.core.cst$kw$strengths;
var G__4321 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4320,G__4321) : pred__4307.call(null,G__4320,G__4321));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,G__4300,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4322 = cljs.core.cst$kw$zoning;
var G__4323 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4322,G__4323) : pred__4307.call(null,G__4322,G__4323));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,G__4300,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4324 = cljs.core.cst$kw$rushdown;
var G__4325 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4324,G__4325) : pred__4307.call(null,G__4324,G__4325));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,G__4300,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4326 = cljs.core.cst$kw$vortex;
var G__4327 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4326,G__4327) : pred__4307.call(null,G__4326,G__4327));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,G__4300,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4328 = cljs.core.cst$kw$reversal;
var G__4329 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4328,G__4329) : pred__4307.call(null,G__4328,G__4329));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,G__4300,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4330 = cljs.core.cst$kw$range;
var G__4331 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4330,G__4331) : pred__4307.call(null,G__4330,G__4331));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,G__4300,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4332 = cljs.core.cst$kw$projectile;
var G__4333 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4332,G__4333) : pred__4307.call(null,G__4332,G__4333));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,G__4300,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4334 = cljs.core.cst$kw$stance;
var G__4335 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4334,G__4335) : pred__4307.call(null,G__4334,G__4335));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,G__4300,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4336 = cljs.core.cst$kw$charge;
var G__4337 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4336,G__4337) : pred__4307.call(null,G__4336,G__4337));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,G__4300,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4338 = cljs.core.cst$kw$resource_DASH_management;
var G__4339 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4338,G__4339) : pred__4307.call(null,G__4338,G__4339));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,G__4300,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4340 = cljs.core.cst$kw$resource_DASH_type;
var G__4341 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4340,G__4341) : pred__4307.call(null,G__4340,G__4341));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,G__4300,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4342 = cljs.core.cst$kw$mixups;
var G__4343 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4342,G__4343) : pred__4307.call(null,G__4342,G__4343));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,G__4300,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4344 = cljs.core.cst$kw$setplay;
var G__4345 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4344,G__4345) : pred__4307.call(null,G__4344,G__4345));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,G__4300,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4346 = cljs.core.cst$kw$oneplayer_DASH_game;
var G__4347 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4346,G__4347) : pred__4307.call(null,G__4346,G__4347));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,G__4300,self__.tier,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4348 = cljs.core.cst$kw$tier;
var G__4349 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4348,G__4349) : pred__4307.call(null,G__4348,G__4349));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,G__4300,self__.skill_requirement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4350 = cljs.core.cst$kw$skill_DASH_requirement;
var G__4351 = expr__4308;
return (pred__4307.cljs$core$IFn$_invoke$arity$2 ? pred__4307.cljs$core$IFn$_invoke$arity$2(G__4350,G__4351) : pred__4307.call(null,G__4350,G__4351));
})())){
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,G__4300,self__.__meta,self__.__extmap,null));
} else {
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4092__auto__,G__4300),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

xrd_quiz.characters.character.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4096__auto__){
var self__ = this;
var this__4096__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gender,self__.gender],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$morals,self__.morals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$playstyle,self__.playstyle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$focus,self__.focus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$strengths,self__.strengths],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$zoning,self__.zoning],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rushdown,self__.rushdown],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vortex,self__.vortex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reversal,self__.reversal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$range,self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$projectile,self__.projectile],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stance,self__.stance],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$charge,self__.charge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$resource_DASH_management,self__.resource_management],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$resource_DASH_type,self__.resource_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mixups,self__.mixups],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$setplay,self__.setplay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$oneplayer_DASH_game,self__.oneplayer_game],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tier,self__.tier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$skill_DASH_requirement,self__.skill_requirement],null))], null),self__.__extmap));
});

xrd_quiz.characters.character.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4083__auto__,G__4300){
var self__ = this;
var this__4083__auto____$1 = this;
return (new xrd_quiz.characters.character(self__.name,self__.gender,self__.morals,self__.playstyle,self__.focus,self__.strengths,self__.zoning,self__.rushdown,self__.vortex,self__.reversal,self__.range,self__.projectile,self__.stance,self__.charge,self__.resource_management,self__.resource_type,self__.mixups,self__.setplay,self__.oneplayer_game,self__.tier,self__.skill_requirement,G__4300,self__.__extmap,self__.__hash));
});

xrd_quiz.characters.character.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4089__auto__,entry__4090__auto__){
var self__ = this;
var this__4089__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4090__auto__)){
return this__4089__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4090__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4090__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4089__auto____$1,entry__4090__auto__);
}
});

xrd_quiz.characters.character.getBasis = (function (){
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$gender,cljs.core.cst$sym$morals,cljs.core.cst$sym$playstyle,cljs.core.cst$sym$focus,cljs.core.cst$sym$strengths,cljs.core.cst$sym$zoning,cljs.core.cst$sym$rushdown,cljs.core.cst$sym$vortex,cljs.core.cst$sym$reversal,cljs.core.cst$sym$range,cljs.core.cst$sym$projectile,cljs.core.cst$sym$stance,cljs.core.cst$sym$charge,cljs.core.cst$sym$resource_DASH_management,cljs.core.cst$sym$resource_DASH_type,cljs.core.cst$sym$mixups,cljs.core.cst$sym$setplay,cljs.core.cst$sym$oneplayer_DASH_game,cljs.core.cst$sym$tier,cljs.core.cst$sym$skill_DASH_requirement], null);
});

xrd_quiz.characters.character.cljs$lang$type = true;

xrd_quiz.characters.character.cljs$lang$ctorPrSeq = (function (this__4120__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"xrd-quiz.characters/character");
});

xrd_quiz.characters.character.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__){
return cljs.core._write(writer__4121__auto__,"xrd-quiz.characters/character");
});

xrd_quiz.characters.__GT_character = (function xrd_quiz$characters$__GT_character(name,gender,morals,playstyle,focus,strengths,zoning,rushdown,vortex,reversal,range,projectile,stance,charge,resource_management,resource_type,mixups,setplay,oneplayer_game,tier,skill_requirement){
return (new xrd_quiz.characters.character(name,gender,morals,playstyle,focus,strengths,zoning,rushdown,vortex,reversal,range,projectile,stance,charge,resource_management,resource_type,mixups,setplay,oneplayer_game,tier,skill_requirement,null,null,null));
});

xrd_quiz.characters.map__GT_character = (function xrd_quiz$characters$map__GT_character(G__4304){
return (new xrd_quiz.characters.character(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$gender.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$morals.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$playstyle.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$focus.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$strengths.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$zoning.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$rushdown.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$vortex.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$reversal.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$projectile.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$stance.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$charge.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$resource_DASH_management.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$resource_DASH_type.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$mixups.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$setplay.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$oneplayer_DASH_game.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$tier.cljs$core$IFn$_invoke$arity$1(G__4304),cljs.core.cst$kw$skill_DASH_requirement.cljs$core$IFn$_invoke$arity$1(G__4304),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4304,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gender,cljs.core.cst$kw$morals,cljs.core.cst$kw$playstyle,cljs.core.cst$kw$focus,cljs.core.cst$kw$strengths,cljs.core.cst$kw$zoning,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$vortex,cljs.core.cst$kw$reversal,cljs.core.cst$kw$range,cljs.core.cst$kw$projectile,cljs.core.cst$kw$stance,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$mixups,cljs.core.cst$kw$setplay,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$tier,cljs.core.cst$kw$skill_DASH_requirement], 0))),null));
});

xrd_quiz.characters.roster = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sol","ky","may","faust","millia","chipp","ino","axl","venom","zato","slayer","potemkin","ram","bedman","sin","elphelt","leo","jacko","jam","johnny","kum","raven","dizzy"], null);
xrd_quiz.characters.characters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$johnny,cljs.core.cst$kw$ino,cljs.core.cst$kw$elphelt,cljs.core.cst$kw$leo,cljs.core.cst$kw$sol,cljs.core.cst$kw$venom,cljs.core.cst$kw$axl,cljs.core.cst$kw$dizzy,cljs.core.cst$kw$potemkin,cljs.core.cst$kw$slayer,cljs.core.cst$kw$millia,cljs.core.cst$kw$kum,cljs.core.cst$kw$ram,cljs.core.cst$kw$faust,cljs.core.cst$kw$raven,cljs.core.cst$kw$chipp,cljs.core.cst$kw$sin,cljs.core.cst$kw$bedman,cljs.core.cst$kw$may,cljs.core.cst$kw$jam,cljs.core.cst$kw$jacko,cljs.core.cst$kw$zato,cljs.core.cst$kw$ky],[xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$rewarding,cljs.core.cst$kw$high,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$damage], null),cljs.core.cst$kw$yes,0.0,"Johnny Sfondi",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unblockable,cljs.core.cst$kw$block_DASH_pressure,cljs.core.cst$kw$frame_DASH_traps], null),cljs.core.cst$kw$none,cljs.core.cst$kw$light,cljs.core.cst$kw$grey,cljs.core.cst$kw$sometimes,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limited,cljs.core.cst$kw$special], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oki], null),cljs.core.cst$kw$limiting,1.0,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$combos,cljs.core.cst$kw$mixups,cljs.core.cst$kw$conditioning], null),cljs.core.cst$kw$high,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mid,cljs.core.cst$kw$long], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$rewarding,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mobility], null),cljs.core.cst$kw$no,0.0,"I-No",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_low], null),cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$villain,cljs.core.cst$kw$yes,cljs.core.cst$kw$50_DASH_50s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$special], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$none,1.0,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mixups], null),cljs.core.cst$kw$high,cljs.core.cst$kw$F,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$short], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$prepared,cljs.core.cst$kw$high,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$damage,cljs.core.cst$kw$tools,cljs.core.cst$kw$all_DASH_rounder], null),cljs.core.cst$kw$yes,0.25,"Elphelt Valentine",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block_DASH_pressure,cljs.core.cst$kw$frame_DASH_traps,cljs.core.cst$kw$unblockable], null),cljs.core.cst$kw$none,cljs.core.cst$kw$light,cljs.core.cst$kw$good,cljs.core.cst$kw$sometimes,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oki,cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$limiting,0.75,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$combos], null),cljs.core.cst$kw$medium,cljs.core.cst$kw$F,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$rewarding,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$damage,cljs.core.cst$kw$defense], null),cljs.core.cst$kw$yes,0.0,"Leo Whitefang",cljs.core.cst$kw$dp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block_DASH_pressure,cljs.core.cst$kw$crossups,cljs.core.cst$kw$high_DASH_low,cljs.core.cst$kw$frame_DASH_traps], null),cljs.core.cst$kw$light,cljs.core.cst$kw$none,cljs.core.cst$kw$good,cljs.core.cst$kw$no,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standard], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),cljs.core.cst$kw$none,1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$conditioning,cljs.core.cst$kw$mixups], null),cljs.core.cst$kw$beginner,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$short], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$prepared,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_rounder], null),cljs.core.cst$kw$no,0.0,"Sol Badguy",cljs.core.cst$kw$dp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grapple,cljs.core.cst$kw$block_DASH_pressure], null),cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$grey,cljs.core.cst$kw$sometimes,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limited], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),cljs.core.cst$kw$none,1.0,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$conditioning], null),cljs.core.cst$kw$beginner,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$short,cljs.core.cst$kw$mid], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$rewarding,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tools], null),cljs.core.cst$kw$no,0.75,"Venom",cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block_DASH_pressure], null),cljs.core.cst$kw$heavy,cljs.core.cst$kw$heavy,cljs.core.cst$kw$neutral,cljs.core.cst$kw$sometimes,cljs.core.cst$kw$basic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standard,cljs.core.cst$kw$special], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$limiting,0.25,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$high,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mid,cljs.core.cst$kw$long], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$specialist,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_rounder], null),cljs.core.cst$kw$no,1.0,"Axl Low",cljs.core.cst$kw$dp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame_DASH_traps,cljs.core.cst$kw$block_DASH_pressure], null),cljs.core.cst$kw$light,cljs.core.cst$kw$none,cljs.core.cst$kw$neutral,cljs.core.cst$kw$sometimes,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),cljs.core.cst$kw$none,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$conditioning], null),cljs.core.cst$kw$medium,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mid,cljs.core.cst$kw$long], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$specialist,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tools,cljs.core.cst$kw$mobility], null),cljs.core.cst$kw$no,0.75,"Dizzy",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_low,cljs.core.cst$kw$frame_DASH_traps], null),cljs.core.cst$kw$none,cljs.core.cst$kw$heavy,cljs.core.cst$kw$good,cljs.core.cst$kw$sometimes,cljs.core.cst$kw$basic,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$oki], null),cljs.core.cst$kw$limiting,0.25,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mixups,cljs.core.cst$kw$combos,cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$medium,cljs.core.cst$kw$F,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$long], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$rewarding,cljs.core.cst$kw$low,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defense,cljs.core.cst$kw$damage], null),cljs.core.cst$kw$no,0.0,"Potemkin",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grapple], null),cljs.core.cst$kw$heavy,cljs.core.cst$kw$none,cljs.core.cst$kw$neutral,cljs.core.cst$kw$no,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),cljs.core.cst$kw$none,0.0,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$conditioning], null),cljs.core.cst$kw$high,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$short], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$rewarding,cljs.core.cst$kw$low,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$damage,cljs.core.cst$kw$mobility], null),cljs.core.cst$kw$no,0.0,"Slayer",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$crossups,cljs.core.cst$kw$frame_DASH_traps], null),cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$grey,cljs.core.cst$kw$no,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),cljs.core.cst$kw$none,1.0,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$combos], null),cljs.core.cst$kw$high,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$short], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$specialist,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mobility,cljs.core.cst$kw$tools], null),cljs.core.cst$kw$no,0.0,"Millia Rage",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_low], null),cljs.core.cst$kw$none,cljs.core.cst$kw$light,cljs.core.cst$kw$grey,cljs.core.cst$kw$yes,cljs.core.cst$kw$50_DASH_50s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$special,cljs.core.cst$kw$limited], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oki], null),cljs.core.cst$kw$limiting,1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mixups,cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$medium,cljs.core.cst$kw$F,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mid,cljs.core.cst$kw$short], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$prepared,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$damage,cljs.core.cst$kw$defense,cljs.core.cst$kw$all_DASH_rounder], null),cljs.core.cst$kw$no,0.25,"Kum Haehyun",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_low], null),cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$good,cljs.core.cst$kw$no,cljs.core.cst$kw$50_DASH_50s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standard], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oki], null),cljs.core.cst$kw$none,0.75,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$combos,cljs.core.cst$kw$mixups], null),cljs.core.cst$kw$medium,cljs.core.cst$kw$F,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$specialist,cljs.core.cst$kw$low,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tools], null),cljs.core.cst$kw$yes,0.25,"Ramlethal Valentine",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_low,cljs.core.cst$kw$grapple], null),cljs.core.cst$kw$none,cljs.core.cst$kw$heavy,cljs.core.cst$kw$neutral,cljs.core.cst$kw$yes,cljs.core.cst$kw$basic,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limited], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oki], null),cljs.core.cst$kw$limiting,0.75,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mixups], null),cljs.core.cst$kw$medium,cljs.core.cst$kw$F,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mid], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$specialist,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tools], null),cljs.core.cst$kw$no,1.0,"Faust",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unblockable], null),cljs.core.cst$kw$none,cljs.core.cst$kw$heavy,cljs.core.cst$kw$neutral,cljs.core.cst$kw$no,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limited,cljs.core.cst$kw$special], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$limiting,0.0,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$beginner,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mid,cljs.core.cst$kw$long], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$prepared,cljs.core.cst$kw$high,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_rounder,cljs.core.cst$kw$tools], null),cljs.core.cst$kw$yes,0.5,"Raven",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grapple,cljs.core.cst$kw$high_DASH_low], null),cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$villain,cljs.core.cst$kw$no,cljs.core.cst$kw$basic,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standard], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oki], null),cljs.core.cst$kw$none,0.5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$beginner,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$prepared,cljs.core.cst$kw$high,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mobility,cljs.core.cst$kw$tools], null),cljs.core.cst$kw$no,0.5,"Chipp Zanuff",cljs.core.cst$kw$dp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$crossups,cljs.core.cst$kw$high_DASH_low], null),cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$good,cljs.core.cst$kw$sometimes,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limited], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),cljs.core.cst$kw$none,0.5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$conditioning,cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$high,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$short], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$prepared,cljs.core.cst$kw$high,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$damage], null),cljs.core.cst$kw$no,0.0,"Sin Kiske",cljs.core.cst$kw$dp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame_DASH_traps,cljs.core.cst$kw$block_DASH_pressure], null),cljs.core.cst$kw$none,cljs.core.cst$kw$heavy,cljs.core.cst$kw$good,cljs.core.cst$kw$sometimes,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$special], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oki], null),cljs.core.cst$kw$meter,1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$combos], null),cljs.core.cst$kw$beginner,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mid], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$specialist,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tools,cljs.core.cst$kw$mobility,cljs.core.cst$kw$defense], null),cljs.core.cst$kw$no,0.25,"Bedman",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$crossups,cljs.core.cst$kw$high_DASH_low,cljs.core.cst$kw$block_DASH_pressure], null),cljs.core.cst$kw$none,cljs.core.cst$kw$heavy,cljs.core.cst$kw$villain,cljs.core.cst$kw$sometimes,cljs.core.cst$kw$basic,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standard], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$oki], null),cljs.core.cst$kw$limiting,0.75,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$medium,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$rewarding,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tools,cljs.core.cst$kw$mobility], null),cljs.core.cst$kw$no,0.25,"May",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grapple,cljs.core.cst$kw$high_DASH_low], null),cljs.core.cst$kw$heavy,cljs.core.cst$kw$heavy,cljs.core.cst$kw$neutral,cljs.core.cst$kw$no,cljs.core.cst$kw$basic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limited,cljs.core.cst$kw$special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$oki], null),cljs.core.cst$kw$limiting,0.75,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$combos], null),cljs.core.cst$kw$medium,cljs.core.cst$kw$F,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mid], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$rewarding,cljs.core.cst$kw$low,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$damage,cljs.core.cst$kw$mobility], null),cljs.core.cst$kw$no,0.0,"Jam Kuradoberi",cljs.core.cst$kw$dp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame_DASH_traps,cljs.core.cst$kw$block_DASH_pressure], null),cljs.core.cst$kw$none,cljs.core.cst$kw$heavy,cljs.core.cst$kw$neutral,cljs.core.cst$kw$no,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),cljs.core.cst$kw$limiting,1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$combos,cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$medium,cljs.core.cst$kw$F,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$short], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$specialist,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tools], null),cljs.core.cst$kw$no,1.0,"Jack-O Valentine",cljs.core.cst$kw$dp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block_DASH_pressure,cljs.core.cst$kw$high_DASH_low], null),cljs.core.cst$kw$none,cljs.core.cst$kw$heavy,cljs.core.cst$kw$grey,cljs.core.cst$kw$yes,cljs.core.cst$kw$none,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limited], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$oki], null),cljs.core.cst$kw$meter,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mixups,cljs.core.cst$kw$combos], null),cljs.core.cst$kw$beginner,cljs.core.cst$kw$F,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$rewarding,cljs.core.cst$kw$mid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tools,cljs.core.cst$kw$damage], null),cljs.core.cst$kw$yes,0.25,"Zato=1",cljs.core.cst$kw$metered,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unblockable,cljs.core.cst$kw$grapple,cljs.core.cst$kw$block_DASH_pressure], null),cljs.core.cst$kw$none,cljs.core.cst$kw$heavy,cljs.core.cst$kw$neutral,cljs.core.cst$kw$yes,cljs.core.cst$kw$50_DASH_50s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$special], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral], null),cljs.core.cst$kw$meter,0.75,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$combos,cljs.core.cst$kw$mixups], null),cljs.core.cst$kw$high,cljs.core.cst$kw$M,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all], null)])),xrd_quiz.characters.map__GT_character(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$playstyle,cljs.core.cst$kw$tier,cljs.core.cst$kw$strengths,cljs.core.cst$kw$stance,cljs.core.cst$kw$zoning,cljs.core.cst$kw$name,cljs.core.cst$kw$reversal,cljs.core.cst$kw$mixups,cljs.core.cst$kw$charge,cljs.core.cst$kw$resource_DASH_management,cljs.core.cst$kw$morals,cljs.core.cst$kw$oneplayer_DASH_game,cljs.core.cst$kw$vortex,cljs.core.cst$kw$projectile,cljs.core.cst$kw$setplay,cljs.core.cst$kw$resource_DASH_type,cljs.core.cst$kw$rushdown,cljs.core.cst$kw$focus,cljs.core.cst$kw$character_DASH_difficulty,cljs.core.cst$kw$gender,cljs.core.cst$kw$range],[cljs.core.cst$kw$prepared,cljs.core.cst$kw$high,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_rounder], null),cljs.core.cst$kw$no,0.5,"Ky Kiske",cljs.core.cst$kw$dp,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame_DASH_traps], null),cljs.core.cst$kw$none,cljs.core.cst$kw$light,cljs.core.cst$kw$good,cljs.core.cst$kw$no,cljs.core.cst$kw$basic,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standard], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oki], null),cljs.core.cst$kw$limiting,0.5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$conditioning], null),cljs.core.cst$kw$beginner,cljs.core.cst$kw$A,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all], null)]))]);
