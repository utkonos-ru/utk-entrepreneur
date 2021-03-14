"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isINN = void 0;
var entity_1 = require("./entity");
var individual_1 = require("./individual");
/**
 * check INN
 * @param value string
 *
 * @returns boolean
 */
exports.isINN = function (value) {
    return individual_1.isINNIndividual(value) || entity_1.isINNLegalEntity(value);
};
