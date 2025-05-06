"use strict"

const buttressBuilder = require('./builders-v2/buttress-builder');
const entrywayBuilder = require('./builders-v2/entryway-builder');
const roofBuilder = require('./builders-v2/roof-builder');
const wallBuilder = require('./builders-v2/wall-builder');
const basicTrimFamily = require('./builders-v2/basic-trim-family');
const superPrimitives = require('./builders-v2/super-primitives');


//---------------------------
// L A Y O U T    U T I L S

const layoutUtils = {
    init: ({ lib, swLib }) => {
        const { translate } = lib.transforms;
        const { measureDimensions, measureVolume } = lib.measurements;
        const {
            textUtils,
        } = swLib

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
        * @returns 
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
            console.log(`layoutFrame() title = ${JSON.stringify(title)}, subtitle = ${JSON.stringify(subtitle)}`);
            console.log(`    objectDims = ${JSON.stringify(objectDims)}, layoutDims = ${JSON.stringify(layoutDims)}`);
            const titleText = textUtils.flatText({
                message: title,
                fontSize: 6,
                charLineWidth: 1.25,
                extrudeHeight: 1,
            });

            const subtitleText = textUtils.flatText({
                message: subtitle,
                fontSize: 4,
                charLineWidth: 1,
                extrudeHeight: 0.75,
            });

            const bigBox = cuboid({
                size: layoutDims,
            });

            const smallBox = cuboid({
                size: objectDims,
            });

            return swLib.superPrimitives.frameCuboid({
                size: [50, 40, 30],
                frameWidth: 2,
            });
        }

        const gridLayout = ({ layoutOpts }) => {
            console.log(`gridLayout() layoutOpts = ${JSON.stringify(layoutOpts)}`);
            console.log(`    largestDimension = ${JSON.stringify(largestDimension())}`);
            console.log(`    layoutElements.size = ${JSON.stringify(layoutElements.size)}`);
            console.log(`    layoutElements.values() = ${JSON.stringify(layoutElements.values())}`);
            console.log(sortedLayoutEntries);
            console.log(sortedLayoutEntries.map((entry) => {
                return getXYArea(entry.objectDims);
            }))
            const layoutContent = [];

            layoutElements.values().forEach((val, idx) => {
                console.log(val, idx);
                // console.log(`    key = ${JSON.stringify(key)}, val = ${JSON.stringify(val)}`);
                const layoutPosition = [0, largestDimension()[1] * idx, 0];
                const nextLayoutGeoms = [
                    translate(layoutPosition, val.geom),
                ]
                console.log(layoutPosition);
                const skipFrame = !(layoutOpts.noFrame || !val.tags.includes('noFrame'))
                console.log(`    skipFrame = ${skipFrame}`)
                if (skipFrame) {
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
             * @param {Object} opts 
             * @param {string} opts.name 
             * @param {string} opts.desc 
             * @param {string[]} opts.tags 
             * @param {Object} opts.geom 
             * @param {Object} opts.layoutOpts 
             * @param {number[]} opts.layoutOpts.minSize -- [x,y,z] showing minimum size for element layout
             * @returns 
             */
            addToLayout: ({ name = '', desc = '', tags = [], geom, layoutOpts = {} }) => {
                console.log(`addToLayout() name = ${JSON.stringify(name)}, desc = ${JSON.stringify(desc)}`);
                console.log(`    tags = ${JSON.stringify(tags)}, layoutOpts = ${JSON.stringify(layoutOpts)}`);
                const layoutId = name + '-randomTag';
                const objectDims = measureDimensions(geom);
                const layoutMargin = 10;
                const layoutDims = [
                    layoutMargin * 2 + objectDims[0],
                    layoutMargin * 2 + objectDims[1],
                    layoutMargin * 2 + objectDims[2],
                ];
                if (!!layoutOpts.minSize) {
                    // use minimum sizes if necessary
                    console.log(layoutOpts.minSize);
                }

                const layoutEntry = {
                    id: layoutId,
                    name,
                    desc,
                    tags,
                    geom,
                    objectDims,
                    layoutDims,
                }

                addLayoutEntry({ layoutEntry });

                console.log(`    layoutElements.size = ${JSON.stringify(layoutElements.size)}`);

                return layoutEntry;
            },
            removeFromLayout: ({ id }) => {
                layoutElements.delete(id);
            },
            clearLayout: () => {
                layoutElements.clear();
            },
            gridLayout,
        }
    }
}


//------------------
// E N H A N C E R

const enhanceSwJscad = ({ lib, swLib }) => {
    swLib.superPrimitives = superPrimitives.init({ lib, swLib });
    swLib.basicTrimFamily = basicTrimFamily.init({ lib, swLib });
    swLib.buttressBuilder = buttressBuilder.init({ lib, swLib });
    swLib.entrywayBuilder = entrywayBuilder.init({ lib, swLib });
    swLib.roofBuilder = roofBuilder.init({ lib, swLib });
    swLib.wallBuilder = wallBuilder.init({ lib, swLib });
    swLib.layoutUtils = layoutUtils.init({ lib, swLib });

    // found declaration style on SO:
    // https://stackoverflow.com/a/5251506
    function InputError(message) {
        this.name = 'InputError';
        this.message = message;
        this.stack = (new Error()).stack;
    }
    InputError.prototype = new Error;

    swLib.errors = {
        InputError,
    }
}

module.exports = {
    enhanceSwJscad,
}
