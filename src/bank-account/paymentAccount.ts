import { isBIK } from './bik';

/**
 * check is Paymet Account
 * @param value string
 * @param bik string
 *
 * @returns boolean
 */
export const isPaymentAccount = (value: string, bik: string): boolean => {
  const valueToString = value ? value.toString() : '';
  if (isBIK(bik)) {
    if (!/[^0-9]/.test(valueToString) && valueToString.length === 20) {
      const bikRs = bik.toString().slice(-3) + valueToString;
      let checkSum = 0;
      const coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
      for (const i in coefficients) {
        if (i) checkSum += coefficients[i] * (Number(bikRs[i]) % 10);
      }
      return checkSum % 10 === 0;
    }
  }
  return false;
};
