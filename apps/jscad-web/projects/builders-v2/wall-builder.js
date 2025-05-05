const { basicTrimFamily } = require('./basic-trim-family');

const wallBuilder = ({ lib, swLib }) => {
    const { translate } = lib.transforms
    const { cuboid } = lib.primitives
    const {
        mouldBuilder,
    } = swLib

    const crownTrim = ({ totalHeight, totalThickness, totalLength, trimProfile }) => {
        return mouldBuilder.cuboidEdge({ size: [totalLength, totalThickness, totalHeight], geomProfile: trimProfile });
    }
    const dadoTrim = ({ totalHeight, totalThickness, totalLength, trimProfile }) => {
        return mouldBuilder.cuboidEdge({ size: [totalLength, totalThickness, totalHeight], geomProfile: trimProfile });
    }
    const baseTrim = ({ totalHeight, totalThickness, totalLength, trimProfile }) => {
        return mouldBuilder.cuboidEdge({ size: [totalLength, totalThickness, totalHeight], geomProfile: trimProfile });
    }

    return {
        /**
         * Builds a wall.
         * @param {Object} opts 
         * @param {number} opts.height
         * @param {number} opts.thickness
         * @param {number} opts.length
         * @param {string[]} opts.wallOpts 
         * @param {string[]} opts.trimOpts - ['base', 'dado', 'crown']
         * @param {number} opts.trimUnitHeight
         * @param {number} opts.trimUnitDepth
         * @param {number} opts.trimSides - sides where trim is present. Expects an integer between 1-4
         * @returns Wall geometry
         */
        build: (opts) => {
            const baseWall = cuboid({
                size: [length, thickness, height],
            });

            const tFamilyBasic = basicTrimFamily({ unitHeight: 20, unitDepth: 10 });

            let bTrim = baseTrim({
                totalHeight: 30,
                totalThickness: 5,
                totalLength: 30,
                trimProfile: tFamilyBasic.base.small,
            });
            let dTrim = dadoTrim({
                totalHeight: 30,
                totalThickness: 5,
                totalLength: 30,
                trimProfile: tFamilyBasic.dado.medium,
            });
            let cTrim = crownTrim({
                totalHeight: 30,
                totalThickness: 5,
                totalLength: 30,
                trimProfile: tFamilyBasic.crown.largeOrn1,
            });

            let wallWithTrim = union(baseWall, bTrim);
            wallWithTrim = union(wallWithTrim, dTrim);
            wallWithTrim = union(wallWithTrim, cTrim);

            return [
                translate([0, 0, 0], baseWall),
                translate([0, 60, 0], bTrim),
                translate([0, 120, 0], dTrim),
                translate([0, 180, 0], cTrim),
            ]

            // return wallWithTrim;
        }
    };
}

module.exports = { wallBuilder }
