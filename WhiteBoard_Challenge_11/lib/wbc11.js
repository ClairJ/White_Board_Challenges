'use strict';

const finder = module.exports = {};

finder.findThatInterger = function(arr) {
  if (arr.length < 1 || !arr) return null;
  arr.sort(function(a, b) {
    a - b;
  });
  let missingNums = [];
  let counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return null;
    }
    if (counter + 1 !== arr[i]) {
      missingNums.push(arr[i] - 1);
      break;
    }
    counter ++;
  }
  return missingNums;
};
