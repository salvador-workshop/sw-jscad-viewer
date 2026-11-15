"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms;

const swcadJs = require('swcad-js').init({ jscad });

console.log('swcadJs', swcadJs)

const {
    mesh,
} = swcadJs.components

const {
    math
} = swcadJs.calcs;

const spaceUnit = math.inchesToMm(4.5)

const main = () => {
    const meshPanel1 = mesh.meshPanel({
        size: [math.inchesToMm(3), math.inchesToMm(4)],
        holeRadius: 3,
        holeDistance: math.inchesToMm(3 / 4),
    })[0]

    const meshPanel2 = mesh.meshPanel({
        size: [math.inchesToMm(3), math.inchesToMm(4)],
        thickness: 5,
        holeRadius: 4,
        holeDistance: math.inchesToMm(3 / 4),
        pattern: 'square'
    })[0]

    const meshPanel3 = mesh.meshPanel({
        size: [math.inchesToMm(3), math.inchesToMm(4)],
        holeRadius: 5,
        holeDistance: math.inchesToMm(3 / 4),
        edgeMargin: math.inchesToMm(1 / 2),
    })[0]

    const models = [
        meshPanel1,
        meshPanel2,
        meshPanel3,
    ]

    const outModels = models.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    return outModels;
}

module.exports = { main }
