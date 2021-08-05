import { isINNLegalEntity } from './entity';

describe('INN Legal Entity', () => {
  it('values should be truthy', () => {
    expect(isINNLegalEntity('7713527850')).toBeTruthy();
  });


  it('to be falsy', () => {
    expect(isINNLegalEntity('')).toBeFalsy();
    expect(isINNLegalEntity('cxvjklasв')).toBeFalsy();
    expect(isINNLegalEntity('sdjklvasd')).toBeFalsy();
    expect(isINNLegalEntity('klk;lasdasd')).toBeFalsy();
  });
});
