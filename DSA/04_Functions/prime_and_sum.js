const prompt = require("readline-sync");

// 10. Return all prime numbers between two given numbers
function getPrimes(start, end) {
  const primes = [];

  for (let num = start; num <= end; num++) {
    if (num < 2) continue;

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  return primes;
}

// 11. Return the sum of first n natural numbers
function sumNaturalNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// User input
const start = Number(prompt.question("Enter starting number: "));
const end = Number(prompt.question("Enter ending number: "));

console.log("Prime numbers:", getPrimes(start, end));

const n = Number(
  prompt.question("Enter n to calculate sum of natural numbers: "),
);

console.log("Sum of first", n, "natural numbers:", sumNaturalNumbers(n));
