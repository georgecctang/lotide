// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const head = require('../head');

// TEST CODE

describe("#head", () => {
  it("returns 0 for [0]", () => {
    assert.strictEqual(head([0]), 0);
  });
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns undefined for a string input", () => {
    assert.strictEqual(head('notArray'), undefined);
  });
  it("returns undefined for a number input", () => {
    assert.strictEqual(head(100), undefined);
  });
  it("returns undefined for an object input", () => {
    assert.strictEqual(head({a: 1}), undefined);
  });
});


// // Array with more than 1 elements
// assertEqual(head(['a','b','c']), 'a');
// // Array with 1 element
// assertEqual(head([100]), 100);
// // Empty array
// assertEqual(head([]), undefined);
// // Wrong input data type: string
// assertEqual(head('notArray'), undefined);
// // Wrong input data type: number
// assertEqual(head(1), undefined);