"use strict"

const enhanceSwJscad = (swJsCadInst) => {
    const gridLayout = ({ }) => {
        return null;
    }
    const linearLayout = ({ elements }) => {
        return null;
    }
    const circularLayout = ({ elements }) => {
        return null;
    }
    
    swJsCadInst.layoutUtils = {
        mark: ({ geom }) => {
            return null;
        },
        gridLayout,
        gridFromMap: ({ elements }) => {
            return null;
        },
        linearLayout,
        linearFromMap: ({ elements }) => {
            return null;
        },
        circularLayout,
        circularFromMap: ({ elements }) => {
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
