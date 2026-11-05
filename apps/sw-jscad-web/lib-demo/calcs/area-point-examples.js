"use strict"
const jscad = require('@jscad/modeling')

const { union } = jscad.booleans;
const { translate } = jscad.transforms;
const { sphere } = jscad.primitives;

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
    geometry,
} = swcadJs.calcs;

const spaceUnit = math.inchesToMm(2)

const main = () => {
    const areaSize = [15, 25]
    const pointClouds = []

    pointClouds.push(geometry.getTriangularPtsInArea(areaSize[0], areaSize[1], 5, false));
    pointClouds.push(geometry.getTriangularPtsInArea(areaSize[0], areaSize[1], 5));
    pointClouds.push(geometry.getSquarePtsInArea(areaSize[0], areaSize[1], 5, false));
    pointClouds.push(geometry.getSquarePtsInArea(areaSize[0], areaSize[1], 5));

    console.log(pointClouds)

    const ptCloudModels = []

    pointClouds.forEach((ptCloud, idx) => {
        const pointGeoms = []
        pointGeoms.push(sphere({ radius: 3 }))
        console.log(ptCloud)
        ptCloud.forEach(pt => {
            pointGeoms.push(translate([pt.x, pt.y, 0], sphere()))
        })
        const ptCloudModel = union(...pointGeoms);
        ptCloudModels.push(translate([spaceUnit * idx, 0, 0], ptCloudModel))
    })

    return ptCloudModels;
}

module.exports = { main }
