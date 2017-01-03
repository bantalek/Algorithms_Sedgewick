class LLStack {
  constructor() {
    this.head = this.tail = { value: null, next: null };
  }
  node(val, next) {
    return { value: val, next: next }
  }
  push(val) {
    const temp = this.head;
    this.head = this.node(val, temp);
  }
  pop() {
    const temp = this.head;
    this.head = this.head.next;
    return temp;
  }
  showList() {
    return this.head;
  }
}