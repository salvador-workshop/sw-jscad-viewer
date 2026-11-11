"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms;

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    connections,
} = swcadJs.profiles

//==============================================================================

/* ----------------------------------------
* Model / Scene Prep
* ------------------------------------- */

const spaceUnit = math.inchesToMm(4.25)

//==============================================================================

/**
 * Main function to be rendered by JSCAD
 * @returns `geom3` or `geom3[]`
 */
const main = () => {
    const smallSize = [100, 80]
    const largeSize = [150, 100]

    const jointPanelProfiles1 = connections.jointPanel.oneJointRectPanel({
        size: smallSize,
        jointNumConnectors: 2,
    })[0]
    const jointPanelMale1 = jointPanelProfiles1[0]
    const jointPanelFemale1 = jointPanelProfiles1[1]

    const modelSet1 = [
        jointPanelMale1,
        jointPanelFemale1,
    ]

    const jointPanelProfiles2 = connections.jointPanel.oneJointRectPanel({
        size: smallSize,
        axis: 'y',
        jointMargin: [math.inchesToMm(1 / 4), math.inchesToMm(1 / 8)]
    })[0]
    const jointPanelMale2 = jointPanelProfiles2[0]
    const jointPanelFemale2 = jointPanelProfiles2[1]

    const modelSet2 = [
        jointPanelMale2,
        jointPanelFemale2,
    ]

    const twoJointPanelOpts = {
        size: largeSize,
        jointNumConnectors: [3, 3],
        jointMargin: [math.inchesToMm(5 / 16), math.inchesToMm(1 / 4)]
    }

    const jointPanelProfiles3 = connections.jointPanel.twoJointRectPanel({
        ...twoJointPanelOpts,
        jointWidth: 5,
    })[0]

    const modelSet3 = [
        jointPanelProfiles3[0],
        jointPanelProfiles3[1],
        jointPanelProfiles3[2],
        jointPanelProfiles3[3],
    ]

    const jointPanelProfiles4 = connections.jointPanel.twoJointRectPanel({
        ...twoJointPanelOpts,
        type: 'dovetail'
    })[0]

    const modelSet4 = [
        jointPanelProfiles4[0],
        jointPanelProfiles4[1],
        jointPanelProfiles4[2],
        jointPanelProfiles4[3],
    ]

    const jointPanelProfiles5 = connections.jointPanel.twoJointRectPanel({
        ...twoJointPanelOpts,
        type: 'rightAngleTab'
    })[0]

    const modelSet5 = [
        jointPanelProfiles5[0],
        jointPanelProfiles5[1],
        jointPanelProfiles5[2],
        jointPanelProfiles5[3],
    ]

    const outModels1 = modelSet1.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    const outModels2 = modelSet2.map((oModel, idx) => {
        return translate([idx * spaceUnit, -spaceUnit, 0], oModel)
    })

    const outModels3 = modelSet3.map((oModel, idx) => {
        return translate([idx * spaceUnit, spaceUnit * -2, 0], oModel)
    })

    const outModels4 = modelSet4.map((oModel, idx) => {
        return translate([idx * spaceUnit, spaceUnit * -3, 0], oModel)
    })

    const outModels5 = modelSet5.map((oModel, idx) => {
        return translate([idx * spaceUnit, spaceUnit * -4, 0], oModel)
    })

    return [
        ...outModels1,
        ...outModels2,
        ...outModels3,
        ...outModels4,
        ...outModels5,
    ];
}

module.exports = { main }
