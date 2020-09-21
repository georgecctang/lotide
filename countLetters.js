/*
  Return the count of the occurrences of each letter in a string
*/

//Import helper function

const assertEqual = require('./assertEqual');

// Function Implementation

const countLetters = function(string) {
  let output = {};
  for (const char of string) {
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
};

module.exports = countLetters;

// // Test code
// let input = 'hippopotamus';

// let result = countLetters(input);

// assertEqual(result.p, 3);
// assertEqual(result.o, 2);
// assertEqual(result.a, 1);
// assertEqual(result.b, undefined);

// // Make sure the input is not changed
// assertEqual(input, 'hippopotamus');