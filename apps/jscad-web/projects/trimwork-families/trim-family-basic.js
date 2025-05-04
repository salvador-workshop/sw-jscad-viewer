"use strict"
const jscad = require('@jscad/modeling')
const swJscad = require('sw-jscad').init(jscad)

const { roundedCylinder, cylinder } = jscad.primitives
const { subtract } = jscad.booleans
const { align } = jscad.transforms
const { measureBoundingBox } = jscad.measurements
const { colorize } = jscad.colors

const {
    transformUtils,
} = swJscad

const small = () => {
    return null;
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
    const controlPoints = {
        c1: { name: 'bottom-rear', type: 'core', pt: [0, 0] },
        c2: { name: 'bottom-front', type: 'core', pt: [0, 0] },
        c3: { name: 'first-rear', type: 'core', pt: [0, 0] },
        c4: { name: 'first-front', type: 'core', pt: [0, 0] },
        c5: { name: 'second-rear', type: 'core', pt: [0, 0] },
        c6: { name: 'second-front', type: 'core', pt: [0, 0] },
        c7: { name: 'top-rear', type: 'core', pt: [0, 0] },
        c8: { name: 'top-front', type: 'core', pt: [0, 0] },
        o1: { name: 'ornament-1', type: 'detail', pt: [0, 0] },
        o2: { name: 'ornament-2', type: 'detail', pt: [0, 0] },
        o3: { name: 'ornament-3', type: 'detail', pt: [0, 0] },
    }
    return {
        small: small(),
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
