/*
    Sliding Window - maxSubarraySum
    Given an array of integers and a number, write a function called maxSubarraySum , which finds the maximum sum of a subarray with the length of the number passed to the function. 
    Note that a subarray must consist of consecutive  elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
    
*/


function maxSubArraySum(arr, consecNo) {
    if (arr.length >= consecNo) {
        let maxSum = 0;
        for (let x = 0; x < consecNo; x++) {
            maxSum += arr[x];
        }
        let currentTotal = maxSum;
        for (let y = consecNo; y < arr.length; y++) {
            currentTotal = currentTotal + arr[y] - arr[y - consecNo];
            maxSum = currentTotal > maxSum ? currentTotal : maxSum;
        }
        return maxSum;

    } else {
        return null;
    }
}

console.log(maxSubArraySum([100, 200, 300, 400], 2));
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubArraySum([-3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubArraySum([2, 3], 3));



