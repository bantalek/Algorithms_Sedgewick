
class ST {
  constructor() {
    this.keys = [];
    this.values = [];
    this.N = 0;
  }

  size() {
    return this.N;
  }

  rank(key) {
    let lo = 0;
    let hi = this.N - 1;

     while (lo <= hi) {
       let mid = lo + Math.floor((hi - lo) / 2);
       let cmp = this.compareTo(key, this.keys[mid]);

       if (cmp < 0) hi = mid - 1;
       else if (cmp > 0) lo = mid + 1;
       else return mid;
     }
     return lo; 
  }

  get(key) {
    // we want to be able to get values from the table by their reference
    if (this.isEmpty()) return null;
    const i = this.rank(key);

    if (i < this.N && this.compareTo(key, this.keys[i]) === 0) 
      return this.values[i];
  }
  
  put(key, val) {
    // we want to be able to store values in the table with a key for reference
    // if (this.isEmpty()) { 
    //   this.values[0] = val; this.keys[0] = key;
    //   this.N++
    //   return;
    // }

    let i = this.rank(key);

    if (i === this.N) { 
      this.values[i] = val; this.keys[i] = key; this.N++;
      return;
    }

    if (i < this.N && this.compareTo(key, this.keys[i]) === 0) {
      this.values[i] = val; this.N++
      return;
    }

    for (let j = this.N; j > i; j--) {
      this.keys[j] = this.keys[j - 1];
      this.values[j] = this.values[j - 1];
    }
    this.keys[i] = key; this.values[i] = val; this.N++;
  }


  delete(key) {
    // we want to be able to remove values from the table
    let contains = this.contains(key);
    if (contains === null) return;
    this.values[contains] = null;
  }

  contains(key) {
    // we want to confirm the contents of the table
    const exists = this.rank(key);
    return exists < this.N ? exists : null;
  }

  isEmpty() {
    return this.N === 0;
  }


  min(init=null, comparator=this.compareTo) {
    return this.keys[0];
  }

  max(init=null, comparator=this.compareTo) {
    return this.keys[this.N - 1];
  }

  select(k) {
    return this.keys[k];
  }

  floor(key) {
    const exists = this.contains(key)
    if (exists === null) return this.keys[this.rank(key)];
    return this.keys[this.rank(key) - 1]

  }

  ceiling(key) {
    const exists = this.contains(key)
    if (exists === null) return this.keys[this.rank(key)];
    return this.keys[this.rank(key) + 1]
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

  iterableKeys(lo=this.keys[0], hi=this.keys[this.N - 1]) {
    let result = [];
    for (let i = this.rank(lo); i <= this.rank(hi); i++) {
      result.push(this.keys[i]);
    }
    return result;
  }

  compareTo(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  equals() {

  }

}

const test = new ST();
if (!module.parent) {
  // console.log(test.rank(7));
  test.put('a', 1)
  test.put('d', 4)
  test.put('c', 3)
  test.put('b', 2)
  test.put('e', 5)
  console.log('1', test.get('e'), test.get('c')); // 5 and 3
  console.log('2', test.contains('e'), test.contains('a')); // -1 and 0
  console.log('3', test.min(), test.max()); // 'a' and 'e'
  console.log('4', test.ceiling('b'), test.floor('b')); // 'c' and 'a'

  // test.delete('e');
  // test.delete('a');
  // test.delete('b');
  // test.delete('c');
  // test.delete('d');

  console.log(test.iterableKeys('b', 'd')) // ['b','c','d']
  console.log('5', test.get('e'), test.get('a')); // null and null
  console.log('6', test.contains('e'), test.contains('a')); // -1 and -1
  console.log('7', test.min(), test.max()); // 'a' and 'e'
  console.log('8', test.ceiling('b'), test.floor('b')); // 'c' and 'a'


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
