/*
  Return the equality of two arrays
*/

const eqArrays = function(arr1, arr2) {

  // Base case: one of the inputs is not an array
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  // Base case: the lengths of the inputs are not equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // Recursive case: the items of both inputs at one index are arrays
    if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      if (eqArrays(arr1[i], arr2[i]) === false) {
        return false;
      } 
    // Base case: the items of the two inputs at one index are unequal
    } else if (arr1[i] !== arr2[i]) {
        return false;
    }     
  }
  // Base case: the item of the two inputs are primitive and equal
  return true;
}

// Test code

let a1 = [1,2,3,[]];
let a2 = [1,2,3,[]];

console.log(eqArrays(a1,a2));



// // assertEqual function from assertEqual.js
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // Function implementation
// const eqArrays = function(array1, array2) {
//   // check length; if unequal, return false
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// // Test code
// // unequal length; should return false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

// // unequal arrays; should return false
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// // not strictly unequal; should return false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// // strict equal; should return true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

// // strict equal; should return true
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// // strict equal (empty arrays); should return true
// assertEqual(eqArrays([],[]), true);