'use strict';

module.exports = {
    orderByObjId: function (array) {
        array.sort(function(a, b) {
            return a.id - b.id;
        });
        return array;
    }
}
