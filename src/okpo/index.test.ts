import { isOKPO } from './index';

describe('OKPO', () => {
  it('values should be truthy', () => {
    const values = ['16661494', '53932554', '59597269', '58706213', '01824944'];
    for (const value of values) {
      expect(isOKPO(value)).toBeTruthy();
    }
  });

  it('values should not be truthy', () => {
    const values = ['1661494', '7100', '', '587o6213', '1824944'];
    for (const value of values) {
      expect(isOKPO(value)).toBeFalsy();
    }
  });
});
