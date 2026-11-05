"use strict"
const jscad = require('@jscad/modeling')

const { cuboid, sphere, cylinder } = jscad.primitives
const { union } = jscad.booleans

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    transform,
} = swcadJs.calcs;

const spaceUnit = math.inchesToMm(3)

const main = () => {
    const shape1 = cuboid({ size: [15, 30, 15] })
    const shape2 = cylinder({ radius: 6, height: 15 })
    const shape3 = sphere({ radius: 10 })

    const shapeStack1 = transform.stack({}, [shape1, shape2, shape3])
    const shapeStack2 = transform.stack({}, [shape2, shape3, shape1])
    const shapeStack3 = transform.stack({ reverse: true }, [shape1, shape2, shape3])

    const models = []

    models.push(shape1);
    models.push(shape2);
    models.push(shape3);
    models.push(union(...shapeStack1));
    models.push(union(...shapeStack2));
    models.push(union(...shapeStack3));

    const outModels = models.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    return outModels;
}

module.exports = { main }
