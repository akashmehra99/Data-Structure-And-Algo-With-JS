function canSum(nums, target, memo = {}) {
    if (target in memo) return memo[target]
    if (target === 0) return true;
    if (target < 0) return false;
    for (let num of nums) {
        const diff = target - num;
        if (canSum(nums, diff, memo)) {
            memo[target] = true;
            return true
        };
    }
    memo[target] = false;
    return false;
}

console.log(canSum([2, 3], 7));
console.log(canSum([5, 3, 4, 7], 7));
console.log(canSum([2, 4], 7));
console.log(canSum([2, 3, 5], 8));
console.log(canSum([7, 14], 300));
console.log(canSum([7, 3], 3000));

