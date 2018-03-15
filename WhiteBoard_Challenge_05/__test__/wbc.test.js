const solution = require('../lib/wbc.js');

describe('testing wbc', () =>{

  describe('testing lists', () => {
    test('empty lists should return null', () => {
      let testResults = new solution.LinkedList();

      expect(solution.answer(testResults)).toBeNull;
    });

    test('lists should return middle element', () => {
      let testResults = new solution.LinkedList();
      testResults.add(2);
      testResults.add(7);
      testResults.add(8);
      testResults.add(13);
      testResults.add(100);
      expect(solution.answer(testResults)).toBe(8);
    });

    test('even lists should return rounded-down middle index element', () => {
      let testResults = new solution.LinkedList();
      testResults.add(2);
      testResults.add(7);
      testResults.add(8);
      testResults.add(13);
      expect(solution.answer(testResults)).toBe(7);
    });

    test('solution with challenge should return 15', () => {
      let challengeResults = new solution.LinkedList();
      challengeResults.add(25);
      challengeResults.add(1);
      challengeResults.add(15);
      challengeResults.add(33);
      challengeResults.add(4);
      expect(challengeResults.elementAt(2)).toBe(15);
    });

  });
});
