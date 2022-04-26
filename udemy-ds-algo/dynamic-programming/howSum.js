function howSum(nums, target, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    for (let num of nums) {
        const diff = target - num;
        const result = howSum(nums, diff, memo);
        if (result !== null) {
            memo[target] = [...result, num];
            return memo[target];
        }
    }
    memo[target] = null;
    return memo[target];
}

console.log(howSum([2, 3], 7));
console.log(howSum([5, 3, 4, 7], 7));
console.log(howSum([2, 4], 7));
console.log(howSum([2, 3, 5], 8));
console.log(howSum([7, 14], 300));
console.log(howSum([7, 3], 3000));