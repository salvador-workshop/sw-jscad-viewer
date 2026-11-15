"use strict"

const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    routedCuboid,
    routedCylinderElliptic,
} = swcadJs.components.routedShapes


//===============================================f===============================


/* ----------------------------------------
 * Model / Scene Prep
 * ------------------------------------- */

const spaceUnit = math.inchesToMm(5.5)

//==============================================================================

/**
 * Main function to be rendered by JSCAD
 * @returns `geom3` or `geom3[]`
 */
function main() {
    const routedCuboidOpts = {
        topBit: 'chamfer',
        topBitOpts: {
            radius1: 6,
            radius2: 8,
            offset1: 3,
            offset2: 2,
            offset3: 3,
            offset4: 2,
        },
        bottomBit: 'cove',
        bottomBitOpts: {
            radius1: 6,
            radius2: 8,
            offset1: 3,
            offset2: 2,
            offset3: 3,
            offset4: 2,
        },
    }
    const routedCuboidModel = routedCuboid(routedCuboidOpts)[0]

    const routedCylinderEllipticOpts = {
        topBit: 'roundOver',
        topBitOpts: {
            radius1: 6,
            radius2: 8,
            offset1: 3,
            offset2: 2,
            offset3: 3,
            offset4: 2,
        },
        bottomBit: 'none',
    }
    const routedCylinderEllipticModel = routedCylinderElliptic(routedCylinderEllipticOpts)[0]

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], routedCuboidModel),
        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], routedCylinderEllipticModel),
    ]
}


module.exports = {
    main,
}
