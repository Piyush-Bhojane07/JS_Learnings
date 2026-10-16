// To calculate Fibonacci Series up to n numbers.

function Fibonacci(value){
    let series = [];
    let a = 0 , b = 1;
    for (let i = 0; i < value; i++) {
      series.push(a);

      let next = a + b;
      a = b;
      b = next;
    }
    return series;
}

console.log(Fibonacci(5))