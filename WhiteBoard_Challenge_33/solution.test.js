'use strict';

const solution = require('./solution');

describe('solution.js', () => {

  describe('validation', () => {
    it('should return 13', () => {
      expect(solution(5,4)).toBe(13);
    });
    it('should return null for NaN', () => {
      expect(solution('hello', 'world')).toBeNull;
    });
    it('should return null for empty args', () => {
      expect(solution()).toBeNull;
    });
  });
});
