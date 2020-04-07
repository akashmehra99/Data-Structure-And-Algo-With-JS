// Kth to last elements from list

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
            while(p1.next) {
                p1 = p1.next;
            }
            p1.next = node;
        }
    }
}

function returnKthToLast(list, k) {
    let newList = list.head;
    for (let i = 0; i < k-1; i++) {
        if (newList === null) {
            return null;
        }
        newList = newList.next;
    }
    return newList;
}

let L4 = new LinkedList();
L4.insertNodeAtTail(5);
L4.insertNodeAtTail(6);
L4.insertNodeAtTail(7);
L4.insertNodeAtTail(8);
L4.insertNodeAtTail(5);
console.log(returnKthToLast(L4, 2));
// console.log(returnKthToLast(L4, 6)); // null