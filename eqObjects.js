/*
  Create a function to check if two objects are identical
*/

// Helper function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Function Implementation

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

// Test code
// Objects with primitive data type
// Reference object
const ab = { a: "1", b: "2" };

// Equal objects (key order does not matter)
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

// Unequal objects with different number of keys
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

// Unequal objects with different keys
const ac = { a: "1", c: "2" };
assertEqual(eqObjects(ab, ac), false);

// Unequal objects with identical keys but different values
const ac2 = { a: "1", c: "20" };
assertEqual(eqObjects(ab, ac2), false);

// Objects with arrays
// Reference Object
const arrObj1 = { a: [1,2,3], b: 'abc' };

// Equal objects
const arrObj2 = { b: 'abc', a: [1,2,3] };
assertEqual(eqObjects(arrObj1, arrObj2), true);

// Unequal objects with different arrays
const arrObj3 = { a: [1,2,3,4], b: 'abc' };
assertEqual(eqObjects(arrObj1, arrObj3), false);