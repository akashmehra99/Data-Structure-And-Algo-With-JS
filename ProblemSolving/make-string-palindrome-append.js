const isPalindrome = (stringValue) => {
    if (stringValue) {
        const stringReverse = (stringValue.split('')).reverse().join('');
        return (stringValue === stringReverse);
    }
    return false;
}

const countNoOfAdditions = (value) => {
    if (isPalindrome(value)) {
        return 0;
    } else {
        value = value.substring(1);
        console.log(value);
        return 1 + countNoOfAdditions(value);
    }
}

console.log('Minimum Appends Required :', countNoOfAdditions('abede'));