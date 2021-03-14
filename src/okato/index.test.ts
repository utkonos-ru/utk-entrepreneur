import { isOKATO } from './index';

describe('OKATO', () => {
  it('values should be truthy', () => {
    expect(isOKATO('45286575000')).toBeTruthy();
    expect(isOKATO('08401000000')).toBeTruthy();
    expect(isOKATO('60401000000')).toBeTruthy();
  });

  it('values should be truthy', () => {
    expect(isOKATO('')).toBeFalsy();
    expect(isOKATO('45286575')).toBeFalsy();
    expect(isOKATO('08401')).toBeFalsy();
    expect(isOKATO('60401O00000')).toBeFalsy();
    expect(isOKATO('0401O00000')).toBeFalsy();
  });
});
