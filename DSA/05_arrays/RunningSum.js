// Input: nums = [1, 2, 3, 4];
// Output: [1, 3, 6, 10];

let nums = [3 , 1, 2, 10, 1];

let ans = []; 

for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for(let j = i; j >= 0; j--){
        sum = sum + nums[j]
    }
  ans[i] = sum;
}

console.log("ans", ans);