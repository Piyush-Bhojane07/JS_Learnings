// https://leetcode.com/problems/concatenation-of-array/

let nums = [1, 3, 2, 1];
let ans = []; // [1,2,1,1,2,1]

let count = nums.length;

for(let i = 0; i < nums.length; i++){
    ans[i] =  nums[i];
    ans[count] = nums[i];
    count++;
}

console.log("ans", ans);