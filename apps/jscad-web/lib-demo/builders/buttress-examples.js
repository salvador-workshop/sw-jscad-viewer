"use strict"

const jscad = require('@jscad/modeling')
const SwJscad = require('sw-jscad');
const SwJscadUi = require('sw-jscad-ui');

const swJscad = SwJscad.init({ lib: jscad });
const swJscadUi = SwJscadUi.init({ lib: jscad, swLib: swJscad });

const { buttress } = swJscad.builders;
const { layout } = swJscadUi.ux;

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
