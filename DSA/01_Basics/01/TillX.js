const readline = require("readline-sync");

let sum = 0;

while (true) {

    let input = readline.question("Enter a number (or 'x' to stop): ");
    if (input.toLowerCase() === 'x') {
        break;
    }

    let number =  parseInt(input);

    if (!isNaN(number)) {
        sum += number;
    } else {
        console.log("Invalid input, please enter a valid number or 'x' to exit.");
    }
    
}

console.log("Total sum:", sum);
