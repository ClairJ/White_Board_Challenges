const solution = require('../lib/solution.js');

describe('solution.js', () => {
  describe('testing for actual object', () => {

    let expected = [];
    test('non objects should return null', () => {
      expect(solution.traverse(expected)).toBeNull;
    });

    let expected2 = {
      'value': 3,
      'next': {
        'value': 2,
        'next': {
          'value': 1,
          'next': null,
        },
      },
    };

    test('correct solution should return total passengers', () => {
      expect(solution.traverse(expected2)).toBe(6);
    });

    let expected3 = {
      'value': 3,
      'next': {
        'value': 2,
        'next': {
          'value': 1,
          'next': {
            'value': -1,
            'next': null,
          },
        },
      },
    };

    test('negative passangers dissallowed', () => {
      expect(solution.traverse(expected3)).toBe(6);
    });

    let expected4 = {
      'value': '',
      'next': {
        'value': '',
        'next': {
          'value': '',
          'next': null,
        },
      },
    };

    test('empty value should be null', () => {
      expect(solution.traverse(expected4)).toBeNull;
    });

    let expected5 = {
      'value': 0,
      'next': {
        'value': 3,
        'next': {
          'value': 2,
          'next': null,
        },
      },
    };

    test('zeros have no effect', () => {
      expect(solution.traverse(expected5)).toBe(5);
    });
  });
});
