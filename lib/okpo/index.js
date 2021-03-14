"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOKPO = void 0;
/**
 * check OKPO
 * @param value string
 *
 * @returns boolean
 */
exports.isOKPO = function (value) {
    if (!value)
        return false;
    var expectedValue = Number(value.slice(-1));
    var getWeight = function (index) {
        if (index < 10)
            return index + 1;
        else
            return (index % 10) + 1;
    };
    var testingValue = value.slice(0, -1);
    var summ = 0;
    for (var i in testingValue.split('')) {
        if (i)
            summ += Number(testingValue[i]) * getWeight(Number(i));
    }
    var del11 = summ % 11;
    if (del11 === 10) {
        summ = 0;
        for (var i in testingValue.split('')) {
            if (i)
                summ += Number(testingValue[i]) * (getWeight(Number(i)) + 2);
        }
        del11 = del11 === 10 ? 0 : del11;
    }
    return del11 === expectedValue;
};
