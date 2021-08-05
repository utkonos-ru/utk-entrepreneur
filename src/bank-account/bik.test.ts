import { isBIK } from './bik';

describe('BIK', () => {
  it('values should be truthy', () => {
    const values = ['044525225'];
    expect(values.map((v) => isBIK(v)).every((v) => v)).toBeTruthy();
  });

  it('values should not be falsy', () => {
    const values = ['asdasd', 'sfsdfqw', 'adsddfdf', 'adfsfsdva', 'afqwe', 'adassdafas', 'klkkjskldgf'];
    expect(values.map((v) => isBIK(v)).every((v) => v)).toBeFalsy();
  });
});
