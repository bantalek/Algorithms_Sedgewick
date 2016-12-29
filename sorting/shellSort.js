const shellSort = (arr, compareFunc) => {
  const interval  = (int) => 3 * int + 1;
  let h = 1;
  while (h < arr.length / 3) { 
    h = interval(h); 
  }
  while (h >= 1) {
    for (let i = h; i < arr.length; i++) {
      for (let j = i; j >= h; j -= h) {
        if (compareFunc(arr[j], arr[j - h]) === -1) {
          [arr[j - h], arr[j]] = [arr[j], arr[j - h]];
        }
      }
    }
      h = Math.floor(h / 3);
  }
  return arr;
}
