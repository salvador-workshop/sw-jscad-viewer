"use strict"
const jscad = require('@jscad/modeling')

const { cuboid, cylinder } = jscad.primitives;

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    moulding,
} = swCadJs.components

const {
    edge,
} = swCadJs.profiles

const {
    layout,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 18,
        layoutSpace: 10,
    }

    const circNotchprofile = edge.circNotch({ totalThickness: 8, topThickness: 4, smallOffset: 1 });
    const circProtProfile = edge.circPortrusion({ totalThickness: 8, topThickness: 4, smallOffset: 0.67 });

    const orig1 = cuboid({ size: [20, 40, 8] });
    layout.addToLayout({ name: 'orig1', desc: '...', layoutOpts }, orig1);

    const mould1 = moulding.cuboidMouldingOneEdge({ size: [20, 40, 8] }, circNotchprofile);
    layout.addToLayout({ name: 'mould1', desc: '...', layoutOpts }, mould1);

    const orig2 = cuboid({ size: [10, 40, 8] });
    layout.addToLayout({ name: 'orig2', desc: '...', layoutOpts }, orig2);

    const mould2 = moulding.cuboidMoulding({ size: [10, 40, 8] }, circNotchprofile);
    layout.addToLayout({ name: 'mould2', desc: '...', layoutOpts }, mould2);

    const orig3 = cylinder({ radius: 20, height: 8 });
    layout.addToLayout({ name: 'orig3', desc: '...', layoutOpts }, orig3);

    const mould3 = moulding.circularMoulding({ radius: 20, height: 8 }, circProtProfile);
    layout.addToLayout({ name: 'mould3', desc: '...', layoutOpts }, mould3);

    const orig4 = cylinder({ radius: 20, height: 8 });
    layout.addToLayout({ name: 'orig4', desc: '...', layoutOpts }, orig4);

    const mould4 = moulding.circularMoulding({ segments: 8, radius: 20, height: 8 }, circProtProfile);
    layout.addToLayout({ name: 'mould4', desc: '...', layoutOpts }, mould4);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
