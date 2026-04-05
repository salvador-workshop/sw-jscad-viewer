"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
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
            name: 'mesh-panel-1.0',
            desc: '...',
            layoutOpts,
        },
        mesh.meshPanel({
            size: [50, 30, 2.5],
            radius: 2.5,
            segments: 9,
        })
    );
    layout.addToLayout(
        {
            name: 'mesh-panel-1.1',
            desc: '...',
            layoutOpts,
        },
        mesh.meshPanel({
            size: [50, 30, 2.5],
            radius: 2.5,
            segments: 9,
            edgeInsets: [2, 2],
        })
    );
    layout.addToLayout(
        {
            name: 'mesh-panel-1.2',
            desc: '...',
            layoutOpts,
        },
        mesh.meshPanel({
            size: [50, 30, 2.5],
            radius: 2.5,
            segments: 9,
            edgeOffsets: [2, 2]
        })
    );
    layout.addToLayout(
        {
            name: 'mesh-panel-1.3',
            desc: '...',
            layoutOpts,
        },
        mesh.meshPanel({
            size: [50, 30, 2.5],
            radius: 2.5,
            segments: 9,
            edgeInsets: [2, 2],
            edgeOffsets: [2, 2]
        })
    );

    layout.addToLayout(
        {
            name: 'mesh-panel-2',
            desc: '...',
            layoutOpts,
        },
        mesh.meshPanel({
            size: [40, 30, 2.5],
            radius: 2.5,
            segments: 8,
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
            size: [45, 35, 2],
            radius: 3,
            segments: 8,
            edgeMargin: 2,
            patternMode: 'fill'
        })
    );

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
