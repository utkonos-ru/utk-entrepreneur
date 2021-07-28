"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKPP = void 0;
/**
 * check KPP
 * @param value string
 */
exports.isKPP = function (value) {
    if (value.length !== 9)
        return false;
    if (!value.match(/\d{4}[\dA-Z][\dA-Z]\d{3}/))
        return false;
    return true;
};
