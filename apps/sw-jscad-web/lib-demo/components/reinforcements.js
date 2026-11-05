"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    reinforcements,
} = swcadJs.components

const {
    layout,
} = swcadJs.utils

const main = () => {
    const reinfRectData1 = reinforcements.reinforcedRectPanel({ size: [40, 45, 3] })
    const reinfRectData2 = reinforcements.reinforcedRectPanel({ size: [40, 45, 3], reinforcementPattern: 'cross' })
    const reinfRectData3 = reinforcements.reinforcedRectPanel({ size: [40, 45, 3], reinforcementPattern: 'full' })

    const rectComponents = [
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

    const openWebJoistData1 = reinforcements.reinforcedJoist(dowelJoistPanelOpts1)
    const openWebJoistData2 = reinforcements.reinforcedJoist(dowelJoistPanelOpts2)
    const openWebJoistData3 = reinforcements.reinforcedJoist(dowelJoistPanelOpts3)

    const openWebJoistModel1 = openWebJoistData1[0]
    const openWebJoistParts1 = openWebJoistData1[1]

    const openWebJoistModel2 = openWebJoistData2[0]
    const openWebJoistParts2 = openWebJoistData2[1]

    const openWebJoistModel3 = openWebJoistData3[0]
    const openWebJoistParts3 = openWebJoistData3[1]

    const joistComponents = [
        {
            name: 'open-web-joist-1',
            geom: openWebJoistModel1,
        },
        {
            name: 'open-web-joist-2',
            geom: openWebJoistModel2,
        },
        {
            name: 'open-web-joist-3',
            geom: openWebJoistModel3,
        },
    ]

    const boxSupportQtrData = reinforcements.boxSupport.boxSupportQuarter({
        size: [20, 20],
    })
    const boxSupportQtrModel = boxSupportQtrData[0]

    const boxSupportHalfData = reinforcements.boxSupport.boxSupportHalf({
        size: [20, 20],
        margin: [5, 5, 1.333],
    })
    const boxSupportHalfModel = boxSupportHalfData[0]

    const boxSupportComponents = [
        {
            name: 'box-support-1',
            geom: boxSupportQtrModel,
        },
        {
            name: 'box-support-2',
            geom: boxSupportHalfModel,
        },
    ]

    const layoutOpts = {
        layoutMargin: 15,
        layoutSpace: 10,
    }

    rectComponents.forEach((rectComp) => {
        layout.addToLayout({ name: rectComp.name, desc: '..', layoutOpts }, rectComp.geom);
    })
    joistComponents.forEach((joistComp) => {
        layout.addToLayout({ name: joistComp.name, desc: '..', layoutOpts }, joistComp.geom);
    })
    boxSupportComponents.forEach((boxSupportComp) => {
        layout.addToLayout({ name: boxSupportComp.name, desc: '..', layoutOpts }, boxSupportComp.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
