/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/
function minSubArrayLen(arr, sum) {

    let start = 0, end = 0, minLength = Infinity, total = 0;

    while (start < arr.length) {

        if (total < sum && end < arr.length) {
            total += arr[end];
            end++;
        } else if (total >= sum) {
            minLength = Math.min(end - start, minLength);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}


console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
