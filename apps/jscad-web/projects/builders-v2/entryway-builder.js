
const entrywayBuilder = ({ lib, swLib }) => {
    return {
        /**
         * Builds an entryway.
         * @param {Object} opts 
         * @param {number} opts.wallHeight
         * @param {number} opts.entryHeight
         * @param {number} opts.thickness
         * @param {number} opts.wallLength
         * @param {string[]} opts.entryOpts 
         * @param {string[]} opts.archOpts 
         * @param {string[]} opts.trimOpts - ['base', 'dado', 'crown']
         * @param {number} opts.trimSides - sides where trim is present. Expects an integer between 1-4
         * @returns Entryway geometry
         */
        build: (opts) => {
            return null;
        }
    };
}

module.exports = { entrywayBuilder }
