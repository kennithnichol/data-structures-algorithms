class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
            return this;
        }

        let currentNode = this.root;
        while(true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = node;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while(currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }
}

// test the tree functionality
const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root));
tree.lookup(15);

//      9
//   4     20
// 1  6  15   170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

