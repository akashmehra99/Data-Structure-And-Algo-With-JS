function canConstruct(target, words, memo = {}) {
    if (target in memo) return memo[target];
    if (target.length === 0) return true;

    for (let word of words) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const res = canConstruct(suffix, words, memo);
            if (res) {
                memo[target] = res;
                return true;
            }
        }
    }
    memo[target] = false;
    return memo[target];
}


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));

console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));

