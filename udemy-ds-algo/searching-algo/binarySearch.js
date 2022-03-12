function binarySearch(sortedArr, searchVal) {
    let left = 0, right = sortedArr.length -1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (sortedArr[middle] === searchVal) {
            return middle;
        } else if (sortedArr[middle] > searchVal) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}