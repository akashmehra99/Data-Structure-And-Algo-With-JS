// To check if one string is permutation of the other
// 1.2


function isAnagram(str1, str2) {
    let sum1 = 0, sum2 = 0, product1 = 1, product2 = 1;
    if (!(str1 && str2)) {
        return false;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    let len = str1.length;
    for (let i = 0; i < len; i++) {
        sum1 += str1.charCodeAt(i);
        sum2 += str2.charCodeAt(i);
        product1 *= str1.charCodeAt(i);
        product2 *= str2.charCodeAt(i);
    }
    if ((sum1 === sum2) && (product1 === product2)) {
        return true;
    }
    return false;
}

console.log(isAnagram('test', 'sett'));
console.log(isAnagram('prod', 'rod'));