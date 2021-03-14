import { isCorrespondentAccount } from './correspondentAccount';

describe('Correspondent account', () => {
  it('values should be truthy', () => {
    const values = [
      { bik: '044525823', value: '30101810200000000823' },
      { bik: '044585297', value: '30101810500000000297' },
      { bik: '044525225', value: '30101810400000000225' },
      { bik: '041403633', value: '30101810100000000633' },
      { bik: '044525187', value: '30101810700000000187' },
      { bik: '044579476', value: '30101810100000000476' },
    ];
    expect(values.map(({ bik, value }) => isCorrespondentAccount(value, bik)).every((v) => v)).toBeTruthy();
  });

  it('values should not be truthy', () => {
    const values = [
      { bik: '', value: '30101810200000000823' },
      { bik: '044585297', value: '301018105297' },
      { bik: '044525226', value: '30101810400000000225' },
      { bik: '041403632', value: '30101810100000000633' },
      { bik: '44525187', value: '30101810700000000187' },
      { bik: '044579', value: '30101810100000000476' },
    ];

    expect(values.map(({ bik, value }) => isCorrespondentAccount(value, bik)).every((v) => v)).toBeFalsy();
  });
});
