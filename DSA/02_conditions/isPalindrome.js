function isPalindrome() {
  let str = "madam";
  
  let start = "";
  let end = "";

  for(let i = 0; i < str.length / 2; i++){
    start = str.charAt(i);
    end = str.charAt(str.length - i - 1);

    if(start !== end){
        return false
    }
  }return true;
}

console.log(isPalindrome())

