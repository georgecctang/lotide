/*
  Create a function to assert the equality of two objects
*/

// Helper Functions

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

const eqObjects = function(object1, object2) {
  // check if length of the two objects are equal
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    // Evaluate if the value is an array
    if (Array.isArray(object1[key])) {
      // Check if the two arrays are equal
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // Evalute if the value is not an array
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// Function Implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test Code

// Equal objects with primitive data types
assertObjectsEqual({ a:1, b:2 }, { a:1, b:2 });

// Non-equal objects with primitive data types
assertObjectsEqual({ a:1, b:2 }, { a:1, b:3 });

// Equal objects with non-primitive data types
assertObjectsEqual({ a:1, b:[0,1,2] }, { a:1, b:[0,1,2] });

// Unequal objects with non-primitive data types
assertObjectsEqual({ a:1, b:[0,1,2] }, { a:1, b:[0,1,3] });