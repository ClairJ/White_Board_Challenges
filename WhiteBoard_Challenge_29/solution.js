'use strict';

function letsToNums(str) {

  var countArr = [];
  var testResult;
  var highScore = 0;

  let arr = str.split(' ');

  for (var j = 0; j < arr.length; j++) {
    var count = 0;

    for (var i = 0; i < arr[j].length; i++) {
      count += arr[j].charCodeAt(i) - 97;
    }
    countArr.push(count);
    if(count > highScore) {
      highScore = count;
      testResult = arr[j];
      }
  }
  return testResult;
}

console.log('results', letsToNums('hello worlds its me'));
