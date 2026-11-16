// Palindrome check for numbers
const readline = require("readline-sync");
let input = readline.question("Enter a number: ");
let isPalindrome = true;

for (let i = 0; i < input.length / 2; i++) {
  if (input[i] !== input[input.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}
