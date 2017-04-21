'use strict';

var Dicts = require('./dict');

var NlpjsTFr = {

    config: {
        tagTypes: ["adj", "adv", "art", "con", "nom", "ono", "pre", "ver"],
        strict: false
    },

    tokenize: function(sentence) {
        var tokens = sentence.replace(/[^a-zA-Z0-9\u00C0-\u00FF]+/g, ' ').split(' ')
        return tokens;
    },

    posTagger: function(tokenizedWords) {
        // taggedWords =
        console.log(Dicts);
    },

    lemmatizer: function() {

    }

};

module.exports = NlpjsTFr;
