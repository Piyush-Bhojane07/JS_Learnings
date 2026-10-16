const prompt = require('readline-sync');

const input = Number(prompt.question('Enter number for table'));

for(let i = 1; i <= 10 ; i++){
    console.log(input*i)
}