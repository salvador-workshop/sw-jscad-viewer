"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ lib: jscad });
console.log('swCadJs', swCadJs)

const {
    tile
} = swCadJs.components;

const {
    layout,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 30,
        noFrame: false,
        layoutSpace: 20,
    }

    console.log(tile)

    Object.entries(tile.northAmerica).forEach(([tKey, tileVal], idx) => {
        layout.addToLayout({
            name: tKey,
            desc: '...',
            layoutOpts,
        }, tileVal.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
