"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms;

const swcadJs = require('swcad-js').init({ jscad });

console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    mesh,
} = swcadJs.profiles

const spaceUnit = math.inchesToMm(7.25)

const main = () => {
    const triPanel = mesh.meshPanel({
        holeRadius: math.inchesToMm(1 / 4),
        holeSegments: 6,
        holePattern: 'tri',
    })[0]
    const squarePanel = mesh.meshPanel({
        holeRadius: math.inchesToMm(1 / 4),
        holeSegments: 12,
        holePattern: 'square',
    })[0]

    const triLatticePanel = mesh.meshLatticePanel({
        holePattern: 'tri',
        holeRadius: math.inchesToMm(1 / 4),
        holeSegments: 9,
        gapThickness: math.inchesToMm(1 / 8),
    })[0]
    const squareLatticePanel = mesh.meshLatticePanel({
        holePattern: 'square',
        holeRadius: math.inchesToMm(5 / 16),
        holeSegments: 8,
        gapThickness: math.inchesToMm(1 / 8),
    })[0]

    const reinforcementProfiles = [
        triPanel,
        squarePanel,
        triLatticePanel,
        squareLatticePanel,
    ]

    const outModels = reinforcementProfiles.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    return outModels;
}

module.exports = { main }
