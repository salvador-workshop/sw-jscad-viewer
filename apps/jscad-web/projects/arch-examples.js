"use strict"
const jscad = require('@jscad/modeling')
const { translate } = jscad.transforms

const swJscad = require('sw-jscad')(jscad);
console.log(swJscad);
const {
    archBuilder,
    profileBuilder,
} = swJscad

const main = () => {
    const profile1 = profileBuilder.sqCornerCircNotch({ sqLength: 5 });
    const profile3 = profileBuilder.octagonal({ sqLength: 5 });

    return [
        archBuilder.twoPt({ arcRadius: 30, archWidth: 35, profileWidth: 5, geomProfile: profile1 }),
        archBuilder.onePt({ arcRadius: 60, geomProfile: profile3 }),

        archBuilder.twoPt({ arcRadius: 30, archWidth: 35 }),
        archBuilder.onePt({ arcRadius: 60 }),
    ]
}

module.exports = { main }
