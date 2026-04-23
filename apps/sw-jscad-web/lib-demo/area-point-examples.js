"use strict"
const jscad = require('@jscad/modeling')

const { union } = jscad.booleans;
const { translate } = jscad.transforms;
const { sphere } = jscad.primitives;

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    geometry,
} = swcadJs.calcs;

const {
    layout,
} = swcadJs.utils;

const main = () => {
    const layoutOpts = {
        layoutMargin: 25,
        noFrame: false,
        layoutSpace: 20,
    }

    const areaSize = [15, 25]
    const pointClouds = []

    pointClouds.push(geometry.getTriangularPtsInArea(areaSize[0], areaSize[1], 5, false));
    pointClouds.push(geometry.getTriangularPtsInArea(areaSize[0], areaSize[1], 5));
    pointClouds.push(geometry.getSquarePtsInArea(areaSize[0], areaSize[1], 5, false));
    pointClouds.push(geometry.getSquarePtsInArea(areaSize[0], areaSize[1], 5));

    console.log(pointClouds)

    pointClouds.forEach((ptCloud, idx) => {
        const pointGeoms = []
        pointGeoms.push(sphere({ radius: 3 }))
        console.log(ptCloud)
        ptCloud.forEach(pt => {
            pointGeoms.push(translate([pt.x, pt.y, 0], sphere()))
        })
        layout.addToLayout({
            name: `area-points-${idx}`,
            desc: '...',
            layoutOpts,
        }, union(...pointGeoms));
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
