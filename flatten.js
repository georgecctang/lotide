/*
  Flatten a nested array to an array of one level deep
*/

function flatten (array) {
  let result = [];
  (function worker(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        worker(item);
      } else {
        result.push(item);
      }
    }
  })(array);
  return result;
}

let arr = [0,[1,[2,3]],[4,5],6,[7,[8,9]]]
console.log(flatten(arr))
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];