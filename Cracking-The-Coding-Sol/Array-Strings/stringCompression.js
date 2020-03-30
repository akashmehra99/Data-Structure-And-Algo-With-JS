// To compress string based upon the consecutive repetative charater, return original string if compressed string is equal to original string or larger than it.

// ex: aabcccccaaa o/p a2b1c5a2


function compressedString(str) {
    let compressed = '', count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if ((i + 1) <= str.length && str.charAt(i) !== str.charAt(i+1)) {
            compressed += '' + str.charAt(i) + count;
            count = 0;
        }
    }
    return (compressed.length < str.length) ? compressed : str;
}

console.log('aabcccccaaa ->', compressedString('aabcccccaaa'));
console.log('abc ->', compressedString('abc'));