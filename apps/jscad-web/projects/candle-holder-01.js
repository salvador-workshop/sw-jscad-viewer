"use strict"
const jscad = require('@jscad/modeling')
const { cuboid, roundedCylinder, cylinder } = jscad.primitives
const { subtract, union } = jscad.booleans
const { translate, align, rotate, mirror } = jscad.transforms
const { measureBoundingBox } = jscad.measurements
const { colorize } = jscad.colors

const swJscad = require('sw-jscad')(jscad);
console.log(swJscad);
const {
    archBuilder,
    columnBuilder,
    profileBuilder,
    mouldBuilder,
} = swJscad

// console.log(swJscad, archBuilder)

const HOLDER_HEIGHT = 42;
const TYP_THICKNESS = 5;
const TYP_RD_RAD = 2;

const CANDLE_SPACE_HT = 16;
const CANDLE_SPACE_RAD = 22;
const BOTTOM_SPACE_HT = HOLDER_HEIGHT - CANDLE_SPACE_HT - TYP_THICKNESS;
const BOTTOM_SPACE_RAD = CANDLE_SPACE_RAD;

const TOP_HT = 6;
const BASE_HT = 7;

const CORE_RAD = CANDLE_SPACE_RAD + TYP_THICKNESS
const ORN_POLYGON_SIDES = 8

const candleSpace = () => {
    const cSpaceSpecs = {
        radius: CANDLE_SPACE_RAD,
        height: CANDLE_SPACE_HT,
        segments: 64,
    }
    const cBlock = cuboid({ size: [cSpaceSpecs.radius * 2.5, cSpaceSpecs.radius * 2.5, cSpaceSpecs.height * 2] });
    const cutBlock = align({ modes: ['none', 'none', 'min'] }, cBlock)
    const cSpaceInit = roundedCylinder({ ...cSpaceSpecs, height: cSpaceSpecs.height * 2, roundRadius: TYP_RD_RAD });
    const candleSpace = align({ modes: ['center', 'center', 'center'] }, subtract(cSpaceInit, cutBlock));

    return colorize([0.7, 0.7, 0.1, 0.5], candleSpace)
}

const bottomSpace = () => {
    const bSpaceSpecs = {
        radius: BOTTOM_SPACE_RAD,
        height: BOTTOM_SPACE_HT,
        segments: 64,
    };
    const cutBlock = align(
        { modes: ['none', 'none', 'max'] },
        cuboid({ size: [bSpaceSpecs.radius * 2.5, bSpaceSpecs.radius * 2.5, bSpaceSpecs.height * 2] })
    );
    const bSpaceInit = roundedCylinder({ ...bSpaceSpecs, height: bSpaceSpecs.height * 2, roundRadius: TYP_RD_RAD });
    const bottomSpace = align({ modes: ['center', 'center', 'center'] }, subtract(bSpaceInit, cutBlock));

    return colorize([0.7, 0.7, 0.1, 0.5], bottomSpace);
}

const candleHolderCore = () => {
    const baseShape = cylinder({ radius: CORE_RAD, height: HOLDER_HEIGHT });
    return baseShape;
}

const holderTop = () => {
    const topRad = CORE_RAD + 4;
    const topHeight = TOP_HT;
    const topProfile = profileBuilder.edge.circNotch({ totalThickness: topHeight, topThickness: topHeight - 3, smallOffset: 0.75 });
    const topShape = mouldBuilder.polygonalEdge({ numSides: ORN_POLYGON_SIDES, radius: topRad, height: topHeight, geomProfile: topProfile });
    return topShape;
}

const holderBase = () => {
    const baseRad = CORE_RAD + 8;
    const baseHeight = BASE_HT;
    const baseProfile = profileBuilder.edge.circPortrusion({ totalThickness: baseHeight, topThickness: baseHeight - 4, smallOffset: 0.75 });
    const baseShape = mouldBuilder.polygonalEdge({ numSides: ORN_POLYGON_SIDES, radius: baseRad, height: baseHeight, geomProfile: baseProfile });
    return rotate([Math.PI, 0, 0], baseShape);
}

const ornamentArches = () => {
    const columnHeight = 7;
    const sideLength = CORE_RAD * 2 * Math.tan(Math.PI / ORN_POLYGON_SIDES);

    const archProfile = profileBuilder.sqCornerCircNotch({ sqLength: 5 });
    const baseArch = translate(
        [0, 0, columnHeight],
        archBuilder.twoPt({ arcRadius: sideLength, archWidth: sideLength, profileWidth: 5, geomProfile: archProfile })
    );

    const col = columnBuilder.threePt({
        base: ['cylinder', 2, 3.5],
        shaft: ['extrude', null, archProfile],
        capital: ['cylinder', 1.5, 3.5],
        height: 7,
    });
    const baseCol1 = translate([sideLength / 2, 0, 0], col);
    const baseCol2 = translate([sideLength / -2, 0, 0], col);

    const baseAssembly = union(baseArch, baseCol1, baseCol2);
    const adjBaseAssembly = translate([0, CORE_RAD, BASE_HT], baseAssembly);

    const centralAngle = Math.PI * 2 / ORN_POLYGON_SIDES;
    const baseCutBox = cuboid({ size: [10, 100, 50] });
    const cutBox1 = colorize(
        [0.7, 0.7, 0.1, 0.5],
        rotate([0, 0, centralAngle / 2], align({ modes: ['max', 'min', 'min'] }, baseCutBox))
    );
    const cutBox2 = mirror({ normal: [1, 0, 0] }, cutBox1);
    let cutAssembly = subtract(adjBaseAssembly, cutBox1);
    cutAssembly = subtract(cutAssembly, cutBox2);

    const rotatedAssemblies = [];
    for (let index = 1; index < ORN_POLYGON_SIDES; index++) {
        rotatedAssemblies.push(rotate([0, 0, centralAngle * index], cutAssembly));
    }

    return union(cutAssembly, rotatedAssemblies);
}

const ornamentFoils = () => {
    return null;
}

const candleHolder01 = () => {
    const tlCore = align({ modes: ['none', 'none', 'min'] }, candleHolderCore());
    const tlCoreBbox = measureBoundingBox(tlCore);
    const top = align({ modes: ['none', 'none', 'max'], relativeTo: tlCoreBbox[1] }, holderTop());
    const base = align({ modes: ['none', 'none', 'min'] }, holderBase());
    const arches = ornamentArches();

    const holderAssembly = union(tlCore, top, base, arches);
    const baseBbox = measureBoundingBox(holderAssembly);

    const candleCavity = align({ modes: ['none', 'none', 'max'], relativeTo: baseBbox[1] }, candleSpace());
    const bottomCavity = align({ modes: ['none', 'none', 'min'] }, bottomSpace());

    let finalAssembly = subtract(holderAssembly, candleCavity);
    finalAssembly = subtract(finalAssembly, bottomCavity);

    // return [
    //     // tlCore,
    //     // top,
    //     // base,
    //     // arches,
    //     // holderAssembly,
    //     candleCavity,
    //     bottomCavity,
    // ]
    return finalAssembly;
}

const main = () => {
    return candleHolder01();
}

module.exports = { main }
