"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ lib: jscad });
console.log('swCadJs', swCadJs)

const {
    foil: foil3d,
} = swCadJs.models

const {
    shapes,
    foil: foil2d,
} = swCadJs.profiles

const {
    layout,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 18,
        layoutSpace: 5,
    }
    const profile1 = shapes.square.sqCornerCircNotch({ sqLength: 5 });
    const profile3 = shapes.octagon({ sqLength: 5 });

    const foil1 = foil2d.trefoil({ radius: 10 });
    layout.addToLayout({ name: 'foil1', desc: '...', layoutOpts }, foil1);

    const foil2 = foil2d.trefoil({ radius: 10, lobeRadiusType: 'inSlice' });
    layout.addToLayout({ name: 'foil2', desc: '...', layoutOpts }, foil2);

    const foil3 = foil2d.trefoil({ radius: 10, lobeRadiusType: 'halfRadius' });
    layout.addToLayout({ name: 'foil3', desc: '...', layoutOpts }, foil3);

    const foil4 = foil2d.quatrefoil({ radius: 10 });
    layout.addToLayout({ name: 'foil4', desc: '...', layoutOpts }, foil4);

    const foil5 = foil2d.quatrefoil({ radius: 10, lobeRadiusType: 'inSlice' });
    layout.addToLayout({ name: 'foil5', desc: '...', layoutOpts }, foil5);

    const foil6 = foil2d.quatrefoil({ radius: 10, lobeRadiusType: 'halfRadius' });
    layout.addToLayout({ name: 'foil6', desc: '...', layoutOpts }, foil6);

    const foil7 = foil3d.trefoil({ radius: 15, lobeRadiusType: 'halfRadius', cutCentre: true }, profile1);
    layout.addToLayout({ name: 'foil7', desc: '...', layoutOpts }, foil7);

    const foil8 = foil3d.quatrefoil({ radius: 15, lobeRadiusType: 'mean', cutCentre: true }, profile3);
    layout.addToLayout({ name: 'foil8', desc: '...', layoutOpts }, foil8);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
