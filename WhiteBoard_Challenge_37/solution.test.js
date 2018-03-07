'use strict';

const bst = require('./binary-search-tree.js');
const solution = require('./solution.js');

describe('solution.js', () => {
  let testBST = new bst;
  testBST.add(20);
  testBST.add(10);
  testBST.add(11);
  testBST.add(30);
  testBST.add(31);
  
  describe('validation', () => {
    it('should return a new sll', () => {
      expect(solution(testBST).length).toBe(5);
    });

    it('should return sll head', () => {
      expect(solution(testBST).head).toMatchObject({'element': 10, 'next': {'element': 11, 'next': {'element': 20, 'next': {'element': 30, 'next': {'element': 31, 'next': null}}}}});
    });

    it('should return a length of 4 after removing a node', () => {
      testBST.remove(11);
      expect(solution(testBST).length).toBe(4);
    });

    it('should return true if a value is present', () => {
      expect(testBST.isPresent(30)).toBeTruthy();
    });
  });
});
