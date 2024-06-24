//1
const add = function (a, b) {
  return a + b
};

console.log(add(1, 2))

//2
const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(2, 1))

//3

const nums = [1, 2, 3, 4]

const sum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0)
};

console.log(sum(nums))

//4
const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr, 1)
};

console.log(multiply(nums))

//5
const power = function (a, b) {
  return Math.pow(a, b)
};
console.log(power(2, 3))

//6
const factorial = function (n) {
  if (n < 0)
    return -1;
  else if (n == 0)
    return 1;
  else {
    return (n * factorial(n - 1));
  }
};

console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
