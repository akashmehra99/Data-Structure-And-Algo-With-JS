const sortBinary = (data) => {
    if (data.length > 0) {
        let start = 0, end = data.length -1, mid = 0, temp = 0;
        while (mid <= end) {
            switch(data[mid]) {
                case 0: {
                    temp = data[start];
                    data[start] = data[mid];
                    data[mid] = temp;
                    mid++;
                    start++;
                    break;
                }
                case 1: {
                    mid++;
                    break;
                }
            }
        }
        return data;
    }
}

const testCase1 = [0,1,0,1,0,0];
const testCase2 = [1,0,1, 1, 0, 1];

console.log('TestCase1 : -> ', sortBinary(testCase1));
console.log('TestCase2 : -> ', sortBinary(testCase2));