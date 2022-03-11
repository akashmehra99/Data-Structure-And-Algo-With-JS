function power(num, pow) {
    if (pow === 0) {
        return 1;
    }
    pow--;
    return num * power(num, pow)

}

console.log(power(2,0));
console.log(power(2, 1));
console.log(power(2, 3));
console.log(power(2, 4));


