const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    while(arr[i] < arr[i - 1] && i > 0) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
  }
  return arr;
}

console.log(insertionSort([-1,-2,0,1,5,3,6,8,3,2,6,4,19]))

