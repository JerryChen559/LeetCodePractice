// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// -------------------------------------------------------------------------------

var reverse = function(x) {
  let flipped_x = 0;
  while (x != 0) {
    flipped_x = flipped_x * 10 + (x % 10);
    x = (x - (x % 10)) / 10;
  }

  let min = -1 * Math.pow(2, 31);
  let max = Math.pow(2, 31) - 1;
  if (flipped_x >= max || flipped_x <= min) return 0;
  return flipped_x;
};

var reverse2 = function(x) {
  let flipped = x
    .toString()
    .split("")
    .reverse();
  if (flipped[flipped.length - 1] == "-") {
    flipped.pop();
    flipped.unshift("-");
  }
  let answer = +flipped.join("");

  if (answer < -1 * 2 ** 31) return 0;
  if (answer > 2 ** 31 - 1) return 0;
  return answer;
};
