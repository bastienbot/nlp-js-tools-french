'use strict';

var Dicts = require('./dict');
var Config = require('./config');
var Tokenize = require('./algos/tokenize');
var Stem = require('./algos/stem');
var PosTag = require('./algos/pos-tag');
var Lemmatize = require('./algos/lemmatize');

module.exports = NlpjsTFr;

function NlpjsTFr(sentence, userConfig) {

    this.config = new Config(userConfig);

    this.sentence = sentence;
    this.tokenized = null;
    this.posTagged = null;
    this.stemmed = null;
    this.lemmatized = null;

    this.tokenizer = function() {
        this.tokenized = Tokenize();
        return this.tokenized;
    };

    this.posTagger = function() {
        this.posTagged = PosTag();
        return this.posTagged;
    };

    this.stemmer = Stem;

    this.lemmatizer = Lemmatize;

}
