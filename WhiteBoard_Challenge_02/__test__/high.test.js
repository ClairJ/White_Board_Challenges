const whiteBoard = require('../lib/high.js');



describe('high.js', function() {

  describe('testing for empty array', function() {
    test('empty arrays should return null', function() {
      expect(whiteBoard.solution([])).toBeNull();
    });
  });
  let expected = [-1,-2];
  describe('testing for negatives', function() {
    test('negatives should work', function() {
      expect(whiteBoard.solution([-1,-2,-3])).toEqual(
        expect.arrayContaining(expected));
    });
  });
  let expected2 = [4,3];
  describe('testing for zero', function() {
    test('zeros shouldnt effect the solution', function() {
      expect(whiteBoard.solution([1,2,3,4,0])).toEqual(
        expect.arrayContaining(expected2));
    });
  });
  let expected3 = [66,24];
  describe('testing for correct solution', function() {
    test('solution should be correct', function() {
      expect(whiteBoard.solution([24,66,21,22,1])).toEqual(
        expect.arrayContaining(expected3));
    });
  });
});
