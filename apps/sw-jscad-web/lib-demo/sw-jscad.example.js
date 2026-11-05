"use strict"
const jscad = require('@jscad/modeling')

const { intersect, subtract } = jscad.booleans
const { colorize } = jscad.colors
const { cube, sphere } = jscad.primitives

// The sw-jscad libaries are still available, for legacy scripts
const swJscad = require('sw-jscad').init({ lib: jscad });
const swjUi = require('sw-jscad-ui').init({ lib: jscad, swLib: swJscad });
const swjFamilies = require('sw-jscad-families').init({ lib: jscad, swLib: swJscad });
const swjBuilders = require('sw-jscad-builders').init({ lib: jscad, swLib: swJscad, swFamilies: swjFamilies });

console.log(swJscad)
console.log(swjUi)
console.log(swjFamilies)
console.log(swjBuilders)

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
  colors,
} = swcadJs.utils

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
