'use strict';

const treeC = require('../lib/treeC.js');

describe('Testing treeC', () => {
  let testTree = new treeC;

  describe('Test Invalid Inputs', () => {

    it('Should return null for no insert arguments', () => {
      expect(testTree.insert()).toBeNull;
    });
    it('Should return null for no insert arguments', () => {
      expect(testTree.insert('test')).toBeNull;
    });
  });

  describe('Test Valid Inputs', () => {
    testTree.insert(9);
    testTree.insert(8,9);
    testTree.insert(7,9);
    testTree.insert(6,9);
    testTree.insert(5,6);
    it('Should the amount of children in a tree', () => {
      expect(testTree.size()).toBe(4);
    });
  });
});
