"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms;

const swcadJs = require('swcad-js-test').init({ jscad });

console.log('swcadJs', swcadJs)

const {
    mesh,
} = swcadJs.components

const {
    math
} = swcadJs.calcs;

const spaceUnit = math.inchesToMm(3)

const main = () => {
    const models = []

    models.push(
        mesh.meshPanel({
            size: [math.inchesToMm(3), math.inchesToMm(4)],
            holeRadius: 3,
            holeDistance: math.inchesToMm(3 / 4),
        })
    );

    models.push(
        mesh.meshPanel({
            size: [math.inchesToMm(3), math.inchesToMm(4)],
            thickness: 5,
            holeRadius: 4,
            holeDistance: math.inchesToMm(3 / 4),
            pattern: 'square'
        })
    );

    models.push(
        mesh.meshPanel({
            size: [math.inchesToMm(3), math.inchesToMm(4)],
            holeRadius: 5,
            holeDistance: math.inchesToMm(3 / 4),
            edgeMargin: 12.7,
        })
    );

    const outModels = models.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    return outModels;
}

module.exports = { main }
