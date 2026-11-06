"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const swcadJsHelpers = require('swcad-js-helpers-test').init({ jscad, swcadJs });
console.log('swcadJsHelpers', swcadJsHelpers)

const {
    rectFrame,
} = swcadJsHelpers.profiles

const {
    layout,
} = swcadJsHelpers.utils;

const main = () => {
    const layoutOpts = {
        layoutMargin: 15,
        noFrame: false,
        layoutSpace: 15,
    }

    layout.addToLayout(
        {
            name: 'rectFrame-1',
            desc: '..',
            layoutOpts,
        },
        rectFrame({
            size: [40, 50],
            direction: 'in',
            frameWidth: 10,
            cornerOpts: {
                style: 'ellipseSixtyThirty',
                depth: 5,
            },
        })
    );

    layout.addToLayout(
        {
            name: 'rectFrame-2',
            desc: '..',
            layoutOpts,
        },
        rectFrame({
            size: [50, 40],
            direction: 'out',
            frameWidth: 10,
            outCornerOpts: {
                style: 'ellipseSilver',
                depth: 5,
            },
        })
    );

    layout.addToLayout(
        {
            name: 'rectFrame-3',
            desc: '..',
            layoutOpts,
        },
        rectFrame({
            size: [40, 50],
            direction: 'both',
            frameWidth: 10,
            cornerOpts: {
                style: 'round',
                radius: 2.5,
            },
            outCornerOpts: {
                style: 'ellipseBronze',
                depth: 5,
            },
        })
    );

    layout.addToLayout(
        {
            name: 'rectFrame-4',
            desc: '..',
            layoutOpts,
        },
        rectFrame({
            size: [40, 50],
            direction: 'both',
            frameWidth: 10,
            cornerOpts: {
                style: 'triGolden',
                base: 5,
                height: 8,
            },
            outCornerOpts: {
                style: 'cornerBezSilver',
                depth: 10,
            },
        })
    );

    layout.addToLayout(
        {
            name: 'rectFrame-5',
            desc: '..',
            layoutOpts,
        },
        rectFrame({
            size: [60, 45],
            direction: 'both',
            frameWidth: 10,
            cornerOpts: {
                style: 'triGolden',
                base: 5,
                height: 8,
            },
            outCornerOpts: {
                style: 'cornerBezBronze',
                depth: 10,
            },
        })
    );

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }