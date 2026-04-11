"use strict"
const jscad = require('@jscad/modeling')

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    lumber
} = swcadJs.profileSpec;

const {
    layout,
} = swcadJs.utils

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
