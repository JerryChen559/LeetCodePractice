// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// -------------------------------------------------------------------------------

var twoSum = function(nums, target) {
  // steps: clone, sort, find index from original array
  let nums2 = nums.slice(0);
  let sortedNums = nums2.sort((a, b) => a - b);
  // return sortedNums
  let i = 0;
  let j = sortedNums.length - 1;
  while (i < j) {
    if (sortedNums[i] + sortedNums[j] == target) {
      return [nums.indexOf(sortedNums[i]), nums.lastIndexOf(sortedNums[j])];
    }
    if (sortedNums[i] + sortedNums[j] < target) {
      i++;
    }
    if (sortedNums[i] + sortedNums[j] > target) {
      j--;
    }
  }
};

// // create a cloned array w/ values and their positions.
// var twoSum2 = function(nums, target) {
//   let values = [];
//   for (let i = 0; i < nums.length; i++) {
//       values.push([i, nums[i]])
//   }
//   values.sort((a, b) => a[1] - b[1])

//   for (let i = 0, j = nums.length - 1; i < j; ) {
//       if (values[i][1] + values[j][1] == target) {
//           if (values[i][0] < values[j][0]) return [values[i][0], values[j][0]]
//           else return [values[j][0], values[i][0]]
//       }

//       if (values[i][1] + values[j][1] > target) j--
//       else i++
//   }
// };

// // works for unsorted array. o(n^2)
// var twoSum1 = function(nums, target) {
// for (let i = 0; i < nums.length; i++){
//     for (let j = i+1; j < nums.length; j++) {
//         if (nums[i]+nums[j]==target){
//             return [i, j]
//         }
//     }
// }

// };
