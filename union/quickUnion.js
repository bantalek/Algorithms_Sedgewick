const Union = function(a) {
  this.integers = a.map(function(e) {
    return e;
  })
  this.ids = a.map(function(e) {
    return e;
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

Union.prototype.union = function(intA, intB) {
  let i = this.ids[this.root(intA)];
  this.ids[this.root(intB)] = i;
  return {integers: this.integers, ids: this.ids};
}

const test = new Union([0,1,2,3,4,5,6,7,8,9]);

console.log(test.union(0, 9))
console.log(test.union(1, 8))
console.log(test.union(1, 9))
console.log(test.isUnion(0,1));
console.log(test.isUnion(0,8));
console.log(test.isUnion(0,9));
console.log(test.isUnion(0,7));