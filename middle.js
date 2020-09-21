
/*
Return the middle element(s) of an array
If array length is odd, return the 1 middle element
If array length is even, retrun the 2 middle elements
*/

// Function Implementation
const middle = function(array) {
  // Return undefined if input is not an array
  if (!Array.isArray(array)) { return undefined; }
  
  // Return empty array if array length < 3
  if (array.length < 3) { return []; }
  
  const isOdd = array.length % 2;
  const middleIndex = (array.length - 1) / 2;
  if (isOdd) {
    // middleIndex should be an integer
    // Select element by middleIndex
    return [array[middleIndex]];
  } else {
    // middleIndex should be in the form of #.5
    // Select elements with indexes immediately above and below middlelIndex
    return [array[Math.floor(middleIndex)], array[Math.ceil(middleIndex)]];
  }
};

module.exports = middle;
