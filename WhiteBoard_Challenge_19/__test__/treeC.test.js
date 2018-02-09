'use strict';

const treeC = require('../lib/treeC.js');

describe('treeC.js', () => {

  const inputTree = new treeC;
  describe('Valid Input', () => {
    inputTree.insert(9);
    inputTree.insert(8,9);
    inputTree.insert(7,9);
    inputTree.insert(6,7);
    let outputLinkedList = inputTree.treeToLinkedListTransform();
    test('should return a LinkedList with a length of 4', () => {
      expect(outputLinkedList.size()).toBe(4);
    });
  });
  describe('Invalid Input', () => {
    let outputLinkedList = inputTree.treeToLinkedListTransform();
    test('should return null for empty list', () => {
      expect(outputLinkedList.size() < 1).toBeNull;
    });
    test('should return null for NaN', () => {
      expect(inputTree.insert()).toBeNull;
    });
  });
});
