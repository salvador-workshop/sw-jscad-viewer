const superPrimitives = ({ lib, swLib }) => {
    const { cuboid } = lib.primitives
    const { expand } = lib.expansions
    const { translate } = lib.transforms

    return {
        frameCuboid: ({ size, frameWidth }) => {
            console.log(`frameCuboid() size = ${JSON.stringify(size)}, frameWidth = ${JSON.stringify(frameWidth)}`);
            const outerCuboid = cuboid({ size });
            const baseInnerCuboid = expand({ delta: -frameWidth, corners: 'round', segments: 32 }, outerCuboid)

            return [
                outerCuboid,
                translate([0, 40, 0], baseInnerCuboid),
            ];
        }
    }
}

module.exports = { init: superPrimitives }