// Compiled by ClojureScript 1.7.170 {}
goog.provide('io.harriknox.NumberNamer');
goog.require('cljs.core');
goog.require('clojure.string');
io.harriknox.NumberNamer.number_names = cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","one","two","three","four","five","six","seven","eight","nine"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null));
io.harriknox.NumberNamer.small_number_prefixes = cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["n","m","b","tr","quadr","quint","sext","sept","oct","non"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null));
io.harriknox.NumberNamer.large_number_unit_prefixes = cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","un","duo","tre","quattuor","quinqua","se","septe","octo","nove"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null));
io.harriknox.NumberNamer.large_number_ten_prefixes = cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","dec","vigint","trigint","quadragint","quinquagint","sexagint","septuagint","octogint","nonagint"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null));
io.harriknox.NumberNamer.large_number_hundred_prefixes = cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","cent","ducent","trecent","quadringent","quingent","sescent","septingent","octingent","nongent"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null));
io.harriknox.NumberNamer.split_numbers = (function io$harriknox$NumberNamer$split_numbers(number){
return cljs.core.map.call(null,(function (p1__28_SHARP_){
return parseInt(p1__28_SHARP_);
}),cljs.core.seq.call(null,clojure.string.replace.call(null,[cljs.core.str(number)].join(''),/^0+/,"")));
});
io.harriknox.NumberNamer.split_and_pad_numbers = (function io$harriknox$NumberNamer$split_and_pad_numbers(number){
return cljs.core.concat.call(null,cljs.core.repeat.call(null,((2) - cljs.core.rem.call(null,(cljs.core.count.call(null,[cljs.core.str(number)].join('')) - (1)),(3))),(0)),io.harriknox.NumberNamer.split_numbers.call(null,number));
});
io.harriknox.NumberNamer.split_and_reverse_numbers = (function io$harriknox$NumberNamer$split_and_reverse_numbers(number){
return cljs.core.reverse.call(null,io.harriknox.NumberNamer.split_numbers.call(null,number));
});
io.harriknox.NumberNamer.split_pad_and_reverse_numbers = (function io$harriknox$NumberNamer$split_pad_and_reverse_numbers(number){
return cljs.core.reverse.call(null,io.harriknox.NumberNamer.split_and_pad_numbers.call(null,number));
});
io.harriknox.NumberNamer.decrement = (function io$harriknox$NumberNamer$decrement(number){
if(cljs.core.truth_((function (){var or__2822__auto__ = (cljs.core.integer_QMARK_.call(null,number)) && ((number > (0)));
if(or__2822__auto__){
return or__2822__auto__;
} else {
return cljs.core.re_matches.call(null,/^0*[1-9]\d*$/,[cljs.core.str(number)].join(''));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"number","number",-1084057331,null)),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"number","number",-1084057331,null))),cljs.core.list(new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),/^0*[1-9]\d*$/,cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"number","number",-1084057331,null))))))].join('')));
}

var vec__30 = cljs.core.re_matches.call(null,/^(\d*)([1-9])(0*)$/,[cljs.core.str(number)].join(''));
var _number_str = cljs.core.nth.call(null,vec__30,(0),null);
var before_num = cljs.core.nth.call(null,vec__30,(1),null);
var decremented_num = cljs.core.nth.call(null,vec__30,(2),null);
var trailing_zeros = cljs.core.nth.call(null,vec__30,(3),null);
return clojure.string.replace.call(null,[cljs.core.str(before_num),cljs.core.str((parseInt(decremented_num) - (1))),cljs.core.str(clojure.string.replace.call(null,trailing_zeros,/0/,"9"))].join(''),/^0*/,"");
});
io.harriknox.NumberNamer.unit_to_ten_modification = (function io$harriknox$NumberNamer$unit_to_ten_modification(units,tens){
var units_set = cljs.core.PersistentHashSet.fromArray([units], true);
var tens_set = cljs.core.PersistentHashSet.fromArray([tens], true);
if(cljs.core.truth_((function (){var and__2814__auto__ = cljs.core.some.call(null,units_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(9)], null));
if(cljs.core.truth_(and__2814__auto__)){
return cljs.core.some.call(null,tens_set,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(4),(5),(6),(7)], null));
} else {
return and__2814__auto__;
}
})())){
return "n";
} else {
if(cljs.core.truth_((function (){var and__2814__auto__ = cljs.core.some.call(null,units_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(9)], null));
if(cljs.core.truth_(and__2814__auto__)){
return cljs.core.some.call(null,tens_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(8)], null));
} else {
return and__2814__auto__;
}
})())){
return "m";
} else {
if((cljs.core._EQ_.call(null,units,(6))) && (cljs.core._EQ_.call(null,(8),tens))){
return "x";
} else {
if(cljs.core.truth_((function (){var and__2814__auto__ = cljs.core.some.call(null,units_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6)], null));
if(cljs.core.truth_(and__2814__auto__)){
return cljs.core.some.call(null,tens_set,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5),(8)], null));
} else {
return and__2814__auto__;
}
})())){
return "s";
} else {
return "";

}
}
}
}
});
io.harriknox.NumberNamer.unit_to_hundred_modification = (function io$harriknox$NumberNamer$unit_to_hundred_modification(units,hundreds){
var units_set = cljs.core.PersistentHashSet.fromArray([units], true);
var hundreds_set = cljs.core.PersistentHashSet.fromArray([hundreds], true);
if(cljs.core.truth_((function (){var and__2814__auto__ = cljs.core.some.call(null,units_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(9)], null));
if(cljs.core.truth_(and__2814__auto__)){
return cljs.core.some.call(null,hundreds_set,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7)], null));
} else {
return and__2814__auto__;
}
})())){
return "n";
} else {
if(cljs.core.truth_((function (){var and__2814__auto__ = cljs.core.some.call(null,units_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(9)], null));
if(cljs.core.truth_(and__2814__auto__)){
return cljs.core._EQ_.call(null,(8),hundreds);
} else {
return and__2814__auto__;
}
})())){
return "m";
} else {
if(cljs.core.truth_((function (){var and__2814__auto__ = cljs.core._EQ_.call(null,units,(6));
if(and__2814__auto__){
return cljs.core.some.call(null,hundreds_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(8)], null));
} else {
return and__2814__auto__;
}
})())){
return "x";
} else {
if(cljs.core.truth_((function (){var and__2814__auto__ = cljs.core.some.call(null,units_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6)], null));
if(cljs.core.truth_(and__2814__auto__)){
return cljs.core.some.call(null,hundreds_set,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(4),(5),(8)], null));
} else {
return and__2814__auto__;
}
})())){
return "s";
} else {
return "";

}
}
}
}
});
io.harriknox.NumberNamer.ten_to_hundred_modification = (function io$harriknox$NumberNamer$ten_to_hundred_modification(tens,hundreds){
if((hundreds > (0))){
if((tens > (2))){
return "a";
} else {
return "i";
}
} else {
return "";
}
});
io.harriknox.NumberNamer.large_number_group_prefix = (function io$harriknox$NumberNamer$large_number_group_prefix(units,tens,hundreds){
if(cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tens,hundreds], null))){
return cljs.core.nth.call(null,io.harriknox.NumberNamer.small_number_prefixes,units);
} else {
return [cljs.core.str(cljs.core.nth.call(null,io.harriknox.NumberNamer.large_number_unit_prefixes,units)),cljs.core.str((((tens > (0)))?[cljs.core.str(io.harriknox.NumberNamer.unit_to_ten_modification.call(null,units,tens)),cljs.core.str(cljs.core.nth.call(null,io.harriknox.NumberNamer.large_number_ten_prefixes,tens)),cljs.core.str(io.harriknox.NumberNamer.ten_to_hundred_modification.call(null,tens,hundreds))].join(''):io.harriknox.NumberNamer.unit_to_hundred_modification.call(null,units,hundreds))),cljs.core.str(cljs.core.nth.call(null,io.harriknox.NumberNamer.large_number_hundred_prefixes,hundreds))].join('');
}
});
io.harriknox.NumberNamer.illion_group_name = (function io$harriknox$NumberNamer$illion_group_name(group_number){
if(cljs.core.truth_((function (){var or__2822__auto__ = (cljs.core.integer_QMARK_.call(null,group_number)) && ((group_number > (0)));
if(or__2822__auto__){
return or__2822__auto__;
} else {
return cljs.core.re_matches.call(null,/^0*[1-9]\d*$/,[cljs.core.str(group_number)].join(''));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"group-number","group-number",391875954,null)),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"group-number","group-number",391875954,null))),cljs.core.list(new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),/^0*[1-9]\d*$/,cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"group-number","group-number",391875954,null))))))].join('')));
}

var G__36 = io.harriknox.NumberNamer.split_pad_and_reverse_numbers.call(null,group_number);
var vec__37 = G__36;
var ones = cljs.core.nth.call(null,vec__37,(0),null);
var tens = cljs.core.nth.call(null,vec__37,(1),null);
var hundreds = cljs.core.nth.call(null,vec__37,(2),null);
var remaining = cljs.core.nthnext.call(null,vec__37,(3));
var suffix = "on";
var G__36__$1 = G__36;
var suffix__$1 = suffix;
while(true){
var vec__38 = G__36__$1;
var ones__$1 = cljs.core.nth.call(null,vec__38,(0),null);
var tens__$1 = cljs.core.nth.call(null,vec__38,(1),null);
var hundreds__$1 = cljs.core.nth.call(null,vec__38,(2),null);
var remaining__$1 = cljs.core.nthnext.call(null,vec__38,(3));
var suffix__$2 = suffix__$1;
if((ones__$1 == null)){
return suffix__$2;
} else {
var G__39 = remaining__$1;
var G__40 = [cljs.core.str(io.harriknox.NumberNamer.large_number_group_prefix.call(null,ones__$1,tens__$1,hundreds__$1)),cljs.core.str("illi"),cljs.core.str(suffix__$2)].join('');
G__36__$1 = G__39;
suffix__$1 = G__40;
continue;
}
break;
}
});
io.harriknox.NumberNamer.name_of_group = (function io$harriknox$NumberNamer$name_of_group(group_number){
return [cljs.core.str((((group_number === (0)))?"":((cljs.core._EQ_.call(null,group_number,(1)))?"thousand":io.harriknox.NumberNamer.illion_group_name.call(null,io.harriknox.NumberNamer.decrement.call(null,group_number))
))),cljs.core.str(",")].join('');
});
io.harriknox.NumberNamer.modified_number_name = (function io$harriknox$NumberNamer$modified_number_name(number,suffix){
var number_str = cljs.core.nth.call(null,io.harriknox.NumberNamer.number_names,number);
var pred__44 = cljs.core.re_find;
var expr__45 = number_str;
if(cljs.core.truth_(pred__44.call(null,/^$/,expr__45))){
return "";
} else {
if(cljs.core.truth_(pred__44.call(null,/ree$/,expr__45))){
return clojure.string.replace.call(null,number_str,/ree$/,[cljs.core.str("ir"),cljs.core.str(suffix)].join(''));
} else {
if(cljs.core.truth_(pred__44.call(null,/ve$/,expr__45))){
return clojure.string.replace.call(null,number_str,/ve$/,[cljs.core.str("f"),cljs.core.str(suffix)].join(''));
} else {
if(cljs.core.truth_(pred__44.call(null,/t$/,expr__45))){
return clojure.string.replace.call(null,number_str,/t$/,suffix);
} else {
return [cljs.core.str(number_str),cljs.core.str(suffix)].join('');
}
}
}
}
});
io.harriknox.NumberNamer.group_string = (function io$harriknox$NumberNamer$group_string(ones,tens,hundreds){
return cljs.core.concat.call(null,(((hundreds > (0)))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"hundred"),cljs.core.nth.call(null,io.harriknox.NumberNamer.number_names,hundreds)):null),((cljs.core._EQ_.call(null,tens,(1)))?cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var G__49 = ones;
switch (G__49) {
case (0):
return "ten";

break;
case (1):
return "eleven";

break;
case (2):
return "twelve";

break;
default:
return io.harriknox.NumberNamer.modified_number_name.call(null,ones,"teen");

}
})()):cljs.core._conj.call(null,cljs.core.List.EMPTY,[cljs.core.str((function (){var G__50 = tens;
switch (G__50) {
case (2):
return "twenty";

break;
case (4):
return "forty";

break;
default:
return io.harriknox.NumberNamer.modified_number_name.call(null,tens,"ty");

}
})()),cljs.core.str(((cljs.core.every_QMARK_.call(null,cljs.core.pos_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ones,tens], null)))?"-":"")),cljs.core.str(cljs.core.nth.call(null,io.harriknox.NumberNamer.number_names,ones))].join(''))));
});
io.harriknox.NumberNamer.number_to_string = (function io$harriknox$NumberNamer$number_to_string(number){
if(cljs.core.truth_((function (){var or__2822__auto__ = (cljs.core.integer_QMARK_.call(null,number)) && ((number >= (0)));
if(or__2822__auto__){
return or__2822__auto__;
} else {
return cljs.core.re_matches.call(null,/^\d+$/,[cljs.core.str(number)].join(''));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"number","number",-1084057331,null)),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),/^\d+$/,cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"number","number",-1084057331,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__2822__auto__ = cljs.core._EQ_.call(null,number,(0));
if(or__2822__auto__){
return or__2822__auto__;
} else {
return cljs.core.re_matches.call(null,/^0+$/,[cljs.core.str(number)].join(''));
}
})())){
return "zero";
} else {
var G__58 = io.harriknox.NumberNamer.split_pad_and_reverse_numbers.call(null,number);
var vec__59 = G__58;
var ones = cljs.core.nth.call(null,vec__59,(0),null);
var tens = cljs.core.nth.call(null,vec__59,(1),null);
var hundreds = cljs.core.nth.call(null,vec__59,(2),null);
var remaining = cljs.core.nthnext.call(null,vec__59,(3));
var group = (0);
var number_strings = cljs.core.List.EMPTY;
var G__58__$1 = G__58;
var group__$1 = group;
var number_strings__$1 = number_strings;
while(true){
var vec__60 = G__58__$1;
var ones__$1 = cljs.core.nth.call(null,vec__60,(0),null);
var tens__$1 = cljs.core.nth.call(null,vec__60,(1),null);
var hundreds__$1 = cljs.core.nth.call(null,vec__60,(2),null);
var remaining__$1 = cljs.core.nthnext.call(null,vec__60,(3));
var group__$2 = group__$1;
var number_strings__$2 = number_strings__$1;
if((ones__$1 == null)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.join.call(null," ",number_strings__$2),/\s+/," "),/^\s+/,""),/\s*,\s*$/,"");
} else {
var G__61 = remaining__$1;
var G__62 = (group__$2 + (1));
var G__63 = ((cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ones__$1,tens__$1,hundreds__$1], null)))?number_strings__$2:cljs.core.concat.call(null,io.harriknox.NumberNamer.group_string.call(null,ones__$1,tens__$1,hundreds__$1),cljs.core.conj.call(null,number_strings__$2,io.harriknox.NumberNamer.name_of_group.call(null,group__$2))));
G__58__$1 = G__61;
group__$1 = G__62;
number_strings__$1 = G__63;
continue;
}
break;
}
}
});
io.harriknox.NumberNamer.divide_by_three = (function io$harriknox$NumberNamer$divide_by_three(number){
if(cljs.core.truth_((function (){var or__2822__auto__ = (cljs.core.integer_QMARK_.call(null,number)) && ((number >= (0)));
if(or__2822__auto__){
return or__2822__auto__;
} else {
return cljs.core.re_matches.call(null,/^\d+$/,[cljs.core.str(number)].join(''));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"number","number",-1084057331,null)),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),/^\d+$/,cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"number","number",-1084057331,null))))))].join('')));
}

var number_str = [cljs.core.str(number)].join('');
var len = cljs.core.count.call(null,number_str);
var quotient = "";
var remainder = "";
var counter = (0);
while(true){
var divisor = parseInt([cljs.core.str(remainder),cljs.core.str(cljs.core.nth.call(null,number_str,counter))].join(''));
if((counter >= len)){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,parseInt([cljs.core.str(remainder)].join(''))),clojure.string.replace.call(null,quotient,/^0+/,""));
} else {
var G__64 = [cljs.core.str(quotient),cljs.core.str(cljs.core.quot.call(null,divisor,(3)))].join('');
var G__65 = cljs.core.rem.call(null,divisor,(3));
var G__66 = (counter + (1));
quotient = G__64;
remainder = G__65;
counter = G__66;
continue;
}
break;
}
});
io.harriknox.NumberNamer.power_of_10_to_string = (function io$harriknox$NumberNamer$power_of_10_to_string(exponent){
if(cljs.core.truth_((function (){var or__2822__auto__ = (cljs.core.integer_QMARK_.call(null,exponent)) && ((exponent >= (0)));
if(or__2822__auto__){
return or__2822__auto__;
} else {
return cljs.core.re_matches.call(null,/^\d+$/,[cljs.core.str(exponent)].join(''));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"exponent","exponent",-570972152,null)),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"exponent","exponent",-570972152,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),/^\d+$/,cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"exponent","exponent",-570972152,null))))))].join('')));
}

var vec__69 = io.harriknox.NumberNamer.divide_by_three.call(null,exponent);
var quotient = cljs.core.nth.call(null,vec__69,(0),null);
var remainder = cljs.core.nth.call(null,vec__69,(1),null);
return clojure.string.replace.call(null,[cljs.core.str((function (){var G__70 = remainder;
switch (G__70) {
case (0):
return "one";

break;
case (1):
return "ten";

break;
case (2):
return "one hundred";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(remainder)].join('')));

}
})()),cljs.core.str(" "),cljs.core.str(io.harriknox.NumberNamer.name_of_group.call(null,quotient))].join(''),/\s*,\s*$/,"");
});

//# sourceMappingURL=NumberNamer.js.map