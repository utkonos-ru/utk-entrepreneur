import { isINN } from './index';

describe('INN', () => {

  it('values should not be falsy', () => {
    expect(isINN('')).toBeFalsy();
    expect(isINN('vcvjlkjas')).toBeFalsy();
    expect(isINN('vjlkjsdfkj')).toBeFalsy();
    expect(isINN('vnmzxzjcas')).toBeFalsy();
    expect(isINN('alafiasd')).toBeFalsy();
  });
});
