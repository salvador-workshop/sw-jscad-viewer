"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    tile
} = swcadJs.components;

const {
    layout,
} = swcadJs.utils

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
