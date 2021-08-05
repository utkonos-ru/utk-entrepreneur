import { isINNIndividual } from './individual';

describe('INN Legal Entity', () => {

  it('values should be truthy', () => {
    expect(isINNIndividual('447320913440')).toBeTruthy();
    expect(isINNIndividual('478006424856')).toBeTruthy();
    expect(isINNIndividual('116250318290')).toBeTruthy();
    expect(isINNIndividual('759841354703')).toBeTruthy();
  });


  it('values should not be falsy', () => {
    expect(isINNIndividual('')).toBeFalsy();
    expect(isINNIndividual('cvcx')).toBeFalsy();
    expect(isINNIndividual('vka')).toBeFalsy();
    expect(isINNIndividual('pasdasd')).toBeFalsy();
  });
});
