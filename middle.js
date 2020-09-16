
/*
Create a function to return the middle element(s) of an array
If the array length is odd, return the 1 middle element
If the array length is even, retrun the 2 middle elements
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
const middle = function(array) {
  // Return empty array if array length < 3
  if (array.length < 3) {
    return [];
  }
  const isOdd = array.length % 2;
  const middleIndex = (array.length - 1) / 2;
  if (isOdd) {
    // middleIndex should be an integer
    // Select element by middleIndex
    return [array[middleIndex]];
  } else {
    // middleIndex should be in the form of #.5
    // Select elements with indexes immediately above and below middlelIndex
    return [array[Math.floor(middleIndex)], array[Math.ceil(middleIndex)]];
  }
};

// Test Code
// Array with length less than 3
assertArraysEqual(eqArrays(middle([]), []), true);
assertArraysEqual(eqArrays(middle(['a','b']), []), true);

// Array with length of odd number
assertArraysEqual(eqArrays(middle(['a','b','c','d','e']), ['c']), true);

// Array with length of even number
assertArraysEqual(eqArrays(middle(['a','b','c','d','e','f']), ['c','d']), true);
