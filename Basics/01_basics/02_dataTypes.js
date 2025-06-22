"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Piyush")

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


// 🔢 Number (up to 2^53 - 1)
let age = 25;
let price = 99.99;
let result = 10 / 2; // 5
let invalid = "abc" * 2; // NaN
console.log("Number:", age, price, result, invalid);
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);

// ⚠️ JS rounds big numbers
console.log(9999999999999999); // Rounds to 10000000000000000

// 🔢 BigInt
const big = 123456789012345678901234567890n;
const big2 = BigInt(9007199254740991) + 10n;
console.log("BigInt:", big, big2);

// 🔤 String
let name = "Piyush";
let greeting = `Hello, ${name}!`;
let multiline = `Line1
Line2
Line3`;
console.log("String:", name, greeting);
console.log("Multiline:", multiline);

// ✅ Boolean
let isLoggedIn = true;
let isPaid = false;
console.log("Boolean:", isLoggedIn, isPaid);
console.log("Comparison:", age > 18);

// 🈳 Null
let user = null;
console.log("Null value:", user);
console.log("Type of null (weird JS bug):", typeof null); // "object"

// ❓ Undefined
let score;
function test() {}
let obj = {};
console.log("Undefined variable:", score);
console.log("Undefined function return:", test());
console.log("Undefined object property:", obj.name);

// 🪙 Symbol
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("Symbols equal?", sym1 === sym2); // false

let userWithSymbol = {
  name: "Piyush",
  [Symbol("id")]: 101
};
console.log("User with symbol:", userWithSymbol);

// Hard Symbol access
const userId = Symbol("userId");
const person = {
  name: "John",
  [userId]: 123
};

for (let key in person) {
  console.log("Loop key:", key); // Won’t show Symbol
}
console.log("Access Symbol directly:", person[userId]);

// 📊 Summary Table using console.table
console.table({
  Number: 99,
  BigInt: big,
  String: name,
  Boolean: isLoggedIn,
  Null: user,
  Undefined: score,
  Symbol: sym1.toString()
});


/* 

| Data Type   | Description                       | Example                  |
| ----------- | --------------------------------- | ------------------------ |
| `Number`    | Integers, decimals                | `99`, `5.6`              |
| `BigInt`    | Large numbers beyond safe integer | `123456789012345678901n` |
| `String`    | Text                              | `"Hello"`                |
| `Boolean`   | True/False                        | `true`, `false`          |
| `Null`      | Empty value                       | `null`                   |
| `Undefined` | Declared, not assigned            | `let x;`                 |
| `Symbol`    | Unique identifier                 | `Symbol("id")`           |
*/