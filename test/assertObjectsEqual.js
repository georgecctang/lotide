const assertObjectsEqual = require('../assertObjectsEqual');

// Test Code

// Equal objects with primitive data types
assertObjectsEqual({ a:1, b:2 }, { a:1, b:2 });

// Equal objects with non-primitive data types
assertObjectsEqual({ a:1, b:[0,1,2] }, { a:1, b:[0,1,2] });

// Non-equal objects with primitive data types
assertObjectsEqual({ a:1, b:2 }, { a:1, b:3 });

// Unequal objects with non-primitive data types
assertObjectsEqual({ a:1, b:[0,1,2] }, { a:1, b:[0,1,3] });