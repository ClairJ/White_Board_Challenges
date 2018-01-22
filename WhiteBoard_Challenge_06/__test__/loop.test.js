'use strict';

const solution = require('../lib/loop.js');

describe('loop.js', () => {

  describe('testing inputs', () => {

    test('zero should be null', () => {
      expect(solution.loop(0)).toBeNull();
    });
    test('negatives should be null', () => {
      expect(solution.loop(-1)).toBeNull();
    });
    test('NaN should be null', () => {
      expect(solution.loop('hello')).toBeNull();
    });
    test('objects should be null', () => {
      expect(solution.loop({})).toBeNull();
    });
  });

  describe('testing function works', () => {

    test('solution.loop should return input value', () => {
      solution.loop(3);
      expect(solution.count).toBe(3);
    });
  });
});
