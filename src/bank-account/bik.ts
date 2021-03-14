/**
 * check string is BIK
 * @param value
 * @returns boolean
 */
export const isBIK = (value: string): boolean => {
  if (!/^\d{9}$/.test(value)) return false;
  const thirdPart = value.slice(-3);
  if (+thirdPart === 0 || +thirdPart === 1 || +thirdPart === 2) return true;
  return +thirdPart >= 50 && +thirdPart < 1000;
};
