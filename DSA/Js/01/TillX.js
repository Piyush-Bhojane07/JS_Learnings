const prompt = require("readline-sync");

let sum = 0;
let input = prompt.question("Enter a number (x to stop): ");  // typeof input is string and Number(prompt.question('...')) is typeof number

while (input !== "x") {
  sum += Number(input);
  input = prompt.question("Enter a number (x to stop): ");
}

console.log("Sum:", sum);
