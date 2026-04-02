"use strict"
const jscad = require('@jscad/modeling')

const { cuboid, sphere, cylinder } = jscad.primitives
const { union } = jscad.booleans

const swCadJs = require('swcad-js').init({ lib: jscad });
console.log('swCadJs', swCadJs)

const {
    transform,
    layout,
} = swCadJs.utils;

const main = () => {
    const layoutOpts = {
        layoutMargin: 20,
        noFrame: false,
        layoutSpace: 20,
    }

    const shape1 = cuboid({ size: [15, 30, 15] })
    const shape2 = cylinder({ radius: 6, height: 15 })
    const shape3 = sphere({ radius: 10 })

    const shapeStack1 = transform.stack({}, [shape1, shape2, shape3])
    const shapeStack2 = transform.stack({}, [shape2, shape3, shape1])
    const shapeStack3 = transform.stack({ reverse: true }, [shape1, shape2, shape3])

    layout.addToLayout({ name: 'shape1', desc: '...', layoutOpts }, shape1);
    layout.addToLayout({ name: 'shape2', desc: '...', layoutOpts }, shape2);
    layout.addToLayout({ name: 'shape3', desc: '...', layoutOpts }, shape3);
    layout.addToLayout({ name: 'shapeStack1', desc: '...', layoutOpts }, union(...shapeStack1));
    layout.addToLayout({ name: 'shapeStack2', desc: '...', layoutOpts }, union(...shapeStack2));
    layout.addToLayout({ name: 'shapeStack3', desc: '...', layoutOpts }, union(...shapeStack3));

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
