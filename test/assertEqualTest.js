const assertEqual = require ('../assertEqual');

// TEST CODE

// STRICTLY EQUAL: Identical strings
assertEqual("apples", "apples");

// STRICTLY EQUAL: Identical numbers
assertEqual(1, 1);

// STRICTLY EQUAL: Undefined data
assertEqual(undefined, undefined);

// UNEQUAL: Different numbers
assertEqual(1, 2);

// UNEQUAL: Different strings
assertEqual("apples", "oranges");

// UNEQUAL: Different data types
assertEqual(1, '1');

// UNEQUAL: Object data types (Array)
assertEqual([1], [1]);

// UNEQUAL: Object data types
assertEqual({a: 1}, {a : 1});