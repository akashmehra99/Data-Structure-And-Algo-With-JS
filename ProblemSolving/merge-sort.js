const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice().concat(right.slice()));
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

mergeSort(array.slice());