"use strict"
const jscad = require('@jscad/modeling')
const swJscad = require('sw-jscad').init(jscad)

const { roundedCylinder, cylinder, rectangle, polygon } = jscad.primitives
const { subtract } = jscad.booleans
const { align } = jscad.transforms
const { measureBoundingBox } = jscad.measurements
const { colorize } = jscad.colors

const {
    transformUtils,
} = swJscad

const PHI = 1.6180339887;
const PHI_INV = 0.6180339887;

const small = ({
    controlPoints
}) => {
    const baseShape = polygon({
        points: [
            controlPoints.l0.t0,
            controlPoints.l0.t1,
            controlPoints.l1.t1,
            controlPoints.l1.t0,
        ]
    })
    return baseShape;
}

const smallOrnament = () => {
    return null;
}

const medium = () => {
    return null;
}

const mediumOrnament1 = () => {
    return null;
}

const mediumOrnament2 = () => {
    return null;
}

const large = () => {
    return null;
}

const largeOrnament1 = () => {
    return null;
}

const largeOrnament2 = () => {
    return null;
}

const largeOrnament3 = () => {
    return null;
}

/**
 * Creates a set of trimwork profiles
 * @param {Object} opts 
 * @param {number} opts.unitHeight - Typical height for basic trim unit
 * @param {number} opts.unitDepth - Typical depth for basic trim unit
 * @param {number} opts.detailDepth - Size of corner details (mm). Defaults to 1/3 of `unitDepth`
 * @returns 
 */
const trimFamilyBasic = ({
    unitHeight,
    unitDepth,
    detailDepth
}) => {
    const numLevels = 3;
    const levelPoints = {};
    const ornamentPoints = {};
    const thicknessPoints = {};

    for (let levelIdx = 0; levelIdx <= numLevels; levelIdx++) {
        levelPoints[`l${levelIdx}`] = unitHeight * levelIdx;
        thicknessPoints[`t${levelIdx}`] = unitDepth * levelIdx;
        ornamentPoints[`o${levelIdx}`] =  unitHeight * levelIdx + (unitHeight * PHI_INV);
    }

    console.log(levelPoints, thicknessPoints, ornamentPoints);

    const controlPoints = {};

    const getPointsForLevel = (levelPt) => {
        const lPoints = {};
        for (const [tPtName, tPtValue] of Object.entries(thicknessPoints)) {
            lPoints[tPtName] = [tPtValue, levelPt];
        }
        return lPoints;
    }

    for (const [ptName, ptValue] of Object.entries(levelPoints)) {
        controlPoints[ptName] = getPointsForLevel(ptValue);
    }
    for (const [ptName, ptValue] of Object.entries(ornamentPoints)) {
        controlPoints[ptName] = getPointsForLevel(ptValue);
    }

    console.log(controlPoints);

    return {
        small: small({ controlPoints }),
        smallOrnament: smallOrnament(),
        medium: medium(),
        mediumOrnament1: mediumOrnament1(),
        mediumOrnament2: mediumOrnament2(),
        large: large(),
        largeOrnament1: largeOrnament1(),
        largeOrnament2: largeOrnament2(),
        largeOrnament3: largeOrnament3(),
    };
}

module.exports = { trimFamilyBasic }
