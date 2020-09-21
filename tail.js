/*
  Return every element except the first element of an array
*/

// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  // return undefined if input is not an array
  if (!Array.isArray(arr)) {
    return undefined;
  }

  return arr.slice(1);
};

module.exports = tail;