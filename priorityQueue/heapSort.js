const sink = (a, k, N) => {
  /*
   * While the comparison node (k) still has children (2k or 2k+1), check
   * the parent against both its children. If it is less than either, swap
   * it with the larger of its children. Continue sinking down the heap
   * until a parent is larger than its two children.
   */
  while (2*k + 1 < N) {
    let parent = a[k];
    let c1 = a[2*k + 1];
    let c2 = a[2*k + 2];
    if (parent < c1 || parent < c2) {
      if (c1 >= c2 || c2 === undefined) {
        [a[k], a[2*k + 1]] = [a[2*k + 1], a[k]];
        k = 2*k + 1;
      } else {
        [a[k], a[2*k + 2]] = [a[2*k + 2], a[k]];
        k = 2*k + 2;
      }
    }
    else return;
  }
}

const sort = (a) => {
  let N = a.length - 1;
  /*
   * First, build up the heap in-place using the bottom-up method. Go backwards
   * through the heap starting at element at index n/2 (because the rightmost
   * half of the array is composed of little heaps of size 1). Sink each to
   * build out a heap.
   */
  for (let i = Math.floor(N/2); i >= 0; i--) {
    sink(a, i, N);
  }
    /*
    * Next, sortdown the heap by removing the maximum one at a time, leaving it
    * at the end of the array while decrementing n so that it does not swim back
    * up. Each time a max key is removed, perform a sink operation for the new
    * key at the 0th index, ensuring that the binary heap invariant is restored.
    */
  while(N > 0) {
    [a[0], a[N]] = [a[N], a[0]]
    N--;
    sink(a, 0, N);
  }
  return a;
}

console.log(sort([34,13,32,6,2,9,4,3,-1]))