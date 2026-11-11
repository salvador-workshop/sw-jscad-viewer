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
    const shape1 = cylinder({ radius: 6, height: 15 })
    const shape2 = cuboid({ size: [15, 30, 15] })
    const shape3 = sphere({ radius: 10 })
    const shape4 = ellipse({ radius: [5, 12] })
    let shape5 = rotate(
        [0, 0, 0],
        reinforcements.boxCurve.boxCurveQuarter({
            size: [10, 10],
        })[0]
    )
    shape5 = align({ modes: ['min', 'min', 'center'] }, shape5)

    const baseModels = [
        shape1,
        shape2,
        shape3,
        shape4,
        shape5,
    ]

    const shapeStack1 = transform.stack({}, [shape1, shape2, shape3])
    const shapeStack2 = transform.stack({ reverse: true }, [shape1, shape2, shape3])

    const bisectedModel1 = transform.bisect3d({ axis: 'x' }, shape1)
    const bisectedModel2 = transform.bisect3d({ axis: 'y' }, shape1)

    const slicedModel1 = transform.cutCircularSlice({ centralAngle: 1 }, shape1)
    const slicedModel2 = transform.cutCircularSlice({ centralAngle: 2 }, shape1)

    const cutModel = transform.cutQuadrant(shape4)
    const clonedModel = transform.cloneQuadrant(shape5)

    const transformedModels = [
        union(...shapeStack1),
        union(...shapeStack2),
        bisectedModel1,
        bisectedModel2,
        slicedModel1,
        slicedModel2,
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
