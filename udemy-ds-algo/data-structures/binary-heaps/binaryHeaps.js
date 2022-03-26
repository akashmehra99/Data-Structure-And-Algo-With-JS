/* 
    For any index of array (parent) 'n'
    left child is at 2n +1
    right child is at 2n + 2

    for any child at index n
        parent is at Math.floor((n-1)/2)
*/

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(num) {
        this.values.push(num);
        this.bubble(this.values.length - 1);
    }

    bubble(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.values[index] > this.values[parentIndex]) {
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            this.bubble(parentIndex);
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop()
        if (this.values.length) {
            this.values[0] = end;
        }
        this.sinkDown(0);
        return max ? max : null;
    }

    sinkDown(index) {
        const len = this.values.length;
        const element = this.values[index];
        let leftIndex = (2 * index) + 1;
        let rightIndex = (2 * index) + 2;
        let leftChild, rightChild, swap = null;
        if (leftIndex < len) {
            leftChild = this.values[leftIndex];
            if (leftChild > element) {
                swap = leftIndex;
            }
        }
        if (rightIndex < len) {
            rightChild = this.values[rightIndex];
            if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                swap = rightIndex;
            }
        }
        if (swap !== null) {
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            this.sinkDown(swap);
        }
    }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);

console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);




