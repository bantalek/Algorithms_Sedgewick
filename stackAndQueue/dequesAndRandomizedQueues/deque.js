// Write a generic data type for a deque and a randomized queue. 
// The goal of this assignment is to implement elementary data structures 
// using arrays and linked lists, and to introduce you to generics and iterators.

// Dequeue. A double-ended queue or deque (pronounced "deck") is a generalization 
// of a stack and a queue that supports adding and removing items from either the front or 
// the back of the data structure. Create a generic data type Deque that implements the following API:

// public class Deque<Item> implements Iterable<Item> {
//    public Deque()                           // construct an empty deque
//    public boolean isEmpty()                 // is the deque empty?
//    public int size()                        // return the number of items on the deque
//    public void addFirst(Item item)          // add the item to the front
//    public void addLast(Item item)           // add the item to the end
//    public Item removeFirst()                // remove and return the item from the front
//    public Item removeLast()                 // remove and return the item from the end
//    public Iterator<Item> iterator()         // return an iterator over items in order from front to end
//    public static void main(String[] args)   // unit testing
// }

// Corner cases:
// Throw a java.lang.NullPointerException if the client attempts to add a null item;
// Throw a java.util.NoSuchElementException if the client attempts to remove an item from an empty deque;
// Throw a java.lang.UnsupportedOperationException if the client calls the remove() method in the iterator;
// Throw a java.util.NoSuchElementException if the client calls the next() method in the iterator and there are no more items to return.

// Performance requirements. Implementation must support each deque operation in constant worst-case time.
// A deque containing n items must use at most 48n + 192 bytes of memory. and use space proportional to the number of items currently in the deque.
// Additionally, the iterator implementation must support each operation (including construction) in constant worst-case time.

// implement solution utilizing doubly linked list data structure to satisfy constant time requirement

class deque {
  constructor() {
    this.size = 0;
    this.head = this.tail = null;
  }
  node(val) {
    const instance = {};
    instance.previous = null;
    instance.next = null;
    instance.val = val;
    return instance;
  }
  isEmpty() {
    return this.size === 0;
  }
  size() {
    return this.size;
  }
  addFirst(val) {
    if (this.isEmpty()) {
      this.head = this.tail = this.node(val);
      this.size = 1;
    } else {
      const temp = this.head;
      this.head = this.node(val);
      temp.previous = this.head;
      this.head.next = temp;
      this.size++
    }
  }
  addLast(val) {
    if (this.isEmpty()) {
      this.head = this.tail = this.node(val);
      this.size = 1;
    } else {
      const temp = this.tail;
      this.tail = this.node(val);
      this.tail.previous = temp;
      temp.next = this.tail;
      this.size++
    }
  }
  removeFirst() {
    const temp = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    this.size--
    return temp;
  }
  removeLast() {
    const temp = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.size--
    return temp;
  }
  iterator(cb) {
    let node = this.head
    while (node) {
      cb(node.val);
      node = node.next;
    }
  }
}

const d = new deque();

d.addFirst('sixth')
d.addFirst('fifth')
d.addFirst('fourth')
d.addFirst('third')
d.addFirst('second')
d.addFirst('first')
d.addLast('seventh')
d.addLast('eigth')
console.log(d.removeFirst());
console.log(d.removeLast());
console.log(d.removeLast());
console.log(d);

d.iterator((a) => {console.log(a)})