
/*
Create a function to return the position(s) of each character in a string
*/

// Helper functions from other files
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

const letterPositions = function(sentence) {
  let output = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (output[sentence[i]]) {
        output[sentence[i]].push(i);
      } else {
        output[sentence[i]] = [i];
      }
    }
  }
  return output;
};

// Test Code

let  input = 'hippopotamus';
const result = letterPositions(input);

assertArraysEqual(eqArrays(result.h, [0]), true);
assertArraysEqual(eqArrays(result.p, [2,3,5]), true);
