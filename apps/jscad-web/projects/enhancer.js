"use strict"

const { buttressBuilder } = require('./builders-v2/buttress-builder');
const { entrywayBuilder } = require('./builders-v2/entryway-builder');
const { roofBuilder } = require('./builders-v2/roof-builder');
const { wallBuilder } = require('./builders-v2/wall-builder');
const { basicTrimFamily } = require('./builders-v2/basic-trim-family');

const enhanceSwJscad = (jsCadInst, swJsCadInst) => {
    swJsCadInst.basicTrimFamily = basicTrimFamily({ lib: jsCadInst, swLib: swJsCadInst });
    swJsCadInst.buttressBuilder = buttressBuilder({ lib: jsCadInst, swLib: swJsCadInst });
    swJsCadInst.entrywayBuilder = entrywayBuilder({ lib: jsCadInst, swLib: swJsCadInst });
    swJsCadInst.roofBuilder = roofBuilder({ lib: jsCadInst, swLib: swJsCadInst });
    swJsCadInst.wallBuilder = wallBuilder({ lib: jsCadInst, swLib: swJsCadInst });

    const linearLayout = ({ elements }) => {
        return null;
    }
    const gridLayout = ({ }) => {
        return null;
    }

    swJsCadInst.layoutUtils = {
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

    swJsCadInst.errors = {
        InputError,
    }
}

module.exports = {
    enhanceSwJscad,
}
