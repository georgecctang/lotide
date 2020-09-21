const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE

// Equal empty arrays
assertArraysEqual([],[]);
// EQUAL unnested arrays
assertArraysEqual([0,1,2],[0,1,2]);
// EQUAL nested arrays
assertArraysEqual([0,1,[2]],[0,1,[2]]);
// EQUAL nested arrays
assertArraysEqual([0,1,[2,[3]]],[0,1,[2,[3]]]);

// Unequal arrays
assertArraysEqual([0,1,2],[0,1,2,3]);
// Unequal arrays
assertArraysEqual([0,1,2],[0,1,'2']);
// Unequal nested arrays
assertArraysEqual([0,1,2],[0,1,[2]]);
// Unequal nested arrays
assertArraysEqual([0,1,[2,[3]]],[0,1,[2,3]]);
