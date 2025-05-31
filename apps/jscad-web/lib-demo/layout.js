"use strict"

/**
 * ...
 * @namespace layout
 */

const layoutUtils = ({ lib, swLib }) => {
    const { cuboid } = lib.primitives;
    const { translate, center, align } = lib.transforms;
    const { measureDimensions, measureVolume } = lib.measurements;

    const { text } = swLib.core
    const { maths } = swLib.utils
    const { frameCuboid } = swLib.utils.superPrimitives;

    const layoutElements = new Map();
    let largestDimensionX = 0;
    let largestDimensionY = 0;
    let sortedLayoutEntries = [];

    const largestDimension = () => {
        return [largestDimensionX, largestDimensionY];
    }
    const getXYArea = (dims) => {
        return dims[0] * dims[1];
    }

    /**
    * Comparator function for Array.sort()
    * @param {number[]} firstEntry - [x,y,z] of first geometry
    * @param {number[]} secondEntry - [x,y,z] of second geometry
    */
    const dimsSizeAsc = (firstEntry, secondEntry) => {
        const firstArea = getXYArea(firstEntry.layoutDims)
        const secondArea = getXYArea(secondEntry.layoutDims)
        if (firstArea.size > secondArea.size) {
            return 1;
        } else if (firstArea.size < secondArea.size) {
            return -1;
        } else {
            return 0;
        }
    }

    const addLayoutEntry = ({ layoutEntry }) => {
        console.log(`addLayoutEntry() layoutEntry.id = ${JSON.stringify(layoutEntry.id)}, layoutEntry.desc = ${JSON.stringify(layoutEntry.desc)}`);
        layoutElements.set(layoutEntry.id, layoutEntry);
        const newEntries = [...sortedLayoutEntries, layoutEntry];
        sortedLayoutEntries = newEntries.sort(dimsSizeAsc);

        if (layoutEntry.layoutDims[0] > largestDimensionX) {
            largestDimensionX = layoutEntry.layoutDims[0];
        }
        if (layoutEntry.layoutDims[1] > largestDimensionY) {
            largestDimensionY = layoutEntry.layoutDims[1];
        }
    }

    const layoutFrame = ({ title, subtitle, objectDims, layoutDims }) => {
        // console.log(`layoutFrame() title = ${JSON.stringify(title)}, subtitle = ${JSON.stringify(subtitle)}`);
        // console.log(`    objectDims = ${JSON.stringify(objectDims)}, layoutDims = ${JSON.stringify(layoutDims)}`);
        // const titleText = textUtils.flatText({
        //     message: title,
        //     fontSize: 6,
        //     charLineWidth: 1.25,
        //     extrudeHeight: 1,
        // });

        // const subtitleText = textUtils.flatText({
        //     message: subtitle,
        //     fontSize: 4,
        //     charLineWidth: 1,
        //     extrudeHeight: 0.75,
        // });

        // const bigBox = cuboid({
        //     size: layoutDims,
        // });

        // const smallBox = cuboid({
        //     size: objectDims,
        // });

        return frameCuboid({
            size: [5, 5, 5],
            frameWidth: 2,
        });
    }

    const linearLayout = ({ layoutOpts }) => {
        console.log(`linearLayout() layoutOpts = ${JSON.stringify(layoutOpts)}`);
        const layoutContent = [];

        layoutElements.values().forEach((val, idx) => {
            // console.log(val, idx);
            const offsets = { x: 0, y: 0, z: 0 };
            if (layoutOpts.relativeTo) {
                offsets.x = offsets.x + layoutOpts.relativeTo[0];
                offsets.y = offsets.y + layoutOpts.relativeTo[1];
                offsets.z = offsets.z + layoutOpts.relativeTo[2];
            }

            let layoutPosition = [
                largestDimension()[0] * idx + offsets.x,
                offsets.y,
                offsets.z
            ];
            if (layoutOpts.column) {
                layoutPosition = [
                    offsets.x,
                    largestDimension()[1] * idx + offsets.y,
                    offsets.z
                ];
            }

            const nextLayoutGeoms = [
                translate(layoutPosition, val.geom),
            ]
            console.log(`    layoutPosition = ${JSON.stringify(layoutPosition)}`)
            const skipFrame = layoutOpts.noFrame || val.tags.includes('noFrame');
            console.log(`    skipFrame = ${skipFrame}`)
            if (!skipFrame) {
                const frameGeom = translate(layoutPosition, layoutFrame({
                    title: val.name,
                    subtitle: val.desc,
                    objectDims: val.objectDims,
                    layoutDims: val.layoutDims,
                }));
                nextLayoutGeoms.push(frameGeom)
            }
            layoutContent.push(...nextLayoutGeoms)
        })

        return layoutContent;
    }

    const gridLayout = ({ layoutOpts }) => {
        const gridSize = maths.factorize(layoutElements.size);
        const numColumns = gridSize[1];
        console.log(`gridLayout() layoutOpts = ${JSON.stringify(layoutOpts)}`);
        console.log(`    largestDimension = ${JSON.stringify(largestDimension())}`);
        console.log(`    gridSize = ${JSON.stringify(gridSize)}`);
        const layoutContent = [];

        let gridRow = -1;
        layoutElements.values().forEach((val, idx) => {
            const gridCol = idx % numColumns
            if (gridCol === 0) {
                gridRow += 1;
            }
            const gridPos = { row: gridRow, col: gridCol };
            console.log(`    gridPos = ${JSON.stringify(gridPos)}`);

            const offsets = { x: 0, y: 0, z: 0 };
            if (layoutOpts.relativeTo) {
                offsets.x = offsets.x + layoutOpts.relativeTo[0];
                offsets.y = offsets.y + layoutOpts.relativeTo[1];
                offsets.z = offsets.z + layoutOpts.relativeTo[2];
            }

            let layoutPosition = [
                largestDimension()[0] * gridPos.col + offsets.x,
                largestDimension()[1] * gridPos.row + offsets.y,
                offsets.z
            ];

            const nextLayoutGeoms = [
                translate(layoutPosition, val.geom),
            ]
            console.log(`    layoutPosition = ${JSON.stringify(layoutPosition)}`)
            const skipFrame = layoutOpts.noFrame || val.tags.includes('noFrame');
            console.log(`    skipFrame = ${skipFrame}`)
            if (!skipFrame) {
                const frameGeom = translate(layoutPosition, layoutFrame({
                    title: val.name,
                    subtitle: val.desc,
                    objectDims: val.objectDims,
                    layoutDims: val.layoutDims,
                }));
                nextLayoutGeoms.push(frameGeom)
            }
            layoutContent.push(...nextLayoutGeoms)
        })

        return layoutContent;
    }

    return {
        /**
         * Adds element to layout
         * @memberof layout
         * @instance
         * @param {Object} opts 
         * @param {string} opts.name 
         * @param {string} opts.desc 
         * @param {string[]} opts.tags 
         * @param {Object} opts.geom 
         * @param {Object} opts.layoutOpts 
         * @param {number[]} opts.layoutOpts.minSize -- [x,y,z] showing minimum size for element layout
         */
        addToLayout: ({ name = '', desc = '', tags = [], geom, layoutOpts = {} }) => {
            console.log(`addToLayout() name = ${JSON.stringify(name)}, desc = ${JSON.stringify(desc)}`);
            // console.log(`    tags = ${JSON.stringify(tags)}, layoutOpts = ${JSON.stringify(layoutOpts)}`);
            const layoutId = name + '-randomTag';
            const objectDims = measureDimensions(geom);
            const layoutMargin = layoutOpts.layoutMargin || 10;
            const layoutDims = [
                layoutMargin * 2 + objectDims[0],
                layoutMargin * 2 + objectDims[1],
                layoutMargin * 2 + objectDims[2],
            ];
            if (!!layoutOpts.minSize) {
                // use minimum sizes if necessary
                console.log(`    layoutOpts.minSize = ${JSON.stringify(layoutOpts.minSize)}`);
            }

            const layoutEntry = {
                id: layoutId,
                name,
                desc,
                tags,
                geom: align({ modes: ['center', 'center', 'min'] }, geom),
                objectDims,
                layoutDims,
            }
            addLayoutEntry({ layoutEntry });

            return layoutEntry;
        },
        removeFromLayout: ({ id }) => {
            layoutElements.delete(id);
        },
        clearLayout: () => {
            layoutElements.clear();
        },
        linearLayout,
        gridLayout,
    }
}

module.exports = { init: layoutUtils };
