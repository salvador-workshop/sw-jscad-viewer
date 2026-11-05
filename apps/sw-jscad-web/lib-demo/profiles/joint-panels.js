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

const spaceUnit = math.inchesToMm(4.25)

//==============================================================================

/* ----------------------------------------
* Model / Scene Prep
* ------------------------------------- */

const smallSize = [100, 80]
const largeSize = [150, 100]

const jointPanelData1 = connections.jointPanel.oneJointRectPanel({
    size: smallSize,
    jointNumConnectors: 2,
})
const jointPanelProfiles1 = jointPanelData1[0]
const jointPanelMale1 = jointPanelProfiles1[0]
const jointPanelFemale1 = jointPanelProfiles1[1]

const jointPanelData2 = connections.jointPanel.oneJointRectPanel({
    size: smallSize,
    axis: 'y',
    jointMargin: [math.inchesToMm(1 / 4), math.inchesToMm(1 / 8)]
})
const jointPanelProfiles2 = jointPanelData2[0]
const jointPanelMale2 = jointPanelProfiles2[0]
const jointPanelFemale2 = jointPanelProfiles2[1]

const twoJointPanelOpts = {
    size: largeSize,
    jointNumConnectors: [3, 3],
    jointMargin: [math.inchesToMm(5 / 16), math.inchesToMm(1 / 4)]
}

const jointPanelData3 = connections.jointPanel.twoJointRectPanel({
    ...twoJointPanelOpts,
    jointWidth: 5,
})
const jointPanelProfiles3 = jointPanelData3[0]

const jointPanelData4 = connections.jointPanel.twoJointRectPanel({
    ...twoJointPanelOpts,
    type: 'dovetail'
})
const jointPanelProfiles4 = jointPanelData4[0]

const jointPanelData5 = connections.jointPanel.twoJointRectPanel({
    ...twoJointPanelOpts,
    type: 'rightAngleTab'
})
const jointPanelProfiles5 = jointPanelData5[0]


//==============================================================================


/**
 * Main function to be rendered by JSCAD
 * @returns `geom3` or `geom3[]`
 */
const main = () => {
    const modelSet1 = []
    const modelSet2 = []
    const modelSet3 = []
    const modelSet4 = []
    const modelSet5 = []

    const jointPanelSet1 = [
        {
            name: 'c-jointpanel-1m',
            geom: jointPanelMale1,
        },
        {
            name: 'c-jointpanel-1f',
            geom: jointPanelFemale1,
        },
    ]

    const jointPanelSet2 = [
        {
            name: 'c-jointpanel-2m',
            geom: jointPanelMale2,
        },
        {
            name: 'c-jointpanel-2f',
            geom: jointPanelFemale2,
        },
    ]

    const jointPanelSet3 = [
        {
            name: 'c-jointpanel-3a',
            geom: jointPanelProfiles3[0],
        },
        {
            name: 'c-jointpanel-3b',
            geom: jointPanelProfiles3[1],
        },
        {
            name: 'c-jointpanel-3c',
            geom: jointPanelProfiles3[2],
        },
        {
            name: 'c-jointpanel-3d',
            geom: jointPanelProfiles3[3],
        },
    ]

    const jointPanelSet4 = [
        {
            name: 'c-jointpanel-4a',
            geom: jointPanelProfiles4[0],
        },
        {
            name: 'c-jointpanel-4b',
            geom: jointPanelProfiles4[1],
        },
        {
            name: 'c-jointpanel-4c',
            geom: jointPanelProfiles4[2],
        },
        {
            name: 'c-jointpanel-4d',
            geom: jointPanelProfiles4[3],
        },
    ]

    const jointPanelSet5 = [
        {
            name: 'c-jointpanel-5a',
            geom: jointPanelProfiles5[0],
        },
        {
            name: 'c-jointpanel-5b',
            geom: jointPanelProfiles5[1],
        },
        {
            name: 'c-jointpanel-5c',
            geom: jointPanelProfiles5[2],
        },
        {
            name: 'c-jointpanel-5d',
            geom: jointPanelProfiles5[3],
        },
    ]

    jointPanelSet1.forEach((prof) => {
        modelSet1.push(prof.geom);
    })

    jointPanelSet2.forEach((prof) => {
        modelSet2.push(prof.geom);
    })

    jointPanelSet3.forEach((prof) => {
        modelSet3.push(prof.geom);
    })

    jointPanelSet4.forEach((prof) => {
        modelSet4.push(prof.geom);
    })

    jointPanelSet5.forEach((prof) => {
        modelSet5.push(prof.geom);
    })

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
