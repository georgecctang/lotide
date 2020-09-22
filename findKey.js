/*
Returns the key of the first element callback returns truthy for instead of the element itself.
*/

// // Helper Functions
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// Function Implementation

const findKey = function(object, callback) {

  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKey; 

// // Test code

// // Test #1
// let obj = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };
// let cb = x => x.stars === 2

// assertEqual(findKey(obj , cb), 'noma');

// // Test #2
// obj = {
//   "John": {age: 30, isMember: false},
//   "Betty": {age: 25, isMember: false},
//   "Sean": {age: 38, isMember: true},
//   "Alice": {age: 45, isMember: true}
// }

// cb = x => x.isMember === true;
// assertEqual(findKey(obj , cb), 'Sean');

// // Test #3
// obj = {
//   "John": {age: 30, height: 170},
//   "Betty": {age: 25, height: 165},
//   "Sean": {age: 38, height: 175},
//   "Alice": {age: 45, height: 168}
// }

// cb = x => x.height > 180;
// assertEqual(findKey(obj , cb), undefined);
