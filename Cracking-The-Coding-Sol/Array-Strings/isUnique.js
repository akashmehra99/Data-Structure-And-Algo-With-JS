// To determine if a string contains all unique characters
// Not to use any additional data structures.
// 1.1
// Using bitwise reduces the time complexity to O(n) and sapce complexity to S(1)


function isUnique(str) {
    let checker = 0;
    for (let i = 0; i < str.length; i++) {
        let value = str.charCodeAt(i) - 'a'.charCodeAt(0);
        console.log('value ->', value);
        console.log('1 << value' , 1  << value);
        console.log((checker & (1 << value)));
        if ((checker & (1 << value)) > 0) {
            return false;
        }
        checker |= (1 << value);
        console.log('checker :', checker);
    }
    return true;
}

console.log(isUnique('abcd'));
console.log(isUnique('abcdefd'));