class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data;
    }
}

class BST {

    constructor() {
        this.root = null;
    }

    insert(data) {
        let n = new Node(data, null, null);
        if (this.root === null) {
            this.root = n;
        } else {
            let currentNode = this.root;
            let parentNode;
            while (true) {
                parentNode = currentNode;
                if (data < currentNode.data) {
                    currentNode = currentNode.left;
                    if (currentNode === null) {
                        parentNode.left = n;
                        break;
                    }
                } else {
                    currentNode = currentNode.right;
                    if (currentNode === null) {
                        parentNode.right = n;
                        break;
                    }
                }
            }
        }
    }
}