function power(input) {
    let powerOf = Math.pow(input, 2); 
    console.log(powerOf);
    return powerOf;
}


/* The reason is that your function power() doesn’t take a parameter, but you’re trying to pass one (power(input)).
Inside the function, it uses the outer variable input instead, so the argument you pass is ignored.*/
function power (){
    return input * input;
}
const readline = require("readline-sync")
let input = parseInt(readline.question("enter input"));
console.log(power(input))
