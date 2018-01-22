'use strict';
//exports the solution constructor.
const solution = module.exports = {};
//adds to counter after iteration through the recursive loop.
solution.count = 0;
//function that takes in an interger value.
solution.loop = (count) => {
  //if statements determines null inputs (NaN).
  if (count < 1 || typeof count !== 'number') return null;
  if (!count) return;
  //adds to the global counter.
  solution.count ++;
  //removes 1 from the input value to prevent an inf loop.
  solution.loop(count - 1);
};
