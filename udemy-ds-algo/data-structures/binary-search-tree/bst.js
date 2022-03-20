class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            let parentNode;
            while (true) {
                parentNode = currentNode;
                if (value > currentNode.value) {
                    currentNode = currentNode.right;
                    if (!currentNode) {
                        parentNode.right = newNode;
                        break;
                    }
                } else {
                    currentNode = currentNode.left;
                    if (!currentNode) {
                        parentNode.left = newNode;
                        break;
                    }
                }
            }
        }
        return this.root;
    }

    find(value) {
        if (!this.root) {
            return null;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value === currentNode.value) {
                    return currentNode;
                } else if (value > currentNode.value) {
                    currentNode = currentNode.right;
                    if (!currentNode) {
                        return null;
                    }
                } else {
                    currentNode = currentNode.left;
                    if (!currentNode) {
                        return null;
                    }
                }
            }
        }
    }

    // Breadth first search
    bfs() {
        let queue = [], data = [], node = this.root;
        queue.push(this.root);
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(13);
bst.insert(8);
bst.insert(11);
bst.insert(14);
bst.insert(9);
bst.insert(5);
bst.bfs();

