import { isOGRN } from './index';

describe('OGRN', () => {
  it('values shold be truthy', () => {
    expect(isOGRN('1047796379080')).toBeTruthy();
  });


  it('values should not be falsy', () => {
    expect(isOGRN('')).toBeFalsy();
    expect(isOGRN('kfkasd')).toBeFalsy();
  });
});
