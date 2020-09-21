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

module.exports = head;