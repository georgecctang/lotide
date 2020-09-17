/*
  Create a map function that applies a callback function to an array
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};


// Test Code

// Return the first character of a string
let  words = ["ground", "control", "to", "major", "tom"];
let cb = (item) => item[0];
assertArraysEqual(eqArrays(map(words, cb), ['g','c','t','m','t']),true);

// Return the length of a string
words = ['john','susan',''];
cb = (item) => item.length;
assertArraysEqual(eqArrays(map(words, cb), [4, 5, 0]),true);

// Return the square of number
let numbers = [1,2,3];
cb = (num) => num ** 2;
assertArraysEqual(eqArrays(map(numbers, cb), [1,4,9]),true);

