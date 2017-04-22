'use strict';

var t1 = Date.now();

var NlpjsTFr = require('../');

var corpus = "Pelagothuria natatrix, unique représentant du genre Pelagothuria, est une espèce d'holothuries (concombres de mer) abyssales de l'ordre des Elasipodida. Cette holothurie est remarquable car elle vit en nageant en pleine eau, à la manière des méduses avec lesquelles elle partage de nombreuses caractéristiques (on peut conjecturer une convergence évolutive). Son corps est ainsi translucide et surmonté par une ombrelle constituée de tentacules modifiés et unis par unvoile. Vivant à très grande profondeur, elle semble se nourrir essentiellement de plancton. Cette espèce, à la répartition probablement cosmopolite, demeure cependant très rarement observée : elle n'a pu être observée in situ qu'à trois occasions seulement, près de cent ans après sa découverte.";

var nlpToolsFr = new NlpjsTFr(corpus, {tagTypes: ['art', 'ver', 'nom'], strictness: false, perfLog: true});
// var nlpToolsFr = new NlpjsTFr(corpus);

var tokenizedWords = nlpToolsFr.tokenizer(corpus);
// console.log(tokenizedWords);

var taggedWords = nlpToolsFr.posTagger(tokenizedWords);
console.log(taggedWords);
console.log((Date.now() - t1) / 1000);
