"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    trim,
} = swcadJs.profiles

const {
    layout,
} = swcadJs.utils

const main = () => {
    const tFamilyAranea = trim.aranea({ size: [20, 10] });
    const tFamilyBibliopoli = trim.bibliopoli({ size: [20, 10] });

    const layoutOpts = {
        // column: true,
        relativeTo: [0, -75, 0],
        layoutMargin: 30,
        layoutSpace: 8,
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

            const geomAranea = tFamilyAranea[currentCtg][currentSize];
            const geomBibliopoli = tFamilyBibliopoli[currentCtg][currentSize];

            layout.addToLayout({ name: `ara-${currentCtg}-${sizesAbbrev[sIdx]}`, desc: '.', layoutOpts }, geomAranea);
            layout.addToLayout({ name: `bib-${currentCtg}-${sizesAbbrev[sIdx]}`, desc: '.', layoutOpts }, geomBibliopoli);
        }
    }

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent
}

module.exports = { main }
