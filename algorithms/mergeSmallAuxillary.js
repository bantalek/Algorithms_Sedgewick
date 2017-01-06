const mergeSmallAux = (array) => {
  // length of array is 2n
  // split array into two sub arrays and sort them using limited length n aux array
  const mid = Math.floor((array.length) / 2);
  const aux = array.slice(0, mid);
  let a = array.slice(0, mid);
  let b = array.slice(mid, array.length);
  let i = 0;
  let j = 0;

  while (i < a.length && j < a.length) {
    if (aux[i] < b[j]) {
      if (i + j <= a.length - 1) {
        a[i+j] = aux[i];
      } else {
        b[i + j - a.length] = aux[i];
      }
      i++;
    } else {
      if (i + j <= a.length - 1) {
        a[i+j] = b[j];
      } else {
        b[i + j - a.length] = b[j];
      }
      j++;
    }
  }
  return [...a, ...b];
}

console.log(mergeSmallAux([1,2,5,6,3,4,7,8, 9]))