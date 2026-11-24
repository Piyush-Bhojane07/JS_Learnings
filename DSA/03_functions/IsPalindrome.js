function isPalindrome() {
    let str = "piyush";
    let last = str.length - 1;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] != str[last]) {
    return false;
  }last--;
} return true;

}

console.log(isPalindrome())