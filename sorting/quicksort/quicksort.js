class Quicksort {
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

  partition(array, low, high) {
    let i = low;
    let j = high + 1;
    // set partition value to the beginning of the sub array
    let pv = array[low];
    // while i >= j move each position to the center comparing their value to 
    // the partition value
    while (true) {
      // find elements left of pv that are greater than or equal to pv
      while (array[++i] < pv) if (i === high) break;
      // find elements right of pv that are less than or equal to pv
      while (pv < array[--j]) if (j === low) break;
      // break the process upon intersection of left and right pointers
      if (i >= j) break;
      // exchange the high positions with the low positions to balance around pv
      [array[i], array[j]] = [array[j], array[i]];
    }
    // swap the partition into the center of the balance array
    [array[low], array[j]] = [array[j], array[low]];
    // return the balance partition value;
    return j;
  }
  sort(array, low, high) {
    // once high and low intersect, step back to next recursive call
    if (high <= low) return;
    // set j to return value from previous partition
    let j = this.partition(array, low, high);
    // sort left of pv
    this.sort(array, low, j - 1);
    // sort right of pv
    this.sort(array, j + 1, high);
    // return sorted array
    return array;
  }
}


// test
// const qs = new Quicksort([9,3,4,2,5,1]);
// console.log(qs.sort(qs.array, 0, qs.array.length - 1));


module.exports = {
  Quicksort,
}