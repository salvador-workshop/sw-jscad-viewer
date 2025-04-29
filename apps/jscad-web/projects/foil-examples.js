"use strict"
const jscad = require('@jscad/modeling')
const { translate } = jscad.transforms

const swJscad = require('sw-jscad')(jscad);
console.log(swJscad);
const {
    profileBuilder,
    foilBuilder,
} = swJscad

const main = () => {
    const profile1 = profileBuilder.sqCornerCircNotch({ sqLength: 5 });
    const profile3 = profileBuilder.octagonal({ sqLength: 5 });

    const foil1 = foilBuilder.trefoil({ radius: 10 });
    const foil2 = translate([0, 25, 0], foilBuilder.trefoil({ radius: 10, lobeRadiusType: 'inSlice' }));
    const foil3 = translate([0, 50, 0], foilBuilder.trefoil({ radius: 10, lobeRadiusType: 'halfRadius' }));
    const foil4 = translate([25, 0, 0], foilBuilder.quatrefoil({ radius: 10 }));
    const foil5 = translate([25, 25, 0], foilBuilder.quatrefoil({ radius: 10, lobeRadiusType: 'inSlice' }));
    const foil6 = translate([25, 50, 0], foilBuilder.quatrefoil({ radius: 10, lobeRadiusType: 'halfRadius' }));

    const foil7 = translate([60, 0, 0], foilBuilder.trefoil({ radius: 15, lobeRadiusType: 'halfRadius', geomProfile: profile1, cutCentre: true }));
    const foil8 = translate([60, 35, 0], foilBuilder.quatrefoil({ radius: 15, lobeRadiusType: 'mean', geomProfile: profile3, cutCentre: true }));

    return [
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
