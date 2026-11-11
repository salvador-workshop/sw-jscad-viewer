"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    beadsBits,
} = swcadJs.profiles

const spaceUnit = math.inchesToMm(3)

function main() {
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

    const rabbetModel = beadsBits.corner.rabbet(rabbetOpts)[0]
    const chamferModel = beadsBits.corner.chamfer(chamferOpts)[0]
    const roundOverModel = beadsBits.corner.roundOver(roundOverOpts)[0]
    const coveModel = beadsBits.corner.cove(coveOpts)[0]

    return [
        translate([0, spaceUnit * 0, 0], rabbetModel),
        translate([0, spaceUnit * 1, 0], chamferModel),
        translate([0, spaceUnit * 2, 0], roundOverModel),
        translate([0, spaceUnit * 3, 0], coveModel),
    ]
}

module.exports = { main }
