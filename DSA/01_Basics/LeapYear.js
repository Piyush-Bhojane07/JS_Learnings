const readline = require("readline-sync");

const year = parseInt(readline.question("Enter a year: "));

function leap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  }
  return "Not a Leap Year";
}

console.log(leap(year));
