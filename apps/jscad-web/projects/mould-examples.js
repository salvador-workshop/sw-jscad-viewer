"use strict"
const jscad = require('@jscad/modeling')
const { translate } = jscad.transforms
const { cuboid, cylinder } = jscad.primitives

const swJscad = require('sw-jscad').init(jscad);
console.log(swJscad);
const {
    profileBuilder,
    mouldBuilder,
} = swJscad

const main = () => {
    const profile1 = profileBuilder.edge.circNotch({ totalThickness: 8, topThickness: 4, smallOffset: 1 });
    const profile2 = profileBuilder.edge.circPortrusion({ totalThickness: 8, topThickness: 4, smallOffset: 0.67 });

    const orig1 = cuboid({ size: [20, 40, 8] });
    const mould1 = mouldBuilder.cuboidOneEdge({ size: [20, 40, 8], geomProfile: profile1 });

    const orig2 = cuboid({ size: [20, 40, 8] });
    const mould2 = mouldBuilder.cuboidEdge({ size: [20, 40, 8], geomProfile: profile1 });

    const orig3 = cylinder({ radius: 20, height: 8 });
    const mould3 = mouldBuilder.circularEdge({ radius: 20, height: 8, geomProfile: profile2 });

    const orig4 = cylinder({ radius: 20, height: 8 });
    const mould4 = mouldBuilder.polygonalEdge({ numSides: 8, radius: 20, height: 8, geomProfile: profile2 });

    return [
        translate([0, 0, 0], orig1),
        translate([0, 50, 0], mould1),
        translate([40, 0, 0], orig2),
        translate([40, 50, 0], mould2),
        translate([80, 0, 0], orig3),
        translate([80, 50, 0], mould3),
        translate([130, 0, 0], orig4),
        translate([130, 50, 0], mould4),
    ]
}

module.exports = { main }
