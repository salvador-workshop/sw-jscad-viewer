"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const swcadJsHelpers = require('swcad-js-helpers-test').init({ jscad, swcadJs });
console.log('swcadJsHelpers', swcadJsHelpers)

const {
    foil: foil3d,
} = swcadJsHelpers.components

const {
    shapes,
} = swcadJsHelpers.profiles

const {
    layout,
} = swcadJsHelpers.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 18,
        layoutSpace: 5,
    }
    const profile1 = shapes.square.cornerCircNotch({ sqLength: 5 });
    const profile3 = shapes.octagon.octFromDiam({ sqLength: 5 });

    const foil7 = foil3d.trefoil({ radius: 15, lobeRadiusType: 'halfRadius', cutCentre: true }, profile1);
    layout.addToLayout({ name: 'foil7', desc: '...', layoutOpts }, foil7);

    const foil8 = foil3d.quatrefoil({ radius: 15, lobeRadiusType: 'mean', cutCentre: true }, profile3);
    layout.addToLayout({ name: 'foil8', desc: '...', layoutOpts }, foil8);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }