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
} = swcadJs.profiles

const spaceUnit = math.inchesToMm(3)

const main = () => {
    const reinfRect1 = reinforcements.reinforcedRect({ size: [40, 45] })[0]
    const reinfRect2 = reinforcements.reinforcedRect({ size: [40, 45], reinforcementPattern: 'cross' })[0]
    const reinfRect3 = reinforcements.reinforcedRect({ size: [40, 45], reinforcementPattern: 'full' })[0]

    const rectProfiles = [
        reinfRect1,
        reinfRect2,
        reinfRect3,
    ]

    const boxCurveQtrModel = reinforcements.boxCurve.boxCurveQuarter({
        size: [20, 20],
    })[0]
    const boxCurveHalfModel = reinforcements.boxCurve.boxCurveHalf({
        size: [20, 20],
        margin: [5, 5],
    })[0]

    const boxCurveProfiles = [
        boxCurveQtrModel,
        boxCurveHalfModel,
    ]

    const models = [
        ...rectProfiles,
        ...boxCurveProfiles,
    ]

    const outModels = models.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    return outModels;
}

module.exports = { main }
