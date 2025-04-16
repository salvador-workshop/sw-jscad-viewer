"use strict"
const jscad = require('@jscad/modeling')
const { translate } = jscad.transforms

const swJscad = require('sw-jscad');
const {
    archBuilder,
    columnBuilder,
    profileBuilder,
    mouldBuilder,
    foilBuilder,
} = swJscad.builders

const main = () => {
    const profile1 = profileBuilder.sqCornerCircNotch({ lib: jscad, sqLength: 5 });
    const profile3 = profileBuilder.octagonal({ lib: jscad, sqLength: 5 });

    const foil1 = foilBuilder.trefoil({ lib: jscad, radius: 10 });
    const foil2 = translate([0, 25, 0], foilBuilder.trefoil({ lib: jscad, radius: 10, lobeRadiusType: 'inSlice' }));
    const foil3 = translate([0, 50, 0], foilBuilder.trefoil({ lib: jscad, radius: 10, lobeRadiusType: 'halfRadius' }));
    const foil4 = translate([25, 0, 0], foilBuilder.quatrefoil({ lib: jscad, radius: 10 }));
    const foil5 = translate([25, 25, 0], foilBuilder.quatrefoil({ lib: jscad, radius: 10, lobeRadiusType: 'inSlice' }));
    const foil6 = translate([25, 50, 0], foilBuilder.quatrefoil({ lib: jscad, radius: 10, lobeRadiusType: 'halfRadius' }));

    const foil7 = translate([60, 0, 0], foilBuilder.trefoil({ lib: jscad, radius: 15, lobeRadiusType: 'halfRadius', geomProfile: profile1, cutCentre: true }));
    const foil8 = translate([60, 35, 0], foilBuilder.quatrefoil({ lib: jscad, radius: 15, lobeRadiusType: 'mean', geomProfile: profile3, cutCentre: true }));

    return [
        // profile3,
        // columnBuilder.threePt({
        //     base: ['extrude', 8, null, profile1],
        //     shaft: ['cuboid', 2],
        //     capital: ['extrude', 6, null, profile3],
        //     height: 40,
        // }),
        // archBuilder.twoPt({ arcRadius: 30, archWidth: 35, profileWidth: 5 }, profile1),
        // archBuilder.onePt({ arcRadius: 60 }, profile1),
        foil1,
        foil2,
        foil3,
        foil4,
        foil5,
        foil6,
        foil7,
        foil8,
    ]
}

module.exports = { main }
