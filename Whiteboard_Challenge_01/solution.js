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

let max = getMax(nums);
let min = getMin(nums);
let avg = getAvg(nums);
let solution = {max, min, avg}

console.log('max = ', getMax(nums))
console.log('max = ', getMin(nums))
console.log('avg = ', getAvg(nums))
console.log('solution =', solution)
