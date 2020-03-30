// There are three types of edits that can be performed on a strings: insert,replace or remove a character. Chaeck if two string are one edit away

// ex: pale, ple : true
// pales, pale : true
// pale, bale: true
// pale, bake: false

function oneEditAway(s1, s2) {
    if (s1.length === s2.length) {
        return oneEditReplace(s1, s2);
    } else if ((s1.length + 1) === s2.length) {
        return oneEditInsert(s1, s2);
    } else if ((s1.length -1) === s2.length) {
        return oneEditInsert(s1, s2);
    }
    return false;
}

function oneEditReplace(s1, s2) {
    let foundDifference = false;
    for (let i = 0; i < s1.length; i++) {
        if(s1.charAt(i) != s2.charAt(i)) {
            if(foundDifference) {
                return false;
            }
            foundDifference = true;
        }
    }
    return true;
}

function oneEditInsert(s1, s2) {
    let index1 = 0, index2 = 0;
    while (index2 < s2.length && index1 < s1.length) {
        if (s1.charAt(index1) !== s2.charAt(index2)) {
            if (index1 !== index2) {
                return false;
            }
            s1.length > s2.length ? index1++ : index2++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}

console.log('pale, ple ->', oneEditAway('pale', 'ple'));
console.log('pales, pale ->', oneEditAway('pales', 'pale'));
console.log('pale, bale ->', oneEditAway('pale', 'bale'));
console.log('pale, bake ->', oneEditAway('pale', 'bake'));
console.log('ple, pale ->', oneEditAway('ple', 'pale'));