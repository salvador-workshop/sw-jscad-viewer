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


//==============================================================================


/* ----------------------------------------
 * Model / Scene Prep
 * ------------------------------------- */

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
const routedCuboidData = routedCuboid(routedCuboidOpts)
const routedCuboidModel = routedCuboidData[0]
const routedCuboidProps = routedCuboidData[2]

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
    bottomBit: 'rabbet',
    bottomBitOpts: {
        radius1: 6,
        radius2: 8,
        offset1: 3,
        offset2: 2,
        offset3: 3,
        offset4: 2,
    },
}
const routedCylinderEllipticData = routedCylinderElliptic(routedCylinderEllipticOpts)
const routedCylinderEllipticModel = routedCylinderEllipticData[0]
const routedCylinderEllipticProps = routedCylinderEllipticData[2]



//==============================================================================


/**
 * Main function to be rendered by JSCAD
 * @returns `geom3` or `geom3[]`
 */
function main() {
    const spaceUnit = math.inchesToMm(5.5)

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], routedCuboidModel),
        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], routedCylinderEllipticModel),
    ]
}


module.exports = {
    main,
}
