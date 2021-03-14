import { isINNLegalEntity } from './entity';
import { isINNIndividual } from './individual';

/**
 * check INN
 * @param value string
 *
 * @returns boolean
 */
export const isINN = (value: string): boolean => {
  return isINNIndividual(value) || isINNLegalEntity(value);
};
