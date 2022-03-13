function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            const temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
        
    }
    return arr;
}


console.log(selectionSort([2,3,4,1,0,5,5,7,8,6,9]));