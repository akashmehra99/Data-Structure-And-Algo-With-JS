// binarySearchTree.js

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value);
    }

    insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (true) {
                if (currentNode.value > value) {
                    if (currentNode.left !== null) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = node;
                        break;
                    }
                } else if (currentNode.value < value) {
                    if (currentNode.right !== null) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = node;
                        break;
                    }
                } else {
                    break;
                }
            }
        }
    }

    delete(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = this.delete(root.left, value);
        } else if (value > root.value) {
            root.right = this.delete(root.right, value);
        } else {
            if (!root.right && !root.left) {
                return null;
            } else if (!root.left) {
                root = root.right;
                return root;
            } else if (!root.right) {
                root = root.left;
                return root;
            } else {
                let temp = this.findMin(root.right);
                root.value = temp.value;
                root.right = this.delete(root.right, temp.value);
                return root;
            }
        }
        return root;
    }

    findMin(root) {
        while (root.left) {
            root = root.left;
        }
        return root;
    }

    find(root, value) {
        let currentRoot = root;
        let found = false;
        while (currentRoot) {
            if (currentRoot.value > value) {
                currentRoot = currentRoot.left;
            } else if (currentRoot.value < value) {
                currentRoot = currentRoot.right;
            } else {
                found = true;
                break;
            }
        }
        return found;
    }
}
