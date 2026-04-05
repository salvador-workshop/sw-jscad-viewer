"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    crafts
} = swCadJs.components;

const {
    layout,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 25,
        noFrame: false,
        layoutSpace: 20,
    }

    console.log(crafts)

    Object.entries(crafts).forEach(([craftKey, craftFunc], idx) => {
        layout.addToLayout({
            name: `${craftKey}-2d`,
            desc: '..',
            layoutOpts,
        }, craftFunc({}).geom2);
        layout.addToLayout({
            name: `${craftKey}-3d`,
            desc: '..',
            layoutOpts,
        }, craftFunc({}).geom3);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
