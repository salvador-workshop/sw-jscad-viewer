"use strict"
const jscad = require('@jscad/modeling')
const SwJscad = require('sw-jscad');
const SwJscadUi = require('sw-jscad-ui');

const swJscad = SwJscad.init({ lib: jscad });
const swJscadUi = SwJscadUi.init({ lib: jscad, swLib: swJscad });

const {
    arches,
    columns,
    walls,
} = swJscad.builders

const {
    foils,
    moulds,
    profiles,
} = swJscad.details

const {
    trimAranea,
} = swJscad.families

const {
    layout,
} = swJscadUi.ux

const main = () => {
    const layoutOpts = {
        layoutMargin: 18,
        layoutSpace: 5,
    }


    //-----------
    // Profiles

    const profile1 = profiles.sqCornerCircNotch({ sqLength: 5 });
    const profile3 = profiles.octagonal({ sqLength: 5 });

    const tFamilyBasic = trimAranea.buildTrimFamily({ unitHeight: 20, unitDepth: 10 });
    const dadoTrim = [
        tFamilyBasic.dado.small,
        tFamilyBasic.dado.medium,
        tFamilyBasic.dado.large,
        tFamilyBasic.dado.mediumOrn1,
    ];
    dadoTrim.forEach((trim, idx) => {
        layout.addToLayout({ name: `dado-${idx}`, desc: '...', geom: trim, layoutOpts });
    })


    //-----------
    // Mouldings

    const mould3 = moulds.circularMoulding({ radius: 20, height: 5 }, profile1);
    layout.addToLayout({ name: 'mould3', desc: '...', geom: mould3, layoutOpts });


    //-----------
    // Foils

    const foil1 = foils.trefoil({ radius: 10 });
    layout.addToLayout({ name: 'foil1', desc: '...', geom: foil1, layoutOpts });

    const foil5 = foils.quatrefoil({ radius: 10, lobeRadiusType: 'inSlice' });
    layout.addToLayout({ name: 'foil5', desc: '...', geom: foil5, layoutOpts });

    const foil7 = foils.trefoil({ radius: 15, lobeRadiusType: 'halfRadius', cutCentre: true }, profile1);
    layout.addToLayout({ name: 'foil7', desc: '...', geom: foil7, layoutOpts });

    const foil8 = foils.quatrefoil({ radius: 15, lobeRadiusType: 'mean', cutCentre: true }, profile3);
    layout.addToLayout({ name: 'foil8', desc: '...', geom: foil8, layoutOpts });


    //-----------
    // Columns

    const col2 = columns.threePtColumn({
        base: ['roundCylinder', 2, 3.5],
        shaft: ['extrude', null, profile1],
        capital: ['roundCylinder', 2, 3.5],
        height: 20,
    });
    layout.addToLayout({ name: 'col2', desc: '...', geom: col2, layoutOpts });


    //-----------
    // Arches

    const arch1 = arches.twoPtArch({ arcRadius: 30, archWidth: 35, profileWidth: 5 }, profile1);
    layout.addToLayout({ name: 'arch1', desc: '...', geom: arch1, layoutOpts });

    const arch2 = arches.twoPtArch({ arcRadius: 30, archWidth: 35 });
    layout.addToLayout({ name: 'arch2', desc: '...', geom: arch2, layoutOpts });


    //-----------
    // Walls

    const wall2 = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 80,
        // wallOpts: 0,
        trimOpts: ['base', 'crown'],
        crownUnits: 1,
        baseUnits: 2,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
        trimSides: 4,
    });
    layout.addToLayout({ name: 'Wall (2)', desc: '...', geom: wall2, layoutOpts });

    const wallDado1 = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 70,
        // wallOpts: 0,
        trimOpts: ['base', 'dado', 'crown'],
        dadoUnits: 1,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
        trimSides: 4,
    });
    layout.addToLayout({ name: 'Dado Wall (1)', desc: '...', geom: wallDado1, layoutOpts });

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
