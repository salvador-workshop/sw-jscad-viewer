"use strict"

const jscad = require('@jscad/modeling')
const swJscad = require('sw-jscad').init({ lib: jscad });
const { enhanceSwJscad } = require('./enhancer');
enhanceSwJscad({ lib: jscad, swLib: swJscad});

const { translate } = jscad.transforms;
const {
    wallBuilder,
} = swJscad

const main = () => {
    const wallResult1 = wallBuilder.build({
        height: 100,
        thickness: 8,
        length: 300,
        // wallOpts: 0,
        trimOpts: ['base', 'dado'],
        trimUnitHeight: 4,
        trimUnitDepth: 1.5,
        trimSides: 4,
    });

    return [
        // translate([0, 0], wallResult1),
        ...wallResult1,
    ];
}

module.exports = { main }
