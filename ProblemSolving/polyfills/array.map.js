if (!Array.prototype.map) {
    Array.prototype.map = function (callback) {
        /*
            T -> this argument if provided
            A -> New array to be returned;
            k - index of array;
        */
        var T, A, k;
        if (this === null) {
            throw new TypeError('this is null or not defined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback, ' - is not a function');
        }
        // Let O be the result of calling ToObject passing the |this| 
        // value as the argument.
        var O = Object(this);
        // 2. Let lenValue be the result of calling the Get internal 
        //    method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var length = O.length >>> 0;
        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 1) {
            T = arguments[1];
        }
        // 6. Let A be a new array created as if by the expression new Array(len) 
        //    where Array is the standard built-in constructor with that name and 
        //    len is the value of len.
        A = new Array(length);

        k = 0;
        while (k < length) {
            var kValue, mappedValue;
            if (k in O) {
                kValue = O[k];
                mappedValue = callback.call(T, kValue, k, O);
                A[k] = mappedValue;
            }
            k++;
        }
        return A;
    }
}