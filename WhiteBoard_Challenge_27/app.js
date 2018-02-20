'use strict';

const solution = module.exports = {};

solution.rotateArr = function(arr) {
  if(typeof arr !== 'object') return null;
  let results = [
    [],
    [],
    [],
  ];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 3; j > 0; j--) {
      results[i].push(arr[j-1][i]);
    }
  }
  return results;
};
