// function from assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function implementation
const tail = function(arr) {
  // return undefined if input is not an array
  if (!Array.isArray(arr)) {
    return undefined;
  }
  // return empty array if array length is 0 or 1
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};

// Test code
const a = [1,2,3,4];

// Input array with length > 1; Expect [2,3,4]
console.log(tail(a));
// Make sure the original length is not modified
assertEqual(a.length, 4);

// Input array with length = 1; should return []
console.log(tail(['a']));

// Input array with length = 0; should return []
console.log(tail([]));

// Input not an array
console.log(tail('abc'));
