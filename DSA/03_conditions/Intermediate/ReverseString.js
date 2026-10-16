//Reverse A String 
const str = "hello";

console.log("Original String:", str);

console.log("1:", str.split("").reverse().join(""));

let rev2 = "";
for (let i = str.length - 1; i >= 0; i--) rev2 += str[i];
console.log("2:", rev2);

let arr3 = [];
for (let char of str) arr3.unshift(char);
console.log("3:", arr3.join(""));

function reverseRecursive(s) {
  return s === "" ? "" : reverseRecursive(s.substr(1)) + s[0];
}
console.log("4:", reverseRecursive(str));

console.log(
  "5:",
  str.split("").reduce((rev, char) => char + rev, "")
);

console.log(
  "6:",
  str
    .split("")
    .map((_, i, arr) => arr[arr.length - 1 - i])
    .join("")
);

let arr7 = str.split("");
let rev7 = "";
while (arr7.length) rev7 += arr7.pop();
console.log("7:", rev7);

console.log("8:", Array.from(str).reverse().join(""));

console.log("9:", [...str].reverse().join(""));

function reverseStack(s) {
  let stack = [];
  for (let char of s) stack.push(char);
  let result = "";
  while (stack.length) result += stack.pop();
  return result;
}
console.log("10:", reverseStack(str));
