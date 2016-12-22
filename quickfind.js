// create a class that accepts an array and 
// associates an id equal to the integer of each element
// create  a command that joins two components be creating adopting
// one of the elements id
// create a command that checks if two components are joined

const Union = function(a) {
  this.integers = a.map(function(e) {
    return { integer: e, id: e }
  })
}

Union.prototype.union = function(intA, intB) {
  let test = this.integers;
  test = test.map((e) => {
    if(e.id === test[intB].id) {
      return {integer: e.integer, id: test[intA].id}
    }
    return e;
  })
  this.integers = test;
  return test
}

Union.prototype.isUnion = function(intA, intB) {
  if(this.integers[intA].id === this.integers[intB].id) {
    return true;
  }
  return false;
}

const test = new Union([0,1,2,3,4,5,6,7,8,9]);

console.log(test.union(0, 9))
console.log(test.union(1, 8))
console.log(test.union(1, 9))
console.log(test.isUnion(0,1));
console.log(test.isUnion(0,8));
console.log(test.isUnion(0,9));
console.log(test.isUnion(0,7));