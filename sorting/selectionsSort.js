const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort([-1,-2,0,1,5,3,6,8,3,2,6,4,19]))

