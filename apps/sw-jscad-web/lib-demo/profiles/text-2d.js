"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    text,
} = swcadJs.profiles

const spaceUnit = math.inchesToMm(2.25)

function main() {

    const textContent = text.basicText({
        message: 'Hello world! Nice to see you.',
        fontSize: 4,
        charLineWidth: 1
    })

    return textContent
}

module.exports = { main }
