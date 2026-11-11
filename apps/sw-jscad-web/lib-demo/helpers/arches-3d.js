"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const swcadJsHelpers = require('swcad-js-helpers').init({ jscad, swcadJs });
console.log('swcadJsHelpers', swcadJsHelpers)

const {
    arch: arch3d,
} = swcadJsHelpers.components;

const {
    shapes,
} = swcadJsHelpers.profiles;

const {
    layout,
} = swcadJsHelpers.utils;

const main = () => {
    const layoutOpts = {
        layoutMargin: 20,
        layoutSpace: 0,
    }

    const profile1 = shapes.square.cornerCircNotch({ sqLength: 5 });

    const arch1 = arch3d.twoPtArch({ arcRadius: 30, archWidth: 35 }, profile1);
    layout.addToLayout({ name: 'arch1', desc: '...', layoutOpts }, arch1);

    const arch2 = arch3d.onePtArch({ arcRadius: 60 }, profile1);
    layout.addToLayout({ name: 'arch2', desc: '...', layoutOpts }, arch2);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }