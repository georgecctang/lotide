const tail = require('../tail');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE

// Array with length > 1
eqArrays(tail([0, 1, 2]), [1, 2]);

// Array with length  = 1
eqArrays(tail([0]), []);

// Array with length  = 0
eqArrays(tail([]), []);

// Wrong input data type (string)
assertEqual(tail('notArray'), undefined);

// Wrong input data type (number)
assertEqual(tail(1), undefined);

// Wrong input data type (object)
assertEqual(tail({a: 1}), undefined);