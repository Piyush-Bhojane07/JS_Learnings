
function isPalindrome(){

    
let str = "abcba";

let last = str.length - 1;
for (let i = 0; i < str.length; i++) {

  if (str.charAt(i) != str.charAt(last)) {
    return false;
  }
  last--;
}
return true;
}

console.log(isPalindrome())