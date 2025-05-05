
const roofBuilder = ({ lib, swLib }) => {
    return {
        /**
         * Builds a roof.
         * @param {Object} opts 
         * @param {string[]} opts.roofOpts 
         * @param {string[]} opts.trimOpts - ['base', 'dado', 'crown']
         * @param {number} opts.trimSides - sides where trim is present. Expects an integer between 1-4
         * @returns Roof geometry
         */
        build: (opts) => {
            return null;
        }
    };
}

module.exports = { init: roofBuilder }
