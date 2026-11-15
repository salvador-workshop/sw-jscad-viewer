"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
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
        length: math.inchesToMm(3 / 8),
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
        maleSplitRoundFitting,
        femaleSplitRoundFitting,
    ] = roundFittingSplit

    const advancedHoldersRound = [
        roundFittingCross,
        roundFittingTee,
        maleSplitRoundFitting,
        femaleSplitRoundFitting,
    ]

    const rectFittingCross = fittings.rectangularFittingCross({
        subjectSize: [math.inchesToMm(1 / 4), math.inchesToMm(1 / 8)],
        length: math.inchesToMm(3 / 8),
    })[0]
    const rectFittingTee = fittings.rectangularFittingTee({
        subjectSize: [math.inchesToMm(1 / 4), math.inchesToMm(1 / 8)],
        length: math.inchesToMm(3 / 8),
    })[0]
    const rectFittingSplit = fittings.rectangularFittingSplit({
        subjectSize: [math.inchesToMm(1 / 4), math.inchesToMm(1 / 8)],
        length: math.inchesToMm(3 / 8),
    })[0]

    const [
        maleSplitRectFitting,
        femaleSplitRectFitting,
    ] = rectFittingSplit

    const advancedHoldersRect = [
        rectFittingCross,
        rectFittingTee,
        maleSplitRectFitting,
        femaleSplitRectFitting,
    ]

    const cutProfilesOut = cutProfiles.map((model, idx) => {
        return translate([spaceUnit * idx, spaceUnit * 0, spaceUnit * 0], model)
    })
    const basicHoldersOut = basicHolders.map((model, idx) => {
        return translate([spaceUnit * idx, spaceUnit * 1, spaceUnit * 0], model)
    })
    const advancedHoldersRoundOut = advancedHoldersRound.map((model, idx) => {
        return translate([spaceUnit * idx, spaceUnit * 2, spaceUnit * 0], model)
    })
    const advancedHoldersRectOut = advancedHoldersRect.map((model, idx) => {
        return translate([spaceUnit * idx, spaceUnit * 3, spaceUnit * 0], model)
    })

    return [
        ...cutProfilesOut,
        ...basicHoldersOut,
        ...advancedHoldersRoundOut,
        ...advancedHoldersRectOut,
    ]
}

module.exports = { main }
