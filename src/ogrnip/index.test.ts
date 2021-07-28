import { isOGRNIP } from './index';

describe('OGRNIP', () => {

  it('values should not be truthy', () => {
    expect(isOGRNIP('')).toBeFalsy();
    expect(isOGRNIP('vxcvcxvasd')).toBeFalsy();
    expect(isOGRNIP('asdvsvsadf')).toBeFalsy();
    expect(isOGRNIP('askjkvklas')).toBeFalsy();
  });
});
