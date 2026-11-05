"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms
const { cuboid, rectangle, sphere, circle } = jscad.primitives

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    componentLine,
} = swcadJs.components

function main() {
    const spaceUnit = math.inchesToMm(2.25)

    const baseComponent1 = cuboid({ size: [15, 10, 5] })
    const baseComponent2 = cuboid({ size: [10, 15, 5] })

    const componentLine1 = componentLine({
        endOffset: 0,
        baseLineOffset: 0,
        component: baseComponent1,
        startPt: [0, 0],
        endPt: [75, 60],
        unitLength: 25.4,
    })[0]

    const componentLine2 = componentLine({
        endOffset: 5,
        baseLineOffset: 0,
        component: baseComponent2,
        startPt: [50, 50],
        endPt: [70, 150],
        unitLength: 25.4,
    })[0]

    return [
        componentLine1,
        componentLine2,
    ]
}

module.exports = { main }
