// Define two methods to print the maximum and the minimum number respectively among three numbers entered by the user.

function max(inputOne, inputTwo, inputThree) {
  if (inputOne > inputTwo) {
    if (inputOne > inputThree) {
      return inputOne;
    }
    return inputThree;
  } else if (inputTwo > inputThree) {
    return inputTwo;
  }
  return inputThree;
}

const prompt = require("readline-sync");

let inputOne = Number(prompt.question("Enter a no"));

let inputTwo = Number(prompt.question("Enter a no"));
let inputThree = Number(prompt.question("enter a third no. "));
console.log(max(inputOne, inputTwo, inputThree));
