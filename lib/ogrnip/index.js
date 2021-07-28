"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOGRNIP = void 0;
/**
 * check OGRNIP
 * @param value string
 *
 * @returns boolean
 */
exports.isOGRNIP = function (value) {
    if (value) {
        if (value.length === 15) {
            var num14 = Math.floor((Number(value) / 10) % 13);
            var dgt15 = num14 % 10;
            return parseInt(value[14], 10) === dgt15;
        }
    }
    return false;
};
