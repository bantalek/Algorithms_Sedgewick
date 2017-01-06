/*
* Design an algorithm for the 3-SUM problem that takes time proportional
* to n2 in the worst case.
*/


// Do any three elements within the input array sum to 0?

const threeSum = (array) => {
  let result = [];
  let i;

  for (i = 0; i < array.length - 3; i++) {
    let k = i + 1;
    let j = array.length - 1;

    while (k < j) {
      if(array[i] === 0 - array[k] - array[j]) {
          result.push([array[i], array[j], array[k]]);
      }
      
      k++; j--;
    }
  }
  return result;
}


console.log(threeSum([-40, 1, 4, 45, 6, 10, 8]))
console.log(threeSum([-40, 1, 4, 45, 0, 40, 6, 10, 8]))