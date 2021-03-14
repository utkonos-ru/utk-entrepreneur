"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isINNLegalEntity = void 0;
/**
 * check INN legal entity
 * @param value string
 *
 * @returns boolean
 */
exports.isINNLegalEntity = function (value) {
    if ((value === null || value === void 0 ? void 0 : value.length) > 0) {
        var getN = function (index) { return parseInt(value[index], 10); };
        if (value.length === 10) {
            var dgt10 = ((2 * getN(0) +
                4 * getN(1) +
                10 * getN(2) +
                3 * getN(3) +
                5 * getN(4) +
                9 * getN(5) +
                4 * getN(6) +
                6 * getN(7) +
                8 * getN(8)) %
                11) %
                10;
            return getN(9) === dgt10;
        }
    }
    return false;
};
