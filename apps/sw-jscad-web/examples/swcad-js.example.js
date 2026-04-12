"use strict"
const jscad = require('@jscad/modeling')

const { intersect, subtract } = jscad.booleans
const { colorize } = jscad.colors
const { cube, sphere } = jscad.primitives
const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
  math,
} = swcadJs.calcs

const {
  colors,
} = swcadJs.utils

const {
  openWebJoist,
} = swcadJs.components

function main() {
  const outer = subtract(
    cube({ size: 10 }),
    sphere({ radius: 6.8 })
  )

  const inner = intersect(
    sphere({ radius: 4 }),
    cube({ size: 7 })
  )

  const spaceUnit = math.inchesToMm(2.25)

  const openWebJoistOpts1 = {
    length: math.inchesToMm(6),
    width: math.inchesToMm(1.25),
  }

  const openWebJoistOpts2 = {
    length: math.inchesToMm(6.5),
    width: math.inchesToMm(1.5),
    reinforcementLevel: 2
  }

  const openWebJoistOpts3 = {
    length: math.inchesToMm(7),
    width: math.inchesToMm(1.75),
    reinforcementLevel: 3
  }

  const openWebJoistData1 = openWebJoist(openWebJoistOpts1)
  const openWebJoistData2 = openWebJoist(openWebJoistOpts2)
  const openWebJoistData3 = openWebJoist(openWebJoistOpts3)

  const openWebJoistModel1 = openWebJoistData1[0]
  const openWebJoistModel2 = openWebJoistData2[0]
  const openWebJoistModel3 = openWebJoistData3[0]

  return [
    translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], colorize(colors.lightGreen, outer)),
    translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], colorize(colors.orange, inner)),

    translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], openWebJoistModel1),
    translate([spaceUnit * 2, spaceUnit * 0, spaceUnit * 0], openWebJoistModel2),
    translate([spaceUnit * 3, spaceUnit * 0, spaceUnit * 0], openWebJoistModel3),
  ]
}

module.exports = { main }
