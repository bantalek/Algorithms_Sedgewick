
/*
Successor with delete. Given a set of N integers S={0,1,...,N−1} and a sequence of requests of the following form:

Remove x from S
Find the successor of x: the smallest y in S such that y≥x.
design a data type so that all operations (except construction) should take logarithmic time or better.
*/

class SuccessorDelete {
  constructor(a) {
    this.ids = a.map(function(e) {
      return e;
    })
    this.n = this.ids.length - 1;
  }
  findLeastGreaterSuccessor(int) {
    // search until the nearest remaining successor is found
    let findSuccessor = int;
    while (this.ids[findSuccessor] !== findSuccessor) {
      findSuccessor = this.ids[findSuccessor];
    }
    return findSuccessor;
  }
  remove(int) {
    // there is no greater int than the last;
    if(int === this.n) {
      return this.n;
    }
    // otherwise set the int.id to the successor of the sibling
    if(int === this.ids[int]) {
      this.ids[int] = this.findLeastGreaterSuccessor(int + 1);
      return `${int} has been removed and its next successor is ${this.ids[int]}`;
    }
    return 'This element has already been removed';
  }
}

const sim = (n) => {
  const test = new SuccessorDelete(n);
  for (let i = 0; i < n.length; i++) {
    const trial = Math.floor(Math.random() * n.length);
    console.log(test.remove(trial));
    console.log(test.findLeastGreaterSuccessor(trial));
  }
}
console.log(sim([0,1,2,3,4,5,6,7,8,9]));


const test = new SuccessorDelete([0,1,2,3,4,5,6,7,8,9]);
console.log(test.remove(2));
console.log(test.findLeastGreaterSuccessor(2));
console.log(test.remove(3));
console.log(test.findLeastGreaterSuccessor(2));
console.log(test.findLeastGreaterSuccessor(8));
console.log(test.remove(9));
console.log(test.findLeastGreaterSuccessor(9));


