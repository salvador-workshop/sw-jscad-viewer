"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    reinforcements,
} = swcadJs.profiles

const spaceUnit = math.inchesToMm(3)

const main = () => {
    const models = []

    const reinfRectData1 = reinforcements.reinforcedRect({ size: [40, 45] })

    const reinfRectData2 = reinforcements.reinforcedRect({ size: [40, 45], reinforcementPattern: 'cross' })

    const reinfRectData3 = reinforcements.reinforcedRect({ size: [40, 45], reinforcementPattern: 'full' })

    const rectProfiles = [
        {
            name: 'rect-reinforced-1',
            geom: reinfRectData1[0],
        },
        {
            name: 'rect-reinforced-2',
            geom: reinfRectData2[0],
        },
        {
            name: 'rect-reinforced-3',
            geom: reinfRectData3[0],
        },
    ]

    const boxCurveQtrData = reinforcements.boxCurve.boxCurveQuarter({
        size: [20, 20],
    })
    const boxCurveQtrModel = boxCurveQtrData[0]

    const boxCurveHalfData = reinforcements.boxCurve.boxCurveHalf({
        size: [20, 20],
        margin: [5, 5],
    })
    const boxCurveHalfModel = boxCurveHalfData[0]

    const boxCurveProfiles = [
        {
            name: 'box-curve-1',
            geom: boxCurveQtrModel,
        },
        {
            name: 'box-curve-2',
            geom: boxCurveHalfModel,
        },
    ]

    rectProfiles.forEach((prof) => {
        models.push(prof.geom);
    })

    boxCurveProfiles.forEach((bProf) => {
        models.push(bProf.geom);
    })

    const outModels = models.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    return outModels;
}

module.exports = { main }
