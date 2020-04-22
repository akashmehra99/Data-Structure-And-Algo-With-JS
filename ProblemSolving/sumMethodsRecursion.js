// sum(1)(2)(3)(4)(5)......(n)


const sum = function (a) {
    return function(b) {
        if (b) {
            return sum(a+b);
        } else {
            return a;
        }
    }
}


console.log('Test ->',sum(1)(2)(3)(4)());