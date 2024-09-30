// index.test.js
const { levels, next, previous, multiplier } = require('./cultivateGame.js');


describe('CultivationGame Tests', () => {
  describe('next function', () => {
    it('should return correct next path', () => {
      expect(next(1.1)).toBe(1.2);
      expect(next(1.9)).toBe(2.1);
      expect(next(2.8)).toBe(2.9);
      expect(next(3.9)).toBe(4.1);
      expect(next(4.5)).toBe(4.6);
      expect(next(7.9)).toBe(undefined);
      expect(next(9.1)).toBe(undefined);
    });
  });

  describe('previous function', () => {
    it('should return correct previous path', () => {
      expect(previous(1.2)).toBe(1.1);
      expect(previous(2.1)).toBe(1.9);
      expect(previous(2.9)).toBe(2.8);
      expect(previous(4.1)).toBe(3.9);
      expect(previous(4.6)).toBe(4.5);
      expect(previous(1.1)).toBe(undefined);
      expect(previous(0.8)).toBe(undefined);
    });
  });

  describe('multiplier function', () => {
    it('should return correct multiplier', () => {
      expect(multiplier(3.4, 3.4)).toBe(1);
      expect(multiplier(3.4, 3.5)).toBe(1.1);      
      expect(multiplier(3.4, 3.3)).toBe(0.9);
      expect(multiplier(3.4, 3.1)).toBe(0.7)
      expect(multiplier(3.4, 2.3)).toBe(0);
      expect(multiplier(3.4, 4.5)).toBe(0);
    });
  });


});