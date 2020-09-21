/*
  Print the equality of two arrays
*/

const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

// TEST CODE

// Equal empty arrays
assertArraysEqual([],[]);
// EQUAL unnested arrays
assertArraysEqual([0,1,2],[0,1,2]);
// EQUAL nested arrays
assertArraysEqual([0,1,[2]],[0,1,[2]]);

// EQUAL nested arrays
assertArraysEqual([0,1,[2,[3]]],[0,1,[2,[3]]]);

// Unequal arrays
assertArraysEqual([0,1,2],[0,1,2,3]);
// Unequal arrays
assertArraysEqual([0,1,2],[0,1,'2']);
// Unequal nested arrays
assertArraysEqual([0,1,2],[0,1,[2]]);
// Unequal nested arrays
assertArraysEqual([0,1,[2,[3]]],[0,1,[2,3]]);
