/*
Return a key in an input object with value equal to the input value
*/

// Function Implementation
const findKeyByValue = function(object, value) {
  // loop through the keys
  for (const key in object) {
    if (object[key] === value) {
      // return if there is a match
      return key;
    }
  }
  // return undefined if no value in the object match the input value
  return undefined;
};

module.exports = findKeyByValue;

// Test Code

// const testObject = {
//   text1: 'abc',
//   text2: 'def',
//   num1: 0,
//   num2: 1,
//   num3: 2
// };

// assertEqual(findKeyByValue(testObject, 'abc'), 'text1');
// assertEqual(findKeyByValue(testObject, 0), 'num1');
// assertEqual(findKeyByValue(testObject, 'notInObject'), undefined);