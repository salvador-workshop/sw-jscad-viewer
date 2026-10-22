"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    shapes,
    curve,
} = swcadJs.profiles

const {
    layout,
} = swcadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 15,
        layoutSpace: 5,
    }

    const profile1 = shapes.square.cornerCircNotch({ sqLength: 25 });
    layout.addToLayout({ name: 'profile1', desc: '...', layoutOpts }, profile1);

    const profile2 = shapes.octagon.octFromDiam({ sqLength: 25 });
    layout.addToLayout({ name: 'profile2', desc: '...', layoutOpts }, profile2);

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
        {
            name: 'tri-rtGolden',
            geom: shapes.triangle.rightGolden({ base: 25 }),
        },
        {
            name: 'tri-rtSilver',
            geom: shapes.triangle.rightSilver({ base: 25 }),
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
        // {
        //     name: 'curves-smTrGolden',
        //     geom: curves.smoothTriangle.golden({ width: 25 }),
        // },
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
    ]

    const profiles2ndGen = [...triProfiles, ...rectProfiles, ...curveProfiles, ...ellipseProfiles]
    profiles2ndGen.forEach((prof) => {
        layout.addToLayout({ name: prof.name, desc: '..', layoutOpts }, prof.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
