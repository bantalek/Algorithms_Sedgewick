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

class twoStackQ {
  constructor() {
    this.headA = this.tailA = { value: null, next: null };
    this.headB = this.tailB = { value: null, next: null };
  }
  node(val, next) {
    return { value: val, next: next }
  }
  pushA(val) {
    const temp = this.headA;
    this.headA = this.node(val, temp);
  }
  popA() {
    const temp = this.headA;
    this.headA = this.headA.next;
    return temp;
  }

  pushB(val) {
    const temp = this.headB;
    this.headB = this.node(val, temp);
  }
  popB() {
    const temp = this.headB;
    this.headB = this.headB.next;
    return temp;
  }
  pushQ(e) {
    this.pushA(e);
  }
  popQ() {
    while (this.headA.next !== null) {
      this.pushB(this.popA());
    }
    this.popB();
    while (this.headB.next !== null) {
      this.pushA(this.popB());
    }
  }

}


/*
step 1
[]
step 2 push 1 push 2 push 3
[ 3 2 1 ]
step 3 pop
1
[ 3 2 ]
step 4 push 4
[ 4 3 2 ]