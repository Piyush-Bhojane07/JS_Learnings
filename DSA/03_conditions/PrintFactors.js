//Input a number and print all the factors of that number (use loops).

const readline = require("readline-sync");
let input = parseInt(readline.question("Enter a number"))

function factores(input) {
    let result = [];
    let index = 0;
    for(let i = 0; i <= input; i++){
        if(input % i === 0){
          result.push(i)
        }
    }
    return result;
}


console.log(factores(input))