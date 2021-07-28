/**
 * check KPP
 * @param value string
 */
export const isKPP = (value: string): boolean => {
  if (value.length !== 9) return false;
  if (!value.match(/\d{4}[\dA-Z][\dA-Z]\d{3}/)) return false;
  return true;
};
