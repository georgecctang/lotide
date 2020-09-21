/*
  Return the first element of an array
*/

// IMPORT MODULES
const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const head = function(arr) {
  // return undefined if input is not an array
  if (!Array.isArray(arr)) {
    return undefined;
  }
  return arr[0];
};

// TEST CODE

// Array with more than 1 elements
assertEqual(head(['a','b','c']), 'a');
// Array with 1 element
assertEqual(head([100]), 100);
// Empty array
assertEqual(head([]), undefined);
// Wrong input data type: string
assertEqual(head('notArray'), undefined);
// Wrong input data type: number
assertEqual(head(1), undefined);