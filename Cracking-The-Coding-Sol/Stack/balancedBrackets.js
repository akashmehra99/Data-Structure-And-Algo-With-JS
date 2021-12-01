/* We're provided a string like the following: "{[])}" that is inclusive of the following symbols:

parentheses '()'
brackets '[]', and
curly braces '{}'.
Can you write a function that will check if the symbol pairings in the string follow these below conditions?

They are correctly ordered, meaning opening braces/symbols should come first.
They contain the correct pairings, so every opening brace has a closing one.
They are both of the same kind in a pair, so an opening parenthesis does not close with a closing curly brace.
For example, () is valid. (( is not. Similarly, {{[]}} is valid. [[}} is not.

Constraints
Length of the string <= 100000
The string will only consist of characters like [,],{,},(,)
Expected time complexity : O(n)
Expected space complexity : O(n) */

const validateSymbol = (str) => {
  let stack = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] === map[str[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
};

// Test Cases

console.log(validateSymbol("[(()){}]"));
console.log(validateSymbol("[]"));
console.log(validateSymbol("{{[]}}"));
console.log(validateSymbol("[[}}"));
