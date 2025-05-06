"use strict"

const jscad = require('@jscad/modeling')
const swJscad = require('sw-jscad').init({ lib: jscad });
const { enhanceSwJscad } = require('./enhancer');
enhanceSwJscad({ lib: jscad, swLib: swJscad });

const { translate } = jscad.transforms;
const {
    wallBuilder,
    layoutUtils,
} = swJscad

const main = () => {
    const baseWall = wallBuilder.build({
        height: 100,
        thickness: 10,
        length: 100,
        // wallOpts: 0,
        trimOpts: [],
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
        trimSides: 4,
    });

    const wall1 = wallBuilder.build({
        height: 100,
        thickness: 10,
        length: 90,
        // wallOpts: 0,
        trimOpts: ['base', 'dado'],
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
        trimSides: 4,
    });
    const wall2 = wallBuilder.build({
        height: 100,
        thickness: 10,
        length: 80,
        // wallOpts: 0,
        trimOpts: ['base', 'crown'],
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
        trimSides: 4,
    });

    const wallDado1 = wallBuilder.build({
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
    const wallDado2 = wallBuilder.build({
        height: 100,
        thickness: 10,
        length: 60,
        // wallOpts: 0,
        trimOpts: ['base', 'dado', 'crown'],
        dadoUnits: 2,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
        trimSides: 4,
    });

    const layoutOpts = {
        column: true,
        relativeTo: [0, -75, 0],
        layoutMargin: 8,
        // noFrame: true,
    }

    layoutUtils.addToLayout({ name: 'Base Wall', desc: 'No trim', geom: baseWall, layoutOpts });
    layoutUtils.addToLayout({ name: 'Wall (1)', desc: 'Base + dado trim', geom: wall1, layoutOpts });
    layoutUtils.addToLayout({ name: 'Wall (2)', desc: 'Base + crown trim', geom: wall2, layoutOpts });
    layoutUtils.addToLayout({ name: 'Dado Wall (1)', desc: '1 trim unit thicker', geom: wallDado1, layoutOpts });
    layoutUtils.addToLayout({ name: 'Dado Wall (2)', desc: '2 trim units thicker', geom: wallDado2, layoutOpts });

    const layoutContent = layoutUtils.linearLayout({ layoutOpts });

    return [
        ...layoutContent
    ];
}

module.exports = { main }
