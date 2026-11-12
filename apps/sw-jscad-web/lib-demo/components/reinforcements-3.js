"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms;

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    reinforcements,
} = swcadJs.components

const spaceUnit = math.inchesToMm(2)

const main = () => {
    const reinforcedJoistLine1 = reinforcements.reinforcedJoistLine({
        startPt: [0, 0, 0],
        endPt: [math.inchesToMm(2.5), math.inchesToMm(2.5), 0],
    })[0]
    const reinforcedJoistLine2 = reinforcements.reinforcedJoistLine({
        startPt: [0, 0, 0],
        endPt: [math.inchesToMm(3), math.inchesToMm(3), 0],
        endOffset: 12.5
    })[0]
    const reinforcedJoistLine3 = reinforcements.reinforcedJoistLine({
        startPt: [0, 0, 0],
        endPt: [math.inchesToMm(2.5), math.inchesToMm(4), 0],
    })[0]

    const reinfJoistLines = [
        reinforcedJoistLine1,
        reinforcedJoistLine2,
        reinforcedJoistLine3,
    ]

    const lightReinforcedLine = reinforcements.reinforcedLine.lightReinforcedLine({
        startPt: [0, 0, 0],
        endPt: [math.inchesToMm(3), math.inchesToMm(4), 0],
    })[0]
    const mediumReinforcedLine = reinforcements.reinforcedLine.mediumReinforcedLine({
        startPt: [0, 0, 0],
        endPt: [math.inchesToMm(3), math.inchesToMm(4), 0],
        endOffset: 20
    })[0]
    const heavyReinforcedLine = reinforcements.reinforcedLine.heavyReinforcedLine({
        startPt: [0, 0, 0],
        endPt: [math.inchesToMm(2), math.inchesToMm(4), 0],
    })[0]

    const reinfLines = [
        lightReinforcedLine,
        mediumReinforcedLine,
        heavyReinforcedLine,
    ]

    const outModelsJoists = reinfJoistLines.map((oModel, idx) => {
        return translate([0, idx * spaceUnit, 0], oModel)
    })

    const outModelsLines = reinfLines.map((oModel, idx) => {
        return translate([spaceUnit * 2, idx * spaceUnit, 0], oModel)
    })

    return [
        ...outModelsJoists,
        ...outModelsLines,
    ];
}

module.exports = { main }
