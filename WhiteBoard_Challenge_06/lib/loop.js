'use strict';

const solution = module.exports = {};
solution.count = 0;
solution.loop = (count) => {
  if (count < 1 || typeof count !== 'number') return null;
  if (!count) return;
  solution.count ++;
  solution.loop(count - 1);
  if(count === 1) {
    console.log('success');
    console.log('count fin === ', solution.count);
  }
};
