class maximumPriorityQueue {
  constructor() {
    this.q = [];
    this.N = 0;
  }
  // create an empty queue or a new queue with given keys
  maxPQ(a = []) {
    this.q = a;
    this.N = a.length;
  }
  // insert an element into the queue
  isEmpty() {
    return this.N === 0;
  }
  max() {
    return Math.max(...this.q)
  }
  size() {
    return this.q.length;
  }
  swim(k) {
    while (k > 1 && this.q[Math.floor(k/2)] < this.q[k]) {
     /*
      * While not at root node, swap k (parent) with k/2 (child) if
      * parent>child. Continue swimming upwards until the invariant holds.
      */
     [this.q[k], this.q[Math.floor(k/2)]] = [this.q[Math.floor(k/2)], this.q[k]];
     k = Math.floor(k / 2);
    }
  }
  sink(k, N = this.N) {
    while (2*k <= N) {
      /*
       * While the comparison node (k) still has children (2k or 2k+1), check
       * the parent against both its children. If it is less than either, swap
       * it with the larger of its children. Continue sinking down the heap
       * until a parent is larger than its two children.
       */
      let parent = this.q[k];
      let child1 = this.q[2*k];
      let child2 = this.q[2*k + 1];

      if (parent < child1 || parent < child2) {
        /*
         * If the parent node is smaller than either of its child nodes, swap
         * with the larger of its two children.
         */
        if (child1 >= child2 || child2 === undefined) {
          [this.q[k], this.q[2*k]] = [this.q[2*k], this.q[k]];
          k = 2*k;
        } else {
          [this.q[k], this.q[2*k+1]] = [this.q[2*k+1], this.q[k]];
          k = 2*k+1;
        }
      } else {
        // Return because the parent node is larger than its two children
        return;
      }
    }
  }
  sort() {
    let N = this.N;
    for (let k = Math.floor(N/2); k > 1; k--) {
        this.sink(k, N);
      while (N > 2) {
        [this.q[1], this.q[N]] = [this.q[N], this.q[1]];

        this.sink(1, --N);
      }
    }
  }
  insert(e) {
    this.q[++this.N] = e;
    this.swim(this.N);
  }
  deleteMax() {
    let max = this.q[1];
    [this.q[1], this.q[this.N]] = [this.q[this.N], this.q[1]];
    this.N--;
    this.sink(1);
    this.q[this.N+1] = null;
    return max;
  }
  iterate (cb) {
    let j = 1;
    while (j <= this.N) {
      cb(this.q[j], j);
      j++;
    }
  }
}

let mpq = new maximumPriorityQueue();
mpq.insert(5);
mpq.insert(10);
mpq.insert(15);
mpq.insert(2);
mpq.insert(8);
console.log(mpq.deleteMax());
console.log(mpq.deleteMax());
console.log(mpq.q);
console.log(mpq.q);
