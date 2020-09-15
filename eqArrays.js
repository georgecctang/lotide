// Create a function to check the equality of two arrays

// assertEqual function from assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function implementation
function eqArrays(array1, array2) {
  // check length; if unequal, return false
  if (array1.length !== array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

// Test code
// unequal length; should return false 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false)

// unequal arrays; should return false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)

// not strictly unequal; should return false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)

// strict equal; should return true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)

// strict equal; should return true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)

// strict equal (empty arrays); should return true
assertEqual(eqArrays([],[]), true);