'use strict';

var Dicts = require('./dict');

module.exports = NlpjsTFr;

function orderByObjId (array) {
    array.sort(function(a, b) {
        return a.id - b.id;
    });
    return array;
}

function NlpjsTFr(config){

    this.config = {
        tagTypes: config.tagTypes || ["adj", "adv", "art", "con", "nom", "ono", "pre", "ver"],
        strictness: config.strictness || false,
        perfLog: false
    };

    this.tokenize = function(sentence) {
        var tokens = sentence.replace(/[^a-zA-Z0-9\u00C0-\u00FF]+/g, ' ').split(' ')
        return tokens;
    };

    this.posTag = function(tokenizedWords) {
        var taggedWords = [];
        var taggedObjs = [];
        var wordsAsObj = [];
        tokenizedWords.forEach(function(word, id) {
            wordsAsObj.push({id, word});
        });
        var dicWord = this.config.strictness === true ? "word" : "word_nosc";
        // We go through all types so we won't need
        // to iterate several time through the dictonnaries
        this.config.tagTypes.forEach((type) => {
            // Iterating through a dictionnary
            Dicts.all[type].lexi.forEach((wordDict) => {
                // Iterating through words from corpus
                // We compare to either the word with special chars or not
                wordsAsObj.forEach(function(wordObj) {
                    if (wordDict[dicWord] === wordObj.word) {
                        taggedObjs.push({
                            id: wordObj.id,
                            word: wordObj.word,
                            lemma: wordDict.lemma,
                            pos: wordDict.pos,
                        });
                    }
                });
            });
        });
        // console.log(taggedObjs);
        return orderByObjId(taggedObjs);
    };

    this.lemmatizer = function() {

    };

}
