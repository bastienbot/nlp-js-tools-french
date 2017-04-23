'use strict';

var NlpjsTFr = require('../');

var corpus = "Elle semble se nourrir généralement de plancton, et de hotdog du vendeur dù coin.";

var nlpToolsFr;
// nlpToolsFr = new NlpjsTFr(corpus);
nlpToolsFr = new NlpjsTFr(corpus, {
    // tagTypes: ['art', 'ver', 'nom'],
    strictness: false,
    minimumLength: 3,
    debug: true,
    perfLog: true
});

var posTaggedWords = nlpToolsFr.posTagger();
var lemmatizedWords = nlpToolsFr.lemmatizer();
var stemmedWords = nlpToolsFr.stemmer();
