'use strict'

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let nums = [1,2,3,4,5,6,7];


function getMax(numArray) {
  return Math.max.apply(null, numArray);
}

function getMin(numArray) {
  return Math.min.apply(null, numArray);
}

function getAvg(numArray) {
  return numArray.reduce(reducer)/numArray.length
}

let solution = {
  maximum: getMax(nums),
  minimum: getMin(nums),
  average: getAvg(nums),
}

console.log('solution =', solution)
