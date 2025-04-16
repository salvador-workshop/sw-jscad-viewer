"use strict"
const jscad = require('@jscad/modeling')
const { translate } = jscad.transforms

const swJscad = require('sw-jscad');
const {
    profileBuilder,
} = swJscad.builders

const main = () => {
    const profile1 = profileBuilder.sqCornerCircNotch({ lib: jscad, sqLength: 5 });
    const profile2 = profileBuilder.octagonal({ lib: jscad, sqLength: 5 });

    const profile3 = profileBuilder.edge.circNotch({ lib: jscad, totalThickness: 8, topThickness: 4 });
    const profile4 = profileBuilder.edge.circPortrusion({ lib: jscad, totalThickness: 8, topThickness: 4 });

    const profile5 = profileBuilder.edge.circNotch({ lib: jscad, totalThickness: 8, topThickness: 4, smallOffset: 1 });
    const profile6 = profileBuilder.edge.circPortrusion({ lib: jscad, totalThickness: 8, topThickness: 4, smallOffset: 1 });

    return [
        translate([0, 0, 0], profile1),
        translate([0, 20, 0], profile2),
        translate([20, 0, 0], profile3),
        translate([20, 20, 0], profile4),
        translate([40, 0, 0], profile5),
        translate([40, 20, 0], profile6),
    ]
}

module.exports = { main }
