// Randomized queue. A randomized queue is similar to a stack or queue,
// except that the item removed is chosen uniformly at random from items in the data structure.
// Create a generic data type RandomizedQueue that implements the following API:

// public class RandomizedQueue<Item> implements Iterable<Item> {
//    public RandomizedQueue()                 // construct an empty randomized queue
//    public boolean isEmpty()                 // is the queue empty?
//    public int size()                        // return the number of items on the queue
//    public void enqueue(Item item)           // add the item
//    public Item dequeue()                    // remove and return a random item
//    public Item sample()                     // return (but do not remove) a random item
//    public Iterator<Item> iterator()         // return an independent iterator over items in random order
//    public static void main(String[] args)   // unit testing
// }
// Corner cases. The order of two or more iterators to the same randomized queue must be mutually independent; each iterator must maintain its own random order.

// Performance requirements: The randomized queue implementation must support each randomized queue operation (besides creating an iterator) 
// in constant amortized time. That is, any sequence of m randomized queue operations (starting from an empty queue) should take at most cm steps 
// in the worst case, for some constant c. A randomized queue containing n items must use at most 48n + 192 bytes of memory.

class RandomizedQueue {
   constructor() {
      this.queue = [];
      this.length = 0;
   }
   size() {
      return this.length;
   }
   isEmpty() {
      return this.length === 0;
   }
   enqueue(e) {
      this.queue[this.length] = e;
      this.length++;
   }

   dequeue() {
      const random = Math.floor(Math.random() * this.length);
      const target = this.queue[random];
      this.queue[random] = this.queue[this.length - 1];
      this.queue[this.length - 1] = null;
      this.length--;
      return target;
   }
   sample() {
      const random = Math.floor(Math.random() * this.length);
      return this.queue[random];
   }
   iterator(cb) {
      if (this.isEmpty()) {
         return null;
      }
      let length = this.size();
      const newArr = this.queue;
      while(length > 0) {
         const random = Math.floor(Math.random() * length);
         const target = newArr[random];
         newArr[random] = newArr[length - 1];
         length--;
         cb(target);
      }
   }
}

const rq  = new RandomizedQueue();
rq.enqueue(1);
rq.enqueue(2);
rq.enqueue(3);
rq.enqueue(4);
rq.enqueue(5);
rq.enqueue(6);
rq.enqueue(7);
rq.enqueue(8);
rq.enqueue(9);

console.log(rq.queue);
console.log(rq.dequeue());
console.log(rq.dequeue());
console.log(rq.dequeue());
console.log(rq.queue);
rq.iterator((e) => {console.log(e)});