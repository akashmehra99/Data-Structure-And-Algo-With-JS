// anagramSubStringSearch.js

function search(big, small) {
    let bigL = big.length;
    let smallL = small.length;
    for (let i = 0; i <= (bigL - smallL); i++) {
        if (compare(small, big, i, smallL)) {
            console.log('Found at Index -> ', i);
        }
    }
}

function compare(small, big, startIndex, smallL) {
    let countS = getCharCount(small);
    for (let i = startIndex; i < (startIndex + smallL); i++) {
        if (!(countS.hasOwnProperty(big[i]) && countS[big[i]] > 0)) {
            return false;
        }
        (countS[big[i]]--);
    }
    return true;
}

function getCharCount(s) {
    let countS = {};
    for (let i = 0; i < s.length; i++) {
        if (countS.hasOwnProperty(s[i])) {
            countS[s[i]]++;
        } else {
            countS[s[i]] = 1;
        }
    }
    return countS;
}


let big = 'microsoft', small = 'cro';
// let big = 'BACDGABCDA', small = 'ABCD';


search(big, small);