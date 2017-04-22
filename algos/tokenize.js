'use strict';

module.exports = function(sentence) {
    var tokens = sentence.replace(/[^a-zA-Z0-9\u00C0-\u00FF]+/g, ' ').split(' ')
    return tokens;
};
