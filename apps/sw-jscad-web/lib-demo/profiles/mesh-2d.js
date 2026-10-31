"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });

console.log('swcadJs', swcadJs)

const {
    connections,
    structure,
} = swcadJs.profiles

const {
    layout,
} = swcadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 25.4,
        layoutSpace: 12.7,
    }

    const triPanelOpts = {
        holePattern: 'tri',
    }
    const triPanel = structure.mesh.meshPanel(triPanelOpts)[0]
    const squarePanelOpts = {
        holePattern: 'square',
    }
    const squarePanel = structure.mesh.meshPanel(squarePanelOpts)[0]

    const reinforcementProfiles = [
        {
            name: 'mesh-tri',
            geom: triPanel,
        },
        {
            name: 'mesh-square',
            geom: squarePanel,
        },
    ]

    reinforcementProfiles.forEach((prof) => {
        layout.addToLayout({ name: prof.name, desc: '..', layoutOpts }, prof.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
