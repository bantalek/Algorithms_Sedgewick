// Permutation. Given two integer arrays of size n, 
// design a subquadratic algorithm to determine whether
// one is a permutation of the other. That is, do they 
// ontain exactly the same entries but, possibly, in a different order.
const getRandomArray = (length) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    const r = Math.floor(Math.random() * length);

    result.push(r);
  };

  return result;
}

const arr1 = getRandomArray(10);
const arr2 = getRandomArray(10);
const copyArr1 = arr1.slice();

const shellSort = (arr) => {
  const interval  = (int) => 3 * int + 1;
  let h = 1;

  while (h < arr.length / 3) { 
    h = interval(h); 
  }

  while (h >= 1) {
    for (let i = h; i < arr.length; i++) {
      for (let j = i; j >= h; j -= h) {
        if (arr[j] < arr[j - h]) {
          [arr[j - h], arr[j]] = [arr[j], arr[j - h]];
        }
      }
    }
      h = Math.floor(h / 3);
  }
  return arr;
};

const isPermutation = (a, b) => {
  const arrA = shellSort(a);
  const arrB = shellSort(b);

  return arrA.every((e, i) => {
    return e === arrB[i];
  });
};

console.log(isPermutation(arr1, arr2))
console.log(isPermutation(arr1, copyArr1));