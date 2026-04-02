"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ lib: jscad });
console.log('swCadJs', swCadJs)

const {
    dowelFittings
} = swCadJs.components;

const {
    layout,
    math,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 30,
        noFrame: false,
        layoutSpace: 10,
    }

    console.log(dowelFittings)

    const dowelRadius = math.inchesToMm(1 / 16)

    const dowelJoists = {
        iJoist: dowelFittings.joists.iJoist({ dowelRadius, height: math.inchesToMm(3 / 4) }),
        triJoist: dowelFittings.joists.triJoist({ dowelRadius, height: math.inchesToMm(3 / 4) }),
        squareJoist: dowelFittings.joists.squareJoist({ dowelRadius, height: math.inchesToMm(3 / 4) }),
        rectJoist1: dowelFittings.joists.rectJoist({ dowelRadius, size: [math.inchesToMm(1), math.inchesToMm(3 / 4)] }),
        rectJoist2: dowelFittings.joists.rectJoist({ dowelRadius, size: [math.inchesToMm(3 / 2), math.inchesToMm(3 / 4)] }),
    }

    Object.entries(dowelJoists).forEach(([dgKey, dgVal], idx) => {
        layout.addToLayout({
            name: `${dgKey}-1`,
            desc: 'joist',
            layoutOpts,
        }, dgVal.joist);

        layout.addToLayout({
            name: `${dgKey}-2`,
            desc: 'upper',
            layoutOpts,
        }, dgVal.upperJig);

        layout.addToLayout({
            name: `${dgKey}-3`,
            desc: 'lower',
            layoutOpts,
        }, dgVal.lowerJig);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
