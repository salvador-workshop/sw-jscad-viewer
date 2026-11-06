"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const swcadJsHelpers = require('swcad-js-helpers').init({ jscad, swcadJs });
console.log('swcadJsHelpers', swcadJsHelpers)

const {
    arch
} = swcadJsHelpers.profiles;

const {
    layout,
} = swcadJsHelpers.utils;

const main = () => {
    const layoutOpts = {
        layoutMargin: 20,
        layoutSpace: 0,
    }

    const arch3 = arch.twoPtArch({ arcRadius: 30, archWidth: 35 });
    layout.addToLayout({ name: 'arch3', desc: '...', layoutOpts }, arch3);

    const arch4 = arch.onePtArch({ arcRadius: 60 });
    layout.addToLayout({ name: 'arch4', desc: '...', layoutOpts }, arch4);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }