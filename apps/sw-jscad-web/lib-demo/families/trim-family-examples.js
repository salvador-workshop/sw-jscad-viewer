"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    aranea,
} = swCadJs.profiles.trim

const {
    layout,
} = swCadJs.utils

const main = () => {
    const tFamilyAranea = aranea.buildTrimFamily({ unitHeight: 20, unitDepth: 10 });

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
            layout.addToLayout({ name: `${currentCtg}-${sizesAbbrev[sIdx]}`, desc: '.', layoutOpts }, currentGeom);
        }
    }

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent
}

module.exports = { main }
