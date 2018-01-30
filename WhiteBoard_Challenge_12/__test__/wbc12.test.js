'use strict';

const wbc = require('../lib/wbc12');

describe('wbc12', () => {

  describe('valid inputs', () => {

    let newQueue = new wbc.oneQueue();

    test('valid enqueue should return a FILO stack', () => {
      newQueue.eneque(17,11,15,16,95);
      newQueue.dequeue();
      expect(newQueue.peek()).toContain(95);
      expect(newQueue.peek()).toContain(16);
      expect(newQueue.peek()).toContain(15);
      expect(newQueue.peek()).toContain(11);
    });

    test('valid dequeue should pop the first index ie: FIFO', () => {
      expect(newQueue.dequeue()).toEqual(11);
      expect(newQueue.dequeue()).toEqual(15);
      expect(newQueue.dequeue()).toEqual(16);
      expect(newQueue.dequeue()).toEqual(95);
    });
  });

  describe('Invalid Inputs', () => {
    let newQueue = new wbc.oneQueue();
    test('Invalid enqueue should return null', () => {
      expect(newQueue.eneque()).toBeNull;
    });
  });
});
