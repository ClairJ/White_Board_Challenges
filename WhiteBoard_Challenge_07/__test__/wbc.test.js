'use strict';
const solution = require('../lib/wbc.js')
describe('wbc.js', () => {

  describe('testing inputs', () => {
    it('should return null for invalid inputs', () => {
      let testLinkedList1 = new solution.LinkedList;
      testLinkedList1.add();
      expect(solution.findLoopedList(testLinkedList1));
    });

    it('should return true for invalid inputs', () => {
      let testLinkedList1 = new solution.LinkedList;
      testLinkedList1.add(1);
      testLinkedList1.add(2);
      testLinkedList1.add(3);
      testLinkedList1.add(4);
      let looper = testLinkedList1.head().next.next.next.next = testLinkedList1.head().next.next.next;
      looper;
      expect(solution.findLoopedList(testLinkedList1)).toBe(true);
    });
  });
  describe('testing length', () => {
    it('should return length for valid inputs', () => {
      let testLinkedList1 = new solution.LinkedList;
      testLinkedList1.add(1);
      testLinkedList1.add(2);
      testLinkedList1.add(3);
      testLinkedList1.add(4);
      expect(testLinkedList1.size()).toBe(4);
    });
  });
});
