const tail = require('../tail');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE

// Array with length > 1
assertEqual(eqArrays(tail([0, 1, 2]), [1, 2]), true);

// Array with length  = 1
assertEqual(eqArrays(tail([0]), []), true);

// Array with length  = 0
assertEqual(eqArrays(tail([]), []), true);

// Wrong input data type (string)
assertEqual(tail('notArray'), undefined);

// Wrong input data type (number)
assertEqual(tail(1), undefined);

// Wrong input data type (object)
assertEqual(tail({a: 1}), undefined);