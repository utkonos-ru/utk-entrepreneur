"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGS1 = void 0;
/**
 * check is GS1
 *
 * @param value string
 *
 * @returns boolean
 */
exports.isGS1 = function (value) {
    var sum = 0;
    for (var i = 2; i <= value.length; i++) {
        var num = Number(value[value.length - i]);
        if (num.toString() !== value[value.length - i]) {
            return false;
        }
        sum += (i % 2 === 0 ? 3 : 1) * num;
    }
    var modulo = sum % 10;
    return (modulo ? 10 - modulo : 0) === Number(value[value.length - 1]);
};
