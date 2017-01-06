// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, 
// where "adjacent" cells are those horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.

// For example,
// Given board =

// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// word = "ABCCED", -> returns true,
// word = "SEE", -> returns true,
// word = "ABCB", -> returns false.


class wordfind {
  constructor(m) {
    this.array = [];
    this.index = {};
    this.count = 0;

    // convert matrix into an array
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++ ) {

        this.array.push(m[i][j]);

        if (!this.index[m[i][j]]) {
          this.index[m[i][j]] = [];
        }

        this.index[m[i][j]].push(this.count);
      }
    }
  }

  isNeighbor(int) {
    if ((int + 1) % n === 0) { /*right*/
      const neighbors = [
        [this.grid[int + n], int + n],
        [this.grid[int - 1], int - 1],
        [this.grid[int - n], int - n],
      ];
    } else if (int % n === 0) { /*left*/
      const neighbors = [
        [this.grid[int + 1], int + 1],
        [this.grid[int + n], int + n],
        [this.grid[int - n], int - n],
      ];
    } else if  (int < n && int >= 0) { /*top*/
      const neighbors = [
        [this.grid[int + 1], int + 1],
        [this.grid[int + n], int + n],
        [this.grid[int - 1], int - 1],
      ];
    } else if (int < n * n && int >= (n * n) - n) { /*bottom*/
      const neighbors = [
        [this.grid[int + 1], int + 1],
        [this.grid[int - 1], int - 1],
        [this.grid[int - n], int - n],
      ];
    } else if (int === n * (n - 1)) { /*bottemLeft*/
      const neighbors = [
        [this.grid[int + 1], int + 1],
        [this.grid[int - n], int - n],
      ];
    
    } else if (int === n * n) { /*bottomRight*/
      const neighbors = [
        [this.grid[int - 1], int - 1],
        [this.grid[int - n], int - n],
      ];
    } else if (int === 0) { /* top left */
      const neighbors = [
        [this.grid[int + 1], int + 1],
        [this.grid[int + n], int + n],
      ];
    } else if (int === n - 1) { /* top right */
      const neighbors = [
        [this.grid[int - 1], int - 1],
        [this.grid[int + n], int + n],
      ];

    } else {
      const neighbors = [
        [this.grid[int + 1], int + 1],
        [this.grid[int + n], int + n],
        [this.grid[int - 1], int - 1],
        [this.grid[int - n], int - n],
      ]
    }
    for (let i = 0; i < neighbors.length; i++) {
      this.union(char, neighbors[i]);
    }
  }
}
