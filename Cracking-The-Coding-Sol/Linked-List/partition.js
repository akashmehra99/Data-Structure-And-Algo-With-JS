class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let p1 = this.head;
            while (p1.next) {
                p1 = p1.next;
            }
            p1.next = node;
        }
    }

    partition(x) {
        let head = this.head;
        let tail = this.head;
        while (this.head) {
            let next = this.head.next;
            if (this.head.data) {
                if (this.head.data < x) {
                    this.head.next = head;
                    head = this.head;
                } else {
                    tail.next = this.head;
                    tail = this.head;
                }
            }
            this.head = next;
        }
        tail.next = null;
        return head;
    }
}

let list = new LinkedList();

list.insert(3);
list.insert(5);
list.insert(8);
list.insert(5);
list.insert(10);
list.insert(2);
list.insert(1);
console.log('Partition - > ', list.partition(5));
