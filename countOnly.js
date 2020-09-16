/*
  Create a function that count number of item occurrence on a list
  based on a boolean condition
*/

//Import helper function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function Implementation

const countOnly = function(allItems, itemsToCount) {
  const output = {};
  for (const item of allItems) {
    // Execute only if itemsToCount[item] returns true
    if (itemsToCount[item]) {
      if (output[item]) {
        // Increment count if item already exists in output
        output[item] += 1;
      } else {
        // Add new property in output if item is not a property
        output[item] = 1;
      }
    }
  }
  return output;
};

// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
