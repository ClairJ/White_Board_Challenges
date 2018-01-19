'use strict';


const intersection = require('../lib/intersect.js');

let first = ['mike', 'sue', 'tom', 'kathy', 'henry'];
let second = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];

describe('intersect.js', () => {
  describe('testing arguments exsist', () => {
    test('two arguments should not exsist and return null', () => {
      let a = ['sue', 'kathy'];
      let b = [];
      expect(intersection.intersect(a, b)).toBeNull;
    });

    test('two arguments should exsist', () => {
      expect(intersection.intersect(first, second)).toMatchObject(['sue', 'kathy']);
    });
  });
});
