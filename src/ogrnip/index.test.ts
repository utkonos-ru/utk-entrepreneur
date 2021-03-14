import { isOGRNIP } from './index';

describe('OGRNIP', () => {
  it('values should be truthy', () => {
    expect(isOGRNIP('316811888830691')).toBeTruthy();
    expect(isOGRNIP('306254778349954')).toBeTruthy();
    expect(isOGRNIP('316428779092132')).toBeTruthy();
  });

  it('values should not be truthy', () => {
    expect(isOGRNIP('')).toBeFalsy();
    expect(isOGRNIP('7909213')).toBeFalsy();
    expect(isOGRNIP('316428779o9213')).toBeFalsy();
    expect(isOGRNIP('31642877909213')).toBeFalsy();
  });
});
