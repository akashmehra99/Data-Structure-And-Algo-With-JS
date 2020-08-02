class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

function zigZagTransVersal(root) {
    let results = [];

    function trans(root, level) {
        if (!root) {
            return;
        }
        if (results[level]) {
            results[level].push(root.value);
        } else {
            results[level] = [root.value];
        }

        trans(root.left, level + 1);
        trans(root.right, level + 1);
    }
    trans(root, 0);
    return results.map((res, index) => index % 2 ? res.reverse() : res);
}

console.log( zigZagTransVersal(root));