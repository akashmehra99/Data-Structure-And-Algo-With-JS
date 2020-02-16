if (!Array.prototype.filter) {
    Array.prototype.filter = function (func, thisArg) {
        'use strict';
        if (!((typeof func === 'Function' || typeof func === 'function') && this)) {
            throw new TypeError();
        }
        var len = this.length >>> 0;
        var res = new Array(len);
        var t = this, c = 0, i = -1;
        var kValue;
        if (thisArg === undefined) {
            while (++i < len) {
                if (i in this) {
                    kValue = t[i];
                    if (func(t[i], i, t)) {
                        res[c++] = kValue;
                    }
                }
            }
        } else {
            while (++i < len) {
                if (i in this) {
                    kValue = t[i];
                    if (func.call(thisArg, t[i], i, t)) {
                        res[c++] = kValue;
                    }
                }
            }
        }
        res.length = c;
        return res;
    }
}