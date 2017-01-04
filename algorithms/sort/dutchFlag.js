const color = (int) => {
  if (int === 0) {
    return 'red';
  }
  if (int === 1) {
    return 'white';
  }
  if (int === 2) {
    return 'blue';
  }
}

const swap = (arr) => {
  const x = (i, j) => {
    ; 
  }
}

const dutchFlag = (array) => {
  let count = 0;
  let color = null;
  let reader = 0;
  let low = 0;
  let high = array.length - 1;
  while (reader <= high) {
    color = array[reader];
    count++;
    if (color === 2) {
      [array[reader], array[high]] = [array[high], array[reader]];
      high--;
    } else if (color === 1) {
      reader++;
    } else {
      [array[reader], array[low]] = [array[low], array[reader]];
      low++;
      reader++;
    }
    console.log(count, array.length);
  }
  return array;
}

console.log(dutchFlag([0,2,2,0,0,1,2,2,1,0,2,0,2,2,0,0,1,2,2,1,0,2,0,2,2,0,0,1,2,2,1,0,2,0,2,2,0,0,1,2,2,1,0,2,0,2,2,0,0,1,2,2,1,0,2,0,2,2,
  0,0,1,2,2,1,0,2,0,2,2,0,0,1,2,2,1,0,2,0,2,2,0,0,1,2,2,1,0,2,0,2,2,0,0,1,2,2,1,0,2,0,2,2,0,0,1,2,2,1,0,2]));