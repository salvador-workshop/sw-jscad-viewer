"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

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

    const simpleDowelHolder = fittings.roundFitting({
        dowelRadius: 3.25 / 2,
        length: math.inchesToMm(5 / 16),
    })[0]

    const simpleInvDowelHolder = fittings.inverseRoundFitting({
        dowelRadius: 3.25 / 2,
        length: math.inchesToMm(5 / 16),
    })[0]

    const doubleDowelHolder = fittings.doubleRoundFitting({
        dowelRadius: 3.25 / 2,
        length: math.inchesToMm(5 / 16),
    })[0]

    const flatStickHolder = fittings.rectangularFitting({
        subjectSize: [math.inchesToMm(1 / 4), math.inchesToMm(1 / 8)],
        length: math.inchesToMm(5 / 16),
    })[0]

    const roundProfile1 = fittings.roundFittingCutProfile({
        dowelRadius: 3.25 / 2,
        length: math.inchesToMm(5 / 16),
    })[0]
    const roundProfile2 = fittings.invRoundFittingCutProfile({
        dowelRadius: 3.25 / 2,
        length: math.inchesToMm(5 / 16),
    })[0]
    const rectProfile1 = fittings.rectFittingCutProfile({
        subjectSize: [math.inchesToMm(1 / 4), math.inchesToMm(1 / 8)],
        length: math.inchesToMm(5 / 16),
    })[0]

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], simpleDowelHolder),
        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], simpleInvDowelHolder),
        translate([spaceUnit * 2, spaceUnit * 0, spaceUnit * 0], doubleDowelHolder),
        translate([spaceUnit * 3, spaceUnit * 0, spaceUnit * 0], flatStickHolder),
        translate([spaceUnit * 0, spaceUnit * 1, spaceUnit * 0], roundProfile1),
        translate([spaceUnit * 1, spaceUnit * 1, spaceUnit * 0], roundProfile2),
        translate([spaceUnit * 2, spaceUnit * 1, spaceUnit * 0], rectProfile1),
    ]
}

module.exports = { main }
