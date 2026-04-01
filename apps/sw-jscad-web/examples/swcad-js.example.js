"use strict"
const jscad = require('@jscad/modeling')

const { intersect, subtract } = jscad.booleans
const { colorize } = jscad.colors
const { cube, sphere } = jscad.primitives

const swCadJs = require('swcad-js').init({ lib: jscad });

console.log('swCadJs', swCadJs)

const {
  colors,
} = swCadJs.utils

function main() {
  const outer = subtract(
    cube({ size: 10 }),
    sphere({ radius: 6.8 })
  )

  const inner = intersect(
    sphere({ radius: 4 }),
    cube({ size: 7 })
  )

  return [
    colorize(colors.lightGreen, outer),
    colorize(colors.orange, inner),
  ]
}

module.exports = { main }
