class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      return (this.root = newNode);
    }

    let node = this.root;

    while (true) {
      if (value < node.value) {
        if (!node?.left) {
          node.left = newNode;
          return this;
        }
        node = node.left;
      } else {
        if (!node?.right) {
          node.right = newNode;
          return this;
        }
        node = node.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) return null;
    if (this.root.value === value) return value;
    let currentNode = this.root;
    let i = 0;
    while (currentNode) {
      i++;
      console.log(i);
      if (value === currentNode.value) return value;
      if (value < currentNode.value) {
        if (!currentNode.left) return null;
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) return null;
        currentNode = currentNode.right;
      }
    }
  }

  remove(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        if (!currentNode.right) {
        } else if (!currentNode.right.left) {
        } else {
        }
      }
    }
  }
}

const tree = new BST();
tree.insert(5);
tree.insert(10);
tree.insert(4);
tree.insert(6);
// console.log(tree);
console.log(tree.lookup(100));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}

// console.log(JSON.stringify(traverse(tree.root)));
