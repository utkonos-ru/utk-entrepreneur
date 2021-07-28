import { isOKPO } from './index';

describe('OKPO', () => {

  it('values should not be falsy', () => {
    const values = ['afaadasd', 'bkasd', '', 'asdmjklvssad', '12e2ascacs'];
    for (const value of values) {
      expect(isOKPO(value)).toBeFalsy();
    }
  });
});
