function fixCurrying(fn, totalArgs) {
    totalArgs = totalArgs || fn.length;
    return function recourser() {
        return (arguments.length < totalArgs) ? recourser.bind(this, ...arguments) : fn.call(this, ...arguments);
    };
};

const add = fixCurrying((a,b,c) => a+b+c);