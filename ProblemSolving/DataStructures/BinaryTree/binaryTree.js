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
}


let nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('Post Order transversal');

nums.postOrder(nums.root);