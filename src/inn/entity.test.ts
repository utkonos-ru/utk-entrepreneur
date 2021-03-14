import { isINNLegalEntity } from './entity';

describe('INN Legal Entity', () => {
  it('values should be truthy', () => {
    expect(isINNLegalEntity('5753209314')).toBeTruthy();
    expect(isINNLegalEntity('5065741648')).toBeTruthy();
    expect(isINNLegalEntity('6592075965')).toBeTruthy();
  });

  it('v', () => {
    expect(isINNLegalEntity('')).toBeFalsy();
    expect(isINNLegalEntity('506574164')).toBeFalsy();
    expect(isINNLegalEntity('5753209313')).toBeFalsy();
    expect(isINNLegalEntity('778998788883')).toBeFalsy();
  });
});
