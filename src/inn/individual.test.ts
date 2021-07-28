import { isINNIndividual } from './individual';

describe('INN Legal Entity', () => {

  it('values should not be falsy', () => {
    expect(isINNIndividual('')).toBeFalsy();
    expect(isINNIndividual('cvcx')).toBeFalsy();
    expect(isINNIndividual('vka')).toBeFalsy();
    expect(isINNIndividual('pasdasd')).toBeFalsy();
  });
});
