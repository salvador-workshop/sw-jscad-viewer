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

const spaceUnit = math.inchesToMm(2.25)

function main() {

    const baseComponent1 = cuboid({ size: [15, 10, 5] })
    const baseComponent2 = cuboid({ size: [10, 15, 5] })

    const componentLine1 = componentLine({
        unitLength: math.inchesToMm(1),
        startPt: [0, 0],
        endPt: [80, 40],
        endOffset: 0,
        baseLineOffset: 0,
        component: baseComponent1,
    })[0]

    const componentLine2 = componentLine({
        unitLength: math.inchesToMm(1.25),
        startPt: [50, 50],
        endPt: [70, 150],
        endOffset: 5,
        baseLineOffset: 4,
        component: baseComponent2,
    })[0]

    return [
        componentLine1,
        componentLine2,
    ]
}

module.exports = { main }
