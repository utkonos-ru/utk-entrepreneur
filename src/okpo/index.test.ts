import { isOKPO } from './index';

describe('OKPO', () => {
  it('values should be truthy', () => {
    const values = ['16661494', '53932554', '59597269', '58706213', '01824944'];
    for (const value of values) {
      expect(isOKPO(value)).toBeTruthy();
    }
  });


  it('values should not be falsy', () => {
    const values = ['afaadasd', 'bkasd', '', 'asdmjklvssad', '12e2ascacs'];
    for (const value of values) {
      expect(isOKPO(value)).toBeFalsy();
    }
  });
});
