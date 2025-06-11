"use strict"
const jscad = require('@jscad/modeling')

const swJscad = require('sw-jscad').init({ lib: jscad });
const swjUi = require('sw-jscad-ui').init({ lib: jscad, swLib: swJscad });

const { profiles } = swJscad.details;
const { layout } = swjUi.ux;

const main = () => {
    const layoutOpts = {
        layoutMargin: 20,
        layoutSpace: 8,
    }

    const profile1 = profiles.sqCornerCircNotch({ sqLength: 5 });
    layout.addToLayout({ name: 'profile1', desc: '...', geom: profile1, layoutOpts });

    const profile2 = profiles.octagonal({ sqLength: 5 });
    layout.addToLayout({ name: 'profile2', desc: '...', geom: profile2, layoutOpts });

    const profile3 = profiles.edge.circNotch({ totalThickness: 8, topThickness: 4 });
    layout.addToLayout({ name: 'profile3', desc: '...', geom: profile3, layoutOpts });

    const profile4 = profiles.edge.circPortrusion({ totalThickness: 8, topThickness: 4 });
    layout.addToLayout({ name: 'profile4', desc: '...', geom: profile4, layoutOpts });

    const profile5 = profiles.edge.circNotch({ totalThickness: 8, topThickness: 4, smallOffset: 1 });
    layout.addToLayout({ name: 'profile5', desc: '...', geom: profile5, layoutOpts });

    const profile6 = profiles.edge.circPortrusion({ totalThickness: 8, topThickness: 4, smallOffset: 1 });
    layout.addToLayout({ name: 'profile6', desc: '...', geom: profile6, layoutOpts });

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
