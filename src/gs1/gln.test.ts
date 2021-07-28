import { isGLN } from './gln';

describe('matching cities to foods', () => {
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
