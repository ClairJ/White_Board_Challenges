'use strict';

const solution = module.exports = {};

solution.intersect = function(arr1, arr2) {
  if(typeof arr1 !== 'object' && arr1.length < 1 || typeof arr2 !== 'object' && arr2.length < 1) return null;
  let arr3 = arr1.concat(arr2);
  let loopLength;
  if(arr1.length > arr2.length) {
    loopLength = arr2.length;
  } else {  loopLength = arr1.length;
  }


  let results = [];
  for (var i = 0; i < loopLength; i++) {
    if(arr3[i] === arr3[i + loopLength]) results.push(arr3[i]);
  }
  return results;
};
