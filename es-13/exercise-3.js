const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

const result = divide(
  subtract(
    multiply(
      add(2, 4),
      add(5, 2)
    ),
    2
  ),
  5
);

console.log(result);