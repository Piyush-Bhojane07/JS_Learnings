// Find if a number is palindrome or not

const readline = require("readline-sync")
let input = parseInt(readline.question("enter a no"))
let start = 0;
let end = 0;
let last = input.length -1;
for(let i = 0; i < input.length; i++){
    end = last;
        if(start != end){
            console.log("not a palindrome")
            break;
        }
        console.log("Palindrome")
}