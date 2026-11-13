"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms;

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    reinforcements,
} = swcadJs.components

const spaceUnit = math.inchesToMm(1.5)

const main = () => {
    const lightReinforcedLength = reinforcements.reinforcedLength.lightReinforcedLength({})[0]
    const mediumReinforcedLength = reinforcements.reinforcedLength.mediumReinforcedLength({})[0]
    const heavyReinforcedLength = reinforcements.reinforcedLength.heavyReinforcedLength({})[0]

    const reinfLengths = [
        lightReinforcedLength,
        mediumReinforcedLength,
        heavyReinforcedLength,
    ]

    const lightReinforcedRing = reinforcements.reinforcedRing.lightReinforcedRing({})[0]
    const mediumReinforcedRing = reinforcements.reinforcedRing.mediumReinforcedRing({})[0]
    const heavyReinforcedRing = reinforcements.reinforcedRing.heavyReinforcedRing({})[0]

    const reinfRings = [
        lightReinforcedRing,
        mediumReinforcedRing,
        heavyReinforcedRing,
    ]

    const outModelsLengths = reinfLengths.map((oModel, idx) => {
        return translate([0, idx * spaceUnit, 0], oModel)
    })

    const outModelsRings = reinfRings.map((oModel, idx) => {
        return translate([spaceUnit * 2, idx * spaceUnit, 0], oModel)
    })

    return [
        ...outModelsLengths,
        ...outModelsRings,
    ];
}

module.exports = { main }
