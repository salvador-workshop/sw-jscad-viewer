"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    reinforcedRectPanel,
} = swcadJs.components

const {
    layout,
} = swcadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 10,
        layoutSpace: 10,
    }

    const reinfRectData1 = reinforcedRectPanel({ size: [40, 30, 3] })

    const reinfRectData2 = reinforcedRectPanel({ size: [40, 30, 3], reinforcementPattern: 'cross' })

    const reinfRectData3 = reinforcedRectPanel({ size: [40, 30, 3], reinforcementPattern: 'full' })

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

    rectProfiles.forEach((prof) => {
        layout.addToLayout({ name: prof.name, desc: '..', layoutOpts }, prof.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
