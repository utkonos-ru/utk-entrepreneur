import { isOKATO } from './index';

describe('OKATO', () => {

  it('values should be falsy', () => {
    expect(isOKATO('')).toBeFalsy();
    expect(isOKATO('xvvasdasd')).toBeFalsy();
    expect(isOKATO('adsnlnvsd')).toBeFalsy();
    expect(isOKATO('askljklads')).toBeFalsy();
    expect(isOKATO('vcsvkljalksd')).toBeFalsy();
  });
});
