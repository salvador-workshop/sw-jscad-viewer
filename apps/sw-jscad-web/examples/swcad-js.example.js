"use strict"
const jscad = require('@jscad/modeling')

const { intersect, subtract } = jscad.booleans
const { colorize } = jscad.colors
const { cube, sphere } = jscad.primitives
const { translate } = jscad.transforms

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
  math,
  colors,
} = swCadJs.utils

const {
  openWebJoist,
} = swCadJs.components

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
    length: 6 * 25.4,
    width: 1.25 * 25.4,
  }

  const openWebJoistOpts2 = {
    length: 6.5 * 25.4,
    width: 1.5 * 25.4,
    reinforcementLevel: 2
  }

  const openWebJoistOpts3 = {
    length: 7 * 25.4,
    width: 1.75 * 25.4,
    reinforcementLevel: 3
  }

  const openWebJoistData1 = openWebJoist(openWebJoistOpts1)
  const openWebJoistData2 = openWebJoist(openWebJoistOpts2)
  const openWebJoistData3 = openWebJoist(openWebJoistOpts3)

  const openWebJoistModel1 = openWebJoistData1[0]
  const openWebJoistParts1 = openWebJoistData1[1]

  const openWebJoistModel2 = openWebJoistData2[0]
  const openWebJoistParts2 = openWebJoistData2[1]

  const openWebJoistModel3 = openWebJoistData3[0]
  const openWebJoistParts3 = openWebJoistData3[1]

  return [
    translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], colorize(colors.lightGreen, outer)),
    translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], colorize(colors.orange, inner)),

    translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], openWebJoistModel1),
    translate([spaceUnit * 2, spaceUnit * 0, spaceUnit * 0], openWebJoistModel2),
    translate([spaceUnit * 3, spaceUnit * 0, spaceUnit * 0], openWebJoistModel3),
  ]
}

module.exports = { main }
