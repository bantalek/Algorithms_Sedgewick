// Intersection of two sets. Given two arrays 𝚊[] and 𝚋[], each containing n distinct 2D points 
// in the plane, design a subquadratic algorithm to count the number of points
// that are contained both in array 𝚊[] and array 𝚋[].

// helper function designed to compare two coordinates and prioritize the value of x
const compareCoords = (coord1, coord2) => {
  const x1 = coord1[0];
  const y1 = coord1[1];
  const x2 = coord2[0];
  const y2 = coord2[1];
  // prioritize x
  if (x1 < x2) {
    return -1;
  }
  if (x1 > x2) {
    return 1;
  }
  // then check comparison of y
  if (y1 < y2) {
    return -1;
  }
  if (y1 > y2) {
    return 1
  }
  if (y1 === y2 && x1 === x2) {
    return 0;
  }
}
// generate a random set of coordinates
const getRandomCoords = (length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    const r1 = Math.floor(Math.random() * length)
    const r2 = Math.floor(Math.random() * length)
    result.push([r1, r2]);
  };
  return result;
}
// apply shellsort with 3h + 1 interval and a callback compare function 
const shellSort = (arr, compareFunc) => {
  const interval  = (int) => 3 * int + 1;
  let h = 1
  while (h < arr.length / 3) { h = interval(h); }
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

// detect intersection of sets 
const intersectionOfSets = (set1, set2, compareFunc) => {
  const sortedSet1 = shellSort(set1, compareFunc);
  const sortedSet2 = shellSort(set2, compareFunc);
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < sortedSet1.length && j < sortedSet2.length) {
    if (compareCoords(sortedSet1[i], sortedSet2[j]) === -1) {
      i++
    } else if (compareCoords(sortedSet1[i], sortedSet2[j]) === 1) {
      j++;
    } else if (compareCoords(sortedSet1[i], sortedSet2[j]) === -0) {
      count++;
      j++;
      i++;
    }
  }
  return count;
}


const coords1 = getRandomCoords(10);
const coords2 = getRandomCoords(10);
const sortedCoords1 = shellSort(coords1, compareCoords);
const sortedCoords2 = shellSort(coords2, compareCoords);
console.log(sortedCoords1, sortedCoords2, intersectionOfSets(sortedCoords1, sortedCoords2, compareCoords))


