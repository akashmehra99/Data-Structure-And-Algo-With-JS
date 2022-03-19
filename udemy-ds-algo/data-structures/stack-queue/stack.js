class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Linked list unshift
    push(val) {
        const newHead = new Node(val);
        if (!this.first) {
            this.first = newHead;
            this.last = this.first;
        } else {
            newHead.next = this.first;
            this.first = newHead;
        }
        this.size++;
        return this.size;
    }

    // Linked list shift
    pop() {
        if (!this.first) {
            return null;
        }
        let currentHead = this.first;
        this.first = currentHead.next;
        this.size--;
        if (!this.size) {
            this.last = null;
        }
        return currentHead.val;
    }
}