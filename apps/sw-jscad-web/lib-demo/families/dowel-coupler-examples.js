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
        layoutMargin: 25,
        noFrame: false,
        layoutSpace: 20,
    }

    console.log(dowelFittings)

    const dowelRadius = math.inchesToMm(1 / 8)

    const xsCoupler = dowelFittings.couplers.extraSmallDowelCoupler({ dowelRadius })
    const smCoupler = dowelFittings.couplers.smallDowelCoupler({ dowelRadius })
    const mdCoupler = dowelFittings.couplers.mediumDowelCoupler({ dowelRadius })
    const lgCoupler = dowelFittings.couplers.largeDowelCoupler({ dowelRadius })

    layout.addToLayout({
        name: 'xsCoupler',
        desc: '...',
        layoutOpts,
    }, xsCoupler);

    layout.addToLayout({
        name: 'smCoupler',
        desc: '...',
        layoutOpts,
    }, smCoupler);

    layout.addToLayout({
        name: 'mdCoupler',
        desc: '...',
        layoutOpts,
    }, mdCoupler);

    layout.addToLayout({
        name: 'lgCoupler',
        desc: '...',
        layoutOpts,
    }, lgCoupler);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
