'use strict';

const K_ary = require('../lib/k-ary_tree.js');
const wbc15 = require('../lib/wbc15.js');

describe('k-ary-tree', () => {
  let testTree = new K_ary;
  testTree.insert(9);
  testTree.insert(6, 9);
  testTree.insert(5, 6);
  testTree.insert(4, 5);

  testTree.insert(7, 9);
  testTree.insert(8, 9);
  describe('invalid inputs', () => {
    test('should return null for no callback in', () => {
      expect(testTree.breadthFirst()).toBeNull;
    });
    test('should return array of childless nodes', () => {
      expect(wbc15.solution()).toBeNull;
    });
  });

});
