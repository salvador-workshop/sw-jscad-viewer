
const wallBuilder = ({ lib, swLib }) => {
    const { union } = lib.booleans
    const { align } = lib.transforms
    const { cuboid } = lib.primitives
    const { measureDimensions } = lib.measurements;
    const {
        mouldBuilder,
        basicTrimFamily,
    } = swLib

    const crownTrim = ({ totalThickness, totalLength, trimProfile }) => {
        const profileDims = measureDimensions(trimProfile);
        return mouldBuilder.cuboidEdge({ size: [totalLength, totalThickness, profileDims[1]], geomProfile: trimProfile });
    }

    const dadoTrim = ({ totalThickness, totalLength, trimProfile }) => {
        const profileDims = measureDimensions(trimProfile);
        return mouldBuilder.cuboidEdge({ size: [totalLength, totalThickness, profileDims[1]], geomProfile: trimProfile });
    }

    const baseTrim = ({ totalThickness, totalLength, trimProfile }) => {
        const profileDims = measureDimensions(trimProfile);
        return mouldBuilder.cuboidEdge({ size: [totalLength, totalThickness, profileDims[1]], geomProfile: trimProfile });
    }

    return {
        /**
         * Builds a wall.
         * @param {Object} opts 
         * @param {number} opts.dadoHeight - height of dado rail
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
            console.log(opts);
            const dadoHt = opts.dadoHeight || opts.height * (1 - swLib.constants.PHI_INV);
            const baseWall = align({ modes: ['center', 'center', 'min'] }, cuboid({
                size: [opts.length, opts.thickness, opts.height],
            }));
            const dadoWallSpecs = [2 * opts.trimUnitDepth + opts.length, 2 * opts.trimUnitDepth + opts.thickness];
            const dadoWall = align({ modes: ['center', 'center', 'min'] }, cuboid({
                size: [dadoWallSpecs[0], dadoWallSpecs[1], dadoHt],
            }));

            const tFamilyBasic = basicTrimFamily.build({ unitHeight: opts.trimUnitHeight, unitDepth: opts.trimUnitDepth });

            const baseTrimSpecs = [4 * opts.trimUnitDepth + opts.length, 4 * opts.trimUnitDepth + opts.thickness];
            let bTrim = align({ modes: ['center', 'center', 'min'] }, baseTrim({
                totalLength: baseTrimSpecs[0],
                totalThickness: baseTrimSpecs[1],
                trimProfile: tFamilyBasic.base.small,
            }));
            const dadoTrimSpecs = [4 * opts.trimUnitDepth + opts.length, 4 * opts.trimUnitDepth + opts.thickness];
            let dTrim = align({ modes: ['center', 'center', 'center'], relativeTo: [0, 0, dadoHt] }, dadoTrim({
                totalLength: dadoTrimSpecs[0],
                totalThickness: dadoTrimSpecs[1],
                trimProfile: tFamilyBasic.dado.medium,
            }));

            const crownTrimSpecs = [6 * opts.trimUnitDepth + opts.length, 6 * opts.trimUnitDepth + opts.thickness];
            let cTrim = align({ modes: ['center', 'center', 'max'], relativeTo: [0, 0, opts.height] }, crownTrim({
                totalLength: crownTrimSpecs[0],
                totalThickness: crownTrimSpecs[1],
                trimProfile: tFamilyBasic.crown.largeOrn1,
            }));

            let wallWithTrim = union(baseWall, bTrim);
            wallWithTrim = union(wallWithTrim, dadoWall);
            wallWithTrim = union(wallWithTrim, dTrim);
            wallWithTrim = union(wallWithTrim, cTrim);

            return wallWithTrim;
        }
    };
}

module.exports = { init: wallBuilder }
