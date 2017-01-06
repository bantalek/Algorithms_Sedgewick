const Union = (a) => {
  this.integers = a.slice();
  this.ids = a.slice();
  this.sz = a.map(function(e) {
    return 1;
  })
}

Union.prototype.root = (int) => {
  let i = int;

  while (this.ids[i] !== this.integers[i]) {
    while (this.id[i] !== this.id[this.id[i]]) {
      // implementation of path compression
      this.id[i] = this.id[this.id[i]];
    }
    i = this.ids[i]
  }

  return i;
}

Union.prototype.isUnion = (intA, intB) => {
  return this.ids[this.root(intA)] === this.ids[this.root(intB)];
}
// improving union join by checking size of tree at each id and 
// ensuring that the root of the larger tree is prioritized
// this reduces tree lookup time. 
Union.prototype.union = (intA, intB) => {
  let i = this.root(intA);
  let j = this.root(intB);

  if( i === j) {
    return;
  }

  if(this.sz[i] < this.sz[j]) {
    this.ids[i] = this.ids[j];
    this.sz[j] += this.sz[i];
  } else {
    this.ids[j] = this.ids[i];
    this.sz[i] += this.sz[j];
  }
  
  return {integers: this.integers, ids: this.ids, size: this.sz};
}

const test = new Union([0,1,2,3,4,5,6,7,8,9]);

console.log(test.union(0, 9))
console.log(test.union(1, 8))
console.log(test.union(1, 9))
console.log(test.union(1, 7))
console.log(test.union(1, 0))
console.log(test.isUnion(0,1));
console.log(test.isUnion(0,8));
console.log(test.isUnion(0,9));
console.log(test.isUnion(0,7));