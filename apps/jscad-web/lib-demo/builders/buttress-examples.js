"use strict"

const jscad = require('@jscad/modeling')

const swJscad = require('sw-jscad').init({ lib: jscad });
const swjUi = require('sw-jscad-ui').init({ lib: jscad, swLib: swJscad });
const swjFamilies = require('sw-jscad-families').init({ lib: jscad, swLib: swJscad });
const swjBuilders = require('sw-jscad-builders').init({ lib: jscad, swLib: swJscad, swFamilies: swjFamilies });

const { buttress } = swjBuilders;
const { layout } = swjUi.ux;

const main = () => {
    const layoutOpts = {
        layoutMargin: 20,
        layoutSpace: 15,
    }

    const buttress1 = buttress.buildSimpleButtress({
        height: 60,
        thickness: 10,
        width: 25,
    });
    layout.addToLayout({ name: 'buttress1', desc: '...', geom: buttress1, layoutOpts });

    const buttress2 = buttress.buildSimpleButtress({
        height: 45,
        thickness: 5,
        width: 25,
    });
    layout.addToLayout({ name: 'buttress2', desc: '...', geom: buttress2, layoutOpts });

    const buttress3 = buttress.buildTwoPartButtress({
        height: 60,
        thickness: 15,
        bottomWidth: 25,
        topWidth: 15,
    });
    layout.addToLayout({ name: 'buttress3', desc: '...', geom: buttress3, layoutOpts });

    const buttress5 = buttress.buildTwoPartButtress({
        height: 60,
        thickness: 10,
        bottomWidth: 25,
        topWidth: 15,
        midHeight: 20,
    });
    layout.addToLayout({ name: 'buttress5', desc: '...', geom: buttress5, layoutOpts });

    const layoutContent = layout.gridLayout({ layoutOpts });

    return layoutContent
}

module.exports = { main }
