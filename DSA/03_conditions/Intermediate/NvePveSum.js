//Write a program to print the sum of negative numbers, sum of positive even numbers and the sum of positive odd numbers from a list of numbers (N) entered by the user. The list terminates when the user enters a zero.

// 1 - odd, 2 even , -1 nev -2 nve
//no < 0
//no > 0 posiv
//no-ve + no+ve = return sum;
//0 - till

const readline = require("readline-sync");
let input ; 
function sum() {
  let sum = 0;
  while (true) {

     input = parseInt(readline.question("enter a no."));
    sum += input;

    if(input === 0){
        return sum;
        break;
    }
  }
  return sum;

  // == -> val
  //=== -> val, ref(data) 
}

console.log(sum(input))
