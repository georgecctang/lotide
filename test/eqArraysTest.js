const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test code

// Equal empty arrays
assertEqual(eqArrays([],[]), true);

// Equal unnested arrays
assertEqual(eqArrays([0, 1, 2], [0, 1, 2]), true);

// Equal nested arrays
assertEqual(eqArrays([0, 1, [2], 3], [0, 1, [2], 3]), true);

// Equal nested arrays
assertEqual(eqArrays([0, [1, [2]], 3], [0, [1, [2]], 3]), true);

// Unequal unnested arrays
assertEqual(eqArrays([0, 1, 2], [0, 1, 2, 3]), false);

// Unequal unnested arrays
assertEqual(eqArrays([0, 1, 2], [0, 1, 3]), false);

// Unequal nested arrays
assertEqual(eqArrays([0, 1, 2], [0, 1, [2]]), false);

// Unequal nested arrays
assertEqual(eqArrays([0, 1, [2]], [0, 1, [3]]), false);