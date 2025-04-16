"use strict"
const jscad = require('@jscad/modeling')
const { translate } = jscad.transforms

const swJscad = require('sw-jscad');
const {
    archBuilder,
    profileBuilder,
} = swJscad.builders

const main = () => {
    const profile1 = profileBuilder.sqCornerCircNotch({ lib: jscad, sqLength: 5 });
    const profile3 = profileBuilder.octagonal({ lib: jscad, sqLength: 5 });

    return [
        archBuilder.twoPt({ lib: jscad, arcRadius: 30, archWidth: 35, profileWidth: 5, geomProfile: profile1 }),
        archBuilder.onePt({ lib: jscad, arcRadius: 60, geomProfile: profile3 }),

        archBuilder.twoPt({ lib: jscad, arcRadius: 30, archWidth: 35 }),
        archBuilder.onePt({ lib: jscad, arcRadius: 60 }),
    ]
}

module.exports = { main }
