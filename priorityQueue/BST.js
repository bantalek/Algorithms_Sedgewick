
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // create a new node to add to the tree
  Node(e) {
    const instance = {};
    instance.value = e;
    instance.left = null;
    instance.right = null;
    return instance;
  }
  // add a new node in the appropriate position on a tree
  push(e) {
    if(this.root === null) {
      this.root = this.Node(e);
      return;
    }
    let currentNode = this.root;
    let node = this.Node(e)
    // while you are below the height of the tree
    while (currentNode !== null) {
      // if value to left is greater than e find a position on the left for e
      if (e < currentNode.left)  {
        if (currentNode.left === null) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      // otherwise find a position on the right branch for e
      } else if (currentNode.right === null) {
        currentNode.right = node;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
  minVal(node = this.root) {
    if (this.root === null) {
      return null;
    }
    let min = null;
    this.dfs(this.root, (node) => {
      if (min === null) {
        min = node.value;
      } else if (min > node.value) {
        min = node.value;
      }
    })
    return min;
  }
   isBST(node = this.root) {
    if (!node) return 1; 
    if (node.left != null && node.left.value > node.value) return 0;
    if (node.right !=null && node.right.value < node.value) return 0;
    if (!isBST(node.left) || !isBST(node.right)) return 0;
    return 1;  
  }
  dfs(node = this.root, cb) {
    if (node !== null) {
      this.dfs(node.left, cb);
      cb(node.value);
      this.dfs(node.right, cb);
    }
  }
}
const bst = new BinarySearchTree();
bst.push(0);
bst.push(7);
bst.push(-1);
bst.push(5);
bst.push(30);
bst.push(23);
