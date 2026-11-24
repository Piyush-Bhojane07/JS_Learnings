var subtractProductAndSum = function(n) {
    // while loop
    // 1 1 digit 
    // mul -> add
    // mul - sub -> result
    let mul = 1;
    let add = 0;
    while(n > 0){
        last = n % 10;
        mul = last * mul;
        add = last + add;

        n = Math.floor(n / 10);    }    

        return mul - add;
};