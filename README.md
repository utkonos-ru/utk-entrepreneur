# Валидация данных юридического лица (utk-entrepreneur)

Библиотека функций валидации данных юридического лица

## Установка

```
npm i --save @utkonos/entrepreneur
```

## Возможности

функции включают в себя валидаторы данных:

- БИК
- Расчётный счёт
- Корр. счёт
- GS1
- GLN (global location number)
- ИНН (юр. лицо, физ.лицо/ИП)
- КПП
- ОГРН(ИП)
- ОКАТО
- OKPO

## Описание методов

Любой метод представленный в библиотеки принимает значение и возвражает _boolean_

- __isBIK__(value: _string_) - проверка значения на БИК
- __isPaymentAccount__(value: _string_, bik: _string_) - проверка рассчётного счёта. Принимает собственное значение и значение БИК.
- __isCorrespondentAccount__(value: _string_, bik: _string_) - проверка корреспондентского счёта. Принимает собственное значение и значение БИК.
- __isINN__(value: _string_) - проверяет яляется ли значение ИНН независимо от типа владельца (физическое лицо или юридическое лицо).
- __isINNIndividual__(value: _string_) - проверяет является ли значение ИНН физического лица.
- __isINNLegalEntity__(value: _string_) - проверяет является ли значение ИНН юридического лица.
- __isOGRN__(value: _string_) - проверяет является ли значение ОГРН (для юридических лиц).
- __isOGRNIP__(value: _string_) - проверяет является ли значение ОГРНИП (для ИП).
- __isOKATO__(value: _string_) - проверяет является ли значение ОКАТО.
- __isOKPO__(value: _string_) - проверяет является ли значение ОКПО.
- __isGLN__(value: _string_) - проверяет является ли значение GLN (global location number). Частный случай GS1 и базируется на методе _isGS1_.
- __isGS1__(value: _string_) - проверяет является ли значение GS1. Реализует проверку контрольной суммы для любых маркировок стандарта GS1. На базе этого метода вы можете построить собственный валидаторы для различных маркировок, например для EAN (EAN-13, EAN-8) и другие. Правильность GS1 вы можете проверить с помощью [сервиса](https://www.gs1.org/services/check-digit-calculator) ассоциации.

## Примеры

### Валидация данных рассчётного счёта

Пример для работы с yup. В данном примере используются 3 метода (_isBIK, isPaymentAccount, isCorrespondentAccount_). 
Обратите внимиание, что в методах yup'а test в некоторых случаях используется обычные функции, а не стрелочные.
Это нужно для сохранения TestContext'а yup, который необходим для работы Ref.

```
// Импорт
import { isBIK, isPaymentAccount, isCorrespondentAccount } from '@utkonos/entrepreneur'
import * as yup from 'yup'

const validtionSchema = yup.object().shape({
  bik: yup.string().test('bik', (value) => isBIK(value)),
  paymentAccout: yup.string().test('payment', function (value) {
    return isPaymentAccount(value, this.resolve(yup.ref('bik')))
  }),
  corrAccount: yup.string().test('corr', function (value) {
    return isCorrespondentAccount(value, this.resolve(yup.ref('bik')))
  }),
})
```

### Валидация ИНН

Библиотека utk-entrepreneur может валидировать разные типы ИНН.
Возьмём 2 ИНН и сравним в чём разница методов. ИНН физического лица - 525696684324, ИНН юридического лица - 7097670129

```
import {isINN, isINNIndividual, isINNLegalEntity} from '@utkonos/entrepreneur'

console.log(isINN('525696684324'), isINN('7097670129')) // true, true

console.log(isINNIndividual('525696684324'), isINNIndividual('7097670129')) // true, false

console.log(isINNLegalEntity('525696684324'), isINNLegalEntity('7097670129')) // false, true
```

