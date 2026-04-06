"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ jscad });
console.log('swCadJs', swCadJs)

const {
    reinforcement,
    connections,
} = swCadJs.profiles

const {
    layout,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 15,
        layoutSpace: 5,
    }

    const reinforcementProfiles = [
        {
            name: 're-straight',
            geom: reinforcement.straight({ length: 32, thickness: 4, insetWidth: 4, offsetWidth: 6 }),
        },
        {
            name: 're-corner',
            geom: reinforcement.corner({ length: 48, depth: 32, thickness: 4, flangeThickness: 1, insetWidth: 4, offsetWidth: 6 }),
        },
        {
            name: 're-cBeam',
            geom: reinforcement.cBeam({ length: 48, depth: 32, thickness: 2, flangeThickness: 1, insetWidth: 4, offsetWidth: 6 }),
        },
        {
            name: 're-tBeam',
            geom: reinforcement.tBeam({ length: 48, depth: 32, thickness: 2, flangeThickness: 1, insetWidth: 4, offsetWidth: 6 }),
        },
        {
            name: 're-doubleTBeam',
            geom: reinforcement.doubleTBeam({ length: 64, depth: 32, thickness: 4, insetWidth: 4, offsetWidth: 6 }),
        },
        {
            name: 're-triBeam',
            geom: reinforcement.triBeam({ radius: 48, thickness: 3, insetWidth: 3, offsetWidth: 6 }),
        },
        {
            name: 're-crossBeam',
            geom: reinforcement.crossBeam({ radius: 48, thickness: 3, insetWidth: 3, offsetWidth: 6 }),
        },
        {
            name: 're-hexBeam',
            geom: reinforcement.hexBeam({ radius: 48, thickness: 3, insetWidth: 3, offsetWidth: 6 }),
        },
    ]

    reinforcementProfiles.forEach((prof) => {
        layout.addToLayout({ name: prof.name, desc: '..', layoutOpts }, prof.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
