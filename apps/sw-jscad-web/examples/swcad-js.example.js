"use strict"

/* ----------------------------------------
 * Initialization
 * ------------------------------------- */

const jscad = require('@jscad/modeling')

const { cuboid } = jscad.primitives
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


//==============================================================================


/* ----------------------------------------
 * Model / Scene Prep
 * ------------------------------------- */

// "INTRO" PLINTH

const introPlinthSize = [
  math.inchesToMm(4),
  math.inchesToMm(4),
  math.inchesToMm(5),
]

const endBlockSize = [
  introPlinthSize[0],
  introPlinthSize[1],
  introPlinthSize[2] / 4,
]

const midBlockOverhang = math.inchesToMm(5 / 8)

const midBlockSize = [
  introPlinthSize[0] - (midBlockOverhang * 2),
  introPlinthSize[1] - (midBlockOverhang * 2),
  introPlinthSize[2] / 2,
]

// Midsection is built with jscad
// Top and Bottom ends are built with swcad-js

const mid = cuboid({ size: midBlockSize })

const baseOpts = {
  size: endBlockSize,
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

const topOpts = {
  size: endBlockSize,
  topBit: 'roundOver',
  topBitOpts: {
    radius1: 3,
    radius2: 4,
    offset1: 1.5,
    offset2: 1.5,
  },
  bottomBit: 'cove',
  bottomBitOpts: {
    radius1: 6,
    radius2: 8,
    offset1: 2.5,
    offset2: 2.5,
    offset3: 2.5,
    offset4: 2.5,
  },
}

const topData = routedCuboid(topOpts)
const top = topData[0]

// The library also has helper functions

const introPlinth = transform.stack({}, [base, mid, top])

// OPEN WEB JOIST

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


//==============================================================================


/* ----------------------------------------
 * Main function for JSCAD
 * ------------------------------------- */


function main() {
  const spaceUnit = math.inchesToMm(4)

  return [
    translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], introPlinth),
    translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], openWebJoistModel1),
    translate([spaceUnit * 2, spaceUnit * 0, spaceUnit * 0], openWebJoistModel2),
  ]
}

module.exports = { main }
