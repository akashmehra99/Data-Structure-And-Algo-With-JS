// heightOfBinaryTree.js

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function getHeight(root) {
    if (!root) {
        return 0;
    }
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

let root = new Node(5);
root.left = new Node(2);
root.right = new Node(15);
root.left.left = new Node(1);
root.left.right = new Node(4);

console.log(getHeight(root));