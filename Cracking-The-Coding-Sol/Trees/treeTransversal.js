// treeTransversal.js

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(value) {
        this.root = new BinaryTreeNode(value);
    }
    // root -> left -> right
    preOrder(node) {
        if (!node) {
            return;
        }
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    // left -> root -> right
    inOrder(node) {
        if (!node) {
            return;
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }
    // left -> right -> root
    postOrder(node) {
        if (node.left) {
            this.postOrder(node.left);
        }
        if (node.right) {
            this.postOrder(node.right);
        }
        console.log(node.value);
    }
    // BFS
    levelOrder(node) {
        let root = node;
        let queue = [];
        if (!root) {
            return;
        }
        queue.push(root);
        while(queue.length) {
            let temp = queue.shift();
            console.log(temp.value);
            if (temp.left) {
                queue.push(temp.left);
            }
            if (temp.right) {
                queue.push(temp.right);
            }
        }
    }
}


let binaryTree = new BinaryTree(42);
binaryTree.root.left = new BinaryTreeNode(41);
binaryTree.root.right = new BinaryTreeNode(50);
binaryTree.root.left.left = new BinaryTreeNode(10);
binaryTree.root.left.right = new BinaryTreeNode(40);
binaryTree.root.right.left = new BinaryTreeNode(45);
binaryTree.root.right.right = new BinaryTreeNode(75);

console.log('Pre Order');
binaryTree.preOrder(binaryTree.root);

console.log('In Order');
binaryTree.inOrder(binaryTree.root);

console.log('Post Order');
binaryTree.postOrder(binaryTree.root);

console.log('Level Order');
binaryTree.levelOrder(binaryTree.root);

// If you know you need to explore the roots before inspecting any leaves, choose pre-order
// traversal because you will encounter all the roots before all of the leaves.

// If you know you need to explore all the leaves before any nodes, choose post-order
// traversal because you don’t waste any time inspecting roots when searching for leaves.

// If you know that the tree has an inherent sequence in the nodes and you want to
// flatten the tree into its original sequence, then you should use an in-order traversal.

// The tree would be flattened in the same way it was created. A pre-order or post-order
// traversal might not unwind the tree back into the sequence that was used to create it.

// Time Complexity: O(n)
// The time complexity of any of these traversals is the same because each traversal
// requires that all nodes are visited.