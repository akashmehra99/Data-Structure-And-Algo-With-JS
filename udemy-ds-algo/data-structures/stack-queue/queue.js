class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        let currentNode = this.first;
        this.first = currentNode.next;
        this.size--;
        if (!this.size) {
            this.last = null;
        }
        return currentNode;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
queue.dequeue();
queue.dequeue();
