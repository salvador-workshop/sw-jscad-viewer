"use strict"

const jscad = require('@jscad/modeling')
const SwJscad = require('sw-jscad');
const SwJscadUi = require('sw-jscad-ui');

const swJscad = SwJscad.init({ lib: jscad });
const swJscadUi = SwJscadUi.init({ lib: jscad, swLib: swJscad });

const { walls } = swJscad.builders;
const { layout } = swJscadUi.ux;

const main = () => {
    const layoutOpts = {
        column: true,
        relativeTo: [0, -75, 0],
        layoutMargin: 15,
        // noFrame: true,
        layoutSpace: 15,
    }

    const baseWall = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 100,
        // wallOpts: 0,
        trimOpts: [],
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Base Wall', desc: 'No trim', geom: baseWall, layoutOpts });

    const wall1 = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 90,
        // wallOpts: 0,
        trimOpts: ['base', 'dado'],
        baseUnits: 1,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Wall (1)', desc: 'Base + dado trim', geom: wall1, layoutOpts });

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
    });
    layout.addToLayout({ name: 'Wall (2)', desc: 'Base + crown trim', geom: wall2, layoutOpts });

    const wallDado1 = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 70,
        // wallOpts: 0,
        trimOpts: ['base', 'dado', 'crown'],
        dadoUnits: 1,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Dado Wall (1)', desc: '1 trim unit thicker', geom: wallDado1, layoutOpts });

    const wallDado2 = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 60,
        // wallOpts: 0,
        trimOpts: ['dado', 'crown'],
        dadoUnits: 2,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Dado Wall (2)', desc: '2 trim units thicker', geom: wallDado2, layoutOpts });


    const wallDado3 = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 60,
        // wallOpts: 0,
        trimOpts: ['base', 'dado', 'crown'],
        // crownUnits: 2,
        dadoUnits: 2,
        baseUnits: 1,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Dado Wall (3)', desc: '2 trim units thicker, ornate', geom: wallDado3, layoutOpts });

    const wallDado4 = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 60,
        // wallOpts: 0,
        trimOpts: ['base', 'dado', 'crown'],
        crownUnits: 2,
        dadoUnits: 1,
        baseUnits: 2,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Dado Wall (4)', desc: '1 trim units thicker, ornate', geom: wallDado4, layoutOpts });

    const halfWall1 = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 60,
        // wallOpts: 0,
        half: 'upper',
        trimOpts: ['base', 'dado', 'crown'],
        crownUnits: 2,
        dadoUnits: 2,
        baseUnits: 1,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Half Wall (1)', desc: '...', geom: halfWall1, layoutOpts });

    const halfWall2 = walls.buildWall({
        height: 100,
        thickness: 10,
        length: 60,
        // wallOpts: 0,
        half: 'lower',
        trimOpts: ['base', 'dado', 'crown'],
        crownUnits: 2,
        dadoUnits: 1,
        baseUnits: 2,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Half Wall (2)', desc: '...', geom: halfWall2, layoutOpts });

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
