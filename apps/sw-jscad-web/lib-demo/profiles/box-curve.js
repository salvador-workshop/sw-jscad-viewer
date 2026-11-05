"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    boxCurve,
} = swcadJs.profiles

function main() {
    const spaceUnit = math.inchesToMm(2.25)

    const boxCurveQtrData = boxCurve.boxCurveQuarter({
        size: [20, 20],
    })
    const boxCurveQtrModel = boxCurveQtrData[0]

    const boxCurveHalfData = boxCurve.boxCurveHalf({
        size: [20, 20],
        margin: [5, 5],
    })
    const boxCurveHalfModel = boxCurveHalfData[0]

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], boxCurveQtrModel),
        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], boxCurveHalfModel),
    ]
}

module.exports = { main }
