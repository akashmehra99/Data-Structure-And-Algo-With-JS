const arr = [1,2,3,2,5,6,7,8,8,9,5];

const findDuplicates = (arr) => {

    const arrLength = arr.length;
    const elements = {};
    const duplicate = {};
    for (let x = 0; x < arrLength; x ++) {
        if (elements.hasOwnProperty(arr[x])) {
            if (duplicate.hasOwnProperty(arr[x])) {
                duplicate[arr[x]].count = duplicate[arr[x]].count + 1;
            } else {
                duplicate[arr[x]] = {
                    value: arr[x],
                    count: 1
                }
            }
        } else {
            elements[arr[x]] = arr[x];
        }
    }
    return Object.keys(duplicate);
};

