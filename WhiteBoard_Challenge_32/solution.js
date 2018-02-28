'use strict';

const solution = module.exports = {};


solution.fib = function(n) {
  if(typeof n !== 'number') return null;

  var a = 1, b = 0, temp;
  this.recursiveFib = function(num){
    if(num > 0) {
      temp = a;
      a = a + b;
      b = temp;
      this.recursiveFib(num-1);
    } else {
      temp = a;
      a = a + b;
      b = temp;
    }
    return b;
  };

  let recFibResult = this.recursiveFib(n);
  
  a = 1, b = 0, temp;
  this.iterativeFib = function(num){
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  };

  let iterFibResult = this.iterativeFib(n);

  return `The recursive solution is: ${recFibResult}, and the iterative solution is also: ${iterFibResult}`;
};
