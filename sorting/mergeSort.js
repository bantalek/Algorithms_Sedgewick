const merge = (arr, cb) => {
  const length = arr.length;
  const mid  = Math.floor(length / 2);
  if (length < 2) {
    return arr;
  } else {
    return cb(merge(arr.slice(0, mid), cb), merge(arr.slice(mid, length), cb));
  }
}
const mergeSort = (l, r) => {
  console.log(l, r)
  let result = [];
  let li = 0;
  let ri = 0;
  while (li < l.length && ri < r.length) {
    if (l[li] < r[ri]) {
      result.push(l[li++])
    } else {
      result.push(r[ri++])
    }
  }
  if (ri < r.length) {
    result.push(...r.slice(ri, r.length))
  } else if (li < l.length) {
    result.push(...l.slice(li, l.length))
  }
  return result;
}

console.log(merge([-1,-2,0,1,5,3,6,8,3,2,6,4,19], mergeSort));