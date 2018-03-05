'usr strict';

const bst = require('./binary-search-tree');
const solution = require('./solution');

describe('binary-search-tree', () => {

  describe('validation', () => {
    let testBTS = new bst;
    testBTS.add(20);
    testBTS.add(10);
    testBTS.add(25);

    let testBTS2 = new bst;
    testBTS2.add(40);
    testBTS2.add(41);
    testBTS2.add(39.5);

    let testBTS3 = new bst;
    testBTS3.add(40);
    testBTS3.add(41);
    testBTS3.add(39);
    testBTS3.add(36);

    it('should return true for identical structures', () => {
      expect(solution(testBTS, testBTS2)).toBeTruthy();
    });

    it('should return false for un-identical structures', () => {
      expect(solution(testBTS, testBTS3)).toBeFalsy();
    });

    it('should return true if value exsists among the tree', () => {
      expect(testBTS.isPresent(10)).toBeTruthy();
      expect(testBTS.isPresent(20)).toBeTruthy();
      expect(testBTS.isPresent(25)).toBeTruthy();
    });

    it('should return false if value does not exsists among the tree', () => {
      expect(testBTS.isPresent(11)).toBeFalsy();
      expect(testBTS.isPresent(21)).toBeFalsy();
      expect(testBTS.isPresent(26)).toBeFalsy();
    });
  });
});
