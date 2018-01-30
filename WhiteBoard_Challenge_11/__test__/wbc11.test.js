'use strict';

const finder = require('../lib/wbc11.js');
require('jest');

describe('wbc11.js', () => {
  describe('Input Validations', () => {
    let testArr = [1,2,3,4,6,7,8,9];
    test('empty array should return null', () => {
      expect(finder.findThatInterger([])).toBeNull;
    });

    test('NaN should return null', () => {
      expect(finder.findThatInterger([1,2,3,'hello'])).toBeNull;
    });

    test('Valid array should output the missing interger', () => {
      expect(finder.findThatInterger(testArr)).toContain(5);
    });
  });
});
