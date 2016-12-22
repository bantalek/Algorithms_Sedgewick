const Union = function(a) {
  this.integers = a.map(function(e) {
    return e;
  })
  this.ids = a.map(function(e) {
    return e;
  })
  this.sz = a.map(function(e) {
    return 1;
  })
}

Union.prototype.root = function(int) {
  let temp = int;
  while (this.ids[temp] !== this.integers[temp]) {
    temp = this.ids[temp]
  }
  return temp;
}

Union.prototype.isUnion = function(intA, intB) {
  return this.ids[this.root(intA)] === this.ids[this.root(intB)];
}
// improving union join by checking size of tree at each id and 
// ensuring that the root of the larger tree is prioritized
// this reduces tree lookup time. 
Union.prototype.union = function(intA, intB) {
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