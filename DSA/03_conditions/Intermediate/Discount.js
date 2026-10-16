function finalPrice(discountt, prodPrice) {
    let discountAmount = (discountt / 100) * prodPrice;
    return prodPrice - discountAmount;
}

const readline = require("readline-sync");
let prodPrice = parseInt(readline.question("Enter product price: "));
let discountt = parseInt(readline.question("Enter product discount (%): "));

console.log("Final price after discount:", finalPrice(discountt, prodPrice));
