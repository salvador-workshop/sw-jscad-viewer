"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    foil: foil3d,
} = swcadJs.models

const {
    shapes,
    structure,
} = swcadJs.profiles

const {
    layout,
} = swcadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 18,
        layoutSpace: 5,
    }
    const profile1 = shapes.square.cornerCircNotch({ sqLength: 5 });
    const profile3 = shapes.octagon.octFromDiam({ sqLength: 5 });

    const foil1 = structure.foil.trefoil({ radius: 10 });
    layout.addToLayout({ name: 'foil1', desc: '...', layoutOpts }, foil1);

    const foil2 = structure.foil.trefoil({ radius: 10, lobeRadiusType: 'inSlice' });
    layout.addToLayout({ name: 'foil2', desc: '...', layoutOpts }, foil2);

    const foil3 = structure.foil.trefoil({ radius: 10, lobeRadiusType: 'halfRadius' });
    layout.addToLayout({ name: 'foil3', desc: '...', layoutOpts }, foil3);

    const foil4 = structure.foil.quatrefoil({ radius: 10 });
    layout.addToLayout({ name: 'foil4', desc: '...', layoutOpts }, foil4);

    const foil5 = structure.foil.quatrefoil({ radius: 10, lobeRadiusType: 'inSlice' });
    layout.addToLayout({ name: 'foil5', desc: '...', layoutOpts }, foil5);

    const foil6 = structure.foil.quatrefoil({ radius: 10, lobeRadiusType: 'halfRadius' });
    layout.addToLayout({ name: 'foil6', desc: '...', layoutOpts }, foil6);

    const foil7 = foil3d.trefoil({ radius: 15, lobeRadiusType: 'halfRadius', cutCentre: true }, profile1);
    layout.addToLayout({ name: 'foil7', desc: '...', layoutOpts }, foil7);

    const foil8 = foil3d.quatrefoil({ radius: 15, lobeRadiusType: 'mean', cutCentre: true }, profile3);
    layout.addToLayout({ name: 'foil8', desc: '...', layoutOpts }, foil8);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
