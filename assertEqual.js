// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// Identical strings
assertEqual("apples", "apples");
// Non-identical strings
assertEqual("apples", "oranges");
// Identical numbers
assertEqual(1, 1);
// Non-identical numbers
assertEqual(1, 2);