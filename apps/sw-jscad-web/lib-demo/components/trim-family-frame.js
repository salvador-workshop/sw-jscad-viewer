"use strict"
const jscad = require('@jscad/modeling')

const { translate } = jscad.transforms

const swcadJs = require('swcad-js').init({ jscad });
console.log('swcadJs', swcadJs)

const {
    math,
} = swcadJs.calcs

const {
    beadsBits: beadsBitsProfiles,
} = swcadJs.profiles

const {
    beadsBits,
    trimFamilyFrame,
} = swcadJs.components


const frameOpts1 = {
    backingType: 'plain',
    trimType: 'aranea',
    ornaments: {
        trimLevels: 1
    },
}

const frameOpts2 = {
    backingType: 'none',
    trimType: 'aranea',
    trimJointType: 'none',
    ornaments: {
        trimLevels: 3
    },
}

const frameOpts3 = {
    backingType: 'plain',
    trimType: 'aranea',
    cornerType: 'none',
    trimJointType: 'none',
    ornaments: {
        trimLevels: 2
    },
}

const frameOpts4 = {
    trimType: 'aranea',
    frameForm: 'full',
    ornaments: {
        trimLevels: 1
    },
}

const frameOpts5 = {
    backingType: 'none',
    trimType: 'aranea',
    frameForm: 'full',
    trimJointType: 'none',
    ornaments: {
        trimLevels: 3
    },
}

const frameOpts6 = {
    trimType: 'aranea',
    frameForm: 'full',
    cornerType: 'none',
    trimJointType: 'none',
    ornaments: {
        trimLevels: 2
    },
}

const frameModelData1 = trimFamilyFrame(frameOpts1)
const frameSubject1 = frameModelData1[0]
const frameParts1 = frameModelData1[1]

const frameModelData2 = trimFamilyFrame(frameOpts2)
const frameSubject2 = frameModelData2[0]
const frameParts2 = frameModelData2[1]

const frameModelData3 = trimFamilyFrame(frameOpts3)
const frameSubject3 = frameModelData3[0]
const frameParts3 = frameModelData3[1]

const frameModelData4 = trimFamilyFrame(frameOpts4)
const frameSubject4 = frameModelData4[0]
const frameParts4 = frameModelData4[1]

const frameModelData5 = trimFamilyFrame(frameOpts5)
const frameSubject5 = frameModelData5[0]
const frameParts5 = frameModelData5[1]

const frameModelData6 = trimFamilyFrame(frameOpts6)
const frameSubject6 = frameModelData6[0]
const frameParts6 = frameModelData6[1]


function main() {
    const spaceUnit = math.inchesToMm(5)

    return [
        translate([spaceUnit * 0, spaceUnit * 0, spaceUnit * 0], frameSubject1),
        translate([spaceUnit * 0, spaceUnit * 1, spaceUnit * 0], frameSubject2),
        translate([spaceUnit * 0, spaceUnit * 2, spaceUnit * 0], frameSubject3),

        translate([spaceUnit * 1, spaceUnit * 0, spaceUnit * 0], frameSubject4),
        translate([spaceUnit * 1, spaceUnit * 1, spaceUnit * 0], frameSubject5),
        translate([spaceUnit * 1, spaceUnit * 2, spaceUnit * 0], frameSubject6),
    ]
}

module.exports = { main }
