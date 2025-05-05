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
        translate([0, 0], tFamilyBasic.dadoMouldings.small),
        translate([20, 0], tFamilyBasic.dadoMouldings.medium),
        translate([50, 0], tFamilyBasic.dadoMouldings.large),
        translate([0, -70], tFamilyBasic.dadoMouldings.smallOrnament1),
        translate([20, -70], tFamilyBasic.dadoMouldings.mediumOrnament1),
        translate([50, -70], tFamilyBasic.dadoMouldings.largeOrnament1),
        translate([100, 0], tFamilyBasic.baseMouldings.small),
        translate([120, 0], tFamilyBasic.baseMouldings.medium),
        translate([150, 0], tFamilyBasic.baseMouldings.large),
        translate([100, -70], tFamilyBasic.baseMouldings.smallOrnament1),
        translate([120, -70], tFamilyBasic.baseMouldings.mediumOrnament1),
        translate([150, -70], tFamilyBasic.baseMouldings.largeOrnament1),
        translate([200, 0], tFamilyBasic.crownMouldings.small),
        translate([220, 0], tFamilyBasic.crownMouldings.medium),
        translate([250, 0], tFamilyBasic.crownMouldings.large),
        translate([200, -70], tFamilyBasic.crownMouldings.smallOrnament1),
        translate([220, -70], tFamilyBasic.crownMouldings.mediumOrnament1),
        translate([250, -70], tFamilyBasic.crownMouldings.largeOrnament1),
    ];
}

module.exports = { main }
