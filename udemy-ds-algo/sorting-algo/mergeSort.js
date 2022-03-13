function mergeSort(arr){
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
    let arr = [];
    let li = 0, ri = 0;
    while (li < left.length && ri < right.length) {
        if (left[li] < right[ri]) {
            arr.push(left[li]);
            li++;
        } else {
            arr.push(right[ri]);
            ri++;
        }
    }
    while (li < left.length) {
        arr.push(left[li]);
        li++;
    }
    while (ri < right.length) {
        arr.push(right[ri]);
        ri++;
    }
    return arr;
}
const data = Array.from(Array(20000000)).map(() => Math.random());
console.log(mergeSort(data));