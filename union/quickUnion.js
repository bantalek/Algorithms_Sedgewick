const Union = (a) => {
  this.integers = a.slice();
  this.ids = a.slice();
}

Union.prototype.root = (int) => {
  const temp = int;
  while (this.ids[temp] !== this.integers[temp]) {
    temp = this.ids[temp]
  }
  return temp;
}

Union.prototype.isUnion = (intA, intB) => this.ids[this.root(intA)] === this.ids[this.root(intB)];

Union.prototype.union = (intA, intB) => {
  const i = this.ids[this.root(intA)];

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