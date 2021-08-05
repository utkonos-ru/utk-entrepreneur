import { isINN } from './index';

describe('INN', () => {
  it('values should be truthy', () => {
    expect(isINN('7713527850')).toBeTruthy();
    expect(isINN('447320913440')).toBeTruthy();
    expect(isINN('478006424856')).toBeTruthy();
  });


  it('values should not be falsy', () => {
    expect(isINN('')).toBeFalsy();
    expect(isINN('vcvjlkjas')).toBeFalsy();
    expect(isINN('vjlkjsdfkj')).toBeFalsy();
    expect(isINN('vnmzxzjcas')).toBeFalsy();
    expect(isINN('alafiasd')).toBeFalsy();
  });
});
