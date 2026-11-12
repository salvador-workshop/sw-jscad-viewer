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

const spaceUnit = math.inchesToMm(2.75)

const main = () => {
    const boxSupportQtr = reinforcements.boxSupport.boxSupportQuarter({
        size: [20, 20],
    })[0]

    const boxSupportHalf = reinforcements.boxSupport.boxSupportHalf({
        size: [20, 20],
        margin: [5, 5, 1.333],
    })[0]

    const reinfRect1 = reinforcements.reinforcedRectPanel({
        size: [40, 45, 3]
    })[0]
    const reinfRect2 = reinforcements.reinforcedRectPanel({
        size: [40, 45, 3],
        reinforcementPattern: 'cross'
    })[0]
    const reinfRect3 = reinforcements.reinforcedRectPanel({
        size: [40, 45, 3],
        reinforcementPattern: 'full'
    })[0]

    const basicModels = [
        boxSupportQtr,
        boxSupportHalf,
        reinfRect1,
        reinfRect2,
        reinfRect3,
    ]

    const dowelJoistPanelOpts1 = {
        length: 6 * 25.4,
        width: 1.25 * 25.4,
    }

    const dowelJoistPanelOpts2 = {
        length: 6.5 * 25.4,
        width: 1.5 * 25.4,
        reinforcementLevel: 2
    }

    const dowelJoistPanelOpts3 = {
        length: 7 * 25.4,
        width: 1.75 * 25.4,
        reinforcementLevel: 3
    }

    const openWebJoist1 = reinforcements.reinforcedJoist(dowelJoistPanelOpts1)[0]
    const openWebJoist2 = reinforcements.reinforcedJoist(dowelJoistPanelOpts2)[0]
    const openWebJoist3 = reinforcements.reinforcedJoist(dowelJoistPanelOpts3)[0]

    const joistModels = [
        openWebJoist1,
        openWebJoist2,
        openWebJoist3,
    ]

    const rightAngleBracket = reinforcements.brackets.rightAngleBracket({})[0]
    const rightAngleCornerBracket = reinforcements.brackets.rightAngleCornerBracket({
        size: [math.inchesToMm(1), math.inchesToMm(1.5), math.inchesToMm(0.75)],
        numReinforcements: [2,3]
    })[0]

    const bracketModels = [
        rightAngleBracket,
        rightAngleCornerBracket,
    ]

    const outModelsBasic = basicModels.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })
    const outModelsJoists = joistModels.map((jModel, idx) => {
        return translate([idx * spaceUnit * 2.75, spaceUnit, 0], jModel)
    })
    const outModelsBrackets = bracketModels.map((bModel, idx) => {
        return translate([idx * spaceUnit, spaceUnit * 2, 0], bModel)
    })

    return [
        ...outModelsBasic,
        ...outModelsJoists,
        ...outModelsBrackets,
    ];
}

module.exports = { main }
