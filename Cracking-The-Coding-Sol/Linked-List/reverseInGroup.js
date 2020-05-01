// reverseInGroup.js

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
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

    reverseInGroups(node, k) {
        let prev = null, current = node, next = null, count = 0;
        while (count < k && current.next) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }
        if (next) {
            node.next = this.reverseInGroups(next, k);
        }
        return prev;
    }
}

let list = new List();
for (let i = 0; i < 15; i++) {
    list.insert((i+1));
}

console.log(list);
console.log(list.reverseInGroups(list.head, 4));