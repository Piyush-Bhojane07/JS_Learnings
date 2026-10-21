let accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
let largest = -Infinity;
console.log(largest)

let sum = 0;

for(let i = 0; i < accounts.length; i++){
    sum = 0;
    for(let j = 0; j < accounts[i].length; j++) {
        sum = sum + accounts[i][j];
    }
    //Logic 1
    //  if(largest < sum){
    //    largest = sum
    //  }
     // Logic 2
  largest =    Math.max(largest, sum)
}

console.log("Largest Wealth: ", largest)