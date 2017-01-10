class MinimumPriorityQueue {
  constructor() {
    this.heap = []; // binary heap that stores the keys
    this.n = 0;  // number of items in the priority queue
  }

  // Insert a key into the priority queue
  insert(key) {
    /* Add the key to the end of the heap and increment n, then swim up the
     * heap to fix any violations that have arisen.
     */
    this.heap[++this.n] = key;
    this.swim(this.n);
  }

  // Return the smallest key from the priority queue
  min() {
    return this.heap[1];
  }

  // Return and remove the smallest key from the priority queue
  deleteMin() {
    /*
     * Save reference to the min key.
     * Swap the min key with the last key in the heap.
     * Decrement n so that the key does not swim back up the heap.
     * Sink down the heap to fix any violations that have arisen.
     * Delete the min key to prevent loitering, and return its reference.
     */
    let min = this.heap[1];

    [this.heap[1], this.heap[this.n]] = [this.heap[this.n], this.heap[1]];
    this.n--;
    this.sink(1);
    this.heap[this.n+1] = null;
    return min;
  }

  // Return the number of items in the priority queue
  size() {
    return this.n;
  }

  isEmpty() {
    return this.n === 0;
  }

  // Maintains the heap order by sinking down the heap and fixing violations
  sink(k) {
    while (2*k < this.n) {
      /*
       * While the comparison node (k) still has children (2k or 2k+1), check
       * the parent against both its children. If greater than either, swap
       * it with the larger of its children. Continue sinking down the heap
       * until a parent is smaller than its two children.
       */
      let parent = this.heap[k].sum;
      let child1 = this.heap[2*k].sum;
      let child2 = this.heap[2*k + 1].sum;

      if (parent > child1 || parent > child2) {
        /*
         * If the parent node is smaller than either of its child nodes, swap
         * with the larger of its two children.
         */
        if (child1 <= child2 || child2 === undefined) {
          [this.heap[k], this.heap[2*k]] = [this.heap[2*k], this.heap[k]];
          k = 2*k;
        } else {
          [this.heap[k], this.heap[2*k+1]] = [this.heap[2*k+1], this.heap[k]];
          k = 2*k + 1;
        }
      } else {
        // Return because the parent node is smaller than its two children
        return;
      }
    }
  }

  // Maintains the heap order by swimming up the heap and fixing violations
  swim(k) {
    while (k > 1 && this.heap[Math.floor(k/2)].sum > this.heap[k].sum) {
      /*
       * While not at root node, swap k (parent) with k/2 (child) if
       * parent > child. Continue swimming upwards until the invariant holds.
       */
      [this.heap[k], this.heap[Math.floor(k/2)]]
        = [this.heap[Math.floor(k/2)], this.heap[k]];
      k = Math.floor(k / 2);
    }
  }
}

class Taxicab {
  constructor (i=0, j=0) {
    this.i = i;
    this.j = j;
    this.sum = (i*i*i)+(j*j*j);
  }

  compareTo(taxi) {
    // if (this.sum > taxi.sum) return 1;
    // if (this.sum < taxi.sum) return -1;
    // if (this.sum === taxi.sum) return 0;
    if (this.i > taxi.i) return 1;
    if (this.i < taxi.i) return -1;
    return 0;
  }

  solver(n) {
    this.minPQ = new MinimumPriorityQueue();
    let count = n;
    let prev =  new Taxicab(0, 0);
    let curr = null;

    while (count > 0) {
      this.minPQ.insert(new Taxicab(count, count--)); 
    }

    while (!this.minPQ.isEmpty()) {
      curr = this.minPQ.deleteMin();
      console.log(curr);
      if (curr.i === prev.i && curr.j === prev.j) {
        // do nothing
      } else {
        if (curr.sum === prev.sum) {
          console.log(curr, prev);
          count++;
        }
        prev = new Taxicab(curr.i, curr.j);
        if (curr.j < n ) {
          this.minPQ.insert(new Taxicab(curr.i, curr.j + 1));
        }
      }
    }
    return count;
  }
}

const test = new Taxicab()
console.log(test.solver(16))