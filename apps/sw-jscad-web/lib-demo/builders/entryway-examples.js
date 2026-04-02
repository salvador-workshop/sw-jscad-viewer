"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ lib: jscad });
console.log('swCadJs', swCadJs)

const {
    wall,
} = swCadJs.models

const {
    layout,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 18,
        layoutSpace: 30,
    }

    const entryway1 = wall.entryway.buildGothicEntryway({
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
    layout.addToLayout({ name: 'entryway1', desc: '...', layoutOpts }, entryway1);

    const entryway2 = wall.entryway.buildGothicEntryway({
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
    layout.addToLayout({ name: 'entryway2', desc: '...', layoutOpts }, entryway2);

    const entryway3 = wall.entryway.buildGothicEntryway({
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
    layout.addToLayout({ name: 'entryway3', desc: '...', layoutOpts }, entryway3);

    const layoutContent = layout.gridLayout({ layoutOpts });

    return layoutContent
}

module.exports = { main }
