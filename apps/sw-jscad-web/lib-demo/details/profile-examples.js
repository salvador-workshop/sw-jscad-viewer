"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    reinforcement,
    connections,
    shapes,
    edge,
    curves,
} = swCadJs.profiles

const {
    layout,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 15,
        layoutSpace: 5,
    }

    const profile1 = shapes.square.sqCornerCircNotch({ sqLength: 5 });
    layout.addToLayout({ name: 'profile1', desc: '...', layoutOpts }, profile1);

    const profile2 = shapes.octagon({ sqLength: 5 });
    layout.addToLayout({ name: 'profile2', desc: '...', layoutOpts }, profile2);

    const profile3 = edge.circNotch({ totalThickness: 8, topThickness: 4 });
    layout.addToLayout({ name: 'profile3', desc: '...', layoutOpts }, profile3);

    const profile4 = edge.circPortrusion({ totalThickness: 8, topThickness: 4 });
    layout.addToLayout({ name: 'profile4', desc: '...', layoutOpts }, profile4);

    const profile5 = edge.circNotch({ totalThickness: 8, topThickness: 4, smallOffset: 1 });
    layout.addToLayout({ name: 'profile5', desc: '...', layoutOpts }, profile5);

    const profile6 = edge.circPortrusion({ totalThickness: 8, topThickness: 4, smallOffset: 1 });
    layout.addToLayout({ name: 'profile6', desc: '...', layoutOpts }, profile6);

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
            geom: curves.rightCorner.golden({ width: 25 }),
        },
        {
            name: 'curves-rtSilver',
            geom: curves.rightCorner.silver({ width: 25 }),
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
