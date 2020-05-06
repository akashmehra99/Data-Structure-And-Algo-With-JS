// isBST.js

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isBst(root, prev) {
    if (root) {
        if (!isBst(root.left, prev)) {
            return false;
        }
        if (root.data <= prev) {
            return false;
        }
        prev = root.data;
        return isBst(root.right, prev);
    }
    return true;
}

let root = new Node(5);
root.left = new Node(2);
root.right = new Node(15);
root.left.left = new Node(1);
root.left.right = new Node(4);

const prev = -Infinity;
console.log(isBst(root, prev));