"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    reinforcement,
    connections,
} = swcadJs.profiles

const {
    layout,
} = swcadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 15,
        layoutSpace: 5,
    }

    const connectionProfiles = [
        {
            name: 'c-pegboard-m',
            geom: connections.pegboard({ spacing: 25.4, radius: 6.35 }).male,
        },
        {
            name: 'c-pegboard-f',
            geom: connections.pegboard({ spacing: 25.4, radius: 6.35 }).female,
        },
        {
            name: 'c-polygon-m',
            geom: connections.polygon({ radius: 12.7, segments: 6 }).male,
        },
        {
            name: 'c-polygon-f',
            geom: connections.polygon({ radius: 12.7, segments: 6 }).female,
        },
        {
            name: 'c-tab-m',
            geom: connections.tab({ width: 30, depth: 10 }).male,
        },
        {
            name: 'c-tab-f',
            geom: connections.tab({ width: 30, depth: 10 }).female,
        },
        {
            name: 'c-dovetail-m',
            geom: connections.dovetail({ width: 30, depth: 10 }).male,
        },
        {
            name: 'c-dovetail-f',
            geom: connections.dovetail({ width: 30, depth: 10 }).female,
        },
    ]

    connectionProfiles.forEach((prof) => {
        layout.addToLayout({ name: prof.name, desc: '..', layoutOpts }, prof.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
