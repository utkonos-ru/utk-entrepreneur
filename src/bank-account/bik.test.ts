import { isBIK } from './bik';

describe('BIK', () => {
  it('values should not be truthy', () => {
    const values = ['asdasd', 'sfsdfqw', 'adsddfdf', 'adfsfsdva', 'afqwe', 'adassdafas', 'klkkjskldgf'];
    expect(values.map((v) => isBIK(v)).every((v) => v)).toBeFalsy();
  });
});
