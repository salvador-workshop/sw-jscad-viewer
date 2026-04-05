"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    arch: arch3d,
} = swCadJs.models;

const {
    arch: arch2d,
    shapes,
} = swCadJs.profiles;

const {
    layout,
} = swCadJs.utils;

const main = () => {
    const layoutOpts = {
        layoutMargin: 20,
        layoutSpace: 0,
    }

    const profile1 = shapes.square.sqCornerCircNotch({ sqLength: 5 });

    const arch1 = arch3d.twoPtArch({ arcRadius: 30, archWidth: 35 }, profile1);
    layout.addToLayout({ name: 'arch1', desc: '...', layoutOpts }, arch1);

    const arch2 = arch3d.onePtArch({ arcRadius: 60 }, profile1);
    layout.addToLayout({ name: 'arch2', desc: '...', layoutOpts }, arch2);

    const arch3 = arch2d.twoPtArch({ arcRadius: 30, archWidth: 35 });
    layout.addToLayout({ name: 'arch3', desc: '...', layoutOpts }, arch3);

    const arch4 = arch2d.onePtArch({ arcRadius: 60 });
    layout.addToLayout({ name: 'arch4', desc: '...', layoutOpts }, arch4);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
