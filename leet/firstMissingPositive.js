const firstMissingPositive = nums => {
  if (nums.length < 2 && nums[0] !== 1) return 1;
  if (nums.length < 2 && nums[0] === 1) return 2;

  nums.sort((a,b) => a - b);
  let t = 1;
  let i = 0;
  const terminal = nums.length;

  while (nums[i] < 1) {
    if (i >= terminal) return null;
    i++;
  }

  for (i = i; i < nums.length; i) {
    if (nums[i] === t) {
      while (nums[i] === t) {
        i++;
    }
    t++;
    }
    else return t;
  }
  if (t === nums[nums.length - 1]) return t + 1;
  return t;
};