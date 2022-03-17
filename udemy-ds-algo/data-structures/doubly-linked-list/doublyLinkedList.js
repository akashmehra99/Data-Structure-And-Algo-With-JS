class Node {
    constructor(value) {
        this.val = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newValue = new Node(val);
        if (this.head) {
            this.tail.next = newValue;
            newValue.prev = this.tail;
            this.tail = newValue;
        } else {
            this.head = newValue;
            this.tail = newValue;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.length) {
            return;
        } else {
            let popped = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = popped.prev;
                this.tail.next = null;
                popped.prev = null;
            }
            this.length--;
            return popped;
        }
    }

    shift() {
        if (!this.length) {
            return;
        } else {
            let headNode = this.head;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = headNode.next;
                this.head.prev = null;
                headNode.next = null;
            }
            this.length--;
            return headNode;
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else {
            const mid = Math.floor(this.length / 2);
            let counter = index < mid ? 0 : this.length - 1;
            if (counter) {
                let current = this.tail;
                while (counter > index) {
                    current = current.prev;
                    counter--;
                }
                return current;
            } else {
                let current = this.head;
                while (counter < index) {
                    current = current.next;
                    counter++;
                }
                return current;
            }

        }
    }

    set(index, val) {
        let item = this.get(index);
        if (item) {
            item.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === 0) {
            return !!this.unshift(val);
        } else if (index === this.length) {
            return !!this.push(val)
        } else {
            let afterNode = this.get(index);
            let beforeNode = afterNode.prev;
            let newNode = new Node(val);
            afterNode.prev = newNode;
            newNode.next = afterNode;
            newNode.prev = beforeNode.next;
            beforeNode.next = newNode;
            this.length++;
            return true;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === 0) {
            return this.shift(index);
        } else if (index === this.length - 1) {
            return this.pop(index)
        } else {
            let item = this.get(index);
            if (item) {
                let beforeNode = item.prev;
                let nextNode = item.next;
                beforeNode.next = nextNode
                nextNode.prev = beforeNode;
                item.next = null;
                item.prev = null;
                this.length--;
            }
            return item;
        }
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(6);

list.insert(4, 5);
list.insert(0, 0);
list.insert(7, 7);

console.log(list);

list.print();

console.log(list.remove(3));
console.log(list);
list.print();








