// array

const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods
const myArr = [0, 1, 2, 3, 4, 5];
console.table([myArr.push(6), myArr.push(7), myArr.pop()]);

/*

myArr.forEach((element) => {
  console.log(element);
});

✅ Correct usage of forEach():
The forEach() method expects a function as an argument. Here's how to use it properly:

✅ Example 1 – Using Arrow Function
js
Copy code
const myArr = [1, 2, 3, 4];

myArr.forEach((item) => {
  console.log(item);
});
🟢 Output:

Copy code
1
2
3
4
✅ Example 2 – Using Named Parameters
js
Copy code
myArr.forEach(function(item) {
  console.log(item);
});
✅ If you want to log each item using forEach():
js
Copy code
const myArr = [10, 20, 30];

myArr.forEach((ele) => {
  console.log(ele);
});
❗Common Mistakes:
let ele : item is not valid JavaScript — that's more like TypeScript/Java/C#-style syntax.

forEach() does not return anything useful, so console.log(myArr.forEach(...)) will print undefined.

✅ If you want both value and index:
js
Copy code
myArr.forEach((item, index) => {
  console.log(`Index: ${index}, Value: ${item}`);
}); */


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);

/*
✅ Array Creation
js
Copy code
const arr1 = [1, 2, 3]; // using literal
const arr2 = new Array(1, 2, 3); // using constructor
✅ 1. push()
Adds element(s) to the end of the array.

js
Copy code
const arr = [1, 2];
arr.push(3);       // returns 3 (new length)
console.log(arr);  // [1, 2, 3]
✅ 2. pop()
Removes the last element and returns it.

js
Copy code
const arr = [1, 2, 3];
const removed = arr.pop();   // returns 3
console.log(arr);            // [1, 2]
✅ 3. unshift()
Adds element(s) at the start of the array.

js
Copy code
const arr = [2, 3];
arr.unshift(1);     // returns 3 (new length)
console.log(arr);   // [1, 2, 3]
✅ 4. shift()
Removes the first element and returns it.

js
Copy code
const arr = [1, 2, 3];
const removed = arr.shift();  // returns 1
console.log(arr);             // [2, 3]
✅ 5. includes()
Checks if an element exists in the array → returns true/false

js
Copy code
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false
✅ 6. indexOf()
Returns the index of the first occurrence of a value. Returns -1 if not found.

js
Copy code
const arr = [10, 20, 30];
console.log(arr.indexOf(20)); // 1
console.log(arr.indexOf(50)); // -1
✅ 7. join()
Returns a string by joining array elements with commas (or specified separator).

js
Copy code
const arr = [1, 2, 3];
console.log(arr.join());      // "1,2,3"
console.log(arr.join("-"));   // "1-2-3"
✅ 8. slice(start, end)
Returns a shallow copy of array from start to end (excluding end). Does not modify original array.

js
Copy code
const arr = [1, 2, 3, 4];
const newArr = arr.slice(1, 3); // [2, 3]
console.log(arr);               // [1, 2, 3, 4]
✅ 9. splice(start, deleteCount, ...items)
Modifies the original array by:

Removing deleteCount elements from start

Optionally inserting new items

js
Copy code
const arr = [1, 2, 3, 4];
const removed = arr.splice(1, 2); // removes 2 and 3
console.log(removed);             // [2, 3]
console.log(arr);                 // [1, 4]

arr.splice(1, 0, 99); // insert 99 at index 1
console.log(arr);     // [1, 99, 4]
✅ 10. concat()
Merges arrays and returns a new array.

js
Copy code
const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]
✅ 11. reverse()
Reverses the array in place.

js
Copy code
const arr = [1, 2, 3];
arr.reverse();     // modifies original
console.log(arr);  // [3, 2, 1]
✅ 12. sort()
Sorts elements as strings by default.

js
Copy code
const arr = [10, 1, 5];
arr.sort();           // modifies original
console.log(arr);     // [1, 10, 5] (string-based)

arr.sort((a, b) => a - b); // proper numeric sort
console.log(arr);          // [1, 5, 10]
✅ 13. map()
Returns a new array with results of applying a function to each element.

js
Copy code
const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2); 
console.log(doubled); // [2, 4, 6]
✅ 14. filter()
Returns a new array with elements that pass a test.

js
Copy code
const arr = [1, 2, 3, 4];
const even = arr.filter(x => x % 2 === 0);
console.log(even); // [2, 4]
✅ 15. reduce()
Reduces array to a single value.

js
Copy code
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
✅ 16. forEach()
Executes a function on each element, but does not return a new array.

js
Copy code
const arr = [1, 2, 3];
arr.forEach(x => console.log(x * 2));
// Output: 2 4 6
*/
