'use strict';

var NlpjsTFr = require('../');

var corpus = "Pelagothuria natatrix, unique représentant du genre Pelagothuria, est une espèce d'holothuries (concombres de mer) abyssales de l'ordre des Elasipodida. Cette holothurie est remarquable car elle vit en nageant en pleine eau, à la manière des méduses avec lesquelles elle partage de nombreuses caractéristiques (on peut conjecturer une convergence évolutive). Son corps est ainsi translucide et surmonté par une ombrelle constituée de tentacules modifiés et unis par unvoile. Vivant à très grande profondeur, elle semble se nourrir essentiellement de plancton. Cette espèce, à la répartition probablement cosmopolite, demeure cependant très rarement observée : elle n'a pu être observée in situ qu'à trois occasions seulement, près de cent ans après sa découverte.";

var tokenizedWords = NlpjsTFr.tokenize(corpus);
console.log(tokenizedWords);

var taggedWords = NlpjsTFr.posTagger(tokenizedWords);
console.log(taggedWords);
