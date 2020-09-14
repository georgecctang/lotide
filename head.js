// function from assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function implementation
const head = function(arr) {
  // return undefined input is empty array or is not an array
  if (arr.length === 0 || !Array.isArray(arr)) {
    return undefined;
  }
  return arr[0];
};

// Test code

// Array with more than 1 elements
console.log(assertEqual(head(['a','b','c']), 'a'));
// Array with 1 element
console.log(assertEqual(head([100]), 100));
// Empty array
console.log(assertEqual(head([]), undefined));
// Not an array
console.log(assertEqual(head('notArray'), undefined));