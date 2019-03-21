// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

// -------------------------------------------------------------------------------

var searchInsert = function(nums, target) {
  if (nums.includes(target)) return nums.indexOf(target);
  else if (target > nums[nums.length - 1]) return nums.length;
  else if (target < nums[0]) return 0;
  else {
    let i = 0;
    for (; i <= nums.length - 1; i++) {
      if (target < nums[i]) {
        return i;
      }
    }
  }
};

// binary search
//nogo
var searchInsert2 = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 <= end) {
    let mid = start + (end - start) / 2;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      //(nums[mid] < target)
      start = mid;
    }

    if (nums[end] < target) {
      return end + 1;
    } else if (nums[start] >= target) {
      return start;
    } else {
      return end;
    }
  }
};

// binary search 2nd attempt
//nogo
var searchInsert3 = function(nums, target) {
  let high = nums.length - 1;
  let low = 0;

  while (low + 1 < high) {
    let mid = low + (high - low) / 2;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid;
    } else {
      //(nums[mid] < target)
      low = mid;
    }

    if (nums[high] < target) return high + 1;
    else if (nums[low] >= target) return low;
    else return high;
  }
};
