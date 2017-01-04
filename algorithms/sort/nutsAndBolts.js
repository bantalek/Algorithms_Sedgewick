class nutsAndBolts {
  constructor(nuts, bolts) {
    // shuffle the input array before any other operations to ensure average case
      this.nuts = this.shuffle(nuts);
      this.bolts = this.shuffle(bolts);
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

  partition(array, low, high, pv) {
    let i = low;
    let j = low;
    while (j < high) {
      if (array[j] < pv) {
        [array[i], array[j]]= [array[j], array[i]];
        i++;
      } else if (array[j] === pv) {
        [array[j], array[high]]= [array[high], array[j]];
        j--;
      }
      j++;
    }
    [array[i], array[high]]=[array[high], array[i]];
    return i;
  }
  match(nuts, bolts, low, high) {
    // once high and low intersect, step back to next recursive call
    if (high <= low) return;
    // choose first character of bolts array for nuts partition.
    let j = this.partition(nuts, low, high, bolts[low]);
    this.partition(bolts, low, high, nuts[j])
    
    this.match(nuts, bolts, low, j - 1);
    this.match(nuts, bolts, j + 1, high);
    // return sorted array
  }
}


// test
const qs = new nutsAndBolts([2,0,1,4,3], [4,3,2,0,1]);
console.log(qs.match(qs.nuts, qs.bolts, 0, qs.nuts.length - 1));
console.log(qs.nuts, qs.bolts)

module.exports = {
  nutsAndBolts,
}