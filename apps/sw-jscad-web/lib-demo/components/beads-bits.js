"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    math,
} = swCadJs.utils

const {
    beadsBits,
} = swCadJs.components

function main() {
    const spaceUnit = math.inchesToMm(0.5)

    const interfaceThickness = 1.333333
    const lgProfileBeadWidth = interfaceThickness * 1.75
    const mdProfileBeadWidth = interfaceThickness * 1.5
    const smProfileBeadWidth = interfaceThickness * 1.125

    const interfaceBeads = beadsBits.interfaceProfileBeads(
        interfaceThickness,
        smProfileBeadWidth,
        mdProfileBeadWidth,
        lgProfileBeadWidth,
    )

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], interfaceBeads.sm),
        translate([spaceUnit * 0, spaceUnit * 1, spaceUnit * 0], interfaceBeads.md),
        translate([spaceUnit * 0, spaceUnit * 2, spaceUnit * 0], interfaceBeads.lg),
    ]
}

module.exports = { main }
