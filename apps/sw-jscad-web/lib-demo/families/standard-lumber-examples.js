"use strict"
const jscad = require('@jscad/modeling')

const swCadJs = require('swcad-js').init({ lib: jscad });
console.log('swCadJs', swCadJs)

const {
    lumber
} = swCadJs.profiles;

const {
    layout,
} = swCadJs.utils

const main = () => {
    const layoutOpts = {
        layoutMargin: 25,
        noFrame: false,
        layoutSpace: 20,
    }

    console.log(lumber)

    lumber.northAmerica.dimensional.forEach((lumberProfileData, idx) => {
        layout.addToLayout({
            name: `lumber-profile-${idx}`,
            desc: lumberProfileData.id,
            layoutOpts,
        }, lumberProfileData.geom);
    })

    const layoutContent = layout.gridLayout({ layoutOpts });
    return layoutContent;
}

module.exports = { main }
