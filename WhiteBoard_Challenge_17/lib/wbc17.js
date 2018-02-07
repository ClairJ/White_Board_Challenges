'use strict';

const wbc17 = module.exports = {};
const K_ary = require('./treeC.js');

let testingShit = new K_ary;

testingShit.insert(5);
testingShit.insert(6, 5);
testingShit.insert(7, 6);

wbc17.solution = function() {
  console.log('testing === ', testingShit);
  console.log('testing val === ', testingShit.root.val);
  // console.log('itterate === ', testingShit.breadthFirst());
};

wbc17.solution();
