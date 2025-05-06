"use strict"

const buttressBuilder = require('./builders-v2/buttress-builder');
const entrywayBuilder = require('./builders-v2/entryway-builder');
const roofBuilder = require('./builders-v2/roof-builder');
const wallBuilder = require('./builders-v2/wall-builder');
const basicTrimFamily = require('./builders-v2/basic-trim-family');

const enhanceSwJscad = ({ lib, swLib }) => {
    swLib.constants = {
        INCHES_MM_FACTOR: 25.4,
        GRIDFINITY_UNIT: 42,
        PHI: 1.6180339887,
        PHI_INV: 0.6180339887,
    }
    swLib.basicTrimFamily = basicTrimFamily.init({ lib, swLib });
    swLib.buttressBuilder = buttressBuilder.init({ lib, swLib });
    swLib.entrywayBuilder = entrywayBuilder.init({ lib, swLib });
    swLib.roofBuilder = roofBuilder.init({ lib, swLib });
    swLib.wallBuilder = wallBuilder.init({ lib, swLib });

    const linearLayout = ({ elements }) => {
        return null;
    }
    const gridLayout = ({ }) => {
        return null;
    }

    swLib.layoutUtils = {
        add2DMark: ({ geom }) => {
            return null;
        },
        add3DMark: ({ geom }) => {
            return null;
        },
        linearLayout,
        linearFromMap: ({ elements }) => {
            return null;
        },
        gridLayout,
        gridFromMap: ({ elements }) => {
            return null;
        },
    }

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
