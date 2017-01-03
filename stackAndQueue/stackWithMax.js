/*
Stack with max. Create a data structure that efficiently supports the stack operations 
(push and pop) and also a return-the-maximum operation. 
Assume the elements are reals numbers so that you can compare them.
*/

const Stack = require('./stack');

class stackWithMax {
  constructor() {
    this.size = 0;
    this.stack = new Stack.Stack();
    this.max = new Stack.Stack();
  }
  push(e) {
    if (this.max.peek() === null || e >= this.max.peek()) {
      this.max.push(e);
    }
    this.stack[this.size] = e;
    this.size++
  }
  pop() {
    const temp = this.stack[this.size - 1];
    if(this.max.peek() === temp) {
      this.max.pop();
    }
    this.stack[this.size - 1] = null;
    this.size--
    return temp;
  }
}

const test = new stackWithMax();
test.push(1)
test.push(8)
test.push(3)
test.push(2)
test.push(11)
test.push(19)
test.push(17)
console.log(test)