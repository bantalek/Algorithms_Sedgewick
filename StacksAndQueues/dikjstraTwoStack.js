const Stack = require('./stack');

const dikstraTwoStack = (string) => {
  const operand = new Stack.Stack();
  const operator = new Stack.Stack();
  const input = string.split(' ');

  input.forEach((e) => {
    if( e === '(' || e === ' ' ) {
      null;
    } else if (e === ')') {
        let result = operand.pop();
        let string = operator.pop();
        if(string === '*') { result = result * operand.pop(); }
        else if(string === '/') { result = result / operand.pop(); }
        else if(string === '+') { result += operand.pop(); }
        else if(string === '-') { result -= operand.pop(); }
        else if(string === 'sqrt') { result = Math.sqrt(result); }
        operand.push(result);
    } else if (e === 'sqrt' ||
      e === '*' ||
      e === '+'||
      e === '-' ||
      e === '/') {
        operator.push(e);
    } else if (!isNaN(e)) {
      operand.push(Number(e));
    }
  });
  return operand[0];
}

const input = '( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )';
console.log(dikstraTwoStack(input));