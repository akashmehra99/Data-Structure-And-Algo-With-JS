class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        const newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        var count = 0;;
        var current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(index, value) {
        var item = this.get(index);
        if (item) {
            item.val = value;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index === 0) {
            this.unshift(val);
            return true;
        } else if (index === this.length) {
            this.push(val);
            return true;
        } else {
            var prevItem = this.get(index - 1);
            if (prevItem) {
                var newNode = new Node(val);
                var temp = prevItem.next;
                prevItem.next = newNode;
                newNode.next = temp;
                this.length++;
                return true;
            }
        }
        return false;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return;
        } else if (index === this.length - 1) {
            return this.pop();
        } else if (index === 0) {
            return this.shift();
        } else {
            var prevItem = this.get(index - 1);
            if (prevItem) {
                let removedItem = prevItem.next;
                prevItem.next = removedItem.next;
                this.length--;
                return removedItem
            }
            return;
        }
    }

    print() {
        let arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    // In place
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}