function isPrime(input) {
  input = Number(input);

  if (input <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      return false;
    }
  }

  return true;
}

const prompt = require("readline-sync");
const input = prompt.question("Enter a number to check prime: ");

console.log(isPrime(input));
