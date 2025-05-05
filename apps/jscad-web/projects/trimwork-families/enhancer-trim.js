"use strict"

const enhanceSwJscad = (swJsCadInst) => {
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
