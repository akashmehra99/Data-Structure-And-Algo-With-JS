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

    insert(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let p = this.head;
            while (p.next) {
                p = p.next;
            }
            p.next = node;
        }
    }
    reverse (node) {
        let prev = null, current = this.head, next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current
            current = next;
        }
        this.head = prev;
        return this.head;
    }
}

let L = new LinkedList();
L.insert(5);
L.insert(6);
L.insert(7);
L.insert(8);
L.insert(5);

console.log('Original List -> ', L);
console.log('Reversed List -> ', L.reverse());