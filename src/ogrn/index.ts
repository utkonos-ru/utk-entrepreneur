/**
 * check OGRN
 * @param value string
 *
 * @returns boolean
 */
export const isOGRN = (value: string): boolean => {
  if (value) {
    if (value.length === 13) {
      const num12 = Math.floor((Number(value) / 10) % 11);
      const dgt13 = num12 === 10 ? 0 : num12;
      return parseInt(value[12], 10) === dgt13;
    }
  }

  return false;
};
