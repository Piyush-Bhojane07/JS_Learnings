let str = "piyush";

let last = str.length - 1;
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[last - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(str, "is a palindrome");
} else {
  console.log(str, "is not a palindrome");
}
