'use strict';

module.exports = function (userConfig) {
    if (userConfig) {
        this.tagTypes = userConfig.tagTypes || ["adj", "adv", "art", "con", "nom", "ono", "pre", "ver"];
        this.strictness = userConfig.strictness || false;
        this.perfLog = userConfig.perfLog || false;
    } else {
        this.tagTypes = ["adj", "adv", "art", "con", "nom", "ono", "pre", "ver"];
        this.strictness = false;
        this.perfLog = false;
    }
};
