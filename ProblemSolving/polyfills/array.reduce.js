if (!Array.prototype.reduce) {
    Object.defineProperty(Array.prototype, 'reduce', {
        value: function(callback) {
            if (this === null) {
                throw new TypeError('Called on null or undefined');
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var o = Object(this);
            var len = o.length >>> 0;
            var k = 0;
            var value;
            if (arguments.lenth >= 2) {
                value = arguments[1];
            } else {
                while (k < len && (!(k in o))) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError('Reduce of empty array');
                }
                value = o[k++];
            }
            while (k < len) {
                if (k in o) {
                    value = callback(value, o[k], k, o);
                }
                k++;
            }
            return value;
        }
    });
}