"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const swcadJsHelpers = require('swcad-js-helpers-test').init({ jscad, swcadJs });
console.log('swcadJsHelpers', swcadJsHelpers)

const {
    shapes,
    curve,
} = swcadJsHelpers.profiles

const {
    layout,
} = swcadJsHelpers.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 15,
        layoutSpace: 5,
        noFrame: true,
    }

    const profile1 = shapes.square.cornerCircNotch({ sqLength: 25 });
    const profile2 = shapes.square.cornerCircles({ sqLength: 25 });
    const profile3 = shapes.polygons.octFromDiam({ sqLength: 25 });

    layout.addToLayout({ name: 'profile1', desc: '...', layoutOpts }, profile1);
    layout.addToLayout({ name: 'profile2', desc: '...', layoutOpts }, profile2);
    layout.addToLayout({ name: 'profile3', desc: '...', layoutOpts }, profile3);


    const triProfiles = [
        {
            name: 'tri-equilateral',
            geom: shapes.triangle.equilateral({ base: 25 }),
        },
        {
            name: 'tri-rt45',
            geom: shapes.triangle.right45({ base: 25 }),
        },
        {
            name: 'tri-rt30',
            geom: shapes.triangle.right30({ base: 25 }),
        },
    ]

    const rectProfiles = [
        {
            name: 'rect-golden',
            geom: shapes.rectangle.golden({ width: 25 }),
        },
        {
            name: 'rect-silver',
            geom: shapes.rectangle.silver({ width: 25 }),
        },
        {
            name: 'rect-sixtyThirty',
            geom: shapes.rectangle.sixtyThirty({ width: 25 }),
        },
    ]

    const curveProfiles = [
        {
            name: 'curves-rtGolden',
            geom: curve.rightCorner.golden({ width: 25 }),
        },
        {
            name: 'curves-rtSilver',
            geom: curve.rightCorner.silver({ width: 25 }),
        },
        {
            name: 'curves-sixtyThirty',
            geom: curve.rightCorner.sixtyThirty({ width: 25 }),
        },
    ]

    const ellipseProfiles = [
        {
            name: 'ellipse-golden',
            geom: shapes.ellipse.golden({ width: 25 }),
        },
        {
            name: 'ellipse-silver',
            geom: shapes.ellipse.silver({ width: 25 }),
        },
        {
            name: 'ellipse-sixtyThirty',
            geom: shapes.ellipse.sixtyThirty({ width: 25 }),
        },
    ]

    // TODO: curves need fixing
    const profiles2ndGen = [
        ...triProfiles,
        ...rectProfiles,
        // ...curveProfiles,
        ...ellipseProfiles
    ]

    profiles2ndGen.forEach((prof) => {
        layout.addToLayout({ name: prof.name, desc: '..', layoutOpts }, prof.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }