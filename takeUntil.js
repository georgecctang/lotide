/*
Creates a slice of array with elements taken from the beginning.
Elements are taken until callback returns falsey.
*/

// Helper functions
const eqArrays = function(array1, array2) {
  // check length; if unequal, return false
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢🟢🟢 Assertion Passed: The two arrays are equal.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: The two arrays are not equal.`);
  }
};


// Function Implementation
const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

// Test Code

// Slice array until a negative number encountered
let data = [1, 2, 5, -1, 2, 4, 5];
let cb = (num) => num < 0;
assertArraysEqual(eqArrays(takeUntil(data, cb),[1, 2, 5]), true);

// Slice array until "STOP" encountered
data = ['I', 'like', 'pizza', 'STOP', 'and', 'ice cream'];
cb = (word) => word === 'STOP';
assertArraysEqual(eqArrays(takeUntil(data, cb),['I','like','pizza']), true);

// Slice array until an even number encountered
data = [2, 1, 3, 5, 7, 9];
cb = (num) => num % 2 === 0;
assertArraysEqual(eqArrays(takeUntil(data, cb),[]), true);
