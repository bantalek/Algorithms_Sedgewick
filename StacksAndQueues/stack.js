class Stack {
  constructor() {
    this.size = 0;
    this.stack = [];
  }
  push(e) {
    this.stack[this.size] = e;
    this.size++
  }
  pop() {
    const temp = this.stack[this.size - 1];
    this.stack[this.size - 1] = null;
    this.size--
    return temp;
  }
  isEmpty() {
    return this.size === 0;
  }
  size() {
    return this.size;
  }
  top() {
    return this.stack[this.size - 1];
  }
}

module.exports = {
  Stack
};
