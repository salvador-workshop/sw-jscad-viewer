"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    connections,
} = swcadJs.profiles

const {
    layout,
} = swcadJs.utils

const main = () => {

    const connPegboardData = connections.pegboard({})
    const connPegboardProfiles = connPegboardData[0]
    const connPegboardMale = connPegboardProfiles[0]
    const connPegboardFemale = connPegboardProfiles[1]

    const connPolygonData = connections.polygon({})
    const connPolygonProfiles = connPolygonData[0]
    const connPolygonMale = connPolygonProfiles[0]
    const connPolygonFemale = connPolygonProfiles[1]

    const connTabData = connections.tab({})
    const connTabProfiles = connTabData[0]
    const connTabMale = connTabProfiles[0]
    const connTabFemale = connTabProfiles[1]

    const connDovetailData = connections.dovetail({})
    const connDovetailProfiles = connDovetailData[0]
    const connDovetailMale = connDovetailProfiles[0]
    const connDovetailFemale = connDovetailProfiles[1]

    const layoutOpts = {
        layoutMargin: 15,
        layoutSpace: 15,
    }

    const connectionProfiles = [
        {
            name: 'c-pegboard-m',
            geom: connPegboardMale,
        },
        {
            name: 'c-pegboard-f',
            geom: connPegboardFemale,
        },
        {
            name: 'c-polygon-m',
            geom: connPolygonMale,
        },
        {
            name: 'c-polygon-f',
            geom: connPolygonFemale,
        },
        {
            name: 'c-tab-m',
            geom: connTabMale,
        },
        {
            name: 'c-tab-f',
            geom: connTabFemale,
        },
        {
            name: 'c-dovetail-m',
            geom: connDovetailMale,
        },
        {
            name: 'c-dovetail-f',
            geom: connDovetailFemale,
        },
    ]

    connectionProfiles.forEach((prof) => {
        layout.addToLayout({ name: prof.name, desc: '..', layoutOpts }, prof.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
