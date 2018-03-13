'use strict';

const wbc = require('../lib/wbc.js');
const sll = require('../lib/lls.js');

describe('wbc.js', () => {

  describe('testing inputs', () => {
    it('should return null for invalid inputs', () => {
      let testLinkedList1 = 'hello';
      expect(wbc.findIntersection(testLinkedList1)).toBeNull;
    });

    it('should return for invalid inputs', () => {
      let testLinkedList1 = new sll.LinkedList;
      testLinkedList1.add(5);
      testLinkedList1.add(6);
      testLinkedList1.add(7);
      let testLinkedList2 = new sll.LinkedList;
      testLinkedList2.add(3);
      testLinkedList2.add(6);
      testLinkedList2.add(9);
      expect(wbc.findIntersection(testLinkedList1, testLinkedList2)).toBe(6);
    });
  });
});
