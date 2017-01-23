// a binary search tree has nodes which are maintained in symmetric order. 
// each node is a tree in itself and has a left and right child.
// symmetric means every node has a tree and the nodes to right are smaller while the nodes to the left are larger.


class BST {
  constructor() {
    this.Node = class Node {
      constructor(key, value, N) {
        this.key = key;
        this.value = value;
        this.N = N;
        this.left = null;
        this.right = null;
      }
    }

    this.root = null;
    this.N = 0
  }

  get(key, node=this.root) {
    const cmp = this.compareTo(key, node);
    
    if (node === null) return null;

    if (cmp < 0) return this.get(key, node.left);
    else if (cmp > 0) return this.get(key, node.right);
    else return node.value;
  }

  put(key, value, node = this.root) {
    const cmp = this.compareTo(key, node);

    if (this.root === null) return this.root = new this.Node(key, value, 1); 
    else if (node === null) return node = new this.Node(key, value, 1); 

    if (cmp < 0) node.left = this.put(key, value, node.left);
    else if (cmp > 0) node.right = this.put(key, value, node.right);
    else node.value = value;

    node.N = this.size(node.left) + this.size(node.right) + 1;

    return node;
  }

  delete(key, node=this.root) {
    const cmp = this.compareTo(key, node);

    if (node === null) return null;

    if (cmp < 0) return node.left = this.delete(key, node.left);
    else if (cmp > 0) return node.right = this.delete(key, node.right);
    else {
      if (node === this.root) {
        if (node.right === null) return this.root = node.left;
        if (node.left === null) return this.root = node.right;
      }

      if (node.right === null) return node.left;
      if (node.left === null) return node.right;

      const temp = node;

      node = this.min(node.right);

      this.deleteMin(node.right);

      node.left = temp.left;

      node.N = this.size(node.left) + this.size(node.right) + 1;

      return node;
    }
    
  }

  iter(lo = this.min(), hi = this.max()) {
    const queue = [];

    this.keys(lo, hi, queue);

    return queue;
  }

  keys(lo, hi, queue = [], node = this.root) {
    if (node === null) return;

    const cmplo = this.compareTo(lo, node);
    const cmphi = this.compareTo(hi, node);

    if (cmplo < 0) this.keys(lo, hi, queue, node.left);

    if (cmplo <= 0 && cmphi >= 0) queue.push(node.key);

    if (cmphi > 0) this.keys(lo, hi, queue, node.right);
  }
  
  size(node = this.root) {
    // size(x) === size(x.left) + size(x.right) + 1
    if (node === null) return 0;
    return this.size(node.left) + this.size(node.right) + 1;
  }

  min(node = this.root) {
    if (node === null) return null;
    if (node.left === null) return node.key;
    return this.min(node.left);
  }

  max(node = this.root) {
    if (node === null) return null;
    if (node.right === null) return node.key;
    return this.max(node.right);
  }

  floor(key, node=this.root) {
    if (node === null) return null;

    const cmp = this.compareTo(key, node);

    if (cmp === 0) return node.key;
    if (cmp < 0) return this.floor(key, node.left);

    const t = this.floor(key, node.right);

    if (t !== null) return t;
    return node.key;
  }

  ceil(key, node=this.root) {
    if (node === null) return null;

    const cmp = this.compareTo(key, node);

    if (cmp === 0) return node.key;
    if (cmp > 0) return this.ceil(key, node.right);

    const t = this.ceil(key, node.left);

    if (t !== null) return t;
    return node.key;
  }

  deleteMin(node=this.root) {
    if (node === null) return null;
    if (node.left === null && this.root === node) return this.root = node.right;
    if (node.left === null) return node.right;
    node.left = this.deleteMin(node.left);
    node.N = this.size(node.left) + this.size(node.right) + 1;
    return node;
  }

  deleteMax(node=this.root) {
    if (node === null) return null;
    if (node.right === null && this.root === node) return this.root = node.left;
    if (node.right === null) return node.left;
    node.right = this.deleteMax(node.right);
    node.N = this.size(node.right) + this.size(node.left) + 1;
    return node;
  }

  rank(key, node=this.root) {
    if (node.key === key) return node.left.N + 1;

    if (node.key > key) return this.rank(node.left, key);

    return 1 + this.size(node.left) + this.rank(node.right, key);
  }

  compareTo(key, node = this.root) {
    if (node === null) return null;

    if (key < node.key) return -1;
    if (key > node.key) return 1;

    return 0;
  }
}

const test = new BST();
if (!module.parent) {
  test.put('a', 1)
  test.put('b', 2)
  test.put('c', 3)
  test.put('d', 4)
  test.put('e', 5)

  console.log('1', test.get('e'), test.get('c')); // 5 and 3
  console.log('2', test.iter());
  console.log('3', test.min(), test.max()); // 'a' and 'e'

  // test.delete('b');
  // console.log('4', test.ceil('b'), test.floor('b')); // 'c' and 'a'

  console.log('5', test.get('e'), test.get('a')); // null and null
  console.log('6', test.size()) // 5
  console.log('7', test.min(), test.max()); // 'null' and 'null'
  console.log('8', test.ceil('b'), test.floor('b')); // 'null' and 'null'

  test.deleteMin();
  test.deleteMax();

  console.log('10', test.get('e'), test.get('a')); // null and null
  console.log('12', test.min(), test.max()); // 'b' and 'd'
  console.log('13', test.ceil('b'), test.floor('b')); // 'b' and 'b'
}
