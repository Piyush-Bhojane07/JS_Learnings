const readline = require("readline-sync");
function largest (){
    let max = -1;
    while(true){
        let input = readline.question("enter non zero number")

        if(parseInt(input) === 0){
            break;
        }
        if (max < parseInt(input))
            max = parseInt(input);
       }
       return max;
}

console.log(largest())