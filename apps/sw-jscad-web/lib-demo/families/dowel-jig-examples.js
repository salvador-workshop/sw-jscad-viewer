"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
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
        layoutMargin: 35,
        noFrame: false,
        layoutSpace: 20,
    }

    console.log(dowelFittings)

    const dowelRadius = math.inchesToMm(1 / 8)

    const singleJigs = dowelFittings.jigs.singleJigs({ dowelRadius })
    const triangularJigs = dowelFittings.jigs.triangularJigs({ dowelRadius })
    const twoByTwoJigs = dowelFittings.jigs.twoByTwoJigs({ dowelRadius })

    Object.entries(singleJigs.jigHolders).forEach(([jigKey, jigVal], idx) => {
        layout.addToLayout({
            name: `single-${idx}`,
            desc: jigKey,
            layoutOpts,
        }, jigVal);
    })

    Object.entries(triangularJigs.jigHolders).forEach(([jigKey, jigVal], idx) => {
        layout.addToLayout({
            name: `tri-${idx}`,
            desc: jigKey,
            layoutOpts,
        }, jigVal);
    })

    Object.entries(twoByTwoJigs.jigHolders).forEach(([jigKey, jigVal], idx) => {
        layout.addToLayout({
            name: `2x2-${idx}`,
            desc: jigKey,
            layoutOpts,
        }, jigVal);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
