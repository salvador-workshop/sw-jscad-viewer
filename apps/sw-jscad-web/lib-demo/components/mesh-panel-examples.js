"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms;

const swcadJs = require('swcad-js').init({ jscad });

console.log('swcadJs', swcadJs)

const {
    mesh,
} = swcadJs.components

const {
    math
} = swcadJs.calcs;

const spaceUnit = math.inchesToMm(4.5)

const main = () => {
    const meshPanel1 = mesh.meshPanel({
        size: [math.inchesToMm(3), math.inchesToMm(4)],
        holeRadius: 3,
        holeDistance: math.inchesToMm(3 / 4),
        holePattern: 'tri',
    })[0]

    const meshPanel2 = mesh.meshPanel({
        size: [math.inchesToMm(3), math.inchesToMm(4)],
        thickness: 5,
        holeRadius: 4,
        holeSegments: 6,
        holeDistance: math.inchesToMm(3 / 4),
        holePattern: 'square'
    })[0]

    const meshPanel3 = mesh.meshPanel({
        size: [math.inchesToMm(3), math.inchesToMm(4)],
        holeRadius: 5,
        holeDistance: math.inchesToMm(3 / 4),
        edgeMargin: math.inchesToMm(1 / 2),
    })[0]

    const mPanelModels = [
        meshPanel1,
        meshPanel2,
        meshPanel3,
    ]

    const meshLatticePanel1 = mesh.meshLatticePanel({
        size: [math.inchesToMm(3), math.inchesToMm(4)],
        holeRadius: 3,
        gapThickness: 1.5,
    })[0]

    const meshLatticePanel2 = mesh.meshLatticePanel({
        size: [math.inchesToMm(3), math.inchesToMm(4)],
        thickness: 5,
        holeRadius: 4,
        gapThickness: 2,
        holePattern: 'square'
    })[0]

    const meshLatticePanel3 = mesh.meshLatticePanel({
        size: [math.inchesToMm(3), math.inchesToMm(4)],
        holeRadius: 5,
        gapThickness: 2.5,
        edgeMargin: math.inchesToMm(1 / 2),
    })[0]

    const mLatticePanelModels = [
        meshLatticePanel1,
        meshLatticePanel2,
        meshLatticePanel3,
    ]

    const mPanelModelsOut = mPanelModels.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })
    const mLatticePanelModelsOut = mLatticePanelModels.map((oModel, idx) => {
        return translate([idx * spaceUnit, spaceUnit, 0], oModel)
    })

    return [
        ...mPanelModelsOut,
        ...mLatticePanelModelsOut,
    ];
}

module.exports = { main }
