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

// const o1 = {a:1, b:{c:1,d:2,g:{h:1,j:{k:1}}}, e: [1,2,3,[4,5,[6]]]};
// const o2 = {a:1, b:{c:1,d:2,g:{h:1,j:{k:1}}}, e: [1,2,3,[4,5,[6]]]};
const o1 = {a: 1, b:{c:1, d:{e:[[1]]}}, f:[1,2]};
const o2 = {a: 1, b:{c:1, d:{e:[[1]]}}, f:[1,2]};
console.log(eqObjects(o1,o2))


// Old implementation for comparing unnested objects
// Helper function
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

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

// // Function Implementation

// const eqObjects = function(object1, object2) {
//   // check if length of the two objects are equal
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   }

//   for (const key in object1) {
//     // Evaluate if the value is an array
//     if (Array.isArray(object1[key])) {
//       // Check if the two arrays are equal
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//       // Evalute if the value is not an array
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// // Test code
// // Objects with primitive data type
// // Reference object
// const ab = { a: "1", b: "2" };

// // Equal objects (key order does not matter)
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// // Unequal objects with different number of keys
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// // Unequal objects with different keys
// const ac = { a: "1", c: "2" };
// assertEqual(eqObjects(ab, ac), false);

// // Unequal objects with identical keys but different values
// const ac2 = { a: "1", c: "20" };
// assertEqual(eqObjects(ab, ac2), false);

// // Objects with arrays
// // Reference Object
// const arrObj1 = { a: [1,2,3], b: 'abc' };

// // Equal objects
// const arrObj2 = { b: 'abc', a: [1,2,3] };
// assertEqual(eqObjects(arrObj1, arrObj2), true);

// // Unequal objects with different arrays
// const arrObj3 = { a: [1,2,3,4], b: 'abc' };
// assertEqual(eqObjects(arrObj1, arrObj3), false);