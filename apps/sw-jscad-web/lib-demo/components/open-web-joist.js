"use strict"
const jscad = require('@jscad/modeling')

const { intersect, subtract } = jscad.booleans
const { colorize } = jscad.colors
const { cube, sphere } = jscad.primitives

const swCadJs = require('swcad-js').init({ lib: jscad });
console.log('swCadJs', swCadJs)

const {
    colors,
    math,
} = swCadJs.utils

const {
    openWebJoist,
} = swCadJs.components

function main() {
    const spaceUnit = math.inchesToMm(3.5)
    const openWebJoistProps = {}
    const openWebJoistData = openWebJoist(openWebJoistProps)

    const openWebJoistModel = openWebJoistData[0]
    const openWebJoistParts = openWebJoistData[1]

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], openWebJoistModel),

        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], openWebJoistParts.subcomponent1),
        translate([spaceUnit * 1, spaceUnit * 1, spaceUnit * 0], openWebJoistParts.subcomponent2),
        translate([spaceUnit * 1, spaceUnit * 2, spaceUnit * 0], openWebJoistParts.assembly1),
        translate([spaceUnit * 1, spaceUnit * 3, spaceUnit * 0], openWebJoistParts.assembly2),
    ]
}

module.exports = { main }
