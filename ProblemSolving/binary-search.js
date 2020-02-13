const binarySearch = (sortedArray, element) => {
    let upperBound = sortedArray.length -1;
    let lowerBound = 0;
    while (lowerBound <= upperBound) {
        const midBound = Math.floor((lowerBound + upperBound)/2);
        if (sortedArray[midBound] < element) {
            lowerBound = midBound + 1;
        } else if (sortedArray[midBound] > element) {
            upperBound = midBound - 1;
        } else {
            return midBound;
        }
    }
    return -1;

}

const generateRandomSortedArray = (arrayLength) => {
    const numbers = [];
    for (let x = 0; x < arrayLength; x++) {
        numbers[x] = parseInt((Math.random() * arrayLength), 10);
    }
    numbers.sort((a,b) => a-b);
    return numbers;
}

const generatedArray = generateRandomSortedArray(100);

const searchedIndex = binarySearch(generatedArray, 50);

if (searchedIndex > -1) {
    console.log('Found at index :', searchedIndex);
} else {
    console.log('Element not found');
}