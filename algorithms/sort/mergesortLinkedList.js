class MergeSortLinkedList {
  MergeList(a, b) {
    let result = null;

    if (a == null) return b;
    if (b == null) return a;
    if (a.data > b.data) {
      result = b;
      result.next = this.MergeList(a, b.next);
    } else {
      result = a;
      result.next = this.MergeList(a.next, b);
    }

    return result;
  }

  getLength(a) {
    let count = 0;
    let h = a;

    while (h !== null) {
      count++;
      h = h.next;
    }

    return count;
  }

  mergeSort(a) {
    let oldHead = a;
    let mid = this.getLength(a) / 2;

    if (a.next === null) return a;

    while (mid - 1 > 0) {
      oldHead = oldHead.next;
      mid--;
    }

    let newHead = oldHead.next; // make newHead points to the beginning of the second half of the list
    
    oldHead.next = null; // break the list
    oldHead = a;

    let t1 = this.mergeSort(oldHead);//make recursive calls 
    let t2 = this.mergeSort(newHead);
    
    return this.MergeList(t1, t2); // merge the sorted lists
  }

  display(head) {
    let currnode = head;
    
    while (currnode !== null) {
      console.log("->" + currnode.data);
      currnode = currnode.next;
    }
  }
}

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

const init = () => {
  let a = new Node(9);
  a.next = new Node(3);
  a.next.next = new Node(4);
  a.next.next.next = new Node(2);
  a.next.next.next.next = new Node(5);
  a.next.next.next.next.next = new Node(1);
  let m = MergeSortLinkedList = new MergeSortLinkedList();
  m.display(a);
  let x = m.mergeSort(a);
  console.log("\n Sorted List: ");
  m.display(x);
}
init();