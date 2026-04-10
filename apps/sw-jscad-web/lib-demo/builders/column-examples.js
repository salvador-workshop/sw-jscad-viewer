"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    column
} = swcadJs.models;

const {
    shapes,
} = swcadJs.profiles

const {
    layout,
} = swcadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 15,
        layoutSpace: 15,
    }

    const profile1 = shapes.square.sqCornerCircNotch({ sqLength: 5 });
    const profile3 = shapes.octagon({ sqLength: 5 });

    const col1 = column.threePtColumn({
        base: ['extrude', 8, null, profile1],
        shaft: ['cuboid', 2],
        capital: ['extrude', 6, null, profile3],
        height: 40,
    })
    layout.addToLayout({ name: 'col1', desc: '...', layoutOpts }, col1);

    const col2 = column.threePtColumn({
        base: ['roundCylinder', 2, 3.5],
        shaft: ['extrude', null, profile1],
        capital: ['roundCylinder', 2, 3.5],
        height: 20,
    });
    layout.addToLayout({ name: 'col2', desc: '...', layoutOpts }, col2);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent
}

module.exports = { main }
