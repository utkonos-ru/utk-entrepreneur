import { isINN } from './index';

describe('INN', () => {
  it('values should be truthy', () => {
    expect(isINN('778998788883')).toBeTruthy();
    expect(isINN('599780283629')).toBeTruthy();
    expect(isINN('5065741648')).toBeTruthy();
    expect(isINN('6592075965')).toBeTruthy();
  });

  it('values should not be truthy', () => {
    expect(isINN('')).toBeFalsy();
    expect(isINN('77899888883')).toBeFalsy();
    expect(isINN('599780283620')).toBeFalsy();
    expect(isINN('50657464')).toBeFalsy();
    expect(isINN('57e3209313')).toBeFalsy();
  });
});
