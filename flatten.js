/*
  Return an unnested array based on a nested input array
*/

const flatten = function (array) {
  let result = [];
  (function pushItemsToResult(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        pushItemsToResult(item);
      } else {
        result.push(item);
      }
    }
  })(array);
  return result;
}

module.exports= flatten;

// 

// let arr = [0,[1,[2,3]],[4,5],6,[7,[8,9]]]
// console.log(flatten(arr))
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];