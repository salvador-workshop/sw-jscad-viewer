"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    text,
} = swcadJs.components

function main() {
    const spaceUnit = math.inchesToMm(1.25)

    const flatTextContent = text.flatText({
        message: 'Hello world! Nice to see you.',
        fontSize: 4,
        charLineWidth: 1,
        extrudeHeight: 1.333
    })

    const engravedTextContent1 = text.engravedText({
        message: 'Hello world! Nice to see you.',
        fontSize: 4,
        engravingDepth: 0.5
    })

    const engravedTextContent2 = text.engravedText({
        message: 'Hello world! Nice to see you.',
        fontSize: 4,
        engravingDepth: 0.5,
        inverted: true
    })

    const panelTextContent = text.textPanel({
        message: 'Hello world! Nice to see you.',
        fontSize: 4,
        charLineWidth: 0.5,
    })

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], flatTextContent),
        translate([spaceUnit * 0, spaceUnit * 1, spaceUnit * 0], engravedTextContent1),
        translate([spaceUnit * 0, spaceUnit * 2, spaceUnit * 0], engravedTextContent2),
        translate([spaceUnit * 0, spaceUnit * 3, spaceUnit * 0], panelTextContent),
    ]
}

module.exports = { main }
