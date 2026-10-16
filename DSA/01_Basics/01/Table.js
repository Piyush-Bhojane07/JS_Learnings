const readline = require("readline-sync");
let input = parseInt(readline.question("Enter a number"))

function table (tableOf){
    let tableOfArr = []
    
    for(let i = 1; i <= 10; i++){
        tableOfArr[i-1] = i * tableOf;
    }

    return tableOfArr;
}
console.table(table(input))