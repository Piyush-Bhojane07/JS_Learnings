//Reverse A String 
const str = "hello";

console.log("Original String:", str);

// 1️⃣ Using split-reverse-join
console.log("1:", str.split("").reverse().join(""));

// 2️⃣ For loop backwards
let rev2 = "";
for (let i = str.length - 1; i >= 0; i--) rev2 += str[i];
console.log("2:", rev2);

// 3️⃣ For...of with unshift
let arr3 = [];
for (let char of str) arr3.unshift(char);
console.log("3:", arr3.join(""));

// 4️⃣ Recursion
function reverseRecursive(s) {
  return s === "" ? "" : reverseRecursive(s.substr(1)) + s[0];
}
console.log("4:", reverseRecursive(str));

// 5️⃣ Reduce
console.log(
  "5:",
  str.split("").reduce((rev, char) => char + rev, "")
);

// 6️⃣ Map
console.log(
  "6:",
  str
    .split("")
    .map((_, i, arr) => arr[arr.length - 1 - i])
    .join("")
);

// 7️⃣ While with pop
let arr7 = str.split("");
let rev7 = "";
while (arr7.length) rev7 += arr7.pop();
console.log("7:", rev7);

// 8️⃣ Array.from
console.log("8:", Array.from(str).reverse().join(""));

// 9️⃣ Spread operator
console.log("9:", [...str].reverse().join(""));

// 🔟 Stack simulation
function reverseStack(s) {
  let stack = [];
  for (let char of s) stack.push(char);
  let result = "";
  while (stack.length) result += stack.pop();
  return result;
}
console.log("10:", reverseStack(str));
