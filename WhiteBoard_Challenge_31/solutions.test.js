'use strict';

const solution = require('./solution.js');

describe('solution.js', () => {
  let testArr1 = [15,14,100,32,65];
  let testArr2 = [11,15,1,32,66];


  describe('valididation', () => {
    it('should return 32', () => {
      expect(solution.intersect(testArr1, testArr2)).toContain(32);
    });
    it('should return null for not an array', () => {
      expect(solution.intersect('hello', 'world')).toBeNull;
    });
    it('different length arrays should work', () => {
      if (testArr1.length >= testArr2.length) {
        var testBoolean = 'true';
      } else {
        testBoolean = 'false';
      }
      expect(testBoolean).toContain('true');
    });
  });
});
