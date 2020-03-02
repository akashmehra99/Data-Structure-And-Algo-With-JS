class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = new Node();
        this.head = new Node();
    }

    bstToDll(root) {
        if (root === null) {
            return;
        }
        this.bstToDll(root.right);
        root.right = this.head;
        if (this.head !== null) {
            this.head.left = root;
        }

        this.head = root;
        this.bstToDll(root.left);
    }

    print() {
        while (this.head !== null && this.head.data !== undefined) {
            console.log(this.head);
            this.head = this.head.right;
        }
    }
}


let tree = new BinaryTree();
tree.root = new Node(5);
tree.root.left = new Node(3);
tree.root.right = new Node(6);
tree.root.left.right = new Node(4);
tree.root.left.left = new Node(1);
tree.root.right.right = new Node(8);
tree.root.left.left.right = new Node(2);
tree.root.left.left.left = new Node(0);
tree.root.right.right.left = new Node(7);
tree.root.right.right.right = new Node(9);
tree.bstToDll(tree.root);
tree.print(); 