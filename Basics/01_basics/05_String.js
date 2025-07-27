const name = "Piyush"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String("piyush-com")

// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__) // {}
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.toUpperCase())
// console.log(gameName.toUpperCase)//[Function: toUpperCase]
// console.log(gameName.indexOf('t')) // not found = -1
// console.log(gameName.index0f('p'))


const newString = gameName.substring(0, 4)
// console.log(newString);

const newStrSlice = gameName.slice(0, 4)
// const newStrSlice = gameName.slice(-8, 4)
console.log(newStrSlice)
//do clg for below code -->>
"JavaScript".slice(0, 4);     // "Java"
"JavaScript".substring(0, 4); // "Java"

"JavaScript".slice(-6);       // "Script" ✅
"JavaScript".substring(-6);   // "JavaScript" ❌ (negative treated as 0)

"JavaScript".slice(4, 1);       // "" ❌ empty
"JavaScript".substring(4, 1);   // "ava" ✅ swaps to (1, 4)

// Use slice() when you want negative indices or consistent behavior.

// Use substring() if you're working with legacy code — but avoid it in modern JavaScript.

//trim - delete the extra space
const newStringOne = "   piyush    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://piyush.com/piyush%77Bhojane"

// console.log(url.replace('%77', '-'))

// console.log(url.includes('sundar'))

// console.log(url)
console.log(gameName.split('-'));  //[ 'piyush', 'com' ]