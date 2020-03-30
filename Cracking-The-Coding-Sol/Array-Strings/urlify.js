// Replace all spaces in a string with %20
// Ex: 'Mr John Smith    ' - > Mr%20John%20Smith
// 1.3


function urlify(str) {
    if (str && str.length > 0) {
        str = str.trim();
        return str.split(/\s+/).join('%20');
    }
    return '';
}

console.log(urlify('Mr John Smith    '));
console.log(urlify('Mr   John   Smith    '));