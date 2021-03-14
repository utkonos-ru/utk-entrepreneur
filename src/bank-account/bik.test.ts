import { isBIK } from './bik';

describe('BIK', () => {
  it('values should be truthy', () => {
    const values = ['044525823', '044585297', '044525225', '041403633', '044525187', '044579476', '040349718'];
    expect(values.map((v) => isBIK(v)).every((v) => v)).toBeTruthy();
  });

  it('values should not be truthy', () => {
    const values = ['o44525823', '0445852944', '044252250e', '041403633234', '044525187', '0445476', '40349718'];
    expect(values.map((v) => isBIK(v)).every((v) => v)).toBeFalsy();
  });
});
