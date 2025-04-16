"use strict"
const jscad = require('@jscad/modeling')
const { translate } = jscad.transforms

const swJscad = require('sw-jscad');
const {
    columnBuilder,
    profileBuilder,
} = swJscad.builders

const main = () => {
    const profile1 = profileBuilder.sqCornerCircNotch({ lib: jscad, sqLength: 5 });
    const profile3 = profileBuilder.octagonal({ lib: jscad, sqLength: 5 });

    const col1 = columnBuilder.threePt({
        lib: jscad,
        base: ['extrude', 8, null, profile1],
        shaft: ['cuboid', 2],
        capital: ['extrude', 6, null, profile3],
        height: 40,
    })

    const col2 = columnBuilder.threePt({
        lib: jscad,
        base: ['roundCylinder', 2, 3.5],
        shaft: ['extrude', null, profile1],
        capital: ['roundCylinder', 2, 3.5],
        height: 20,
    });

    return [
        col1,
        translate([0, 10, 0], col2),
    ]
}

module.exports = { main }
