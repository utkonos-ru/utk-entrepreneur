import { isKPP } from './index';

describe('KPP', () => {
  it('values shold be truthy', () => {
    expect(isKPP('771301001')).toBeTruthy();
  });

  it('values shold not be truthy', () => {
    expect(isKPP('')).toBeFalsy();
    expect(isKPP('ooo')).toBeFalsy();
    expect(isKPP('msam')).toBeFalsy();
    expect(isKPP('pasdasd')).toBeFalsy();
  });
});
