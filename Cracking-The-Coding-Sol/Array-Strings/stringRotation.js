// Given 2 strings s1 & s2, check that s2 is roation of s1.

// Example s1 = waterbottle s2 = erbottlewat o/p = true


// Logic:
// s1 = xy = waterbottle
// x = wat y = erbottle
// s2 = yx 

function isRotatedSubString(s1, s2) {
    if (s1.length === s2.length && s1.length > 0) {
        return ((s1 + s1).indexOf(s2) > -1 ? true : false);
    }
    return false;
}

console.log('waterbottle, erbottlewat -> ', isRotatedSubString('waterbottle', 'erbottlewat'));
console.log('waterbottle, erbottlewet -> ' , isRotatedSubString('waterbottle', 'erbottlewet'))
