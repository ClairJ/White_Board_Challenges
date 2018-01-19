'use strict';

const intersection = module.exports = {};

intersection.intersect= function(a, b) {
  if(a.length === 0 || b.length === 0) {
    return null;
  }
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(intersection);
};
