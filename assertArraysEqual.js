/*
Create a function to assert the equality of two arrays
*/

// eqArrays functions from eqArrays.js
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

// Function Implementation
function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢🟢🟢 Assertion Passed: The two arrays are equal.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: The two arrays are not equal.`);
  }
}

// Test code
// Strict equal
assertArraysEqual([1,2,3],[1,2,3]);
// Not strictly equal
assertArraysEqual([1,2,3],[1,2,'3']);
// Not equal
assertArraysEqual([1,2,3],[1,2,3,4]);

