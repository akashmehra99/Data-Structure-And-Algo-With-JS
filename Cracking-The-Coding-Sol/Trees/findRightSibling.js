// findRightSibling.js

class Node {
  constructor(data, parent) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

function getRightSibling(node, level) {
  if (node == null || node.parent == null) {
    return null;
  }
  // GET Parent pointer whose right child is not
  // a parent or itself of this node. There might
  // be case when parent has no right child, but,
  // current node is left child of the parent
  // (second condition is for that).

  while (
    node.parent.right == node ||
    (node.parent.right == null && node.parent.left == node)
  ) {
    if (node.parent == null) {
      return null;
    }

    node = node.parent;
    level--;
  }
  // Move to the required child, where right sibling
  // can be present
  node = node.parent.right;

  // find right sibling in the given subtree(from current
  // node), when level will be 0
  while (level < 0) {
    // Iterate through subtree
    if (node.left != null) {
      node = node.left;
    } else if (node.right != null) {
      node = node.right;
    }
    // if no child are there, we cannot have right
    // sibling in this path
    else {
      break;
    }
    level++;
  }

  if (level == 0) {
    return node;
  }
  // This is the case when we reach 9 node in the tree,
  // where we need to again recursively find the right
  // sibling
  return getRightSibling(node, level);
}

let root = new Node(1, null);
root.left = new Node(2, root);
root.right = new Node(3, root);
root.left.left = new Node(4, root.left);
root.left.right = new Node(6, root.left);
root.left.left.left = new Node(7, root.left.left);
root.left.left.left.left = new Node(10, root.left.left.left);
root.left.right.right = new Node(9, root.left.right);
root.right.right = new Node(5, root.right);
root.right.right.right = new Node(8, root.right.right);
root.right.right.right.right = new Node(12, root.right.right.right);

console.log(getRightSibling(root.left.left.left.left, 3).data);

