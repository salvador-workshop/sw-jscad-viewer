"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    boxSupport,
} = swcadJs.components

function main() {
    const spaceUnit = math.inchesToMm(2.25)

    const boxSupportQtrData = boxSupport.boxSupportQuarter({
        size: [20, 20],
    })
    const boxSupportQtrModel = boxSupportQtrData[0]

    const boxSupportHalfData = boxSupport.boxSupportHalf({
        size: [20, 20],
        margin: [5, 5, 1.333],
    })
    const boxSupportHalfModel = boxSupportHalfData[0]

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], boxSupportQtrModel),
        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], boxSupportHalfModel),
    ]
}

module.exports = { main }
