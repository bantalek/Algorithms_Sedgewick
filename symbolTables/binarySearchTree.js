// a binary search tree has nodes which are maintained in symmetric order. 
// each node is a tree in itself and has a left and right child.
// symmetric means every node has a tree and the nodes to right are smaller while the nodes to the left are larger.


class BST {
  constructor(root) {
    this.root = new Node ()
    this.N = 0
    // this.min
    // this.max

    class Node {
      constructor(key, value, N) {
        this.key = key;
        this.value = value
        this.N = N;
        this.left = null;
        this.right = null;
      }
    }
  }

  get(key, node=this.root) {
    const cmp = this.compareTo(node.key, key);

    if (node === null) return null;
    if (cmp > 0) this.get(node.left, key);
    else if (cmp < 0) this.get(node.right, key);
    else return node.val;
  }

  put(node, key, value) {
    const cmp = this.compareTo(key, node=this.root);

    if (x === null) return new Node(key, value); // should this be node = new Node? --test
    if (cmp > 0) this.put(node.left, key, value);
    else if (cmp < 0) this.put(node.right, key, value);
    else x.value = value;

    node.N = this.size(node.left) + this.size(node.right) + 1;
    return node;
  }

  delete(key, node=this.root) {
    if (node === null) return null;
    const cmp = this.comparTo(key, node);
    if (cmp < 0) node.left = delete(node.left, key);
    if (cmp > 0) node.right = delete(node.right, key);
    else {
      let temp = node;
      node = this.min(node.right);
      node.left = temp.left;
      node.N += node.left.N
      return node;
    } // needs finishing touches with deleteMin and succession
    // -- implement deleteMin to return smallest key as successor from right (larger) side of deleted node
    
  }

  iter() {}
  
  size(node = this.root) {
    // size(x) === size(x.left) + size(x.right) + 1
    return node.N;
  }

  min(node = this.root) {
    if (node.left === null) return node;
    return this.min(node.left);
  }

  max(node = this.root) {
    if (node.right === null) return node;
    return this.min(node.right);
  }

  floor(key, node=this.root) {
    if (node === null) return null;
    const cmp = this.comparTo(key, node);
    if (cmp === 0) return node;
    if (cmp < 0) return floor(node.left, key);
    const t = floor(x.right, key);
    if (t === null) return t;
    return node;
  }

  ceil(key, node=this.root) {
    if (node === null) return null;
    const cmp = this.comparTo(key, node);
    if (cmp === 0) return node;
    if (cmp > 0) return floor(node.left, key);
    const t = floor(x.right, key);
    if (t === null) return t;
    return node;
  }

  deleteMin(node=this.root) {
    if (node.left === null) return node.right;
    node.left = deleteMin(node.left);
    node.N = this.size(node.left) + this.size(node.right) + 1;
    return node;
  }
  deleteMax(node=this.root) {
    if (node.right === null) return node.right;
    node.right = deleteMax(node.right);
    node.N = this.size(node.right) + this.size(node.left) + 1;
    return node;
  }

  rank(key, node=this.root) {
    if (node.key === key) return node.left.N + 1;

    if (node.key > key) return this.rank(node.left, key);

    return 1 + this.size(node.left) + this.rank(node.right, key);
  }

  compareTo(key, node=this.root) {
    if (node === null) return null;
    if (node.key > key) return 1;
    if (node.key < key) return -1;
    return 0;
  }

}
