const whiteBoard = require('../lib/high.js');



describe('high.js', function() {

  describe('testing for empty array', function() {
    test('empty arrays should return null', function() {
      expect(whiteBoard.solution([])).toBeNull();
    });
  });
  let expected = {
    highest: -1,
    high: -2,
  };
  describe('testing for negatives', function() {
    test('negatives should work', function() {
      expect(whiteBoard.solution([-1,-2,-3])).toMatchObject(expected);
    });
  });
  let expected2 = {
    highest: 4,
    high: 3,
  };
  describe('testing for zero', function() {
    test('zeros shouldnt effect the solution', function() {
      expect(whiteBoard.solution([1,2,3,4,0])).toMatchObject(expected2);
    });
  });
  let expected3 = {
    highest: 66,
    high: 24,
  };
  describe('testing for correct solution', function() {
    test('solution should be correct', function() {
      expect(whiteBoard.solution([24,66,21,22,1])).toMatchObject(expected3);
    });
  });
});
