"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPaymentAccount = void 0;
var bik_1 = require("./bik");
/**
 * check is Paymet Account
 * @param value string
 * @param bik string
 *
 * @returns boolean
 */
exports.isPaymentAccount = function (value, bik) {
    var valueToString = value ? value.toString() : '';
    if (bik_1.isBIK(bik)) {
        if (!/[^0-9]/.test(valueToString) && valueToString.length === 20) {
            var bikRs = bik.toString().slice(-3) + valueToString;
            var checkSum = 0;
            var coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
            for (var i in coefficients) {
                if (i)
                    checkSum += coefficients[i] * (Number(bikRs[i]) % 10);
            }
            return checkSum % 10 === 0;
        }
    }
    return false;
};
