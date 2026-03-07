function sumOfEvenOddNega(){
 let arr = [1, 2, -2, 3, -4, 4, 5, 7, 8];
let sumEven =0;
let sumOdd = 0;
let sumNeg = 0;
 for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        sumEven += arr[i];
    } else if (arr[i] % 2 !== 0) {
      sumOdd += arr[i];
    } else if (arr[i] < 0){
        sumNeg += arr[i]
    }
 } console.table(sumEven, sumOdd, sumNeg)
}

sumOfEvenOddNega()