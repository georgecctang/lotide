/*
  Return the equality of two objects  
*/

const eqObjects = function(obj1, obj2) {

  // Base case: One of the inputs is not an object
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  // Base Case: Number of properties of the 2 objects not equal
  if (Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
  // Base Case: one of the objects is an array and the other is not
  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return false;
  }

  for (let key in obj1) {
    // Recursive Case: The values of a key in both objects are objects
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object' ) {
      if (eqObjects(obj1[key], obj2[key]) === false) {
        return false;
      };

    // Base case: The two values are unequal, or the key only exist in one of the objects
    } else if (obj1[key] !== obj2[key] || !obj2.hasOwnProperty(key)) {
      return false;
    }
  }

  // Base case: The values are both primitive and equal
  return true;
}

module.exports = eqObjects;