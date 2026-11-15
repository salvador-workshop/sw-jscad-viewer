"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms;

const swcadJs = require('swcad-js-test').init({ jscad });

console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    mesh,
} = swcadJs.profiles

const spaceUnit = math.inchesToMm(8)

const main = () => {
    const triPanelOpts = {
        holePattern: 'tri',
    }
    const triPanel = mesh.meshPanel(triPanelOpts)[0]

    const squarePanelOpts = {
        holePattern: 'square',
    }
    const squarePanel = mesh.meshPanel(squarePanelOpts)[0]

    const reinforcementProfiles = [
        triPanel,
        squarePanel,
    ]

    const outModels = reinforcementProfiles.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    return outModels;
}

module.exports = { main }
