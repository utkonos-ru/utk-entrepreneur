/**
 * check OKPO
 * @param value string
 *
 * @returns boolean
 */
export const isOKPO = (value: string): boolean => {
  if (!value) return false;
  const expectedValue = Number(value.slice(-1));
  const getWeight = (index: number): number => {
    if (index < 10) return index + 1;
    else return (index % 10) + 1;
  };
  const testingValue = value.slice(0, -1);
  let summ = 0;
  for (const i in testingValue.split('')) {
    if (i) summ += Number(testingValue[i]) * getWeight(Number(i));
  }
  let del11 = summ % 11;
  if (del11 === 10) {
    summ = 0;
    for (const i in testingValue.split('')) {
      if (i) summ += Number(testingValue[i]) * (getWeight(Number(i)) + 2);
    }
    del11 = del11 === 10 ? 0 : del11;
  }
  return del11 === expectedValue;
};
