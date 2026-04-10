"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.utils

const {
    openWebJoist,
} = swcadJs.components

function main() {
    const spaceUnit = math.inchesToMm(2.25)

    const dowelJoistPanelOpts1 = {
        length: 6 * 25.4,
        width: 1.25 * 25.4,
    }

    const dowelJoistPanelOpts2 = {
        length: 6.5 * 25.4,
        width: 1.5 * 25.4,
        reinforcementLevel: 2
    }

    const dowelJoistPanelOpts3 = {
        length: 7 * 25.4,
        width: 1.75 * 25.4,
        reinforcementLevel: 3
    }

    const openWebJoistData1 = openWebJoist(dowelJoistPanelOpts1)
    const openWebJoistData2 = openWebJoist(dowelJoistPanelOpts2)
    const openWebJoistData3 = openWebJoist(dowelJoistPanelOpts3)

    const openWebJoistModel1 = openWebJoistData1[0]
    const openWebJoistParts1 = openWebJoistData1[1]

    const openWebJoistModel2 = openWebJoistData2[0]
    const openWebJoistParts2 = openWebJoistData2[1]

    const openWebJoistModel3 = openWebJoistData3[0]
    const openWebJoistParts3 = openWebJoistData3[1]

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], openWebJoistModel1),
        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], openWebJoistModel2),
        translate([spaceUnit * 2, spaceUnit * 0, spaceUnit * 0], openWebJoistModel3),
    ]
}

module.exports = { main }
