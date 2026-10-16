//Program Vowel Or Consonant
const readline = require("readline-sync");
let input = readline.question("enter char").toLowerCase();
// if(input === 'a' || input === 'e'|| input === 'i'|| input === 'o'|| input === 'u'){
//     console.log("vowels")
// }else {console.log("Consonants")}

function isVowelsConsonants() {
  if (input.length !== 1 || !/[a-z]/.test(input)) {
    console.log("Please enter a single alphabet character.");
  } else if ("aeiou".includes(input)) {
    console.log("Vowel");
  } else {
    console.log("Consonant");
  }
}

isVowelsConsonants();
