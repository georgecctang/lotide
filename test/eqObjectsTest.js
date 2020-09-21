const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// TEST CODE

describe("#eqObjects", () => {
  it("returns true for empty object inputs", () => {
    let input1 = {};
    let input2 = {};
    assert.isTrue(eqObjects(input1, input2));
  });
  it("returns true for two equal objects", () => {
    let input1 = {a: 1, b: 2};
    let input2 = {a: 1, b: 2};
    assert.isTrue(eqObjects(input1, input2));
  });
  it("returns true for two equal nested objects", () => {
    let input1 = {a: 1, b: {c: 1}, d: {e: {f: 1}}};
    let input2 = {a: 1, b: {c: 1}, d: {e: {f: 1}}};
    assert.isTrue(eqObjects(input1, input2));    
  });
  it("returns true for two equal objects with array values", () => {
    let input1 = {a: 1, b: [1,2,3]};
    let input2 = {a: 1, b: [1,2,3]};
    assert.isTrue(eqObjects(input1, input2));    
  });
  it("returns true for two equal objects with objects in arrays", () => {
    let input1 = {a: 1, b: [1,2,{c: 3}]};
    let input2 = {a: 1, b: [1,2,{c: 3}]};
    assert.isTrue(eqObjects(input1, input2));    
  });
  it("returns true for two equal objects with nested arrays", () => {
    let input1 = {a: 1, b: [1,2, [3, 4]]};
    let input2 = {a: 1, b: [1,2, [3, 4]]};
    assert.isTrue(eqObjects(input1, input2));    
  });

  it("returns false for two unequal objects", () => {
    let input1 = {a: 1};
    let input2 = {a: 1, b: 2};
    assert.isFalse(eqObjects(input1, input2));
  });

  it("returns false for two unequal objects", () => {
    let input1 = {a: 1, b: 2};
    let input2 = {a: 1, c: 2};
    assert.isFalse(eqObjects(input1, input2));
  });
  it("returns false for two unequal nested objects", () => {
    let input1 = {a: 1, b: {c: 1}};
    let input2 = {a: 1, b: {c: 2}};
    assert.isFalse(eqObjects(input1, input2));
  });
  it("returns false for two unequal objects with unequal arrays", () => {
    let input1 = {a: 1, b: [1,2,3]};
    let input2 = {a: 1, b: [1,2,4]};
    assert.isFalse(eqObjects(input1, input2));
  });
});