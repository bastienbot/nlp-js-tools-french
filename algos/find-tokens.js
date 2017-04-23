'use strict';

var Dicts = require('../dict');
var Helpers = require('../helpers');

module.exports = function(_that) {
    var taggedWords = [];
    var taggedObjs = [];
    var wordsAsObj = [];
    _that.tokenized.forEach(function(word, id) {
        wordsAsObj.push({id, word: word.toLowerCase()});
    });
    var dicWord = _that.config.strictness === true ? "word" : "word_nosc";
    // We go through all types so we won't need
    // to iterate several time through the dictonnaries
    _that.config.tagTypes.forEach((type) => {
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
    return Helpers.orderByObjId(taggedObjs);
};
