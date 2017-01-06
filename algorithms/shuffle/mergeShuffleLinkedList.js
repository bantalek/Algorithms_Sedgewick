class MergeSortLinkedList {
  constructor() {
  }
  MergeList(a, b) {
    let result = null;
    if (a === null) {
      return b;
    }
    if (b === null) {
      return a;
    }

    if (Math.floor(Math.random() * 100) > 49) {
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

    if (a.next === null)
      return a;
    // set one pointer to the beginning of the list and another at the next
    // element after mid
    while (mid - 1 > 0) {
      oldHead = oldHead.next;
      mid--;
    }

    let newHead = oldHead.next;// make newHead points to the beginning of the second half of the list

    oldHead.next = null;// break the list
    oldHead = a;// make one pointer points at the beginning of the first half of the list

    let t1 = this.mergeSort(oldHead); 
    let t2 = this.mergeSort(newHead);

    return this.MergeList(t1, t2);
  }

  display(head) {
    let string = ''
    let currnode = head;
   
    while (currnode !== null) {
      console.log('->', currnode.data);
      currnode = currnode.next;
    }
    
    return string;
  }
}

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}


const init = () => {
  let a = new Node(1);
  a.next = new Node(4);
  a.next.next = new Node(3);
  a.next.next.next = new Node(2);
  a.next.next.next.next = new Node(5);
  let m = new MergeSortLinkedList();
  m.display(a);
  let x = m.mergeSort(a);
  return m.display(x)
}

init();
