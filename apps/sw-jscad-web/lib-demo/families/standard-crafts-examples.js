"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    crafts
} = swcadJs.components;

const {
    layout,
} = swcadJs.utils

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
