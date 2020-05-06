// countLeaves.js

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function countLeaf(node) {
  if (!node) {
    return 0;
  }
  if (!node.left && !node.right) {
    return 1;
  } else {
    return countLeaf(node.left) + countLeaf(node.right);
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(countLeaf(root));
