/*
    Happy number is defined by the below rules:
        1 -> Starting with nay positive integer, replace the number by sum of squares of it's digits.
        2 -> Repeat the process until it's equal to 1.
        3 -> If it runs endlessly it's not a happy number
*/

let sumOfDigits = {};

const getSquareOfNumber = (number) => {
    let sumOfSquares = 0;
    while (number > 0) {
        const digit = number % 10;
        number = parseInt((number / 10), 10);
        sumOfSquares = sumOfSquares + (digit * digit);
    }
    if (sumOfSquares === 1) {
        return true;
    } else {
        if (sumOfDigits.hasOwnProperty(sumOfSquares)) {
            return false;
        } else {
            sumOfDigits[sumOfSquares] = sumOfSquares;
            return getSquareOfNumber(sumOfSquares);
        }
    }
};
const number = 19;
// 1 + 81 = 82, 64 + 4 = 68, 36 + 64 = 100, 1
console.log(number, ' - result for happy number :', getSquareOfNumber(number));