// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// /✅ Type Coercion:
// JavaScript will automatically convert the string to a number before comparing.


// console.log("2" > 1);
// console.log("0" > 1);

// In relational comparisons like >, JavaScript converts null to a number.

// Number(null) → 0

// So this becomes:
// 0 > 0 → ❌ false
// console.log(null > 0);

// console.log(null == 0);
// null == undefined → true ✅
// null == 0 → false ❌

// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// null >= 0 → true ❗
// // === 


// trict equality operator (===), which means:

// 🔐 No type coercion — both value and type must match exactly.
// console.log("2" === 2);