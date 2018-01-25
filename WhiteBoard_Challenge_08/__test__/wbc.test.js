'use strict';

const wbc = require('../lib/wbc.js');

describe('wbc.js', () => {

  describe('testing inputs', () => {
    it('should return null for invalid inputs', () => {
      let testLinkedList1 = 'hello';
      expect(wbc.solution.findIntersection(testLinkedList1)).toBeNull;
    });
  });
});
