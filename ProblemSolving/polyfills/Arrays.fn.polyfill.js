// Poyfills


// .forEach()

Array.prototype.forEach = function(callBack) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i, this); // current value, index, array
    }
}


// .map()

Array.prototype.map = function(callBack) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(callBack(this[i], i, this)); // current value, index, array
    }
    return arr;
}


// .filter() 

Array.prototype.filter = function(callBack, context) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callBack.call(context, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

// .reduce()

Array.prototype.reduce = function(callBack, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callBack.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}