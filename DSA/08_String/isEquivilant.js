
function isEquivalant() {
let word1 = ["ab", "c"];
let word2 = ["a", "bc"];

let str1 = word1.join("");
let str2 = word2.join("");

if (str1 === str2) {
  return true;
} else {
  return false;
}


}
console.log(isEquivalant());


