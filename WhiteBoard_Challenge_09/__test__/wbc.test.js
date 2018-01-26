'use strict';

let solution = require ('../lib/wbc.js');

describe('wbc.js', () => {
  describe('numbers < = the length of the list should return null', () => {
    let testLinkedList = new solution.LinkedList();
    testLinkedList.add(6);
    testLinkedList.add(2);
    testLinkedList.add(1);
    testLinkedList.add(9);
    testLinkedList.add('hello');
    testLinkedList.add(2);
    test('should return null for numbers greater than the linkedlist length.', () => {
      expect(solution.findnthChild(testLinkedList, 8)).toBeNull;
    });
    test('should return null for negative numbers.', () => {
      expect(solution.findnthChild(testLinkedList, -8)).toBeNull;
    });
  });
  let testLinkedList = new solution.LinkedList();
  testLinkedList.add(6);
  testLinkedList.add(2);
  testLinkedList.add(1);
  testLinkedList.add(9);
  testLinkedList.add('hello');
  testLinkedList.add(2);
  describe('valid linked list and index from nth', () => {
    test('should return element from nth node of end', () => {
      expect(solution.findnthChild(testLinkedList, 3)).toEqual(9);
    });
  });
});
