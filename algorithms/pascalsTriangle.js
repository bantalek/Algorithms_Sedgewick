// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// rowcol = row - 1 col -1 + row -1 col

class PascalsTriangle {
  constructor(num) {
    this.pt = [];
    let count = 0;

    while (count < num) {
      this.pt[count] = this.pascalRow(count);
      ++count;
    }
    return this.pt;
  }

  pascalRow(n) {
    const row = [];
    let i = 0;


    while (i <= n) {
      if (i === 0 || i === n) row[i++] = 1;
      else {
      const k1 = this.pt[n - 1][i - 1];
      const k2 = this.pt[n - 1][i];
      row[i++] = k1 + k2;
      }
    }
    return row;
  }
}

const test = new PascalsTriangle(5);
console.log(test);