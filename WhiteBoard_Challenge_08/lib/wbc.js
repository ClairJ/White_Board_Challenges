'use strict';

const solution = require('./lls.js');
const solution2 = module.exports = {};
// best case is O(2) worst case is O(n * 2)

solution2.findIntersection = function(LL1, LL2) {
  if(!LL1.head || !LL2.head || LL1 === undefined || LL2 === undefined) return null;
  let first = LL1.head();
  let second = LL2.head();
  let testarr = [];
  let list3 = new solution.LinkedList();
  let counter = 0;
  while (first !== null) {
    console.log('===iteration=== ', LL1.elementAt(counter));
    testarr.push(LL1.elementAt(counter));
    first = first.next;
    counter ++;
  }
  counter = 0;
  while (second !== null) {
    console.log('===iteration2===', LL2.elementAt(counter));
    if(testarr.includes(LL2.elementAt(counter))) {
      console.log('triggered');
      list3.add(LL2.elementAt(counter));
      return list3.head().element;
    }
    second = second.next;
    counter ++;
  }
  return list3.head();
};
