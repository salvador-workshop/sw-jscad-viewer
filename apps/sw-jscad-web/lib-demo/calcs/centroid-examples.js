"use strict"
const jscad = require('@jscad/modeling')

const { union } = jscad.booleans;
const { translate } = jscad.transforms;
const { sphere } = jscad.primitives;

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    geometry,
    math,
} = swcadJs.calcs;

const spaceUnit = math.inchesToMm(3)

const generatePoints = (numPoints, offset) => {
    const min = -20
    const max = 20
    const newPoints = []

    for (let idx = 0; idx < numPoints; idx++) {
        newPoints.push([
            math.getRandomInt(min, max) + offset[0],
            math.getRandomInt(min, max) + offset[1],
            math.getRandomInt(min, max) + offset[2]
        ])
    }

    return newPoints
}

const main = () => {
    const numClouds = 4;
    const pointClouds = []

    for (let index = 0; index < numClouds; index++) {
        const numPointsInCloud = math.getRandomInt(8, 11);
        const offset = [
            0,
            0,
            0,
        ]
        pointClouds.push(generatePoints(numPointsInCloud, offset));
    }

    console.log(pointClouds)

    const ptCloudModels = []
    pointClouds.forEach((ptCloud, idx) => {
        const pointGeoms = []
        const centroid = geometry.points.centroid(ptCloud)
        pointGeoms.push(translate(centroid, sphere({ radius: 3 })))
        console.log(ptCloud)
        console.log(centroid)
        ptCloud.forEach(pt => {
            pointGeoms.push(translate(pt, sphere()))
        })

        const ptCloudModel = union(...pointGeoms);
        ptCloudModels.push(translate([spaceUnit * idx, 0, 0], ptCloudModel))
    })

    return ptCloudModels;
}

module.exports = { main }
