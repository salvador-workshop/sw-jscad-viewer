"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    beadsBits,
} = swcadJs.components

const spaceUnit = math.inchesToMm(3)

function main() {
    const interfaceThickness = 1.333333
    const lgProfileBeadWidth = interfaceThickness * 1.75
    const mdProfileBeadWidth = interfaceThickness * 1.5
    const smProfileBeadWidth = interfaceThickness * 1.125

    const interfaceBeads = beadsBits.interface30DegProfileBeads(
        interfaceThickness,
        smProfileBeadWidth,
        mdProfileBeadWidth,
        lgProfileBeadWidth,
    )

    const rabbetOpts = {
        offset1: 6,
        offset2: 8,
        offset3: 6,
        offset4: 8,
    }
    const chamferOpts = {
        offset1: 6,
        offset2: 8,
    }
    const roundOverOpts = {
        offset1: 6,
        offset2: 8,
    }
    const coveOpts = {
        offset1: 6,
        offset2: 8,
        offset3: 6,
        offset4: 8,
    }

    const rabbet3dModel = beadsBits.corner.rabbet(rabbetOpts)[0]
    const chamfer3dModel = beadsBits.corner.chamfer(chamferOpts)[0]
    const roundOver3dModel = beadsBits.corner.roundOver(roundOverOpts)[0]
    const cove3dModel = beadsBits.corner.cove(coveOpts)[0]

    return [
        translate([0, spaceUnit * 0, 0], interfaceBeads.sm),
        translate([0, spaceUnit * 1, 0], interfaceBeads.md),
        translate([0, spaceUnit * 2, 0], interfaceBeads.lg),

        translate([spaceUnit * 1, spaceUnit * 0, 0], rabbet3dModel),
        translate([spaceUnit * 1, spaceUnit * 1, 0], chamfer3dModel),
        translate([spaceUnit * 1, spaceUnit * 2, 0], roundOver3dModel),
        translate([spaceUnit * 1, spaceUnit * 3, 0], cove3dModel),
    ]
}

module.exports = { main }
