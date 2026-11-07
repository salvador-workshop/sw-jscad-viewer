"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const swcadJsHelpers = require('swcad-js-helpers-test').init({ jscad, swcadJs });
console.log('swcadJsHelpers', swcadJsHelpers)

const {
    foil,
} = swcadJsHelpers.profiles

const {
    layout,
} = swcadJsHelpers.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 18,
        layoutSpace: 5,
    }

    const foil1 = foil.trefoil({ radius: 10 });
    layout.addToLayout({ name: 'foil1', desc: '...', layoutOpts }, foil1);

    const foil2 = foil.trefoil({ radius: 10, lobeRadiusType: 'inSlice' });
    layout.addToLayout({ name: 'foil2', desc: '...', layoutOpts }, foil2);

    const foil3 = foil.trefoil({ radius: 10, lobeRadiusType: 'halfRadius' });
    layout.addToLayout({ name: 'foil3', desc: '...', layoutOpts }, foil3);

    const foil4 = foil.quatrefoil({ radius: 10 });
    layout.addToLayout({ name: 'foil4', desc: '...', layoutOpts }, foil4);

    const foil5 = foil.quatrefoil({ radius: 10, lobeRadiusType: 'inSlice' });
    layout.addToLayout({ name: 'foil5', desc: '...', layoutOpts }, foil5);

    const foil6 = foil.quatrefoil({ radius: 10, lobeRadiusType: 'halfRadius' });
    layout.addToLayout({ name: 'foil6', desc: '...', layoutOpts }, foil6);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }