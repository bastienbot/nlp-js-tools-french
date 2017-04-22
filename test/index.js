'use strict';

var t1 = Date.now();

var NlpjsTFr = require('../');

var corpus = "Elle semble se nourrir essentiellement de plancton, et de hotdog.";

var nlpToolsFr = new NlpjsTFr(corpus, {
    tagTypes: ['art', 'ver', 'nom'],
    strictness: false,
    perfLog: true,
    minimumLength: 3
});
// var nlpToolsFr = new NlpjsTFr(corpus);

var tokenizedWords = nlpToolsFr.tokenizer();
var taggedWords = nlpToolsFr.posTagger();
var taggedWords = nlpToolsFr.lemmatizer();
console.log((Date.now() - t1) / 1000);
