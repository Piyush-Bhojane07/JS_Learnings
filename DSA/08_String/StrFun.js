// ==========================================
// JAVASCRIPT STRING METHODS FOR LEETCODE
// ==========================================

const str = "Hello World";

// 1. LENGTH — count characters
console.log(str.length); // 11

// 2. ACCESS CHARACTER USING INDEX
console.log(str[0]); // H
console.log(str[1]); // e
console.log(str[str.length - 1]); // d

// 3. charAt() — get character at index
console.log(str.charAt(0)); // H

// 4. toLowerCase() — convert to lowercase
console.log(str.toLowerCase()); // hello world

// 5. toUpperCase() — convert to uppercase
console.log(str.toUpperCase()); // HELLO WORLD

// 6. slice() — extract part of string
console.log(str.slice(0, 5)); // Hello
console.log(str.slice(6)); // World
console.log(str.slice(-5)); // World

// 7. substring() — extract part of string
console.log(str.substring(0, 5)); // Hello

// 8. includes() — check if text exists
console.log(str.includes("World")); // true
console.log(str.includes("Java")); // false

// 9. indexOf() — find first index
console.log(str.indexOf("o")); // 4
console.log(str.indexOf("World")); // 6
console.log(str.indexOf("Java")); // -1

// 10. lastIndexOf() — find last index
console.log(str.lastIndexOf("o")); // 7

// 11. startsWith()
console.log(str.startsWith("Hello")); // true

// 12. endsWith()
console.log(str.endsWith("World")); // true

// 13. replace() — replace first matching occurrence
console.log("banana".replace("a", "x")); // bx nana without space => "bxnana"

// 14. replaceAll() — replace every occurrence
console.log("banana".replaceAll("a", "x")); // bxnxnx

// 15. trim() — remove surrounding whitespace
console.log("  hello  ".trim()); // hello

// 16. split() — convert string to array
console.log("hello".split("")); // ["h","e","l","l","o"]
console.log("red blue green".split(" ")); // ["red","blue","green"]

// 17. join() — convert array to string
console.log(["h", "e", "l", "l", "o"].join("")); // hello

// 18. repeat() — repeat a string
console.log("ab".repeat(3)); // ababab

// 19. charCodeAt() — get character code
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97

// 20. String.fromCharCode() — code to character
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(97)); // a

// ==========================================
// IMPORTANT STRING ITERATION TECHNIQUES
// ==========================================

// 21. FOR LOOP
const word = "hello";

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// 22. FOR...OF LOOP
for (const char of word) {
  console.log(char);
}

// ==========================================
// IMPORTANT LEETCODE PATTERNS
// ==========================================

// 23. REVERSE A STRING
const reverse = word.split("").reverse().join("");
console.log(reverse); // olleh

// 24. COUNT CHARACTERS USING OBJECT
function countCharacters(s) {
  const count = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

console.log(countCharacters("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

// 25. COUNT CHARACTERS USING MAP
function countWithMap(s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}

console.log(countWithMap("banana"));

// 26. REMOVE DUPLICATE CHARACTERS
function removeDuplicates(s) {
  return [...new Set(s)].join("");
}

console.log(removeDuplicates("banana")); // ban

// 27. CHECK PALINDROME
function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// 28. CHECK ANAGRAM
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

// 29. COUNT VOWELS
function countVowels(s) {
  let count = 0;

  for (const char of s.toLowerCase()) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World")); // 3

// 30. TWO POINTERS — PALINDROME CHECK
function isPalindromeTwoPointers(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindromeTwoPointers("madam")); // true
console.log(isPalindromeTwoPointers("hello")); // false
