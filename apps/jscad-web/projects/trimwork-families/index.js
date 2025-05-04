"use strict"
const jscad = require('@jscad/modeling')
const swJscad = require('sw-jscad').init(jscad);

const { trimFamilyBasic } = require('./trim-family-basic');
const { enhanceSwJscad } = require('./enhancer');

const { roundedCylinder, cylinder } = jscad.primitives
const { subtract } = jscad.booleans
const { align } = jscad.transforms
const { measureBoundingBox } = jscad.measurements
const { colorize } = jscad.colors

const enhancedSwJscad = enhanceSwJscad(swJscad);
const {
    transformUtils,
} = enhancedSwJscad

const main = () => {
    const tFamilyBasic = trimFamilyBasic();
    return [
        tFamilyBasic.small,
        tFamilyBasic.smallOrnament,
        tFamilyBasic.medium,
        tFamilyBasic.mediumOrnament1,
        tFamilyBasic.mediumOrnament2,
        tFamilyBasic.large,
        tFamilyBasic.largeOrnament1,
        tFamilyBasic.largeOrnament2,
        tFamilyBasic.largeOrnament3,
    ];
}

module.exports = { main }
