const readline = require("readline-sync");

let start = parseInt(readline.question("Enter the starting number: "));
let end = parseInt(readline.question("Enter the ending number: "));

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(`Prime numbers between ${start} and ${end}:`);
for (let i = start; i <= end; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
