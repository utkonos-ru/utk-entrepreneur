import { isPaymentAccount } from './paymentAccount';

describe('Patment account', () => {

  it('values should be falsy', () => {
    const values = [
      { bik: '', value: 'klkz;xlcv;' },
      { bik: 'adfsab', value: '' },
      { bik: 'asdgfjahjsdf', value: 'zxcvbkjklfd' },
      { bik: 'zvcbzvx', value: 'sadfjxcvm,' },
      { bik: 'asfdxzc', value: 'xzcvkl;lkjsd' },
    ];

    expect(values.map(({ bik, value }) => isPaymentAccount(value, bik)).every((v) => v)).toBeFalsy();
  });
});
