const mergeSmallAux = (array) => {
  // length of array is 2n
  // split array into two sub arrays and sort them using limited length n aux array
  const mid = Math.floor((array.length) / 2);
  let a = array.slice(0, mid);
  let b = array.slice(mid, array.length);
  const aux = a.slice();
  let i = 0;
  let j = 0;

  // compare values of b and aux populating a and b with the least value each time incrementing i or j
  while (i < a.length && j < a.length) {
    // if element in aux is less than element in b populate a with aux[i] 
    if (aux[i] < b[j]) {
      if (i + j <= a.length - 1) {
        a[i+j] = aux[i];
      } else {
        b[i + j - a.length] = aux[i];
      }
      i++;
    } else {
      // while i and j still point with a populate a otherwise populate b 
      if (i + j <= a.length - 1) {
        a[i+j] = b[j];
      } else {
        b[i + j - a.length] = b[j];
      }
      j++;
    }
  }
  return [a, b];
}

console.log(mergeSmallAux([1,2,5,6,3,4,7,8, 9]))