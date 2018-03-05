'use strict';

let solution = function(tree1, tree2) {
  let length = tree1.postOrder().length;
  let length2 = tree2.postOrder().length;
  let heightMin = tree1.findMinHeight();
  let heightMax = tree1.findMaxHeight();
  let heightMin2 = tree2.findMinHeight();
  let heightMax2 = tree2.findMaxHeight();

  if(length === length2 && heightMin === heightMin2 && heightMax === heightMax2) {
    return true;
  } else {
    return false;
  }
};

module.exports = solution;
