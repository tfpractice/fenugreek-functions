import 'jasmine-expect';
import { identity, } from 'src/identity';
describe('identity', () => {
  it('returns watever it was called upon', () => {
    expect(identity(3)).toEqual(3);
  });
});
