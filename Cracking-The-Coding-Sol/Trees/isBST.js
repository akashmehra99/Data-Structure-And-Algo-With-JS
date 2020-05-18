// isBST.js

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isBst(root, prev) {
    return helper(root, null, null);
}

function helper(node, lower, upper) {
    if (node == null) return true;

    let val = node.val;
    if (lower != null && val <= lower) return false;
    if (upper != null && val >= upper) return false;

    if (! helper(node.right, val, upper)) return false;
    if (! helper(node.left, lower, val)) return false;
    return true;
  }

let root = new Node(5);
root.left = new Node(2);
root.right = new Node(15);
root.left.left = new Node(1);
root.left.right = new Node(4);

const prev = -Infinity;
console.log(isBst(root, prev));