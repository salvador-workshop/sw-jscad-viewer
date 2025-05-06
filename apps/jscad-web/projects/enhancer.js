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
        const { measureDimensions, measureVolume } = lib.measurements;
        const {
            textUtils,
        } = swJscad

        const layoutElements = new Map();

        /**
         * Comparator function for Array.sort()
         * @param {number[]} firstDims - [x,y,z] of first geometry
         * @param {number[]} secondDims - [x,y,z] of second geometry
         * @returns 
         */
        const dimsSizeAsc = (firstDims, secondDims) => {
            const firstArea = firstDims[0] * firstDims[1];
            const secondArea = secondDims[0] * secondDims[1];
            if (firstArea.size > secondArea.size) {
                return 1;
            } else if (firstArea.size < secondArea.size) {
                return -1;
            } else {
                return 0;
            }
        }

        const layoutFrame = ({ title, subtitle, objectDims, layoutDims }) => {
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
            const layoutContent = [];

            layoutElements.forEach((val, key, map) => {
                const layoutPosition = [10, 10, 10];
                const nextLayoutGeoms = [
                    translate(layoutPosition, val.geeom),
                ]
                if (!layoutOpts.noFrame || !val.tags['noFrame']) {
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
            addToLayout: ({ name, desc = '', tags = [], geom, layoutOpts = {} }) => {
                const layoutId = name + '-randomTag';
                const objectDims = measureDimensions(geom);
                const layoutDims = [99, 99, 99];
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

                if (layoutElements.has("bar")) {
                    // do other things, maybe
                    layoutElements.set(layoutId, layoutEntry);
                } else {
                    layoutElements.set(layoutId, layoutEntry);
                }

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
