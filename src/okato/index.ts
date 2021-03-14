/**
 * check OKATO
 * @param value string
 *
 * @returns boolean
 */
export const isOKATO = (value: string): boolean => {
  if (!value) return false;
  const length = value.length;
  if (length < 3) return false;

  const getWeight = (index: number): number => {
    if (index < 10) return index + 1;
    else return (index % 10) + 1;
  };
  const getExpectedValue = () => {
    if (length < 4) return value.slice(-1);
    if (length >= 4 && length < 6) return value.substr(0, 3).slice(-1);
    if (length >= 6 && length < 9) return value.substr(0, 6).slice(-1);
    else return value.substr(0, 9).slice(-1);
  };

  const expectedValue = Number(getExpectedValue());

  const getTestingString = () => {
    if (length < 3) return value;
    if (length >= 3 && length < 5) return value.substr(0, 2);
    if (length >= 5 && length < 8) return value.substr(0, 5);
    else return value.substr(0, 8);
  };

  const valueStr = getTestingString();

  let summ = 0;
  for (const i in valueStr.split('')) {
    if (i) summ += Number(valueStr[i]) * getWeight(Number(i));
  }
  const del11 = summ % 11;
  const check = del11 === 10 ? 0 : del11;
  if (length > 9 && check === del11) return true;
  if (check === expectedValue) return true;
  return false;
};
