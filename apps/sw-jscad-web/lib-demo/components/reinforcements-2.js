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

    const outModelsLenghts = reinfLengths.map((oModel, idx) => {
        return translate([0, idx * spaceUnit, 0], oModel)
    })

    return [
        ...outModelsLenghts,
    ];
}

module.exports = { main }
