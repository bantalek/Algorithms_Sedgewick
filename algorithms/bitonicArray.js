// Search in a bitonic array. An array is bitonic if it is comprised of an increasing sequence 
// of integers followed immediately by a decreasing sequence of integers.
// ∼2lgn compares in the worst case 

class BitonicSearch {
  constructor(array) {
    this.S = array;
  }
  // Takes target and universal maximum into consideration when
  // computing binary search for target in bitonic array.
  search(target, maximum, array) {
    array = array || this.S
    maximum = maximum || this.universalMaximum(array);
      let candidate = null;
      let min;
      let max;
    if(maximum === 'inc' || maximum === 'dec' || !maximum) {
      min = 0;
      max = array.length - 1;
    } else if(target < array[maximum]) {
      min = 0;
      max = maximum
    } else if (target > array[maximum]) {
      min = maximum;
      max = array.length - 1;
    } else if (target === array[maximum]) {
      return true;
    }
      while(min <= max) {
        candidate = Math.floor((min + max) / 2) - 1;
        console.log(candidate, array[candidate], min, max)
        if (array[candidate] === target) {
          return true;
        }
        if(maximum === 'dec')  {
          if (array[candidate] < target) {
            min = candidate - 1;
          }
          if (array[candidate] > target) {
            max = candidate + 1;
          }
        } else {
          if (array[candidate] < target) {
            min = candidate + 1;
          }
          if (array[candidate] > target) {
            max = candidate - 1;
          }
        }
      }
      return false;
  }
  // Returns the universal maximum within the bitonic sequence
  // or that the sequence is always increasing / decreasing using binary search.
  universalMaximum(array) {
    let min = 0;
    let max = array.length - 1;
    let onSlope = true;
    let candidate = null;
    if(array[min + 1] < array[min]) {
      return 'inc';
    }
    if(array[max] > array[max - 1]) {
      return 'dec'
    }
    while (onSlope) {
      candidate = (Math.floor((min + max) / 2));
      if(array[candidate + 1] > array[candidate]) {
        min = candidate;
      } else if(array[candidate - 1] > array[candidate]) {
        max = candidate;
      } else {
        onSlope = false;
      }
    }
    return candidate;
  }
}


// bitonic increasing / deacreasing example
const test = new BitonicSearch([1, 4, 6, 8, 3, -2]);
console.log(test.search(4))// true
console.log(test.search(-1))// false
// bitonic decreasing example
const test2 = new BitonicSearch([15, 14, 12, 10, 9, 2, -10, -5,-4, -3, -2]);
console.log(test2.search(9)) // true
console.log(test2.search(4)) // false

