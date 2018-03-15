'use strict';

function letsToNums(str) {

  var countArr = [];

  let arr = str.split(' ');

  for (var j = 0; j < arr.length; j++) {
    console.log(arr);
    var count = 0;

    for (var i = 0; i < arr[j].length; i++) {
      count += str.charCodeAt(i);
    }
    countArr.push(count);
  }
  return countArr.sort()[countArr.sort().length - 1];
}

console.log(letsToNums('hello worlds'));
