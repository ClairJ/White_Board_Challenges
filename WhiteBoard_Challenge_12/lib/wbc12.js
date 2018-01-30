'use strict';

const wbcStack = require('./StackC.js');
const wbc = module.exports = {};


wbc.oneQueue = function() {
  let first = new wbcStack.stack();
  let second = new wbcStack.stack();

  this.eneque = function() {
    if (!arguments) return null;
    first.push.apply(first, arguments);
  };
  this.dequeue = function() {
    if (second.size() === 0) {
      while(first.size())
        second.push(first.pop());
    }
    return second.pop();
  };
  this.peek = function() {
    return second.peek();
  };
};
