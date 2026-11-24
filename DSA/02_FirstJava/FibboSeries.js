// 0 1 1 2 3 5...

console.log('0' + '1');
let n = 6
let a = 0;
let b = 1
let loop = 2
while(n >= loop) {
    next = a + b;
    a = b;
    b = next;
    
    console.log(next);
    loop++
}