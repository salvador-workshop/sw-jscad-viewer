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
    beadsBits,
} = swCadJs.components

function main() {
    const spaceUnit = math.inchesToMm(3.5)

    const interfaceThickness = 1.333333
    const lgProfileBeadWidth = interfaceThickness * 1.75
    const mdProfileBeadWidth = interfaceThickness * 1.5
    const smProfileBeadWidth = interfaceThickness * 1.125

    const interfaceBeads = beadsBits.interfaceProfileBeads({
        interfaceThickness,
        smProfileBeadWidth,
        mdProfileBeadWidth,
        lgProfileBeadWidth,
    })

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], interfaceBeads.sm),
        translate([spaceUnit * 0, spaceUnit * 1, spaceUnit * 0], interfaceBeads.md),
        translate([spaceUnit * 0, spaceUnit * 2, spaceUnit * 0], interfaceBeads.lg),
    ]
}

module.exports = { main }
