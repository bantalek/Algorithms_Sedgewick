// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()",
// ]

const permute = (input, permArr, temp) => {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    temp.push(ch);
    if (input.length === 0) {
      permArr.push(temp.slice());
    }
    permute(input, permArr, temp);
    input.splice(i, 0, ch);
    temp.pop();
  }
  return permArr;
};

const validParenString = (arr) => {
  arr = arr.reduce((a, c, i, arr) => {
    if (a === false) return a;
    if (a + c < 0) return false;
    return a + c;
  }, 0);
  return arr;
};

const generateParenthesis = (n) => {
    if (n === 1) return ['()'];
  const template = [];
  const ids = [];
  let results = {};

  for (let i = 0; i < (n * 2); i++) {
    if (i % 2 === 0) template[i] = 1;
    else template[i] = -1;
  }

  for (let i = 1; i < (n * 2) - 1; i++) {
    ids[i - 1] = i;
  }

  permute(ids, [], []).forEach((e,i) => {
    const temp = [1, ...e.map((e)=>template[e]), -1];
    const key = temp.reduce((a, c, i, arr) => {
      if (c === 1) return  a + "(";
        return a + ")";
      },"");
    results[key] = temp;
  });
  results = Object.keys(results).filter((e,i) => {
    return validParenString(results[e]) === 0;
  });
  return results;
};



console.log(generateParenthesis(3));

