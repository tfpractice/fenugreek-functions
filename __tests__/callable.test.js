import 'jasmine-expect';
import { callBin, callOn, isFunc, pipeline, } from 'src/callable';

describe('callable', () => {
  describe('isFunc', () => {
    it('checks if the argument is a function', () => {
      expect(isFunc(x => x)).toBeTrue();
      expect(isFunc(3)).toBeFalse();
    });
  });
  describe('callOn', () => {
    it('invokes a function on an argument', () => {
      expect(callOn(2)((x => x))).toEqual(2);
    });
  });
  describe('callBin', () => {
    it('invokces a function with an argument', () => {
      expect(callBin(2, x => x)).toEqual(2);
    });
  });
});
