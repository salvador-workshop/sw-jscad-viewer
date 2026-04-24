"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

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

const jointPanelData1 = jointPanel.oneJointRectPanel({
    size: [60, 80],
    jointNumConnectors: 2,
})
const jointPanelProfiles1 = jointPanelData1[0]
const jointPanelMale1 = jointPanelProfiles1[0]
const jointPanelFemale1 = jointPanelProfiles1[1]

const jointPanelData2 = jointPanel.oneJointRectPanel({
    size: [60, 80],
    axis: 'y'
})
const jointPanelProfiles2 = jointPanelData2[0]
const jointPanelMale2 = jointPanelProfiles2[0]
const jointPanelFemale2 = jointPanelProfiles2[1]

const jointPanelData3 = jointPanel.twoJointRectPanel({
    size: [60, 80],
    jointNumConnectors: 2,
})
const jointPanelProfiles3 = jointPanelData3[0]


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
