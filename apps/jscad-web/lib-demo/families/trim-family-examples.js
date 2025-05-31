"use strict"

const jscad = require('@jscad/modeling')
const SwJscad = require('sw-jscad');
const SwJscadUi = require('sw-jscad-ui');

const swJscad = SwJscad.init({ lib: jscad });
const swJscadUi = SwJscadUi.init({ lib: jscad, swLib: swJscad });

const { trimAranea } = swJscad.families;
const { layout } = swJscadUi.ux;

const main = () => {
    const tFamilyAranea = trimAranea.buildTrimFamily({ unitHeight: 20, unitDepth: 10 });

    const layoutOpts = {
        // column: true,
        relativeTo: [0, -75, 0],
        layoutMargin: 25,
        layoutSpace: 5,
    }

    const categories = ['base', 'dado', 'crown'];
    const sizes = [
        // 'extraSmall',
        'small',
        'medium',
        'large',
        // 'smallOrn1',
        'mediumOrn1',
        // 'largeOrn1',
    ];
    const sizesAbbrev = [
        // 'xm',
        'sm',
        'md',
        'lg',
        // 'sm-o1',
        'md-o1',
        // 'lg-o1',
    ];

    for (let ctgIdx = 0; ctgIdx < categories.length; ctgIdx++) {
        for (let sIdx = 0; sIdx < sizes.length; sIdx++) {
            const currentCtg = categories[ctgIdx];
            const currentSize = sizes[sIdx];
            const currentGeom = tFamilyAranea[currentCtg][currentSize];
            console.log(currentCtg, currentSize)
            layout.addToLayout({ name: `${currentCtg}-${sizesAbbrev[sIdx]}`, desc: '.', geom: currentGeom, layoutOpts });
        }
    }

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent
}

module.exports = { main }
