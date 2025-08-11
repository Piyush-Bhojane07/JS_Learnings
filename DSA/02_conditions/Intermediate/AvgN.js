const readline = require("readline-sync");

let input = parseInt(readline.question("enter a number"))

function avg (input){
    let sum  = 0;
    let inc = 0;
    while(input >= inc){
        sum += inc;
        inc++;
    }   
    return sum;
}
console.log(avg(input))
