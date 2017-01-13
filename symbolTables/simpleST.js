class ST {
  constructor() {
    this.table = [];
  }

  put(key, val) {
    // we want to be able to store values in the table with a key for reference
    let exists = -1;

    this.table.forEach((e, i) => {
      if (e[0] === key)
        exists = i;
      if (e[1] === null)
        this.table = [...this.table.slice(0, i), ...this.table.slice(i + 1)];
    });

    if (exists > -1) this.table[exists][1] = val;
      else this.table.push([key, val]);
  }

  get(key) {
    // we want to be able to get values from the table by their reference
    let result = null;

    this.table.forEach((e) => {
      if (e[0] === key && e[1] !== null)
        result = e[1];
    });
    return result;
  }

  delete(key) {
    // we want to be able to remove values from the table
    let contains = this.contains(key);

    if (contains > -1) this.table[contains][1] = null;
  }

  contains(key) {
    // we want to confirm the contents of the table
    let exists = -1;

    this.table.forEach((e, i) => {
      if (e[0] === key && e[1] !== null) exists = i;
    });
    return exists;
  }

  isEmpty() {
    return this.table.size() === 0;
  }

  size() {
    return this.table.length;
  }

  min(init=null, comparator=this.compareTo) {
    // we want to be able to find the minimum key
    let result = init;

    this.table.forEach((e, i) => {
      if (result === null) result = e[0];
      else if (comparator(e[0], result) < 0) result = e[0];
    });
    return result;
  }

  max(init=null, comparator=this.compareTo) {
    // we want to be able to find the maximum key
    let result = init;

    this.table.forEach((e, i) => {
      if (result === null) result = e[0];
      else if (comparator(e[0], result) > 0) result = e[0];
    });
    return result;
  }

  floor(key) {
    const result = this.max(key, (a, b) => {
      if (a < key && a > b) return 1;
      if (b === key && a < b) return 1;
    });

    if (result === key) return null;

    return result;
  }

  ceiling(key) {
    const result = this.max(key, (a, b) => {
      if (a > key && a < b) return 1;
      if (b === key && a > b) return 1;
    });

    if (result === key) return null;

    return result;
  }

  rank(key) {
    let count = 0;

    this.table.forEach((e) => {
      if (e[0] < key) count++;
    })
    
    return count;
  }

  select() {
    // complete on optimized run through to aovid O(n2)
  }

  deleteMin() {
    this.delete(this.min());

  }

  deleteMax() {
    this.delete(this.max());

  }

  size(a, b) {
    let count = 0;
    this.table.forEach((e) => {

    })
  }

  keys(cb) {
  }

  compareTo(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  equals() {}

}

const test = new ST();
if (!module.parent) {
  test.put('a', 1)
  test.put('b', 2)
  test.put('c', 3)
  test.put('d', 4)
  test.put('e', 5)

  console.log('1', test.get('e'), test.get('c')); // 5 and 3
  console.log('2', test.contains('e'), test.contains('a')); // -1 and 0
  console.log('3', test.min(), test.max()); // 'a' and 'e'
  console.log('4', test.ceiling('b'), test.floor('b')); // 'c' and 'a'

  test.delete('e');
  test.delete('a');
  test.delete('b');
  test.delete('c');
  test.delete('d');

  console.log('5', test.get('e'), test.get('a')); // null and null
  console.log('6', test.contains('e'), test.contains('a')); // -1 and -1
  console.log('7', test.min(), test.max()); // 'a' and 'e'
  console.log('8', test.ceiling('b'), test.floor('b')); // 'c' and 'a'

  test.delete('a');
  test.delete('b');
  test.delete('c');
  test.delete('d');
  console.log('9', test.get('e'), test.get('a')); // 5 and 1
  test.deleteMin();
  test.deleteMax();

  console.log('10', test.get('e'), test.get('a')); // null and null
  console.log('11', test.contains('e'), test.contains('a')); // -1 and -1
  console.log('12', test.min(), test.max()); // 'a' and 'e'
  console.log('13', test.ceiling('b'), test.floor('b')); // 'c' and 'a'
}

module.exports = {
  ST,
}
