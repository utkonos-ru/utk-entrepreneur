/**
 * check is GS1
 *
 * @param value string
 *
 * @returns boolean
 */
export const isGS1 = (value: string): boolean => {
  let sum = 0;
  for (let i = 2; i <= value.length; i++) {
    const num = Number(value[value.length - i]);
    if (num.toString() !== value[value.length - i]) {
      return false;
    }

    sum += (i % 2 === 0 ? 3 : 1) * num;
  }

  const modulo = sum % 10;
  return (modulo ? 10 - modulo : 0) === Number(value[value.length - 1]);
};
