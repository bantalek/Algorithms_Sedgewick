class Quicksort3Way {
  constructor(array) {
    // shuffle the input array before any other operations to ensure average case
      this.array = this.shuffle(array);
  }
  shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        const index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // Swap the last element with it
        [array[counter], array[index]] = [array[index], array[counter]]
    }
    return array;
  }
  compareTo(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }

  sort(array, low, high) {
    // once high and low intersect, step back to next recursive call
    if (high <= low) return;
    // create three partitions for comparison and designate partition value;
    let lt = low;
    let i = low+1;
    let gt = high;
    const pv = array[low];
    while (i <= gt) {
      const cmp = this.compareTo(array[i], pv);
      if ( cmp === 1) {
        [array[gt], array[i]] = [array[i], array[gt]];
        gt--;
      } else if ( cmp === -1) {
        [array[lt], array[i]] = [array[i], array[lt]];
        lt++;
        i++;
      } else {
        i++;
      }
    }
    this.sort(array, low, lt - 1);
    this.sort(array, gt + 1, high);
    // return sorted array
    return array;
  }
}


// test
const qs = new Quicksort3Way([9,3,4,1,4,2,1,2,3,5,4,3,2,1,3,2,8]);
console.log(qs.sort(qs.array, 0, qs.array.length - 1));


module.exports = {
  Quicksort3Way,
}