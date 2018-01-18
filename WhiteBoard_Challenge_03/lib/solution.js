'use strict';

const solution = module.exports = {};

let engine = {
  'value': 3,
  'next': {
    'value': 2,
    'next': {
      'value': 1,
      'next': null,
    },
  },
};


solution.traverse = (engine) => {
  let totalPassengers = 0;
  for (let tmp = engine; tmp; tmp = tmp.next) {
    if (typeof tmp.value === 'number' && tmp.value > -1 ) {
      totalPassengers += tmp.value;
    }
  }
  return totalPassengers;
};

solution.traverse(engine);
