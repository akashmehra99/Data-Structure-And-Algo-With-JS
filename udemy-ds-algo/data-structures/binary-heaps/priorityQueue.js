class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue({ val, priority }) {
        const node = new Node(val, priority);
        this.values.push(node);
        this.bubble(this.values.length - 1);
    }

    bubble(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.values[parentIndex] && this.values[index] && this.values[parentIndex].priority > this.values[index].priority) {
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
            this.bubble(parentIndex);
        }
    }

    dequeue() {
        let maxPriority = this.values[0];
        let end = this.values.pop();
        if (this.values.length) {
            this.values[0] = end;
        }
        this.sinkDown(0);
        return maxPriority ? maxPriority : null;

    }

    sinkDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = leftChildIndex + 1; // 2n + 2
        const length = this.values.length;
        const element = this.values[index];
        let leftChild, rightChild, swap = null;

        if (leftChildIndex < length) {
            leftChild = this.values[leftChildIndex];
            swap = this.values[leftChildIndex].priority < element.priority ? leftChildIndex : null;
        }

        if (rightChildIndex < length) {
            rightChild = this.values[rightChildIndex];
            if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                swap = rightChildIndex;
            }
        }
        if (swap !== null) {
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            this.sinkDown(swap);
        }
    }
}


let priorityQueue = new PriorityQueue();
priorityQueue.enqueue({ val: 10, priority: 2 });
priorityQueue.enqueue({ val: 3, priority: 1 });
priorityQueue.enqueue({ val: 0, priority: 0 });
priorityQueue.enqueue({ val: 0, priority: 3 });

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());



