// Get No of arguments required by a function

const getNoOfExpectedParamsInFunction = (func) => {
  return func.length;
};

// Example usage:
function exampleFunction(a, b, c, d) {
  return a + b + c - d;
}

console.log(getNoOfExpectedParamsInFunction(exampleFunction)); // Output: 4

// get no of args a function is callled with

const getNoOfArgsFnCalledWith = () => {
  return arguments.length;
};
