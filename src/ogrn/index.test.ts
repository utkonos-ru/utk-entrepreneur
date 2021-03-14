import { isOGRN } from './index';

describe('OGRN', () => {
  it('values should be truthy', () => {
    expect(isOGRN('5066133302450')).toBeTruthy();
  });

  it('values should not be truthy', () => {
    expect(isOGRN('')).toBeFalsy();
    expect(isOGRN('066133302450')).toBeFalsy();
  });
});
