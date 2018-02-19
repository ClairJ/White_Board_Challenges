'use strict';

const arrMethods = module.exports = {};

arrMethods.myMap = (collection, callback) => {
  const results = [];

  for (var i = 0; i < collection.length; i++) {
    const element = collection[i];
    results.push(callback(element));
  }
  return results;
};

arrMethods.myFilter = (arr, callback, context) => {
  const results = [];

  for (var i = 0; i < arr.length; i++) {
    if(callback.call(context, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
};

arrMethods.myReduce = (arr, callback, initialValue) => {
  let accumulator = (initialValue === undefined) ? undefined : initialValue;
  for (var i = 0; i < arr.length; i++) {
    if(accumulator !== undefined)
      accumulator = callback.call(undefined, accumulator, arr[i], i , arr);
    else
      accumulator = arr[i];
  }
  return accumulator;
};
