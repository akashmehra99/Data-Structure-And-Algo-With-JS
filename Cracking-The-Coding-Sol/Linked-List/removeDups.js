// Removing duplicate elements from the list.

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

    insertNodeAtTail(val) {
        let node = new Node(val);

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

    deleteNode(val) {
        // If linked list is empty
        if (!this.head) {
            console.log('Linked list is empty.');
            return;
        }
        // if you have to delete the head
        if (this.head.data === val) {
            this.head = this.head.next;
        } else {
            let p1 = this.head;
            let p2 = p1.next;
            while (p2) {
                if (p2.data === val) {
                    p1.next = p2.next;
                    break;
                } else {
                    p1 = p2;
                }
                p2 = p2.next;
            }
        }
    }

    removeDuplicates() {
        // Empty or a single element Linked List
        if (!this.head || !this.head.next) {
            console.log('No duplicates were found. Empty or a single element Linked List.');
            return;
        }

        let p1;
        let p2;
        let nodes = {};

        p1 = this.head;
        p2 = p1.next;
        nodes[p1.data] = true;

        while (p2) {
            let data = p2.data;
            if (nodes[data]) {
                p1.next = p2.next;
            } else {
                nodes[data] = true;
                p1 = p2;
            }
            p2 = p2.next;
        }
    }

}

// Base case : No duplicates
let L1 = new LinkedList();
L1.insertNodeAtTail(5);

L1.removeDuplicates();
console.log(L1);

// Two nodes with duplicates
let L2 = new LinkedList();
L2.insertNodeAtTail(5);
L2.insertNodeAtTail(5);

L2.removeDuplicates();
console.log(L2);

// Two nodes without duplicates
let L3 = new LinkedList();
L3.insertNodeAtTail(5);
L3.insertNodeAtTail(6);

L3.removeDuplicates();
console.log(L3);

// Remove duplicates at the end
let L4 = new LinkedList();
L4.insertNodeAtTail(5);
L4.insertNodeAtTail(6);
L4.insertNodeAtTail(7);
L4.insertNodeAtTail(8);
L4.insertNodeAtTail(5);

L4.removeDuplicates();
console.log(L4);

// Remove multiple duplicates from middle
let L5 = new LinkedList();
let testData = [5, 6, 7, 5, 5, 8];
testData.forEach(el => L5.insertNodeAtTail(el));

L5.removeDuplicates();
console.log(L5);