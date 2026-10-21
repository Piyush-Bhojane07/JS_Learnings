// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.


let count = 0;

function numOfGoodPairsleArr(nums, count) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        console.log(i, j);
        ++count;
      }
    }
  }

  return count;
}

let nums = [1, 2, 3, 1, 1, 3];

count = numOfGoodPairsleArr(nums, count);

console.log("Total Good pairs are - " + count);
