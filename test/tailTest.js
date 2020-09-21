const assert = require('chai').assert;
const tail = require('../tail');
// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');

describe("#tail", () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns undefined for a string input", () => {
    assert.strictEqual(tail('notArray'), undefined);
  });
  it("returns undefined for a number input", () => {
    assert.strictEqual(tail(100), undefined);
  });
  it("returns undefined for an object input", () => {
    assert.strictEqual(tail({a: 1}), undefined);
  });
});




// // TEST CODE

// // Array with length > 1
// assertArraysEqual(tail([0, 1, 2]), [1, 2]);

// // Array with length  = 1
// assertArraysEqual(tail([0]), []);

// // Array with length  = 0
// assertArraysEqual(tail([]), []);

// // Wrong input data type (string)
// assertEqual(tail('notArray'), undefined);

// // Wrong input data type (number)
// assertEqual(tail(1), undefined);

// // Wrong input data type (object)
// assertEqual(tail({a: 1}), undefined);