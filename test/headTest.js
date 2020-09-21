const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE

// Array with more than 1 elements
assertEqual(head(['a','b','c']), 'a');
// Array with 1 element
assertEqual(head([100]), 100);
// Empty array
assertEqual(head([]), undefined);
// Wrong input data type: string
assertEqual(head('notArray'), undefined);
// Wrong input data type: number
assertEqual(head(1), undefined);