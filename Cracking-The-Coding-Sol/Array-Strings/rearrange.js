// Rearrange characters in a string so that no character repeats consecutively

function reArrange(str) {
  let storeCharRef = {};
  for (let i = 0; i < str.length; i++) {
    if (storeCharRef.hasOwnProperty(str[i])) {
      storeCharRef[str[i]] = storeCharRef[str[i]] + 1;
    } else {
      storeCharRef[str[i]] = 1;
    }
  }
  let keys = Object.keys(storeCharRef);
  for (let j = 0; j < keys.length; j++) {
    if (str.length - storeCharRef[keys[j]] >= storeCharRef[keys[j]] - 1) {
      // valid
    } else {
      return "No valid output";
    }
  }
}

console.log(reArrange("aaabcad")); // abacada
console.log(reArrange("aaaabbbbcad")); // ababacad
console.log(reArrange("aa")); // No valid output
console.log(reArrange("aaaabc")); // No valid output
