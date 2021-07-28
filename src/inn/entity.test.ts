import { isINNLegalEntity } from './entity';

describe('INN Legal Entity', () => {

  it('to be falsy', () => {
    expect(isINNLegalEntity('')).toBeFalsy();
    expect(isINNLegalEntity('cxvjklasв')).toBeFalsy();
    expect(isINNLegalEntity('sdjklvasd')).toBeFalsy();
    expect(isINNLegalEntity('klk;lasdasd')).toBeFalsy();
  });
});
