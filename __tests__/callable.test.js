import 'jasmine-expect';
import { callBin, callOn, isFunc, pipeline, } from 'src/callable';
describe('callable', () => {
  describe('isFunc', () => {
    it('checks if the argument is a function', () => {
      expect(isFunc(x => x)).toBeTrue();
      expect(isFunc(3)).toBeFalse();
    });
  });
});
