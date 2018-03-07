'use strict';

const sll = require('./sll.js');

let solution = function(tree) {
  let testArr = tree.preOrder().sort();
  let testSll = new sll();
  for (var i = 0; i < testArr.length; i++) {
    testSll.add(testArr[i]);
  }
  return testSll;
};

module.exports = solution;
