import { isOKATO } from './index';

describe('OKATO', () => {
  it('values should be truthy', () => {
    expect(isOKATO('45286575000')).toBeTruthy();
    expect(isOKATO('08401000000')).toBeTruthy();
    expect(isOKATO('60401000000')).toBeTruthy();
  });


  it('values should be falsy', () => {
    expect(isOKATO('')).toBeFalsy();
    expect(isOKATO('xvvasdasd')).toBeFalsy();
    expect(isOKATO('adsnlnvsd')).toBeFalsy();
    expect(isOKATO('askljklads')).toBeFalsy();
    expect(isOKATO('vcsvkljalksd')).toBeFalsy();
  });
});
