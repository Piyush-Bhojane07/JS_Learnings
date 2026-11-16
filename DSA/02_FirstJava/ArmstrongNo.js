function isArmstrongNum () {
    let num = 47;


    //last - cube - add - added == ori

    let original = num;
    let sum = 0;
    let last = 0;
    let prod = 1

    while(num > 0){
        last  = num % 10;
        prod = last * last * last;
        sum = sum + prod;
        num = Math.floor(num / 10);

    }

    if(original == sum){
        return true;
    }
    return false;


}

console.log(isArmstrongNum())