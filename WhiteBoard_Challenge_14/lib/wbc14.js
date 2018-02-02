'use strict';
let sll = require('./sll.js');
let stackC = require('./stackC.js');
let wbc14 = module.exports = {};


wbc14.dedupe = function(LL) {
  if (!LL) return null;
  let slow = LL.head();
  console.log('head', LL.head());
  console.log('size', LL.size());
  let prev = 0;
  let dupeStack = new stackC.stack;
  let outputList = new sll.LinkedList;
  while(slow !== null) {
    console.log('slow.element', slow.element);
    if(slow.element !== prev) {
      console.log('hit');
      dupeStack.push(prev);
      outputList.add(dupeStack.pop());
    }
    console.log('STACK === ', dupeStack.peek());
    prev = slow.element;
    slow = slow.next;
  }
  return outputList;
};
