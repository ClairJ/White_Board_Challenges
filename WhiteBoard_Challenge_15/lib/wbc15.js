'use strict';

const K_ary = require('./k-ary_tree.js');
const wbc15 = module.exports = {};

wbc15.solution = function(tn) {
  if(!tn) return null;
  return tn.breadthFirst(tn => {
    console.log('tn ', tn);
  });
};
