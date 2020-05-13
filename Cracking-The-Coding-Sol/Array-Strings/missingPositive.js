//missingPositive.js

function smallestPositiveInteger (numArray) {
    isPresent = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0 && numArray[i] < numArray.length) {
            isPresent[numArray[i]] = true;
        }
    }
    for (let i = 0; i <=numArray.length; i++ ) {
        if (!isPresent[i]) {
            return i;
        }
    }
    return numArray.length + 1;
}

let a1 = [-1,-2,-4, 0,4];
let a2 = [0,2,1,4,4,5];
let a3 = [11,12,13,14,15];
let a4 = [0,1,2,3,4];
let a5 = [0,0,0,0,];

console.log(smallestPositiveInteger(a1));
console.log(smallestPositiveInteger(a2));
console.log(smallestPositiveInteger(a3));
console.log(smallestPositiveInteger(a4));
console.log(smallestPositiveInteger(a5));
