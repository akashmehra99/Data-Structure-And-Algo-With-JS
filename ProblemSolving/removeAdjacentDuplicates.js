
function remove_adjacent_duplicates(str) {
    let newStr = '';
    let dupFound = false;
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== str[i+1]) {
            newStr += str[i];
        } else {
            dupFound = true;
            i++;
        }
    }
    if (dupFound) {
      str = remove_adjacent_duplicates(newStr);
    }
    return str;
  
}

console.log(remove_adjacent_duplicates('abbaca'));
console.log(remove_adjacent_duplicates('azxxzy'));
console.log(remove_adjacent_duplicates('aaaa'));
