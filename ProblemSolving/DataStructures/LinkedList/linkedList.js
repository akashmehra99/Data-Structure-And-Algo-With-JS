class LinkedList {
    constructor() {
        this.head = new Node('head');
        // for circular linked list
        // this.head.next = this.head;
    }

    find (item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert (newElement, item) {
        let newNode = new Node(newElement);
        let currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

    display() {
        let currNode = this.head;
        while (!(currNode.next === null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    findPrevious(item) {
        let currNode = this.head;
        while (!(currNode.next === null) && (currNode.next.element !== item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    remove(item) {
        let preNode = this.findPrevious(item);
        if (!(preNode.next === null)) {
            preNode.next = preNode.next.next;
        }
    }

    advance(n) {
        let currNode = this.head;
        while(n > 0 && (currNode.next !== null)) {
            n--;
            currNode = currNode.next;
        }
        return currNode;
    }
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

module.exports = LinkedList;