import { isOGRN } from './index';

describe('OGRN', () => {

  it('values should not be falsy', () => {
    expect(isOGRN('')).toBeFalsy();
    expect(isOGRN('kfkasd')).toBeFalsy();
  });
});
