'use strict';

const sll = require('../lib/sll.js');
const stackC = require('../lib/stackC.js');
const wbc14 = require('../lib/wbc14.js');

describe('wbc14', () => {
  describe('valid inputs', () => {
    let list = new sll.LinkedList;
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(3);
    list.add(4);

    test('should return a sll without duplicates', () => {
      expect(wbc14.dedupe(list).size()).toEqual(4);
    });
  });

  describe('invalid inputs', () => {
    let list2 = new sll.LinkedList;


    test('should return null for not adding an arguement', () => {
      expect(list2.add()).toBeNull;
    });

    test('should return null for not being a valid sll with a next', () => {
      expect(wbc14.dedupe()).toBeNull;
    });
  });
});
