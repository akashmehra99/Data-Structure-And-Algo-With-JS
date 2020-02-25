// longest sub string without repeating chars

function longestSubstring(input) {
    const chars = input.split('');
    let currChar;
    let str = '';
    let longest_string = '';
    let hash = {};
    for (let i = 0; i < chars.length; i++) {
        currChar = chars[i];
        if (!hash.hasOwnProperty(chars[i])) {
            str = str + chars[i];
            hash[chars[i]] = { index: i };
        } else {
            if (longest_string <= str.lastIndexOf) {
                longest_string = str;
            }
            let prev_dupInd = hash[currChar].index;
            let str_prev_dupInd = input.substring(prev_dupInd + 1, i);
            str = str_prev_dupInd + currChar;
            hash = {};
            for (let j = prev_dupInd; j <= i; j++) {
                hash[input.charAt(j)] = { index: j };
            }
        }
    }
    return longest_string.length > str.length ? longest_string : str;
}

function longestASCIISubStr(str) {
    var max = 0, start = 0, i = 0, char;
    const charLookup = new Uint32Array(256);
    const len = str.length;
    while (i < len)  {  
        const pos = charLookup[char = str.charCodeAt(i)];
        if (pos && start < pos) {
            max < i - start && (max = i - start);
            if (max > len - pos && i + max >= len) { return max }
            start = pos;
        }
        charLookup[char] = ++i;
    }
    return Math.max(len - start, max);
}

var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    if (len < 2) { return len; }
    let res = [];
    let tmp = [];
    [...s].forEach(x => {
      if (tmp.includes(x)) {
        tmp = [...tmp.slice(tmp.findIndex(y => y === x ) + 1)];
      }
      tmp.push(x);    
      if (tmp.length > res.length) { res = tmp; }
    });
  return res.join('');
}; 

let input = 'google.com';
console.log('google.com -> ', longestSubstring(input));
input = 'example.com';
console.log('example.com -> ', longestSubstring(input));
input = 'aaaaaaabbbb';
console.log('aaaaaaa -> ', lengthOfLongestSubstring(input));
