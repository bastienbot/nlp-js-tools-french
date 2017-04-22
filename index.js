'use strict';

var Config = require('./config');
var Logger = require('./logger');
var Tokenize = require('./algos/tokenize');
var FindTokens = require('./algos/find-tokens');
var Stem = require('./algos/stem');
var PosTag = require('./algos/pos-tag');
var Lemmatize = require('./algos/lemmatize');

module.exports = NlpjsTFr;

function NlpjsTFr(sentence, userConfig) {

    this.config = new Config(userConfig);
    this.logger = new Logger(this.config);

    this.sentence = sentence;
    this.tokenized = null;
    this.foundTokensInDicts = null;
    this.posTagged = null;
    this.stemmed = null;
    this.lemmatized = null;

    this.tokenizer = function() {
        this.tokenized = Tokenize(this);
        this.logger.debug("Tokenizer: ", this.tokenized);
        return this.tokenized;
    };

    this.posTagger = function() {
        if (this.foundTokensInDicts === null) {
            this.foundTokensInDicts = FindTokens(this);
        }
        this.posTagged = PosTag(this);
        this.logger.debug("Pos Tag: ", this.posTagged);
        return this.posTagged;
    };

    this.lemmatizer = function() {
        if (this.foundTokensInDicts === null) {
            this.foundTokensInDicts = FindTokens(this);
        }
        this.lemmatized = Lemmatize(this);
        this.logger.debug("Lemmas: ", this.lemmatized);
        return this.lemmatized;
    };

    this.stemmer = function() {
        this.stemmed = Stem(this);
        this.logger.debug("Stemmed: ", this.stemmed);
        return this.stemmed;
    };

}
