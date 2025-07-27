let score = "Piyush"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score) 
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // with give no.


// let valueInNumber = BigInt(score)  // ❌ Throws error
// console.log(typeof valueInNumber);

// let score = "12345";
// let valueInNumber = BigInt(score);
// console.log(typeof valueInNumber); // bigint


//below conversion
// "33" => 33
// const num = Number(strVar)
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Piyush"
let emptyStr = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanEmptyStr = Boolean(emptyStr)
//  console.table(` booleanIsLoggedIn will give ${booleanIsLoggedIn}  & booleanEmptyStr will give ${booleanEmptyStr} `);

 //str convert to boolean will give true
 // EMPTY str convert to boolean will give false

// 1 => true; 0 => false
// "" => false
// "Piyush" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);// 2 * 2 * 2 
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Piyush"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);// if first is string treat all as string
// console.log(1 + 2 + "2");//if first is number treat all as number but when str comes attach the str
// console.log(1 + 2 + "2" + 5 + 2 + "20" + 10 + "11" + "12");//325220101112

// console.log( (3 + 4) * 5 % 3);


// console.log(true);
// console.log(""); // empthy line

// //converts to  number
// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// console.log(num2);

let gameCounter = 100
//pre increament
// console.log(++gameCounter);

//post increament
// console.log(gameCounter++);
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion