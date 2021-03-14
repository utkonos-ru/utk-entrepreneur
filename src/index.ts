import { isCorrespondentAccount, isPaymentAccount, isBIK } from './bank-account';
import { isGLN, isGS1 } from './gs1';
import { isINN } from './inn';
import { isINNIndividual } from './inn/individual';
import { isINNLegalEntity } from './inn/entity';
import { isKPP } from './kpp';
import { isOGRN } from './ogrn';
import { isOGRNIP } from './ogrnip';
import { isOKATO } from './okato';
import { isOKPO } from './okpo';

export {
  isCorrespondentAccount,
  isPaymentAccount,
  isBIK,
  isGLN,
  isGS1,
  isINN,
  isINNIndividual,
  isINNLegalEntity,
  isKPP,
  isOGRN,
  isOGRNIP,
  isOKATO,
  isOKPO,
};
