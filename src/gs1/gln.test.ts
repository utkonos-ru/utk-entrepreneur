import { isGLN } from './gln';

describe('matching cities to foods', () => {
  it('all values must be valid', () => {
    const arrGLN = [
      4607038379991, 4607038379977, 4607038379984, 4607038379960, 4607038379953, 4607038379946
    ];

    const validationResults = arrGLN.map((gln) => isGLN(gln?.toString()));
    expect(validationResults.every((r) => r)).toBeTruthy();
  });

  
  it('all values must be invalid', () => {
    const arrGLN = [
      'asfasdasd',
      'aas c vasdasd',
      'vjlkls',
    ];

    const validationResults = arrGLN.map((gln) => isGLN(gln?.toString()));
    expect(validationResults.every((r) => r)).toBeFalsy();
  });
});
