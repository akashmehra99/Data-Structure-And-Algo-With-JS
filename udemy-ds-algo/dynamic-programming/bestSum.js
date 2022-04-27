function bestSum(nums, target, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    let shortestCombination = null;
    for (let num of nums) {
        const diff = target - num;
        const result = bestSum(nums, diff, memo);
        if (result !== null) {
            const combination = [...result, num];
            // if combination is shorter than the current one
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }

        }
    }
    memo[target] = shortestCombination;
    return memo[target];
}

console.log(bestSum([2, 3], 7));
console.log(bestSum([5, 3, 4, 7], 7));
console.log(bestSum([2, 4], 7));
console.log(bestSum([2, 3, 5], 8));
console.log(bestSum([1, 4, 5], 8));
console.log(bestSum([5, 10, 25], 100));
console.log(bestSum([7, 3], 3000));
