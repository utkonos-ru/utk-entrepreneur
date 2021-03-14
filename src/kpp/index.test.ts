import { isKPP } from './index';

describe('KPP', () => {
  it('values shold be truthy', () => {
    expect(isKPP('650443367')).toBeTruthy();
    expect(isKPP('846601741')).toBeTruthy();
    expect(isKPP('817243748')).toBeTruthy();
    expect(isKPP('789845463')).toBeTruthy();
  });

  it('values shold not be truthy', () => {
    expect(isKPP('')).toBeFalsy();
    expect(isKPP('8о6601741')).toBeFalsy();
    expect(isKPP('81724374')).toBeFalsy();
    expect(isKPP('89845463')).toBeFalsy();
  });
});
