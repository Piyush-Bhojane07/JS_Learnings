const readline = require("readline-sync");
let num = parseInt(readline.question("Enter a number: "));

let sum = 0;
for (let i = 1; i <= num / 2; i++) {
  // start from 1, go till num/2
  if (num % i === 0) {
    sum += i;
  }
}

if (sum === num && num !== 0) {
  console.log("Perfect number");
} else {
  console.log("Not a perfect number");
}
