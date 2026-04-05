"use strict"

const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    buttress
} = swCadJs.models

const {
    layout,
} = swCadJs.utils

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
    layout.addToLayout({ name: 'buttress1', desc: '...', layoutOpts }, buttress1);

    const buttress2 = buttress.buildSimpleButtress({
        height: 45,
        thickness: 5,
        width: 25,
    });
    layout.addToLayout({ name: 'buttress2', desc: '...', layoutOpts }, buttress2);

    const buttress3 = buttress.buildTwoPartButtress({
        height: 60,
        thickness: 15,
        bottomWidth: 25,
        topWidth: 15,
    });
    layout.addToLayout({ name: 'buttress3', desc: '...', layoutOpts }, buttress3);

    const buttress5 = buttress.buildTwoPartButtress({
        height: 60,
        thickness: 10,
        bottomWidth: 25,
        topWidth: 15,
        midHeight: 20,
    });
    layout.addToLayout({ name: 'buttress5', desc: '...', layoutOpts }, buttress5);

    const layoutContent = layout.gridLayout({ layoutOpts });

    return layoutContent
}

module.exports = { main }
