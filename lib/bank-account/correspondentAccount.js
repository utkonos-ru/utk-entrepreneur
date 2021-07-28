"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCorrespondentAccount = exports.matchFilial = void 0;
var bik_1 = require("./bik");
/**
 * match bank branch (correpondent account & bik)
 *
 * @param value
 * @param bik
 *
 * @returns boolean
 */
exports.matchFilial = function (value, bik) {
    return bik.slice(-3) === value.slice(-3);
};
/**
 * check is correspondent account
 * @param value string
 * @param bik string
 * @returns boolean
 */
exports.isCorrespondentAccount = function (value, bik) {
    var valueToString = value ? value.toString() : '';
    if (!exports.matchFilial(valueToString, bik))
        return false;
    if (bik_1.isBIK(bik)) {
        if (!/[^0-9]/.test(valueToString) && valueToString.length === 20) {
            var bikKs = '0' + bik.slice(4, 6) + valueToString;
            var checkSum = 0;
            var coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
            for (var i in coefficients) {
                if (i)
                    checkSum += coefficients[i] * (Number(bikKs[i]) % 10);
            }
            return checkSum % 10 === 0;
        }
    }
    return false;
};
