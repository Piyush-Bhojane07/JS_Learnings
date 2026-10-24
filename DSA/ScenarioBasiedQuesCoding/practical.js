  let arr = ["piyush", "sarthak", "piyush", "sarthak"];

function forLoop () {
    for(let i = 0; i < arr.length; i++){
        console.log(`arr[${i}] => ${arr[i]}`)
    }
}

// forLoop()
function forOf () {
    for(let ele of arr){
        console.log(`${ele}`);
    }
}

forOf()
///////////////////////

 // 1. Simple for loop
console.log("1. FOR LOOP");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. for...in loop
console.log("\n2. FOR...IN LOOP");
const user = {
    name: "Piyush",
    age: 26
};
for (let key in user) {
    console.log(key, user[key]);
}

// 3. for...of loop
console.log("\n3. FOR...OF LOOP");
const fruits = ["Apple", "Mango", "Banana"];
for (let fruit of fruits) {
    console.log(fruit);
}

// 4. Spread operator (...)
console.log("\n4. SPREAD OPERATOR");
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
