import 'jasmine-expect';
import { funcArray,pipeline,spreadPipe, } from 'src/pipeline';
const double = x => x * 2;

describe('pipeline', () => {
  describe('funcArray', () => {
    it('generates an array of a function repeated x times', () => {
      expect(funcArray(double)(5)).toBeArray();
      expect(funcArray(double)(5).length).toBe(5);
    });
  });
  describe('pipeline', () => {
    it('reduces an array of functions to an accumulated value', () => {
      expect(pipeline(...funcArray(double)(5))(2)).toEqual(64);
    });
  });
  describe('spreadPipe', () => {
    it('returns an array of an incrementally applied pipeline', () => {
      expect(spreadPipe(...funcArray(double)(5))(2)).toBeArray(64);
      expect(spreadPipe(...funcArray(double)(5))(2)).toContain(32);
    });
  });
});
