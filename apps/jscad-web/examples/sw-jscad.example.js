"use strict"
const jscad = require('@jscad/modeling')
const SwJscad = require('sw-jscad');
const SwJscadUi = require('sw-jscad-ui');

const swJscad = SwJscad.init({ lib: jscad });
const swJscadUi = SwJscadUi.init({ lib: jscad, swLib: swJscad });

const { intersect, subtract } = jscad.booleans
const { colorize } = jscad.colors
const { cube, sphere } = jscad.primitives

const {
  colors,
} = swJscadUi.ux

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
