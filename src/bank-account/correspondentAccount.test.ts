import { isCorrespondentAccount } from './correspondentAccount';

describe('Correspondent account', () => {
  it('values should not be truthy', () => {
    const values = [
      { bik: '', value: 'sdkljsdflbb a asdkv' },
      { bik: 'fafdfadsvv', value: 'oiuiofasfklasdf' },
      { bik: 'sfdafsv', value: 'cxxmznv.naFd;' },
      { bik: 'dsfsaddvas', value: 'oijzxcjvklnDslk' },
      { bik: 'dfsdfvds', value: 'afbkjkljbkl' },
      { bik: 'asasvvasasdf', value: 'lknvnasd;vnkjsdnc' },
    ];

    expect(values.map(({ bik, value }) => isCorrespondentAccount(value, bik)).every((v) => v)).toBeFalsy();
  });
});
