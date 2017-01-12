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
    if (exists > -1) {
      this.table[exists][1] = val;
    } else {
      this.table.push([key, val]);
    }
  }

  get(key) {
    // we want to be able to get values from the table by their reference
    let result = null;
    this.table.forEach((e) => {
      if (e[0] === key && e[1] !== null)
        result = e[1];
    })
    return result;
  }

  delete(key) {
    // we want to be able to remove values from the table
    let contains = this.contains(key);
    if (contains > -1)
      this.table[contains][1] = null;
    // this.table.forEach((e, i) => {
    //   if (e[0] === key)
    //     this.table[i][1] = null;
    // });
  }

  contains(key) {
    // we want to confirm the contents of the table
    let exists = -1;
    this.table.forEach((e, i) => {
      if (e[0] === key && e[1] !== null)
        exists = i;
    });
    return exists;
  }

  isEmpty() {
    return this.table.size() === 0;
  }
  size() {
    return this.table.length;
  }
  min(){}
  max(){}
  floor(){}
  ceiling(){}
  rank(){}
  select(){}
  deleteMin(){}
  deleteMax(){}
  size(){}
  keys(){}
  compareTo(){}
  equals(){}

}

const test = new ST();
test.put('a', 'tetest1')
test.put('b', 'tetest2')
test.put('c', 'tetest3')
test.put('d', 'tetest4')
test.put('e', 'test5')
console.log(test.get('e'), test.get('c'));
console.log(test.delete('e'), test.delete('c'));
console.log(test.contains('e'), test.contains('a'));