"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOGRN = void 0;
/**
 * check OGRN
 * @param value string
 *
 * @returns boolean
 */
exports.isOGRN = function (value) {
    if (value) {
        if (value.length === 13) {
            var num12 = Math.floor((Number(value) / 10) % 11);
            var dgt13 = num12 === 10 ? 0 : num12;
            return parseInt(value[12], 10) === dgt13;
        }
    }
    return false;
};
