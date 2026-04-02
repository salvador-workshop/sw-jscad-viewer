"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ lib: jscad });
console.log('swCadJs', swCadJs)

const {
    mesh,
} = swCadJs.components

const {
    layout,
} = swCadJs.utils;

const main = () => {
    const layoutOpts = {
        layoutMargin: 25,
        noFrame: false,
        layoutSpace: 20,
    }

    layout.addToLayout(
        {
            name: 'm-cyl-1',
            desc: 'base',
            layoutOpts,
        },
        mesh.meshCylinder({
            radius: 12,
            height: 40,
            thickness: 1.5,
            meshRadius: 2.5,
            meshMinWidth: 2.5,
            meshSegments: 9,
        })
    );

    layout.addToLayout(
        {
            name: 'm-cyl-2',
            desc: 'inset',
            layoutOpts,
        },
        mesh.meshCylinder({
            radius: 16,
            height: 45,
            thickness: 1.5,
            meshRadius: 5,
            meshMinWidth: 2.5,
            meshSegments: 10,
            edgeInsets: [2, 3]
        })
    );

    layout.addToLayout(
        {
            name: 'm-cyl-3',
            desc: 'offset',
            layoutOpts,
        },
        mesh.meshCylinder({
            radius: 12,
            height: 40,
            thickness: 1.5,
            meshRadius: 4,
            meshMinWidth: 2.5,
            meshSegments: 12,
            edgeOffsets: [2.5, 3.5],
        })
    );

    layout.addToLayout(
        {
            name: 'm-cyl-4',
            desc: 'in+offset',
            layoutOpts,
        },
        mesh.meshCylinder({
            radius: 12,
            height: 40,
            thickness: 1.5,
            meshRadius: 4,
            meshMinWidth: 2.5,
            meshSegments: 12,
            edgeInsets: [2, 3],
            edgeOffsets: [2.5, 3.5],
        })
    );

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
