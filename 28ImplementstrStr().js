// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// -------------------------------------------------------------------------------

// note function takes in two string inputs

var strStr = function(haystack, needle) {
  if (haystack == null || needle == null) return -1;

  if (needle == "") return 0;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // j is outside of the for loop because it is used again in the conditional.
    let j;
    for (j = 0; j < needle.length; j++) {
      if (haystack.charAt(i + j) != needle.charAt(j)) break;
    }
    if (j == needle.length) return i;
  }

  return -1;
};
