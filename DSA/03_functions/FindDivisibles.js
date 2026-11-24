function findDivisible(number){
    let arr = [];

    for (let i = 2; i < number; i++) {
      if (input % i == 0) arr.push(i);
    } return arr    
}

let prompt = require('readline-sync')
let input = prompt.question('enter a no.')

console.log(findDivisible(input));
