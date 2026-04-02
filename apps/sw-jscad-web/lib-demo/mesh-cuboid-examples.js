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
        layoutMargin: 40,
        noFrame: false,
        layoutSpace: 30,
    }

    layout.addToLayout(
        {
            name: 'mesh-cuboid-1',
            desc: '...',
            layoutOpts,
        },
        mesh.meshCuboid({
            size: [40, 30, 20],
            meshPanelThickness: 2,
            radius: 2.5,
            segments: 9
        })
    );

    layout.addToLayout(
        {
            name: 'mesh-cuboid-2.0',
            desc: '...',
            layoutOpts,
        },
        mesh.meshCuboid({
            size: [40, 30, 20],
            meshPanelThickness: 2,
            radius: 2.5,
            segments: 9,
            openTop: true,
        })
    );

    layout.addToLayout(
        {
            name: 'mesh-cuboid-2.1',
            desc: 'tube-like',
            layoutOpts,
        },
        mesh.meshCuboid({
            size: [40, 30, 20],
            meshPanelThickness: 2,
            radius: 2.5,
            segments: 9,
            openTop: true,
            openBottom: true,
        })
    );
    layout.addToLayout(
        {
            name: 'mesh-cuboid-2.2',
            desc: 'offsets',
            layoutOpts,
        },
        mesh.meshCuboid({
            size: [40, 30, 20],
            meshPanelThickness: 2,
            radius: 2.5,
            segments: 9,
            openTop: true,
            openBottom: true,
            edgeOffsets: [2, 2]
        })
    );
    layout.addToLayout(
        {
            name: 'mesh-cuboid-2.3',
            desc: 'insets',
            layoutOpts,
        },
        mesh.meshCuboid({
            size: [40, 30, 20],
            meshPanelThickness: 2,
            radius: 2.5,
            segments: 9,
            openTop: true,
            openBottom: true,
            edgeInsets: [2, 2]
        })
    );
    layout.addToLayout(
        {
            name: 'mesh-cuboid-2.4',
            desc: 'both',
            layoutOpts,
        },
        mesh.meshCuboid({
            size: [40, 30, 20],
            meshPanelThickness: 2,
            radius: 2.5,
            segments: 9,
            openTop: true,
            openBottom: true,
            edgeInsets: [2, 2],
            edgeOffsets: [2, 2]
        })
    );

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
