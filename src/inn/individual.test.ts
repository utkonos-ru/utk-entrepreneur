import { isINNIndividual } from './individual';

describe('INN Legal Entity', () => {
  it('values should be truthy', () => {
    expect(isINNIndividual('778998788883')).toBeTruthy();
    expect(isINNIndividual('599780283629')).toBeTruthy();
    expect(isINNIndividual('888732305086')).toBeTruthy();
    expect(isINNIndividual('289223979600')).toBeTruthy();
  });

  it('values should not be truthy', () => {
    expect(isINNIndividual('')).toBeFalsy();
    expect(isINNIndividual('77899888883')).toBeFalsy();
    expect(isINNIndividual('599780283620')).toBeFalsy();
    expect(isINNIndividual('5753209314')).toBeFalsy();
  });
});
