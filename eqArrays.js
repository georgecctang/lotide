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
  // Base case: the elements of the two inputs are primitive and equal
  return true;
}

module.exports = eqArrays;