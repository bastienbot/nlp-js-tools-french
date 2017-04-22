'use strict';

var Config = require('./config');
var Tokenize = require('./algos/tokenize');
var FindTokens = require('./algos/find-tokens');
var Stem = require('./algos/stem');
var PosTag = require('./algos/pos-tag');
var Lemmatize = require('./algos/lemmatize');

module.exports = NlpjsTFr;

function NlpjsTFr(sentence, userConfig) {

    this.config = new Config(userConfig);

    this.sentence = sentence;
    this.tokenized = null;
    this.foundTokensInDicts = null;
    this.posTagged = null;
    this.stemmed = null;
    this.lemmatized = null;

    this.tokenizer = function() {
        this.tokenized = Tokenize(this);
        console.log(this.tokenized);
        return this.tokenized;
    };

    this.posTagger = function() {
        if (this.foundTokensInDicts === null) {
            this.foundTokensInDicts = FindTokens(this);
        }
        this.posTagged = PosTag(this);
        console.log("Pos Tag: ", this.posTagged);
        return this.posTagged;
    };

    this.lemmatizer = function() {
        if (this.foundTokensInDicts === null) {
            this.foundTokensInDicts = FindTokens(this);
        }
        this.lemmatized = Lemmatize(this);
        console.log("Lemmas: ", this.lemmatized);
        return this.lemmatized;
    };

    this.stemmer = function() {
        this.stemmed = Stem(this);
        console.log("Stemmed: ", this.stemmed);
        return this.stemmed;
    };

}
