const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test Code
// Array with length less than 3
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([0]), []);
assertArraysEqual(middle([0,1]), []);

// Array with length of odd number
assertArraysEqual(middle([0,1,2]), [1]);
assertArraysEqual(middle([0,1,2,3,4]), [2]);

// Array with length of even number
assertArraysEqual(middle([0,1,2,3]), [1, 2]);
assertArraysEqual(middle([0,1,2,3,4,5]), [2,3]);