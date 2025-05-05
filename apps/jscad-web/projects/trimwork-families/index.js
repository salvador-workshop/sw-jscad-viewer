"use strict"
const jscad = require('@jscad/modeling')
// const swJscad = require('sw-jscad').init(jscad);

const { trimFamilyBasic } = require('./trim-family-basic');
// const { enhanceSwJscad } = require('./enhancer-trim');

const { translate } = jscad.transforms

// enhanceSwJscad(swJscad);
// const {
//     transformUtils,
// } = swJscad

const main = () => {
    const tFamilyBasic = trimFamilyBasic({ unitHeight: 20, unitDepth: 10 });
    return [
        tFamilyBasic.small,
        translate([20, 0], tFamilyBasic.medium),
        translate([50, 0], tFamilyBasic.large),
        translate([0, -70], tFamilyBasic.smallOrnament1),
        translate([20, -70], tFamilyBasic.mediumOrnament1),
        translate([50, -70], tFamilyBasic.largeOrnament1),
    ];
}

module.exports = { main }
