"use strict"

/* ----------------------------------------
 * Initialization
 * ------------------------------------- */

const jscad = require('@jscad/modeling')

const { cuboid } = jscad.primitives
const { translate } = jscad.transforms
const { measureDimensions } = jscad.measurements;

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
  math,
  position,
  transform,
} = swcadJs.calcs

const {
  routedCuboid,
} = swcadJs.components.routedShapes

const stack = ({ reverse = false }, geoms) => {
  let stackHeight = 0
  const geomList = reverse ? geoms.reverse() : geoms
  return geomList.map(geom => {
    const alignedGeom = position.ctrMin(geom, [0, 0, stackHeight])
    stackHeight = stackHeight + measureDimensions(geom)[2]
    return alignedGeom
  })
}


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

const introPlinth = stack({}, [base, mid, top])


//==============================================================================


/* ----------------------------------------
 * Main function for JSCAD
 * ------------------------------------- */


function main() {
  const spaceUnit = math.inchesToMm(4)

  return [
    translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], introPlinth),
  ]
}

module.exports = { main }
