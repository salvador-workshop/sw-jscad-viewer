"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    jointPanel,
} = swcadJs.profiles

const {
    layout,
} = swcadJs.utils


//==============================================================================

/* ----------------------------------------
* Model / Scene Prep
* ------------------------------------- */

const smallSize = [100, 80]
const largeSize = [150, 100]

const jointPanelData1 = jointPanel.oneJointRectPanel({
    size: smallSize,
    jointNumConnectors: 2,
})
const jointPanelProfiles1 = jointPanelData1[0]
const jointPanelMale1 = jointPanelProfiles1[0]
const jointPanelFemale1 = jointPanelProfiles1[1]

const jointPanelData2 = jointPanel.oneJointRectPanel({
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

const jointPanelData3 = jointPanel.twoJointRectPanel({
    ...twoJointPanelOpts,
    jointWidth: 5,
})
const jointPanelProfiles3 = jointPanelData3[0]

const jointPanelData4 = jointPanel.twoJointRectPanel({
    ...twoJointPanelOpts,
    type: 'dovetail'
})
const jointPanelProfiles4 = jointPanelData4[0]

const jointPanelData5 = jointPanel.twoJointRectPanel({
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
    let layoutOpts = {
        layoutMargin: 15,
        layoutSpace: 15,
    }

    const jointPanelProfiles = [
        {
            name: 'c-jointpanel-1m',
            geom: jointPanelMale1,
        },
        {
            name: 'c-jointpanel-1f',
            geom: jointPanelFemale1,
        },
        {
            name: 'c-jointpanel-2m',
            geom: jointPanelMale2,
        },
        {
            name: 'c-jointpanel-2f',
            geom: jointPanelFemale2,
        },
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

    jointPanelProfiles.forEach((prof) => {
        layout.addToLayout({ name: prof.name, desc: '..', layoutOpts }, prof.geom);
    })

    // -----------
    // OUTPUT

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent
}

module.exports = { main }
