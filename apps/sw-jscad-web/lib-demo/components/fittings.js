"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms
const { cuboid, rectangle, sphere, circle } = jscad.primitives

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    fittings,
} = swcadJs.components

function main() {
    const spaceUnit = math.inchesToMm(2.25)

    const simpleDowelHolder = fittings.simpleRoundFitting({
        dowelRadius: 3.25 / 2,
    })
    const doubleDowelHolder = fittings.roundFitting({
        dowelRadius: 3.25 / 2,
    })
    const flatStickHolder = fittings.rectangularFitting({
        dowelRadius: 3.25 / 2,
    })

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], simpleDowelHolder),
        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], doubleDowelHolder),
        translate([spaceUnit * 2, spaceUnit * 0, spaceUnit * 0], flatStickHolder),
    ]
}

module.exports = { main }
