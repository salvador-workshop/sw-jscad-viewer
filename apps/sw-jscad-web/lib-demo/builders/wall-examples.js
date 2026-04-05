"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    wall,
} = swCadJs.models

const {
    layout,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        column: true,
        relativeTo: [0, -75, 0],
        layoutMargin: 15,
        // noFrame: true,
        layoutSpace: 15,
    }

    const baseWall = wall.buildWall({
        height: 100,
        thickness: 10,
        length: 100,
        // wallOpts: 0,
        trimOpts: [],
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Base Wall', desc: 'No trim', layoutOpts }, baseWall);

    const wall1 = wall.buildWall({
        height: 100,
        thickness: 10,
        length: 90,
        // wallOpts: 0,
        trimOpts: ['base', 'dado'],
        baseUnits: 1,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Wall (1)', desc: 'Base + dado trim', layoutOpts }, wall1);

    const wallDado2 = wall.buildWall({
        height: 100,
        thickness: 10,
        length: 60,
        // wallOpts: 0,
        trimOpts: ['dado', 'crown'],
        dadoUnits: 2,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'Dado Wall (2)', desc: '2 trim units thicker', layoutOpts }, wallDado2);

    const wallDado4 = wall.buildWall({
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
    layout.addToLayout({ name: 'Dado Wall (4)', desc: '1 trim units thicker, ornate', layoutOpts }, wallDado4);

    const halfWall1 = wall.buildWall({
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
    layout.addToLayout({ name: 'Half Wall (1)', desc: '...', layoutOpts }, halfWall1);

    const halfWall2 = wall.buildWall({
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
    layout.addToLayout({ name: 'Half Wall (2)', desc: '...', layoutOpts }, halfWall2);

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
