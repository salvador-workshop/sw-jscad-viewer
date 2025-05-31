"use strict"

const jscad = require('@jscad/modeling')
const SwJscad = require('sw-jscad');
const SwJscadUi = require('sw-jscad-ui');

const swJscad = SwJscad.init({ lib: jscad });
const swJscadUi = SwJscadUi.init({ lib: jscad, swLib: swJscad });

const {
    entryways,
} = swJscad.builders

const {
    layout,
} = swJscadUi.ux

const main = () => {
    const layoutOpts = {
        layoutMargin: 15,
        noFrame: true,
    }

    const entryway1 = entryways.buildGothic({
        wallLength: 100,
        wallThickness: 10,
        wallHeight: 100,
        entryLength: 40,
        trimOpts: ['base', 'dado', 'crown'],
        crownUnits: 2,
        dadoUnits: 2,
        baseUnits: 1,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'entryway1', desc: '...', geom: entryway1, layoutOpts });

    const entryway2 = entryways.buildGothic({
        wallLength: 100,
        wallThickness: 10,
        wallHeight: 100,
        entryLength: 40,
        dadoHeight: 50,
        trimOpts: [],
        crownUnits: 2,
        dadoUnits: 2,
        baseUnits: 1,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
    });
    layout.addToLayout({ name: 'entryway2', desc: '...', geom: entryway2, layoutOpts });

    const entryway3 = entryways.buildGothic({
        wallLength: 100,
        wallThickness: 10,
        wallHeight: 100,
        entryLength: 40,
        dadoHeight: 50,
        trimOpts: ['base', 'dado', 'crown'],
        crownUnits: 2,
        dadoUnits: 2,
        baseUnits: 1,
        trimUnitHeight: 4,
        trimUnitDepth: 1.25,
        archRadFactor: 0.667,
    });
    layout.addToLayout({ name: 'entryway3', desc: '...', geom: entryway3, layoutOpts });

    const layoutContent = layout.gridLayout({ layoutOpts });

    return layoutContent
}

module.exports = { main }
