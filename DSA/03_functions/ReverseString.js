function reverseString() {
  let str = "Piyush";
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

console.log(reverseString());
