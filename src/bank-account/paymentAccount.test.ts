import { isPaymentAccount } from './paymentAccount';

describe('Patment account', () => {
  it('values should be truthy', () => {
    const values = [
      { bik: '044525225', value: '40702810540210004023' },
      { bik: '044585659', value: '40702810300000011638' },
      { bik: '044525202', value: '40702810200702134001' },
      { bik: '044525836', value: '40702810900020050131' },
      { bik: '044525176', value: '40702810914000001311' },
    ];

    expect(values.map(({ bik, value }) => isPaymentAccount(value, bik)).every((v) => v)).toBeTruthy();
  });

  it('values should be truthy', () => {
    const values = [
      { bik: '', value: '40702810540210004023' },
      { bik: '044585659', value: '' },
      { bik: '044525202', value: '40702810702134001' },
      { bik: '044525836', value: '407020020050131qwe' },
      { bik: '04o525176', value: '40702810914000001311' },
    ];

    expect(values.map(({ bik, value }) => isPaymentAccount(value, bik)).every((v) => v)).toBeFalsy();
  });
});
