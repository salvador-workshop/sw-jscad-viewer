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

const spaceUnit = math.inchesToMm(1.5)

function main() {
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

    const cutProfiles = [
        roundProfile1,
        roundProfile2,
        rectProfile1,
    ]

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

    const basicHolders = [
        simpleDowelHolder,
        simpleInvDowelHolder,
        doubleDowelHolder,
        flatStickHolder,
    ]

    const roundFittingCross = fittings.roundFittingCross({
        dowelRadius: 3.25 / 2,
        length: math.inchesToMm(5 / 16),
    })[0]
    const roundFittingTee = fittings.roundFittingTee({
        dowelRadius: 3.25 / 2,
        length: math.inchesToMm(5 / 16),
    })[0]
    const roundFittingSplit = fittings.roundFittingSplit({
        dowelRadius: 3.25 / 2,
        length: math.inchesToMm(5 / 16),
    })[0]
    const [
        maleSplitFitting,
        femaleSplitFitting,
    ] = roundFittingSplit

    const advancedHolders = [
        roundFittingCross,
        roundFittingTee,
        maleSplitFitting,
        femaleSplitFitting,
    ]

    const cutProfilesOut = cutProfiles.map((model, idx) => {
        return translate([spaceUnit * idx, spaceUnit * 0, spaceUnit * 0], model)
    })
    const basicHoldersOut = basicHolders.map((model, idx) => {
        return translate([spaceUnit * idx, spaceUnit * 1, spaceUnit * 0], model)
    })
    const advancedHoldersOut = advancedHolders.map((model, idx) => {
        return translate([spaceUnit * idx, spaceUnit * 2, spaceUnit * 0], model)
    })

    return [
        ...cutProfilesOut,
        ...basicHoldersOut,
        ...advancedHoldersOut,
    ]
}

module.exports = { main }
