// evaluate-string.js

function evaluateString(stringExp) {
  let tokens = stringExp.replace("\\s+", ' ').split(' ');
  let values = [],
    operators = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      values.push(+tokens[i]);
    } else if (tokens[i] === "(") {
      operators.push(tokens[i]);
    } else if (tokens[i] === ")") {
      while (operators.length > 0 && operators[operators.length -1] != "(") {
        values.push(
          applyOperation(values.pop(), values.pop(), operators.pop())
        );
      }
      operators.pop();

    } else if (
      tokens[i] == "+" ||
      tokens[i] == "-" ||
      tokens[i] == "*" ||
      tokens[i] == "/"
    ) {
      while ((operators.length > 0) && hasPrecedence(tokens[i], operators[operators.length -1])) {
        values.push(
          applyOperation(values.pop(), values.pop(), operators.pop())
        );
      }
      operators.push(tokens[i]);
    }
  }
  while (operators.length > 0) {
    values.push(applyOperation(values.pop(), values.pop(), operators.pop()));
  }
  return values.pop();
}

// A utility method to apply an operator 'op' on operands 'a'
// and 'b'. Return the result.
function applyOperation(b, a = 0, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b == 0) {
        throw new UnsupportedOperationException("Cannot divide by zero");
      }
      return a / b;
  }
  return 0;
}

// Returns true if 'op2' has higher or same precedence as 'op1',
// otherwise returns false.
function hasPrecedence(op1, op2) {
  if (op2 == "(" || op2 == ")") {
    return false;
  }
  if ((op1 == "*" || op1 == "/") && (op2 == "+" || op2 == "-")) {
    return false;
  } else {
    return true;
  }
}


console.log(evaluateString("10 + 2 * 6"));
console.log(evaluateString("100 * 2 + 12"));
console.log(evaluateString("100 * ( 2 + 12 )"));
console.log(evaluateString("100 * ( 2 + 12 ) / 14"));
