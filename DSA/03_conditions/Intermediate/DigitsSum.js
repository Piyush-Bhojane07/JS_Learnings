//Sum Of A Digits Of Number
// 1234 - 10
//no -> input
//no -> n u m b e r -> n, u,
// const readline = require("readline-sync");

const readline = require("readline-sync");
let input = parseInt(readline.question("enter a no."));

function DigitSum() {
  let sum = 0;
  while (input > 0) {
    let last = input % 10;
    input /= 10;
    sum += last;
  }
  return Math.floor(sum);
}
console.log(DigitSum())

