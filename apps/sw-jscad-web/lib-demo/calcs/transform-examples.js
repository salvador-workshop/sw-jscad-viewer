"use strict"
const jscad = require('@jscad/modeling')

const { cuboid, sphere, cylinder, ellipse } = jscad.primitives
const { translate, rotate, align } = jscad.transforms;
const { union } = jscad.booleans
const { TAU } = jscad.maths.constants

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
    transform,
} = swcadJs.calcs;

const {
    reinforcements,
} = swcadJs.profiles

const spaceUnit = math.inchesToMm(1.75)

const main = () => {
    const shape4 = ellipse({ radius: [5, 12] })
    let shape5 = rotate(
        [0, 0, 0],
        reinforcements.boxCurve.boxCurveQuarter({
            size: [10, 10],
        })[0]
    )
    shape5 = align({ modes: ['min', 'min', 'center'] }, shape5)

    const baseModels = [
        shape4,
        shape5,
    ]

    const cutModel = transform.cutQuadrant(shape4)
    const clonedModel = transform.cloneQuadrant(shape5)

    const transformedModels = [
        cutModel,
        clonedModel,
    ]

    const outBaseModels = baseModels.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })
    const outTransformedModels = transformedModels.map((otModel, idx) => {
        return translate([idx * spaceUnit, spaceUnit, 0], otModel)
    })

    return [
        ...outBaseModels,
        ...outTransformedModels,
    ];
}

module.exports = { main }
