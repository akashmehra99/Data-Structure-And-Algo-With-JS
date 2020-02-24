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

    inOrder(node) {
        if (!(node === null)) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }

    preOrder(node) {
        if (!(node === null)) {
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node) {
        if (!(node === null)) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }

    getMinimum() {
        let min = this.root;
        while (!(min.left === null)) {
            min = min.left;
        }
        return  min.data;
    }

    getMaximum() {
        let max = this.root;
        while (!(max.right === null)) {
            max = max.right;
        }
        return max.data;
    }

    find(value) {
        let current = this.root;
        while (current.data !== value) {
            if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    remove(data) {
        root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            // node has no children
            if (node.left === null && node.right === null) {
                return null;
            }
            // if node has no left child
            if (node.left === null) {
                return node.right;
            }
            // if node has no right child
            if (node.right === null) {
                return node.left;
            }
            let tempNode = this.getMinimum(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, data);
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
}


let nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('Minimum value in tree -> ', nums.getMinimum());
console.log('Maximim value in tree -> ', nums.getMaximum());
console.log('Find value 16 in tree -> ', nums.find(16) ? 'Value exists': 'Value not found');
console.log('Find value 44 in tree -> ', nums.find(44) ? 'Value exists': 'Value not found');