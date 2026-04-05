"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    brick
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

    console.log(brick)

    Object.entries(brick.northAmerica).forEach(([brickKey, brickVal], idx) => {
        layout.addToLayout({
            name: `brick-${idx}`,
            desc: `northAmerica.${brickKey}`,
            layoutOpts,
        }, brickVal);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
