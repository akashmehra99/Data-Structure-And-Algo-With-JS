class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(value) {
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
        this.stack1.push(value);
    }

    dequeue() {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }

    peek() {
        if (this.stack1.length) {
            return this.stack1[0];
        }
        return this.stack2[this.stack2.length - 1];
    }
}