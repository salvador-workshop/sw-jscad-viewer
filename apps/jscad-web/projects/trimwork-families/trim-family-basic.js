"use strict"
const jscad = require('@jscad/modeling')
// const swJscad = require('sw-jscad').init(jscad)

const { polygon, square } = jscad.primitives
const { subtract, union } = jscad.booleans
const { rotate, translate, mirror } = jscad.transforms

// const {
//     transformUtils,
// } = swJscad

const PHI = 1.6180339887;
const PHI_INV = 0.6180339887;

const detailCorner = ({ sideLength }) => {
    const baseSquare = square({ size: Math.hypot(sideLength, sideLength) });

    return rotate([0, 0, Math.PI / 4], baseSquare);
}

const small = ({ controlPoints, detailDepth }) => {
    const cornerPt1 = controlPoints.l0.t1;
    const cornerPt2 = controlPoints.l1.t1;
    const baseShape = polygon({
        points: [
            controlPoints.l0.t0,
            cornerPt1,
            cornerPt2,
            controlPoints.l1.t0,
        ]
    });
    const baseCorner = detailCorner({ sideLength: detailDepth });
    const corner1 = translate([...cornerPt1, 0], baseCorner);
    const corner2 = translate([...cornerPt2, 0], baseCorner);
    let cutShape = subtract(baseShape, corner1);
    cutShape = subtract(cutShape, corner2);

    return cutShape;
}

const smallOrnament1 = ({ controlPoints, detailDepth }) => {
    const baseShape = small({ controlPoints, detailDepth });

    const oPt = controlPoints.o1.t1;
    const bCorner = detailCorner({ sideLength: detailDepth * PHI_INV });
    const oCorner = translate([...oPt, 0], bCorner);

    return subtract(baseShape, oCorner);
}

const medium = ({ controlPoints, detailDepth }) => {
    const cornerPt1 = controlPoints.l0.t1;
    const cornerPt2 = controlPoints.l1.t1;
    const cornerPt3 = controlPoints.l1.t2;
    const cornerPt4 = controlPoints.l2.t2;

    const baseShape = polygon({
        points: [
            controlPoints.l0.t0,
            cornerPt1,
            cornerPt2,
            cornerPt3,
            cornerPt4,
            controlPoints.l2.t0,
        ]
    })

    const baseCorner = detailCorner({ sideLength: detailDepth });
    const corner1 = translate([...cornerPt1, 0], baseCorner);
    const corner2 = translate([...cornerPt2, 0], baseCorner);
    const corner3 = translate([...cornerPt3, 0], baseCorner);
    const corner4 = translate([...cornerPt4, 0], baseCorner);

    let cutShape = subtract(baseShape, corner1);
    cutShape = union(cutShape, corner2);
    cutShape = subtract(cutShape, corner3);
    cutShape = subtract(cutShape, corner4);

    return cutShape;
}

const mediumOrnament1 = ({ controlPoints, detailDepth }) => {
    const baseShape = medium({ controlPoints, detailDepth });

    const oPt1 = controlPoints.o2.t2;
    const oPt2 = controlPoints.o1.t1;

    const bCorner = detailCorner({ sideLength: detailDepth * PHI_INV });
    const oCorner1 = translate([...oPt1, 0], bCorner);
    let oCorner2 = translate([...oPt2, 0], bCorner);
    oCorner2 = mirror({ origin: [0, controlPoints.l1.t1[1] / 2, 0], normal: [0, 1, 0] }, oCorner2);

    let cutShape = subtract(baseShape, oCorner1);
    cutShape = subtract(cutShape, oCorner2);

    return cutShape;
}

const large = ({ controlPoints, detailDepth }) => {
    const cornerPt1 = controlPoints.l0.t1;
    const cornerPt2 = controlPoints.l1.t1;
    const cornerPt3 = controlPoints.l1.t2;
    const cornerPt4 = controlPoints.l2.t2;
    const cornerPt5 = controlPoints.l2.t3;
    const cornerPt6 = controlPoints.l3.t3;

    const baseShape = polygon({
        points: [
            controlPoints.l0.t0,
            cornerPt1,
            cornerPt2,
            cornerPt3,
            cornerPt4,
            cornerPt5,
            cornerPt6,
            controlPoints.l3.t0,
        ]
    })

    const baseCorner = detailCorner({ sideLength: detailDepth });
    const corner1 = translate([...cornerPt1, 0], baseCorner);
    const corner2 = translate([...cornerPt2, 0], baseCorner);
    const corner3 = translate([...cornerPt3, 0], baseCorner);
    const corner4 = translate([...cornerPt4, 0], baseCorner);
    const corner5 = translate([...cornerPt5, 0], baseCorner);
    const corner6 = translate([...cornerPt6, 0], baseCorner);

    let cutShape = subtract(baseShape, corner1);
    cutShape = union(cutShape, corner2);
    cutShape = subtract(cutShape, corner3);
    cutShape = union(cutShape, corner4);
    cutShape = subtract(cutShape, corner5);
    cutShape = subtract(cutShape, corner6);

    return cutShape;
}

const largeOrnament1 = ({ controlPoints, detailDepth }) => {
    const baseShape = large({ controlPoints, detailDepth });

    const oPt1 = controlPoints.o3.t3;
    const oPt2 = controlPoints.o1.t1;

    const bCorner = detailCorner({ sideLength: detailDepth * PHI_INV });
    const oCorner1 = translate([...oPt1, 0], bCorner);
    let oCorner2 = translate([...oPt2, 0], bCorner);
    oCorner2 = mirror({ origin: [0, controlPoints.l1.t1[1] / 2, 0], normal: [0, 1, 0] }, oCorner2);

    let cutShape = subtract(baseShape, oCorner1);
    cutShape = subtract(cutShape, oCorner2);

    return cutShape;
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
    const dDepth = detailDepth || unitDepth / 3;
    const levelPoints = {};
    const ornamentPoints = {};
    const thicknessPoints = {};

    for (let levelIdx = 0; levelIdx <= numLevels; levelIdx++) {
        levelPoints[`l${levelIdx}`] = unitHeight * levelIdx;
        thicknessPoints[`t${levelIdx}`] = unitDepth * levelIdx;
        ornamentPoints[`o${levelIdx + 1}`] = unitHeight * levelIdx + (unitHeight * PHI_INV);
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
        small: small({ controlPoints, detailDepth: dDepth }),
        smallOrnament1: smallOrnament1({ controlPoints, detailDepth: dDepth }),
        medium: medium({ controlPoints, detailDepth: dDepth }),
        mediumOrnament1: mediumOrnament1({ controlPoints, detailDepth: dDepth }),
        large: large({ controlPoints, detailDepth: dDepth }),
        largeOrnament1: largeOrnament1({ controlPoints, detailDepth: dDepth }),
    };
}

module.exports = { trimFamilyBasic }
