function armStrong() {
  //123
  //cube of each then add if equal to origianl then is armstrong no
  let num = 153;
  let origianl = num;
  let cube = 0;
  let sum = 0;
 let last = 0;

  while(num > 0) {
    last = num % 10;
   num = Math.floor(num/10)
    console.table(num)
    cube = last * last * last;

    sum += cube;
  }

  if(origianl !== sum){
    return false;
  } return true;
}

console.log(armStrong());

