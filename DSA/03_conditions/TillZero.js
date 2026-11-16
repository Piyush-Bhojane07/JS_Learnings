const readline = require("readline-sync");

function tillZero() {
    let sum = 0;
    let num;

    while (true) {
        num = parseInt(readline.question("Enter a number (0 to stop): "));
        if (num === 0) {
            break;
        }
        sum += num;
    }

    console.log("Sum of all numbers:", sum);
}

tillZero();
