let calculator = function (){
  // 3 inputs -> investment, time, interest

  let readline = require("readline-sync");
  let investment = parseInt(readline.question("Enter Investement amount"));
  let time = parseInt(readline.question("enter duration (years)"));
  let interest = parseInt(readline.question("enter interest"));

  //2000  / 10
  let result = (investment * time) / interest;
    
  console.log(`intrest amount : ${result}`);
}

calculator();