"use strict"
const jscad = require('@jscad/modeling')

const { cube, cuboid, sphere } = jscad.primitives
const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
  math,
  transform,
} = swcadJs.calcs

const {
  colors,
} = swcadJs.utils

const {
  openWebJoist,
} = swcadJs.components

const {
  routedCuboid,
} = swcadJs.components.routedShapes

const baseOpts = {
  topBit: 'chamfer',
  topBitOpts: {
    radius1: 6,
    radius2: 8,
    offset1: 3,
    offset2: 2,
    offset3: 3,
    offset4: 2,
  },
  bottomBit: 'none',
  bottomBitOpts: {
    radius1: 6,
    radius2: 8,
    offset1: 3,
    offset2: 2,
    offset3: 3,
    offset4: 2,
  },
}
const baseData = routedCuboid(baseOpts)
const base = baseData[0]

const mid = cuboid({ size: [10, 10, 10] })

const topOpts = {
  topBit: 'roundOver',
  topBitOpts: {
    radius1: 6,
    radius2: 8,
    offset1: 3,
    offset2: 2,
    offset3: 3,
    offset4: 2,
  },
  bottomBit: 'cove',
  bottomBitOpts: {
    radius1: 6,
    radius2: 8,
    offset1: 3,
    offset2: 2,
    offset3: 3,
    offset4: 2,
  },
}
const topData = routedCuboid(topOpts)
const top = topData[0]

const introPlinth = transform.stack({}, [base, mid, top])

const openWebJoistOpts1 = {
  length: math.inchesToMm(6),
  width: math.inchesToMm(1.25),
}

const openWebJoistOpts2 = {
  length: math.inchesToMm(6.5),
  width: math.inchesToMm(1.5),
  reinforcementLevel: 2
}

const openWebJoistData1 = openWebJoist(openWebJoistOpts1)
const openWebJoistData2 = openWebJoist(openWebJoistOpts2)

const openWebJoistModel1 = openWebJoistData1[0]
const openWebJoistModel2 = openWebJoistData2[0]

function main() {
  const spaceUnit = math.inchesToMm(3.5)

  return [
    translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], introPlinth),
    translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], openWebJoistModel1),
    translate([spaceUnit * 2, spaceUnit * 0, spaceUnit * 0], openWebJoistModel2),
  ]
}

module.exports = { main }
