```javascript
// ========================================
// JAVASCRIPT ARRAY METHODS - SIMPLE NOTES
// ========================================

let arr = [10, 20, 30, 40];

// 1. push() - Add element at the end
arr.push(50);
console.log("push:", arr); // [10, 20, 30, 40, 50]

// 2. pop() - Remove last element
arr.pop();
console.log("pop:", arr); // [10, 20, 30, 40]

// 3. unshift() - Add element at the beginning
arr.unshift(5);
console.log("unshift:", arr); // [5, 10, 20, 30, 40]

// 4. shift() - Remove first element
arr.shift();
console.log("shift:", arr); // [10, 20, 30, 40]

// 5. splice() - Add, remove, or replace elements
let a1 = [10, 20, 30, 40];
a1.splice(1, 1);
console.log("splice:", a1); // [10, 30, 40]

// 6. slice() - Copy a portion of an array
let a2 = [10, 20, 30, 40];
console.log("slice:", a2.slice(1, 3)); // [20, 30]

// 7. includes() - Check whether value exists
console.log("includes:", arr.includes(20)); // true

// 8. indexOf() - Find the index of a value
console.log("indexOf:", arr.indexOf(30)); // 2

// 9. find() - Return first matching element
let a3 = [5, 12, 18, 25];
console.log("find:", a3.find(n => n > 15)); // 18

// 10. findIndex() - Return index of first match
console.log("findIndex:", a3.findIndex(n => n > 15)); // 2

// 11. map() - Transform every element
console.log("map:", arr.map(n => n * 2));
// [20, 40, 60, 80]

// 12. filter() - Keep elements matching condition
console.log("filter:", arr.filter(n => n > 20));
// [30, 40]

// 13. reduce() - Combine elements into one result
console.log(
  "reduce:",
  arr.reduce((sum, n) => sum + n, 0)
); // 100

// 14. forEach() - Run code for every element
console.log("forEach:");
arr.forEach(n => console.log(n));
// 10
// 20
// 30
// 40

// 15. flat() - Flatten a nested array
console.log("flat:", [1, [2, 3], [4, 5]].flat());
// [1, 2, 3, 4, 5]

// 16. sort() - Sort numbers in ascending order
console.log("sort:", [30, 10, 20].sort((a, b) => a - b));
// [10, 20, 30]

// 17. reverse() - Reverse an array
console.log("reverse:", [10, 20, 30].reverse());
// [30, 20, 10]

// 18. join() - Convert array into a string
console.log("join:", arr.join("-"));
// "10-20-30-40"

// 19. concat() - Combine arrays
console.log("concat:", arr.concat([50, 60]));
// [10, 20, 30, 40, 50, 60]

// 20. at() - Access an element by index
console.log("at:", arr.at(-1)); // 40 (last element)

// 21. some() - Check if at least one element matches
console.log("some:", arr.some(n => n > 30)); // true

// 22. every() - Check if all elements match
console.log("every:", arr.every(n => n > 0)); // true

// 23. Array.isArray() - Check whether value is an array
console.log("isArray:", Array.isArray(arr)); // true

// 24. toString() - Convert array into a string
console.log("toString:", arr.toString());
// "10,20,30,40"

// 25. lastIndexOf() - Find the last matching index
console.log("lastIndexOf:", [10, 20, 10, 30].lastIndexOf(10));
// 2

// 26. fill() - Fill array elements with a value
console.log("fill:", [1, 2, 3].fill(0));
// [0, 0, 0]

// 27. flatMap() - Map elements and flatten one level
console.log("flatMap:", [1, 2, 3].flatMap(n => [n, n * 2]));
// [1, 2, 2, 4, 3, 6]

// 28. reduceRight() - Reduce from right to left
console.log(
  "reduceRight:",
  ["a", "b", "c"].reduceRight((result, item) => result + item, "")
);
// "cba"

// 29. keys() - Get array indexes
console.log("keys:", [...arr.keys()]);
// [0, 1, 2, 3]

// 30. values() - Get array values
console.log("values:", [...arr.values()]);
// [10, 20, 30, 40]

// 31. entries() - Get index-value pairs
console.log("entries:", [...arr.entries()]);
// [[0, 10], [1, 20], [2, 30], [3, 40]]

// 32. Array.from() - Create an array from an iterable
console.log("Array.from:", Array.from("hello"));
// ["h", "e", "l", "l", "o"]

// 33. Array.of() - Create an array from given arguments
console.log("Array.of:", Array.of(10, 20, 30));
// [10, 20, 30]

// 34. copyWithin() - Copy part of array within itself
console.log("copyWithin:", [1, 2, 3, 4].copyWithin(0, 2));
// [3, 4, 3, 4]

// 35. with() - Return a copy with one index replaced
console.log("with:", [10, 20, 30].with(1, 99));
// [10, 99, 30]

// 36. toReversed() - Return a reversed copy
console.log("toReversed:", [1, 2, 3].toReversed());
// [3, 2, 1]

// 37. toSorted() - Return a sorted copy
console.log("toSorted:", [3, 1, 2].toSorted((a, b) => a - b));
// [1, 2, 3]

// 38. toSpliced() - Return a copy with elements removed
console.log("toSpliced:", [10, 20, 30].toSpliced(1, 1));
// [10, 30]

// 39. findLast() - Find last element matching condition
console.log("findLast:", [2, 5, 8, 11].findLast(n => n > 4));
// 11

// 40. findLastIndex() - Find index of last matching element
console.log("findLastIndex:", [2, 5, 8, 11].findLastIndex(n => n > 4));
// 3
```