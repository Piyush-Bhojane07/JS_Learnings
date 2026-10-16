//Find Ncr & Npr

const readline = require("readline-sync");

// Factorial function
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

let n = parseInt(readline.question("Enter value of n: "));
let r = parseInt(readline.question("Enter value of r: "));

if (r > n) {
  console.log("r should be less than or equal to n");
} else {
  let nCr = factorial(n) / (factorial(r) * factorial(n - r));
  let nPr = factorial(n) / factorial(n - r);

  console.log(`nCr = ${nCr}`);
  console.log(`nPr = ${nPr}`);
}
