'use strict';

const wbc17 = module.exports = {};
const K_ary = require('./treeC.js');

let testingShit = new K_ary;

testingShit.insert(9);
testingShit.insert(8, 9);
testingShit.insert(7, 9);
testingShit.insert(6, 7);
testingShit.insert(5, 7);
testingShit.insert(4, 7);
testingShit.insert(3, 4);

wbc17.solution = function(tn) {
  // console.log('LENGTH === ', tn.breadthFirst(tn));
  console.log('testing === ', tn.root.children.length);
  console.log('testing val === ', tn);
  console.log('testing depth === ', tn.size());
  // console.log('itterate === ', testingShit.breadthFirst());
};

wbc17.solution(testingShit);
