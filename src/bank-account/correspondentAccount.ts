import { isBIK } from './bik';
/**
 * match bank branch (correpondent account & bik)
 *
 * @param value
 * @param bik
 *
 * @returns boolean
 */
export const matchFilial = (value: string, bik: string): boolean => {
  return bik.slice(-3) === value.slice(-3);
};

/**
 * check is correspondent account
 * @param value string
 * @param bik string
 * @returns boolean
 */
export const isCorrespondentAccount = (value: string, bik: string): boolean => {
  const valueToString = value ? value.toString() : '';
  if (!matchFilial(valueToString, bik)) return false;
  if (isBIK(bik)) {
    if (!/[^0-9]/.test(valueToString) && valueToString.length === 20) {
      const bikKs = '0' + bik.slice(4, 6) + valueToString;
      let checkSum = 0;
      const coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
      for (const i in coefficients) {
        if (i) checkSum += coefficients[i] * (Number(bikKs[i]) % 10);
      }
      return checkSum % 10 === 0;
    }
  }
  return false;
};
