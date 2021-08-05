import { isOGRNIP } from './index';

describe('OGRNIP', () => {
  it('values should be truthy', () => {
    expect(isOGRNIP('307557632751504')).toBeTruthy();
  });


  it('values should not be truthy', () => {
    expect(isOGRNIP('')).toBeFalsy();
    expect(isOGRNIP('vxcvcxvasd')).toBeFalsy();
    expect(isOGRNIP('asdvsvsadf')).toBeFalsy();
    expect(isOGRNIP('askjkvklas')).toBeFalsy();
  });
});
