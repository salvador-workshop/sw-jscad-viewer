"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });

console.log('swcadJs', swcadJs)

const {
    mesh,
} = swcadJs.components

const {
    math
} = swcadJs.calcs;

const {
    layout,
} = swcadJs.utils;

const main = () => {
    const layoutOpts = {
        layoutMargin: 25,
        noFrame: false,
        layoutSpace: 20,
    }

    layout.addToLayout(
        {
            name: 'mesh-panel-1.0',
            desc: '...',
            layoutOpts,
        },
        mesh.meshPanel({
            size: [math.inchesToMm(3), math.inchesToMm(4)],
            holeRadius: 3,
            holeDistance: math.inchesToMm(3/4),
        })
    );

    layout.addToLayout(
        {
            name: 'mesh-panel-2',
            desc: '...',
            layoutOpts,
        },
        mesh.meshPanel({
            size: [math.inchesToMm(3), math.inchesToMm(4)],
            thickness: 5,
            holeRadius: 4,
            holeDistance: math.inchesToMm(3/4),
            pattern: 'square'
        })
    );

    layout.addToLayout(
        {
            name: 'mesh-panel-3',
            desc: '...',
            layoutOpts,
        },
        mesh.meshPanel({
            size: [math.inchesToMm(3), math.inchesToMm(4)],
            holeRadius: 5,
            holeDistance: math.inchesToMm(3/4),
            edgeMargin: 12.7,
        })
    );

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
