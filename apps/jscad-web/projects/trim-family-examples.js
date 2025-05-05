"use strict"

const jscad = require('@jscad/modeling')
const swJscad = require('sw-jscad').init(jscad);
const { enhanceSwJscad } = require('./enhancer');
enhanceSwJscad(jscad, swJscad);

const { translate } = jscad.transforms;
const {
    basicTrimFamily,
} = swJscad

const main = () => {
    const tFamilyBasic = basicTrimFamily.build({ unitHeight: 20, unitDepth: 10 });
    return [
        translate([0, 0], tFamilyBasic.base.small),
        translate([20, 0], tFamilyBasic.base.medium),
        translate([50, 0], tFamilyBasic.base.large),
        translate([0, -70], tFamilyBasic.base.smallOrn1),
        translate([20, -70], tFamilyBasic.base.mediumOrn1),
        translate([50, -70], tFamilyBasic.base.largeOrn1),
        translate([100, 0], tFamilyBasic.dado.small),
        translate([120, 0], tFamilyBasic.dado.medium),
        translate([150, 0], tFamilyBasic.dado.large),
        translate([100, -70], tFamilyBasic.dado.smallOrn1),
        translate([120, -70], tFamilyBasic.dado.mediumOrn1),
        translate([150, -70], tFamilyBasic.dado.largeOrn1),
        translate([200, 0], tFamilyBasic.crown.small),
        translate([220, 0], tFamilyBasic.crown.medium),
        translate([250, 0], tFamilyBasic.crown.large),
        translate([200, -70], tFamilyBasic.crown.smallOrn1),
        translate([220, -70], tFamilyBasic.crown.mediumOrn1),
        translate([250, -70], tFamilyBasic.crown.largeOrn1),
    ];
}

module.exports = { main }
