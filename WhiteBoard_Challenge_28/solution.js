'use strict';

const sll = require('./sll.js');
const hash = require('./hash.js');

const solution = module.exports = {};

solution.isAnagram = function(str) {
  let testArr = str.split(' ');
  let out1 = [];
  let out2 = [];
  let out = [out1, out2];
  let counter = 0;
  for(var i=0; i<testArr.length;i++){
    if(out1.length === 0 || out1[0].length === testArr[i].length) {

      out1.push(testArr[i]);
      counter ++;
    }

    console.log(testArr[i]);

    if(out2.length === 0 && counter === 0 || testArr[i].length !== out1[0].length) {
      out2.push(testArr[i]);
    }
    counter = 0;
  }

  return out;

};

let testStr = 'acre race care act cat tac';

solution.isAnagram(testStr);
