// only for numbers
function radixSort(arr) {
    const maxDigitCount = mostDigits(arr);
    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (j = 0; j < arr.length; j++) {
            digitBuckets[getDigit(arr[j], i)].push(arr[j]) ;
        }
        arr = [].concat(...digitBuckets);
    }
    return arr; 
}

function getDigit(num, place) {
    const divisor = Math.pow(10, place);
    return Math.floor(Math.abs(num) / divisor) % 10;
}

function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits;
}

console.log(radixSort([5,4,3,2,1]));
console.log(radixSort([0,100,21,123,6, 10002, 1212,222,345678903, 1,1]));


