const assert = require('chai').assert;
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');


describe("#middle", () => {
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
  it("returns undefined for a string input", () => {
    assert.strictEqual(middle('notArray'), undefined);
  });
  it("returns undefined for a number input", () => {
    assert.strictEqual(middle(100), undefined);
  });
  it("returns undefined for an object input", () => {
    assert.strictEqual(middle({a: 1}), undefined);
  });
});


// // Test Code
// // Array with length less than 3
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([0]), []);
// assertArraysEqual(middle([0,1]), []);

// // Array with length of odd number
// assertArraysEqual(middle([0,1,2]), [1]);
// assertArraysEqual(middle([0,1,2,3,4]), [2]);

// // Array with length of even number
// assertArraysEqual(middle([0,1,2,3]), [1, 2]);
// assertArraysEqual(middle([0,1,2,3,4,5]), [2,3]);