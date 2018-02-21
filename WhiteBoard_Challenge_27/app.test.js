'use strict';

const solution = require('./app.js');

describe('app.js', () => {

  describe('valid inputs', () => {
    let testarr = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
    ];
    it('should return the last row of the rotated arr', () => {
      expect(solution.rotateArr(testarr)).toMatchObject([[7, 4, 1], [8, 5, 2], [9, 6, 3]]
      );
    });
  });

  describe('invalid inputs', () => {
    let testarr = 'hello';
    it('should return null for not being an array', () => {
      expect(solution.rotateArr(testarr)).toBeNull;
    });
  });

  describe('floating intergers', () => {
    let testarr = [
      [1.1,2,3],
      [4,5,6.4],
      [7,8,9],
    ];
    it('should return the last row of the rotated arr', () => {
      expect(solution.rotateArr(testarr)).toMatchObject([[7, 4, 1.1], [8, 5, 2], [9, 6.4, 3]]);
    });
  });
});
