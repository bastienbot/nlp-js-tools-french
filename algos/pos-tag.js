'use strict';

module.exports = function(tokenizedWords) {
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

function orderByObjId (array) {
    array.sort(function(a, b) {
        return a.id - b.id;
    });
    return array;
}
