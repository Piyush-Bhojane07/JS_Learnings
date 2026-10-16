const prompt = require("readline-sync");

const op = prompt.question("Enter operator (+, -, *, /, %): ");
const numOne = Number(prompt.question("Enter first number: "));
const numTwo = Number(prompt.question("Enter second number: "));

switch (op) {
  case "+":
    console.log(numOne + numTwo);
    break;

  case "-":
    console.log(numOne - numTwo);
    break;

  case "*":
    console.log(numOne * numTwo);
    break;

  case "/":
    console.log(numTwo !== 0 ? numOne / numTwo : "Cannot divide by zero");
    break;

  case "%":
    console.log(numOne % numTwo);
    break;

  default:
    console.log("Invalid operator");
}
