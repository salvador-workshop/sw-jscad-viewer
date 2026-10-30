"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

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

    const connEllipseData = connections.ellipse({
        segments: 18,
        interfaceMargin: [math.inchesToMm(3/8), math.inchesToMm(3/16)]
    })
    const connEllipseProfiles = connEllipseData[0]
    const connEllipseMale = connEllipseProfiles[0]
    const connEllipseFemale = connEllipseProfiles[1]

    const connTabData = connections.tab({})
    const connTabProfiles = connTabData[0]
    const connTabMale = connTabProfiles[0]
    const connTabFemale = connTabProfiles[1]

    const connDovetailData = connections.dovetail({
        interfaceMargin: [math.inchesToMm(3/8), math.inchesToMm(3/16)]
    })
    const connDovetailProfiles = connDovetailData[0]
    const connDovetailMale = connDovetailProfiles[0]
    const connDovetailFemale = connDovetailProfiles[1]

    const connRightAngleTabData = connections.rightAngleTab({
        interfaceMargin: [math.inchesToMm(3/8), math.inchesToMm(3/16)]
    })
    const connRightAngleTabProfiles = connRightAngleTabData[0]
    const connRightAngleTabMale = connRightAngleTabProfiles[0]
    const connRightAngleTabFemale = connRightAngleTabProfiles[1]

    const connBoltCircleData = connections.boltCircle({
        radius: 20,
        unitRadius: 5,
        unitSegments: 18,
    })
    const connBoltCircleProfiles = connBoltCircleData[0]
    const connBoltCircleMale = connBoltCircleProfiles[0]
    const connBoltCircleFemale = connBoltCircleProfiles[1]

    const connDovetailRowData = connections.dovetailRow({
        size: [100, 33],
    })
    const connDovetailRowProfiles = connDovetailRowData[0]
    const connDovetailRowMale = connDovetailRowProfiles[0]
    const connDovetailRowFemale = connDovetailRowProfiles[1]

    const connTabRowData = connections.tabRow({
        size: [100, 33],
        interfaceMargin: [math.inchesToMm(3/8), math.inchesToMm(3/16)]
    })
    const connTabRowProfiles = connTabRowData[0]
    const connTabRowMale = connTabRowProfiles[0]
    const connTabRowFemale = connTabRowProfiles[1]

    const connRightAngleTabRowData = connections.rightAngleTabRow({
        size: [100, 33],
        interfaceMargin: [math.inchesToMm(3/8), math.inchesToMm(3/16)]
    })
    const connRightAngleTabRowProfiles = connRightAngleTabRowData[0]
    const connRightAngleTabRowMale = connRightAngleTabRowProfiles[0]
    const connRightAngleTabRowFemale = connRightAngleTabRowProfiles[1]

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
        {
            name: 'c-rangle-tab-m',
            geom: connRightAngleTabMale,
        },
        {
            name: 'c-rangle-tab-f',
            geom: connRightAngleTabFemale,
        },
        {
            name: 'c-ellipse-m',
            geom: connEllipseMale,
        },
        {
            name: 'c-ellipse-f',
            geom: connEllipseFemale,
        },
        {
            name: 'c-bolt-circle-m',
            geom: connBoltCircleMale,
        },
        {
            name: 'c-bolt-circle-f',
            geom: connBoltCircleFemale,
        },
        {
            name: 'c-dovetailrow-m',
            geom: connDovetailRowMale,
        },
        {
            name: 'c-dovetailrow-f',
            geom: connDovetailRowFemale,
        },
        {
            name: 'c-tabrow-m',
            geom: connTabRowMale,
        },
        {
            name: 'c-tabrow-f',
            geom: connTabRowFemale,
        },
        {
            name: 'c-rangle-tabrow-m',
            geom: connRightAngleTabRowMale,
        },
        {
            name: 'c-rangle-tabrow-f',
            geom: connRightAngleTabRowFemale,
        },
    ]

    connectionProfiles.forEach((prof) => {
        layout.addToLayout({ name: prof.name, desc: '..', layoutOpts }, prof.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
