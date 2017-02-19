import 'jasmine-expect';
import { catCall,firstCall,lastCall, } from 'src/collectCall';

describe('collectCall', () => {
  describe('firstCall', () => {
    it('calls a function on the first element of an Array', () => {
      expect(firstCall([ 1,2,3, ])(x => x * 2)).toEqual(2);
    });
  });
  describe('lastCall', () => {
    it('calls a function on the last element of an Array', () => {
      expect(lastCall([ 1,2,3, ])(x => x * 2)).toEqual(6);
    });
  });
  describe('catCall', () => {
    it('cocatenates lastCall to an array', () => {
      expect(catCall([ 1,2,3, ], (x => x * 2)).length).toEqual(4);
    });
  });
});
