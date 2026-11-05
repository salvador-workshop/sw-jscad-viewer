"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js-test').init({ jscad });

console.log('swcadJs', swcadJs)

const {
    mesh,
} = swcadJs.profiles

const spaceUnit = math.inchesToMm(3)

const main = () => {
    const models = []

    const triPanelOpts = {
        holePattern: 'tri',
    }
    const triPanel = mesh.meshPanel(triPanelOpts)[0]
    const squarePanelOpts = {
        holePattern: 'square',
    }
    const squarePanel = mesh.meshPanel(squarePanelOpts)[0]

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
        models.push(prof.geom);
    })

    const outModels = models.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    return outModels;
}

module.exports = { main }
