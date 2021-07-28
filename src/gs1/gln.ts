import { isGS1 } from './gs1';

/**
 * check GLN (global location number)
 * @param value string
 *
 * @returns boolean
 */
export const isGLN = (value?: string): boolean => {
  if (!value) return false;
  if (value.length !== 13) return false;

  return isGS1(value);
};
