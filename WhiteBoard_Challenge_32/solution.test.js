'use strict';

const solution = require('./solution.js');

describe('solution.js', () => {


  describe('validation', () => {
    it('should recursively return 89 for an entry of 10', () => {
      expect(solution.fib(10)).toContain(`The recursive solution is: 89`);
    });

    it('should iterativly return num for an entry of 8', () => {
      expect(solution.fib(8)).toContain(`the iterative solution is also: 34`);
    });

    it('should return null for NaN input', () => {
      expect(solution.fib('hello')).toBeNull;
    });
  });
});
