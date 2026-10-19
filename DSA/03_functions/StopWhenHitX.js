function stopWhenHitX(sum) {
  const prompt = require("readline-sync");

  let input = prompt.question("Enter something. Type X to stop: ");

  while (input.toLowerCase() !== "x") {
    sum += Number(input);

    input = prompt.question("Enter something. Type X to stop: ");
  }

  return sum;
}

let sum = 0;
console.log("Total:", stopWhenHitX(sum));
