let num = 12338;
let last = 0;
let sum = 0;

function sumOfDigit(){
    while(num > 0){
        last = Math.floor(num % 10);
        console.log(last)
        sum = sum + last;
                console.log(last);

        num /= 10;
                console.log(last);

    }
    console.log(sum)
}

sumOfDigit()