"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    beadsBits: beadsBitsProfiles,
} = swcadJs.profiles

const {
    beadsBits,
} = swcadJs.components


const interfaceThickness = 1.333333
const lgProfileBeadWidth = interfaceThickness * 1.75
const mdProfileBeadWidth = interfaceThickness * 1.5
const smProfileBeadWidth = interfaceThickness * 1.125

const interfaceBeads = beadsBits.interface.profileBeads(
    interfaceThickness,
    smProfileBeadWidth,
    mdProfileBeadWidth,
    lgProfileBeadWidth,
)


const rabbetData = beadsBitsProfiles.corner.rabbet(rabbetOpts)
const rabbetModel = rabbetData[0]

const chamferData = beadsBitsProfiles.corner.chamfer(chamferOpts)
const chamferModel = chamferData[0]

const roundOverData = beadsBitsProfiles.corner.roundOver(roundOverOpts)
const roundOverModel = roundOverData[0]

const coveData = beadsBitsProfiles.corner.cove(coveOpts)
const coveModel = coveData[0]


const rabbet3dData = beadsBits.corner.rabbet(rabbetOpts)
const rabbet3dModel = rabbet3dData[0]

const chamfer3dData = beadsBits.corner.chamfer(chamferOpts)
const chamfer3dModel = chamfer3dData[0]

const roundOver3dData = beadsBits.corner.roundOver(roundOverOpts)
const roundOver3dModel = roundOver3dData[0]

const cove3dData = beadsBits.corner.cove(coveOpts)
const cove3dModel = cove3dData[0]


function main() {
    const spaceUnit = math.inchesToMm(1.5)

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], interfaceBeads.sm),
        translate([spaceUnit * 0, spaceUnit * 1, spaceUnit * 0], interfaceBeads.md),
        translate([spaceUnit * 0, spaceUnit * 2, spaceUnit * 0], interfaceBeads.lg),

        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], rabbetModel),
        translate([spaceUnit * 1, spaceUnit * 1, spaceUnit * 0], chamferModel),
        translate([spaceUnit * 1, spaceUnit * 2, spaceUnit * 0], roundOverModel),
        translate([spaceUnit * 1, spaceUnit * 2, spaceUnit * 0], coveModel),

        translate([spaceUnit * 2, spaceUnit * 0, spaceUnit * 0], rabbet3dModel),
        translate([spaceUnit * 2, spaceUnit * 1, spaceUnit * 0], chamfer3dModel),
        translate([spaceUnit * 2, spaceUnit * 2, spaceUnit * 0], roundOver3dModel),
        translate([spaceUnit * 2, spaceUnit * 2, spaceUnit * 0], cove3dModel),
    ]
}

module.exports = { main }
