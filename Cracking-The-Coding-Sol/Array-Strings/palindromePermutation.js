// Check if permutations of characters of string are palindrome
// 1.4

// Logic -> Strings of even length should not have odd count of chars & those of odd length should not have more that one char with odd count

function palindromePermutation(str) {
    let hash = {};
    let countOdd = 0;
    let char = str.toLowerCase().replace(/\s+/, '').split('');
    for (let i = 0; i < char.length; i++) {
        if (!hash.hasOwnProperty(char[i])) {
            hash[char[i]] = 1;
        } else  {
            hash[char[i]] = hash[char[i]] + 1;
        }
    }
    for (key in hash) {
        if (hash[key] % 2 === 1) {
            countOdd++
        }
    }
    return (countOdd < 2);
}

console.log(palindromePermutation('Tact Coa'));
console.log(palindromePermutation('Tact eCoa'));