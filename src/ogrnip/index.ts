/**
 * check OGRNIP
 * @param value string
 *
 * @returns boolean
 */
export const isOGRNIP = (value: string): boolean => {
  if (value) {
    if (value.length === 15) {
      const num14 = Math.floor((Number(value) / 10) % 13);
      const dgt15 = num14 % 10;
      return parseInt(value[14], 10) === dgt15;
    }
  }
  return false;
};
