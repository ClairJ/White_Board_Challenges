'use strict';

const myMethods = require('./utils.js');

describe('utils.js', () => {

  describe('testing map', () => {
    it('should return odd and even nums', () => {

      const nums = [55, 20, 15];
      const odds = [];
      const evens = [];
      const remainder = myMethods.myMap(nums, function(nums) {
        nums % 2 === 1 ? odds.push(nums) : evens.push(nums);
      });
      remainder;
      console.log('odds', odds);
      console.log('evens', evens);
      expect(odds).toContain(55,15);
      expect(odds).not.toContain(20);
      expect(evens).toContain(20);
      expect(evens).not.toContain(55,15);
    });
  });

  describe('testing filter', () => {
    it('should return nums less than 30', () => {
      let nums = [55,20,15];
      let testFilter = myMethods.myFilter(nums, function(num) {
        return num < 30;
      });
      console.log('n < 30', testFilter);
      expect(testFilter).toContain(20,15);
      expect(testFilter).not.toContain(55);
    });
  });

  describe('testing reduce', () => {
    it('should return nums less than 30', () => {
      let nums = [55,20,15,2];
      let solution = myMethods.myReduce(nums, function(a, b) {
        return a + b;
      }, 10);
      console.log('total', solution);
      expect(solution).toEqual(102);
    });
  });
});
