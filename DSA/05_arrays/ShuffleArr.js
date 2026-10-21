let nums = [1, 2, 3, 4, 4, 3, 2, 1];
let n = 4;
let ans = [];

function shuffleArr(nums, n) {
  for (let i = 0; i < nums.length / 2 ; i++) {
    ans[ 2 * i] = nums[i];
    ans[2 * i + 1] = nums[i + n];
  }

  return ans;
}

console.log(shuffleArr(nums, n));
