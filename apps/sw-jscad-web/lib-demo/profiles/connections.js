"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms;

const swcadJs = require('swcad-js-test').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    connections,
} = swcadJs.profiles

const spaceUnit = math.inchesToMm(3.75)

const main = () => {
    const connEllipseProfiles = connections.tab.ellipse({
        segments: 18,
        interfaceMargin: [math.inchesToMm(3 / 8), math.inchesToMm(3 / 16)]
    })[0]
    const connEllipseMale = connEllipseProfiles[0]
    const connEllipseFemale = connEllipseProfiles[1]

    const connTabProfiles = connections.tab.tab({})[0]
    const connTabMale = connTabProfiles[0]
    const connTabFemale = connTabProfiles[1]

    const connDovetailProfiles = connections.tab.dovetail({
        interfaceMargin: [math.inchesToMm(3 / 8), math.inchesToMm(3 / 16)]
    })[0]
    const connDovetailMale = connDovetailProfiles[0]
    const connDovetailFemale = connDovetailProfiles[1]

    const connRightAngleTabProfiles = connections.tab.rightAngleTab({
        interfaceMargin: [math.inchesToMm(3 / 8), math.inchesToMm(3 / 16)]
    })[0]
    const connRightAngleTabMale = connRightAngleTabProfiles[0]
    const connRightAngleTabFemale = connRightAngleTabProfiles[1]

    const tabLikeProfiles1 = [
        connTabMale,
        connTabFemale,
        connDovetailMale,
        connDovetailFemale,
    ]

    const tabLikeProfiles2 = [
        connRightAngleTabMale,
        connRightAngleTabFemale,
        connEllipseMale,
        connEllipseFemale,
    ]

    const connPegboardProfiles = connections.pegboard({})[0]
    const connPegboardMale = connPegboardProfiles[0]
    const connPegboardFemale = connPegboardProfiles[1]

    const connPolygonProfiles = connections.polygon({})[0]
    const connPolygonMale = connPolygonProfiles[0]
    const connPolygonFemale = connPolygonProfiles[1]

    const connBoltCircleProfiles = connections.boltCircle({
        radius: 20,
        unitRadius: 5,
        unitSegments: 18,
    })[0]
    const connBoltCircleMale = connBoltCircleProfiles[0]
    const connBoltCircleFemale = connBoltCircleProfiles[1]

    const faceConnectionProfiles = [
        connPegboardMale,
        connPegboardFemale,
        connPolygonMale,
        connPolygonFemale,
        connBoltCircleMale,
        connBoltCircleFemale,
    ]

    const connDovetailRowProfiles = connections.tabRow.dovetailRow({
        size: [100, 33],
    })[0]
    const connDovetailRowMale = connDovetailRowProfiles[0]
    const connDovetailRowFemale = connDovetailRowProfiles[1]

    const connTabRowProfiles = connections.tabRow.tabRow({
        size: [100, 33],
        interfaceMargin: [math.inchesToMm(3 / 8), math.inchesToMm(3 / 16)]
    })[0]
    const connTabRowMale = connTabRowProfiles[0]
    const connTabRowFemale = connTabRowProfiles[1]

    const connRightAngleTabRowProfiles = connections.tabRow.rightAngleTabRow({
        size: [100, 33],
        interfaceMargin: [math.inchesToMm(3 / 8), math.inchesToMm(3 / 16)]
    })[0]
    const connRightAngleTabRowMale = connRightAngleTabRowProfiles[0]
    const connRightAngleTabRowFemale = connRightAngleTabRowProfiles[1]

    const rowConnectionProfiles1 = [
        connDovetailRowMale,
        connDovetailRowFemale,
        connTabRowMale,
        connTabRowFemale,
    ]

    const rowConnectionProfiles2 = [
        connRightAngleTabRowMale,
        connRightAngleTabRowFemale,
    ]

    const outTabLike1 = tabLikeProfiles1.map((oModel, idx) => {
        return translate([idx * spaceUnit, 0, 0], oModel)
    })

    const outTabLike2 = tabLikeProfiles2.map((oModel, idx) => {
        return translate([idx * spaceUnit, -spaceUnit, 0], oModel)
    })
    const outFaceModels = faceConnectionProfiles.map((oModel, idx) => {
        return translate([idx * spaceUnit, spaceUnit * -2, 0], oModel)
    })
    const outRowModels1 = rowConnectionProfiles1.map((oModel, idx) => {
        return translate([idx * spaceUnit * 1.5, spaceUnit * -3, 0], oModel)
    })
    const outRowModels2 = rowConnectionProfiles2.map((oModel, idx) => {
        return translate([idx * spaceUnit * 1.5, spaceUnit * -4, 0], oModel)
    })

    return [
        ...outTabLike1,
        ...outTabLike2,
        ...outFaceModels,
        ...outRowModels1,
        ...outRowModels2,
    ];
}

module.exports = { main }
