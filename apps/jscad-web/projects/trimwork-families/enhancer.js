"use strict"

const enhanceSwJscad = (swJsCadInst) => {
    const gridLayout = ({ }) => {
        return;
    }
    const linearLayout = ({ elements }) => {
        return;
    }
    const circularLayout = ({ elements }) => {
        return;
    }
    
    swJsCadInst.layoutUtils = {
        gridLayout: ({ elements }) => {
            return;
        },
        linearLayout: ({ elements }) => {
            return;
        },
        circularLayout: ({ elements }) => {
            return;
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
