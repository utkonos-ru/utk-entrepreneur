"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBIK = void 0;
/**
 * check string is BIK
 * @param value
 * @returns boolean
 */
exports.isBIK = function (value) {
    if (!/^\d{9}$/.test(value))
        return false;
    var thirdPart = value.slice(-3);
    if (+thirdPart === 0 || +thirdPart === 1 || +thirdPart === 2)
        return true;
    return +thirdPart >= 50 && +thirdPart < 1000;
};
