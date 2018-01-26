'use strict';

const wbcStack = require('../lib/wbc10.js');
let testString = '{pop a molly}{and go to the b club}}';
let testString2 = '{pop a molly}{and go to the b club}';

describe('wbc10', () => {
  wbcStack.parenthesesAreBalanced(testString);
  describe('input types', () => {
    test('should return false for uneven brackets', () => {
      expect(wbcStack.parenthesesAreBalanced(testString)).toBeFalsy();
    });

    test('should return true for even brackets', () => {
      expect(wbcStack.parenthesesAreBalanced(testString2)).toBeTruthy();
    });

    test('should return null for no input', () => {
      expect(wbcStack.parenthesesAreBalanced()).toBeNull;
    });

    test('should return null for non strings', () => {
      expect(wbcStack.parenthesesAreBalanced({})).toBeNull;
    });
  });
});
