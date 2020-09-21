/*
Create a function to remove items from an array
*/

// // eqArrays function from eqArrays.js
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

// // assertArraysEqual function from assertArraysEqual.js
// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`🟢🟢🟢 Assertion Passed: The two arrays are equal.`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: The two arrays are not equal.`);
//   }
// };

// Function Implementation

const without = function(source,itemsToRemove) {
  // create a new variable in local scope to prevent overwriting input source variable
  inputArray = [...source];
  // loop through the list of items to remove
  for (let i = 0; i < itemsToRemove.length; i++) {
    // get the index of items to be removed in source
    let removeIndex = inputArray.indexOf(itemsToRemove[i]);
    // enter while loop if there are items to be removed
    while (removeIndex !== -1) {
      sourceArray.splice(removeIndex, 1);
      // update index
      removeIndex = inputArray.indexOf(itemsToRemove[i]);
    }
  }
  return inputArray;
};

module.exports = without;

// // Test Code
// // should return ['c','d']
// assertArraysEqual(without(['a','a','b','c','d','b'], ['a','b']),['c','d']);
// // items not strictly equal should not be removed
// assertArraysEqual(without([1,'2', 2, 3], ['2']),[1,2,3]);
// assertArraysEqual(without(['1','2', 2, '3'], [2]),['1','2','3']);

// // make sure the variable is not modified by without
// let array = [1,2,3];
// without(array,[2]);
// assertArraysEqual(array, [1,2,3]);

