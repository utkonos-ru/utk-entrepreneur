"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGLN = void 0;
var gs1_1 = require("./gs1");
/**
 * check GLN (global location number)
 * @param value string
 *
 * @returns boolean
 */
exports.isGLN = function (value) {
    if (!value)
        return false;
    if (value.length !== 13)
        return false;
    return gs1_1.isGS1(value);
};
