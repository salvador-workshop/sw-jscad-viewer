var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// packages/swcad-js-data/src/constants/index.js
var require_constants = __commonJS({
  "packages/swcad-js-data/src/constants/index.js"(exports2, module2) {
    "use strict";
    var tri30Factor = Math.sqrt(3);
    var tri45Factor = Math.sqrt(2);
    var eqTriHeightFactor = tri30Factor / 2;
    var phi = 1.6180339887;
    var constants = {
      /**
       * Inches / Millimetre conversion rate
       * @memberof data.constants
       * @constant {number}
       */
      INCHES_MM_FACTOR: 25.4,
      /**
       * Golden ratio
       * @memberof data.constants
       * @constant {number}
       */
      PHI: phi,
      /**
       * Golden ratio inverse
       * @memberof data.constants
       * @constant {number}
       */
      PHI_INV: 1 / phi,
      /**
       * Ratio of equilateral triangle's height to its side length
       * @memberof data.constants
       * @constant {number}
       */
      EQUI_TRIANGLE_HEIGHT_FACTOR: eqTriHeightFactor,
      /**
       * ...
       * @memberof data.constants
       * @constant {number}
       */
      TRI_45_FACTOR: tri45Factor,
      /**
       * ...
       * @memberof data.constants
       * @constant {number}
       */
      TRI_30_FACTOR: tri30Factor,
      PLASTIC_RATIO: 1.3247179572,
      SUPERGOLDEN_RATIO: 1.4655712319,
      GOLDEN_RATIO: phi,
      SILVER_RATIO: 1 + tri45Factor,
      // 2.4142
      BRONZE_RATIO: 3 + Math.sqrt(13) / 2,
      // 3.3028
      COPPER_RATIO: 2 + Math.sqrt(5),
      // 4.2361
      NICKEL_RATIO: 5 + Math.sqrt(29)
      // 5.1925
    };
    module2.exports = constants;
  }
});

// packages/swcad-js-data/src/functions/index.js
var require_functions = __commonJS({
  "packages/swcad-js-data/src/functions/index.js"(exports2, module2) {
    var camelCase = (str) => {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, "");
    };
    var constantToCamelCase = (str) => {
      return camelCase(str.replaceAll("_", " ").toLowerCase());
    };
    module2.exports = {
      camelCase,
      constantToCamelCase
    };
  }
});

// packages/swcad-js-data/src/specifications/index.js
var require_specifications = __commonJS({
  "packages/swcad-js-data/src/specifications/index.js"(exports2, module2) {
    "use strict";
    var planes = {
      xy: { id: 0, desc: "XY plane" },
      xz: { id: 1, desc: "XZ plane" },
      yz: { id: 2, desc: "YZ plane" }
    };
    var axes = {
      x: { id: 0, desc: "X axis" },
      y: { id: 1, desc: "Y axis" },
      z: { id: 2, desc: "Z axis" }
    };
    var axialDirections = {
      posX: { id: 0, desc: "towards +X" },
      negX: { id: 1, desc: "towards -X" },
      posY: { id: 2, desc: "towards +Y" },
      negY: { id: 3, desc: "towards -Y" },
      posZ: { id: 4, desc: "towards +Z" },
      negZ: { id: 5, desc: "towards -Z" }
    };
    var quadrants = {
      i: { id: 0, desc: "+X, +Y" },
      ii: { id: 1, desc: "-X, +Y" },
      iii: { id: 2, desc: "-X, -Y" },
      iv: { id: 3, desc: "+X, -Y" }
    };
    var octants = {
      i: { id: 0, desc: "+X, +Y, +Z" },
      ii: { id: 1, desc: "-X, +Y, +Z" },
      iii: { id: 2, desc: "+X, -Y, +Z" },
      iv: { id: 3, desc: "-X, -Y, +Z" },
      v: { id: 4, desc: "+X, +Y, -Z" },
      vi: { id: 5, desc: "-X, +Y, -Z" },
      vii: { id: 6, desc: "+X, -Y, -Z" },
      viii: { id: 7, desc: "-X, -Y, -Z" }
    };
    var boxKeypoints = {
      internal0: { id: 26, desc: "centre" },
      corner1: { id: 0, desc: "corner (+X, +Y, +Z)" },
      corner2: { id: 1, desc: "corner (+X, -Y, +Z)" },
      corner3: { id: 2, desc: "corner (-X, -Y, +Z)" },
      corner4: { id: 3, desc: "corner (-X, +Y, +Z)" },
      corner5: { id: 4, desc: "corner (+X, +Y, -Z)" },
      corner6: { id: 5, desc: "corner (+X, -Y, -Z)" },
      corner7: { id: 6, desc: "corner (-X, -Y, -Z)" },
      corner8: { id: 7, desc: "corner (-X, +Y, -Z)" },
      edge1: { id: 8, desc: "midpoint of edge (X axis, +Y, +Z)" },
      edge2: { id: 9, desc: "midpoint of edge (X axis, -Y, +Z)" },
      edge3: { id: 10, desc: "midpoint of edge (X axis, -Y, -Z)" },
      edge4: { id: 11, desc: "midpoint of edge (X axis, +Y, -Z)" },
      edge5: { id: 12, desc: "midpoint of edge (Y axis, +X, +Z)" },
      edge6: { id: 13, desc: "midpoint of edge (Y axis, -X, +Z)" },
      edge7: { id: 14, desc: "midpoint of edge (Y axis, -X, -Z)" },
      edge8: { id: 15, desc: "midpoint of edge (Y axis, +X, -Z)" },
      edge9: { id: 16, desc: "midpoint of edge (Z axis, +X, +Y)" },
      edge10: { id: 17, desc: "midpoint of edge (Z axis, +X, -Y)" },
      edge11: { id: 18, desc: "midpoint of edge (Z axis, -X, -Y)" },
      edge12: { id: 19, desc: "midpoint of edge (Z axis, -X, +Y)" },
      face1: { id: 20, desc: `centre of face (${axialDirections.posX.desc})` },
      face3: { id: 21, desc: `centre of face (${axialDirections.negX.desc})` },
      face2: { id: 22, desc: `centre of face (${axialDirections.posY.desc})` },
      face4: { id: 23, desc: `centre of face (${axialDirections.negY.desc})` },
      face5: { id: 24, desc: `centre of face (${axialDirections.posZ.desc})` },
      face6: { id: 25, desc: `centre of face (${axialDirections.negZ.desc})` }
    };
    var specifications = {
      planes,
      axes,
      axialDirections,
      boxKeypoints,
      quadrants,
      octants
    };
    module2.exports = specifications;
  }
});

// packages/swcad-js-data/src/standards/std-crafts.js
var require_std_crafts = __commonJS({
  "packages/swcad-js-data/src/standards/std-crafts.js"(exports2, module2) {
    "use strict";
    var craftStd = ({ jscad }) => {
      return {
        DIAM_TOOTHPICK: 2.3,
        DIAM_BBQ_SKEWER: 3.25,
        POPSICLE_STICK_WIDTH: 10,
        POPSICLE_STICK_THICKNESS: 2,
        POPSICLE_STICK_LENGTH: 114
      };
    };
    module2.exports = { init: craftStd };
  }
});

// packages/swcad-js-data/src/standards/std-lumber.js
var require_std_lumber = __commonJS({
  "packages/swcad-js-data/src/standards/std-lumber.js"(exports2, module2) {
    "use strict";
    var inchesToMm = (numIn) => numIn * 25.4;
    var arrayCartesianProduct = (a, b) => a.reduce((acc, x) => [...acc, ...b.map((y) => [x, y])], []);
    var lumberStd = ({ jscad }) => {
      const baseLumberSizes = {
        "1": {
          name: "ONE",
          nominal: inchesToMm(1),
          actual: inchesToMm(3 / 4)
        },
        "2": {
          name: "TWO",
          nominal: inchesToMm(2),
          actual: inchesToMm(1.5)
        },
        "3": {
          name: "THREE",
          nominal: inchesToMm(3),
          actual: inchesToMm(2.5)
        },
        "4": {
          name: "FOUR",
          nominal: inchesToMm(4),
          actual: inchesToMm(3.5)
        },
        "6": {
          name: "SIX",
          nominal: inchesToMm(6),
          actual: inchesToMm(5.5)
        },
        "8": {
          name: "EIGHT",
          nominal: inchesToMm(8),
          actual: inchesToMm(7.25)
        },
        "10": {
          name: "TEN",
          nominal: inchesToMm(10),
          actual: inchesToMm(9.25)
        },
        "12": {
          name: "TWELVE",
          nominal: inchesToMm(12),
          actual: inchesToMm(11.25)
        }
      };
      const widths = [1, 2, 3, 4, 6, 8, 10, 12];
      const depths = [1, 2, 3, 4];
      const dimensional = {};
      const lumberSizes = arrayCartesianProduct(depths, widths);
      lumberSizes.forEach((lumberDims) => {
        const depthDim = baseLumberSizes[`${lumberDims[0]}`];
        const widthDim = baseLumberSizes[`${lumberDims[1]}`];
        const newPropName = `${depthDim.name}_BY_${widthDim.name}`;
        const newVal = {
          name: newPropName,
          nomDepth: depthDim.nominal,
          nomWidth: widthDim.nominal,
          depth: depthDim.actual,
          width: widthDim.actual
        };
        dimensional[newPropName] = newVal;
      });
      const plywood = {
        thicknesses: {
          EIGHTH: {
            nominal: inchesToMm(1 / 8),
            actual: inchesToMm(7 / 64)
          },
          QUARTER: {
            nominal: inchesToMm(1 / 4),
            actual: inchesToMm(7 / 32)
          },
          THREE_SEVENTHS: {
            nominal: inchesToMm(3 / 7),
            actual: inchesToMm(11 / 32)
          },
          HALF: {
            nominal: inchesToMm(1 / 2),
            actual: inchesToMm(15 / 32)
          },
          FIVE_EIGHTHS: {
            nominal: inchesToMm(5 / 8),
            actual: inchesToMm(19 / 32)
          },
          THREE_QUARTERS: {
            nominal: inchesToMm(3 / 4),
            actual: inchesToMm(23 / 32)
          }
        },
        SHEET_LENGTH_STD: inchesToMm(96),
        SHEET_WIDTH_STD: inchesToMm(48),
        SHEET_LENGTH_SM: inchesToMm(48),
        SHEET_WIDTH_SM: inchesToMm(24)
      };
      return {
        dimensional,
        plywood
      };
    };
    module2.exports = { init: lumberStd };
  }
});

// packages/swcad-js-data/src/standards/std-masonry.js
var require_std_masonry = __commonJS({
  "packages/swcad-js-data/src/standards/std-masonry.js"(exports2, module2) {
    "use strict";
    var inchesToMm = (numIn) => numIn * 25.4;
    var masonryStd = ({ jscad }) => {
      const masonry = {
        MORTAR_JOINT: inchesToMm(3 / 8),
        MORTAR_JOINT_LG: inchesToMm(1 / 2)
      };
      const brick = {
        US_BRICK_LENGTH_NOM: inchesToMm(8),
        US_BRICK_WIDTH_NOM: inchesToMm(4),
        US_BRICK_HEIGHT_NOM: inchesToMm(2 + 2 / 3),
        UK_BRICK_LENGTH_NOM: 215,
        UK_BRICK_WIDTH_NOM: 102.5,
        UK_BRICK_HEIGHT_NOM: 65
      };
      brick["US_BRICK_LENGTH"] = brick.US_BRICK_LENGTH_NOM - masonry.MORTAR_JOINT;
      brick["US_BRICK_WIDTH"] = brick.US_BRICK_WIDTH_NOM - masonry.MORTAR_JOINT;
      brick["US_BRICK_HEIGHT"] = brick.US_BRICK_HEIGHT_NOM - masonry.MORTAR_JOINT;
      brick["US_BRICK_LENGTH_LG_JOINT"] = brick.US_BRICK_LENGTH_NOM - masonry.MORTAR_JOINT_LG;
      brick["US_BRICK_WIDTH_LG_JOINT"] = brick.US_BRICK_WIDTH_NOM - masonry.MORTAR_JOINT_LG;
      brick["US_BRICK_HEIGHT_LG_JOINT"] = brick.US_BRICK_HEIGHT_NOM - masonry.MORTAR_JOINT_LG;
      const concrete = {
        CMU_FACE_THICKNESS: 36,
        CMU_WEB_THICKNESS: 32,
        CMU_WEB_THICKNESS_SM: 26,
        CMU_4_NOM: [inchesToMm(16), inchesToMm(4), inchesToMm(8)],
        CMU_6_NOM: [inchesToMm(16), inchesToMm(6), inchesToMm(8)],
        CMU_8_NOM: [inchesToMm(16), inchesToMm(8), inchesToMm(8)],
        CMU_10_NOM: [inchesToMm(16), inchesToMm(10), inchesToMm(8)],
        CMU_12_NOM: [inchesToMm(16), inchesToMm(12), inchesToMm(8)],
        CMU_4HALF_NOM: [inchesToMm(8), inchesToMm(4), inchesToMm(8)],
        CMU_6HALF_NOM: [inchesToMm(8), inchesToMm(6), inchesToMm(8)],
        CMU_8HALF_NOM: [inchesToMm(8), inchesToMm(8), inchesToMm(8)],
        CMU_10HALF_NOM: [inchesToMm(8), inchesToMm(10), inchesToMm(8)],
        CMU_12HALF_NOM: [inchesToMm(8), inchesToMm(12), inchesToMm(8)]
      };
      Object.entries(concrete).forEach(([concKey, concVal]) => {
        if (concKey.includes("_NOM")) {
          const newKey = concKey.replace("_NOM", "");
          concrete[newKey] = [
            concVal[0] - masonry.MORTAR_JOINT,
            concVal[1] - masonry.MORTAR_JOINT,
            concVal[2] - masonry.MORTAR_JOINT
          ];
          concrete[`${newKey}_LG_JOINT`] = [
            concVal[0] - masonry.MORTAR_JOINT_LG,
            concVal[1] - masonry.MORTAR_JOINT_LG,
            concVal[2] - masonry.MORTAR_JOINT_LG
          ];
        }
      });
      return {
        ...masonry,
        brick,
        concrete
      };
    };
    module2.exports = { init: masonryStd };
  }
});

// packages/swcad-js-data/src/standards/std-paper.js
var require_std_paper = __commonJS({
  "packages/swcad-js-data/src/standards/std-paper.js"(exports2, module2) {
    "use strict";
    var inchesToMm = (numIn) => numIn * 25.4;
    var paperStd = ({ jscad }) => {
      const metric = {
        A0: [841, 1189],
        A1: [594, 841],
        A2: [420, 594],
        A3: [297, 420],
        A4: [210, 297],
        A5: [148, 210],
        A6: [105, 148],
        A7: [74, 105],
        A8: [52, 74],
        A9: [37, 52],
        A10: [26, 37],
        B0: [1e3, 1414],
        B1: [707, 1e3],
        B2: [500, 707],
        B3: [353, 500],
        B4: [250, 353],
        B5: [167, 250],
        B6: [125, 176],
        B7: [88, 125],
        B8: [62, 88],
        B9: [44, 62],
        B10: [31, 44],
        C0: [917, 1297],
        C1: [648, 917],
        C2: [458, 648],
        C3: [324, 458],
        C4: [229, 324],
        C5: [162, 229],
        C6: [114, 162],
        C7: [81, 114],
        C8: [57, 81],
        C9: [40, 57],
        C10: [28, 40]
      };
      const naAnsi = {
        ANSI_A: [inchesToMm(8.5), inchesToMm(11)],
        ANSI_B: [inchesToMm(11), inchesToMm(17)],
        ANSI_C: [inchesToMm(17), inchesToMm(22)],
        ANSI_D: [inchesToMm(22), inchesToMm(34)],
        ANSI_E: [inchesToMm(34), inchesToMm(44)]
      };
      const naArch = {
        ARCH_A: [inchesToMm(9), inchesToMm(12)],
        ARCH_B: [inchesToMm(12), inchesToMm(18)],
        ARCH_C: [inchesToMm(18), inchesToMm(24)],
        ARCH_D: [inchesToMm(24), inchesToMm(36)],
        ARCH_E1: [inchesToMm(30), inchesToMm(42)],
        ARCH_E: [inchesToMm(36), inchesToMm(48)]
      };
      const imperial = {
        ansi: naAnsi,
        arch: naArch,
        LETTER: naAnsi.ANSI_A,
        LEGAL: [inchesToMm(8.5), inchesToMm(14)],
        TABLOID: naAnsi.ANSI_B,
        LEDGER: [inchesToMm(17), inchesToMm(11)]
      };
      const cards = {
        BUSINESS_CARD: [inchesToMm(3.5), inchesToMm(2)],
        BUSINESS_CARD_SQ: [inchesToMm(2.5), inchesToMm(2.5)],
        CREDIT_CARD: [85.6, 53.98],
        DEVOTIONAL: [inchesToMm(2.5), inchesToMm(4.5)],
        INDEX_SM: [inchesToMm(5), inchesToMm(3)],
        INDEX_MD: [inchesToMm(6), inchesToMm(4)],
        INDEX_LG: [inchesToMm(8), inchesToMm(5)],
        INDEX_XL: [inchesToMm(9), inchesToMm(6)],
        POSTCARD: [inchesToMm(6), inchesToMm(4)]
      };
      const bookmarks = {
        BOOKMARK_SM: [inchesToMm(1.5), inchesToMm(4.5)],
        BOOKMARK_MD: [inchesToMm(2), inchesToMm(6.5)],
        BOOKMARK_LG: [inchesToMm(2.25), inchesToMm(8.5)]
      };
      const poster = {
        POSTERJAM: metric.B2,
        ALBUM_COVER: [inchesToMm(12 + 3 / 8), inchesToMm(12 + 3 / 8)]
      };
      const photos = {
        PASSPORT_CAN: [50, 70],
        PASSPORT_US: [inchesToMm(2), inchesToMm(2)],
        WALLET: [inchesToMm(2), inchesToMm(3)],
        R2: [inchesToMm(2.5), inchesToMm(3.5)],
        R3: [inchesToMm(3.5), inchesToMm(5)],
        R4: [inchesToMm(5.04), inchesToMm(6)],
        R5: [inchesToMm(5), inchesToMm(7)],
        R6: [inchesToMm(6), inchesToMm(8)],
        R8: [inchesToMm(8), inchesToMm(10)],
        R10: [inchesToMm(10), inchesToMm(12)],
        R11: [inchesToMm(11), inchesToMm(14)],
        R12: [inchesToMm(12), inchesToMm(15)]
      };
      return {
        cards,
        metric,
        imperial,
        bookmarks,
        poster,
        photos
      };
    };
    module2.exports = { init: paperStd };
  }
});

// packages/swcad-js-data/src/standards/std-tiles.js
var require_std_tiles = __commonJS({
  "packages/swcad-js-data/src/standards/std-tiles.js"(exports2, module2) {
    "use strict";
    var tileStd = ({ jscad }) => {
      return {};
    };
    module2.exports = { init: tileStd };
  }
});

// packages/swcad-js-data/src/standards/index.js
var require_standards = __commonJS({
  "packages/swcad-js-data/src/standards/index.js"(exports2, module2) {
    "use strict";
    var craftStd = require_std_crafts();
    var lumberStd = require_std_lumber();
    var masonryStd = require_std_masonry();
    var paperStd = require_std_paper();
    var tileStd = require_std_tiles();
    var inchesToMm = (numIn) => numIn * 25.4;
    var standards = ({ jscad }) => {
      const pegboard = {
        PEGBOARD_SPACING: inchesToMm(1),
        PEGBOARD_HOLE_DIAM: inchesToMm(7 / 32),
        MICRO_PEGBOARD_SPACING: inchesToMm(1 / 2),
        MICRO_PEGBOARD_HOLE_DIAM: inchesToMm(1 / 8)
      };
      const gridfinity = {
        GRIDFINITY_SPACING: 42,
        GRIDFINITY_RAIL_WIDTH: 7
      };
      const swDefaults = {
        PANEL_THICKNESS_XS: inchesToMm(2 / 64),
        // 1/32"
        PANEL_THICKNESS_SM: inchesToMm(3 / 64),
        PANEL_THICKNESS_MD: inchesToMm(4 / 64),
        // 1/16"
        PANEL_THICKNESS_LG: inchesToMm(5 / 64),
        PANEL_THICKNESS_XL: inchesToMm(6 / 64)
        // 3/32"
      };
      return {
        pegboard,
        gridfinity,
        swDefaults,
        crafts: craftStd.init({ jscad }),
        lumber: lumberStd.init({ jscad }),
        masonry: masonryStd.init({ jscad }),
        paper: paperStd.init({ jscad }),
        tiles: tileStd.init({ jscad })
      };
    };
    module2.exports = { init: standards };
  }
});

// packages/swcad-js-data/src/errors.js
var require_errors = __commonJS({
  "packages/swcad-js-data/src/errors.js"(exports2, module2) {
    "use strict";
    function SwError(message) {
      this.name = "SwError";
      this.message = message;
      this.stack = new Error().stack;
    }
    function SwInvalidInput(message) {
      this.name = "SwInvalidInput";
      this.message = message;
      this.stack = new Error().stack;
    }
    SwInvalidInput.prototype = new Error();
    var errors = {
      SwError,
      SwInvalidInput
    };
    module2.exports = errors;
  }
});

// packages/swcad-js-data/src/internals.js
var require_internals = __commonJS({
  "packages/swcad-js-data/src/internals.js"(exports2, module2) {
    "use strict";
    var internals = ({ jscad }) => {
      const propListBasic = [
        { id: "length", desc: "length of element" },
        { id: "width", desc: "Width of element" },
        { id: "height", desc: "height of element" }
      ];
      const propListDecorative = [
        { id: "trimOpts", desc: "array of string options" },
        { id: "trimUnitSize", desc: "[x,y] of trim unit depth, and trim unit height" }
      ];
      const propListWall = [
        { id: "wallSize", desc: "[x,y,z] of wall length, wall thickness, and wall height" },
        { id: "crownDetailLvl", desc: "crown detail level, as integer (usually 0-2)" },
        { id: "dadoDetailLvl", desc: "dado detail level, as integer (usually 0-2)" },
        { id: "baseDetailLvl", desc: "base detail level, as integer (usually 0-2)" }
      ];
      const propListRoof = [
        { id: "roofSpanSize", desc: "length of element" },
        { id: "roofOverhangSize", desc: "Width of element" },
        { id: "roofPitch", desc: "height of element" }
      ];
      const propListVariants = [
        { id: "family", desc: "General grouping" },
        { id: "type", desc: "Functional grouping" },
        { id: "subType", desc: "Functional subgroup" },
        { id: "tagsVariants", desc: "Extra options for variants" }
      ];
      const masterPropList = [
        ...propListBasic,
        ...propListDecorative,
        ...propListWall,
        ...propListRoof
      ];
      const colourList = [];
      const layerList = [];
      return {
        propListBasic,
        propListWall,
        propListRoof,
        propListVariants,
        masterPropList,
        colourList,
        layerList
      };
    };
    module2.exports = { init: internals };
  }
});

// packages/swcad-js-data/src/index.js
var require_src = __commonJS({
  "packages/swcad-js-data/src/index.js"(exports2, module2) {
    "use strict";
    var constants = require_constants();
    var functions = require_functions();
    var specifications = require_specifications();
    var standards = require_standards();
    var errors = require_errors();
    var internals = require_internals();
    var dataInit = ({ jscad }) => {
      const data = {
        constants,
        functions,
        specifications,
        standards: standards.init({ jscad }),
        errors,
        internals: internals.init({ jscad })
      };
      return data;
    };
    module2.exports = {
      init: dataInit
    };
  }
});

// packages/swcad-js-calcs/src/geometry/geo-reg-poly.js
var require_geo_reg_poly = __commonJS({
  "packages/swcad-js-calcs/src/geometry/geo-reg-poly.js"(exports2, module2) {
    "use strict";
    var geoRegPoly = ({ jscad, swcadJs }) => {
      return {
        /**
         * ...
         * @memberof calcs.geometry.regPoly
         * @returns ...
         */
        sideLengthFromApothem: (apothem, numSides) => {
          return apothem * 2 * Math.tan(Math.PI / numSides);
        },
        /**
         * ...
         * @memberof calcs.geometry.regPoly
         * @returns ...
         */
        sideLengthFromCircumRadius: (circumradius, numSides) => {
          return circumradius * 2 * Math.sin(Math.PI / numSides);
        },
        /**
         * ...
         * @memberof calcs.geometry.regPoly
         * @returns ...
         */
        apothemFromCircumradius: (circumradius, numSides) => {
          return circumradius * Math.cos(Math.PI / numSides);
        },
        /**
         * ...
         * @memberof calcs.geometry.regPoly
         * @returns ...
         */
        apothemFromSideLength: (sideLength, numSides) => {
          return sideLength / 2 * Math.tan(Math.PI / numSides);
        },
        /**
         * ...
         * @memberof calcs.geometry.regPoly
         * @returns ...
         */
        circumradiusFromApothem: (apothem, numSides) => {
          return apothem / Math.cos(Math.PI / numSides);
        },
        /**
         * ...
         * @memberof calcs.geometry.regPoly
         * @returns ...
         */
        circumradiusFromSideLength: (sideLength, numSides) => {
          return sideLength / 2 * Math.sin(Math.PI / numSides);
        },
        /**
         * ...
         * @memberof calcs.geometry.regPoly
         * @returns ...
         */
        interiorAngle: (numSides) => {
          return 2 * Math.PI / numSides;
        }
      };
    };
    module2.exports = {
      init: geoRegPoly
    };
  }
});

// packages/swcad-js-calcs/src/geometry/reinforcement/index.js
var require_reinforcement = __commonJS({
  "packages/swcad-js-calcs/src/geometry/reinforcement/index.js"(exports2, module2) {
    "use strict";
    var profReinforcementsInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math
      } = swcadJs.calcs;
      const modelDefaults = () => {
        const defaultValues = {
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4),
              math.inchesToMm(1)
            ]
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const rectangleDefaults = () => {
        const defaultValues = {
          opts: {
            reinforcementPatterns: ["x", "cross", "diamond", "full"]
          },
          dims: {
            size: [40, 50]
          },
          points: {
            centre: [0, 0]
          },
          typeDetails: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          }
        };
        const defaultOpts = {
          size: defaultValues.dims.size,
          reinforcementPattern: defaultValues.opts.reinforcementPatterns[0],
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128),
          type: "default",
          scale: 1
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          size = defaults.opts.size,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          size,
          ...stdOpts
        };
        return initOpts;
      };
      const rectangleOpts = (opts) => {
        const defaults = rectangleDefaults();
        const {
          size = defaults.opts.size,
          reinforcementPattern = defaults.opts.reinforcementPattern,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap,
          type = defaults.opts.type,
          scale = defaults.opts.scale
        } = opts;
        const stdOpts = {
          size,
          reinforcementPattern,
          interfaceThickness,
          fitGap,
          type,
          scale
        };
        const initOpts = {
          size,
          ...stdOpts
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          size,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        const height = size[2];
        const modelConstants = {};
        const modelOpts2 = {
          type,
          scale
        };
        const modelDims = {
          size,
          interfaceThickness,
          fitGap,
          width,
          depth,
          height
        };
        const modelPoints = {
          centre: defaults.vals.points.centre
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const rectangleProps = (opts) => {
        const defaults = rectangleDefaults();
        const {
          size,
          reinforcementPattern,
          interfaceThickness,
          fitGap,
          type,
          scale
        } = opts;
        const width = size[0];
        const length = size[1];
        const midX = width / 2;
        const midY = length / 2;
        const midpoint = [midX, midY];
        const corners = [
          [0, 0],
          [width, 0],
          [width, length],
          [0, length]
        ];
        const midpoints = [
          [midX, 0],
          [width, midY],
          [midX, length],
          [0, midY]
        ];
        const outline = [
          [
            corners[0],
            corners[1]
          ],
          [
            corners[1],
            corners[2]
          ],
          [
            corners[2],
            corners[3]
          ],
          [
            corners[3],
            corners[0]
          ]
        ];
        const diagBraces = [
          [
            corners[0],
            corners[2]
          ],
          [
            midpoint,
            corners[1]
          ],
          [
            midpoint,
            corners[3]
          ]
        ];
        const crossBraces = [
          [
            midpoints[0],
            midpoints[2]
          ],
          [
            midpoints[1],
            midpoints[3]
          ]
        ];
        const midBraces = [
          [
            midpoints[0],
            midpoints[1]
          ],
          [
            midpoints[1],
            midpoints[2]
          ],
          [
            midpoints[2],
            midpoints[3]
          ],
          [
            midpoints[3],
            midpoints[0]
          ]
        ];
        let dots = [];
        let lines = [];
        let primaryLines = [];
        let secondaryLines = [];
        switch (reinforcementPattern) {
          case "full":
            primaryLines = [
              ...crossBraces
            ];
            secondaryLines = [
              ...midBraces,
              ...diagBraces
            ];
            lines = [
              ...primaryLines,
              ...secondaryLines
            ];
            break;
          case "diamond":
            primaryLines = [
              ...crossBraces
            ];
            secondaryLines = [
              ...midBraces
            ];
            lines = [
              ...primaryLines,
              ...secondaryLines
            ];
            break;
          case "cross":
            primaryLines = [
              ...crossBraces
            ];
            secondaryLines = [
              ...diagBraces
            ];
            lines = [
              ...primaryLines,
              ...secondaryLines
            ];
            break;
          case "x":
          default:
            primaryLines = [
              ...diagBraces
            ];
            secondaryLines = [];
            lines = [
              ...primaryLines,
              ...secondaryLines
            ];
            break;
        }
        const modelOpts2 = {
          reinforcementPattern
        };
        const modelDims = {
          size,
          width,
          length
        };
        const modelPoints = {
          corners,
          lines,
          primaryLines,
          secondaryLines,
          centre: midpoint,
          outline,
          midpoints,
          braces: {
            cross: crossBraces,
            diagonal: diagBraces,
            mid: midBraces
          }
        };
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints
        };
        return modelProperties;
      };
      const reinforcedTriangle = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const data = {
          points: null
        };
        return data;
      };
      const reinforcedRectangle = (opts) => {
        const defaults = rectangleDefaults();
        const initOpts = rectangleOpts(opts);
        const modelProperties = rectangleProps(initOpts);
        const data = {
          opts: modelProperties.opts,
          dims: modelProperties.dims,
          points: modelProperties.points
        };
        return data;
      };
      const reinforcedEllipse = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const data = {
          points: null
        };
        return data;
      };
      return {
        defaults: modelDefaults,
        props: modelProps,
        reinforcedTriangle,
        reinforcedRectangle,
        reinforcedEllipse
      };
    };
    module2.exports = {
      init: profReinforcementsInit
    };
  }
});

// packages/swcad-js-calcs/src/geometry/index.js
var require_geometry = __commonJS({
  "packages/swcad-js-calcs/src/geometry/index.js"(exports2, module2) {
    "use strict";
    var geoRegPolyModule = require_geo_reg_poly();
    var reinforcementModule = require_reinforcement();
    var ptCentroid = (points, mode = "3d") => {
      const min = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
      const max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
      points.forEach((pt) => {
        min[0] = Math.min(min[0], pt[0]);
        min[1] = Math.min(min[1], pt[1]);
        max[0] = Math.max(max[0], pt[0]);
        max[1] = Math.max(max[1], pt[1]);
        if (mode === "3d") {
          min[2] = Math.min(min[2], pt[2]);
          max[2] = Math.max(max[2], pt[2]);
        }
      });
      let output = [
        (max[0] + min[0]) / 2,
        (max[1] + min[1]) / 2
      ];
      if (mode === "3d") {
        output = [...output, (max[2] + min[2]) / 2];
      }
      return output;
    };
    var geometryInit = ({ jscad, swcadJs }) => {
      const { math } = swcadJs.calcs;
      const { constants } = swcadJs.data;
      const angleOfTwoPtLine = (startPt, endPt, mode = "rad") => {
        const diffY = endPt[1] - startPt[1];
        const diffX = endPt[0] - startPt[0];
        const angleRad = Math.atan2(diffY, diffX);
        const angleDeg = angleRad * (180 / Math.PI);
        return mode == "deg" ? angleDeg : angleRad;
      };
      const pointFromAngleAndDist = (angleRad, dist) => {
        const x = dist * Math.cos(angleRad);
        const y = dist * Math.sin(angleRad);
        return [x, y];
      };
      const getLineDataFromOutlinePoints = (outlinePts) => {
        const lineData = [];
        for (let ptIdx = 0; ptIdx < outlinePts.length - 1; ptIdx++) {
          const startPt = outlinePts[ptIdx];
          const endPt = outlinePts[ptIdx + 1];
          const coordDiffs = [
            endPt[0] - startPt[0],
            endPt[1] - startPt[1]
          ];
          const midPt = [
            startPt[0] + coordDiffs[0] / 2,
            startPt[1] + coordDiffs[1] / 2
          ];
          const lineLength = Math.hypot(coordDiffs[0], coordDiffs[1]);
          const lineAngle = angleOfTwoPtLine(startPt, endPt);
          lineData.push({
            start: startPt,
            end: endPt,
            mid: midPt,
            length: lineLength,
            angle: lineAngle
          });
        }
        return lineData;
      };
      const getTriangularPtsInArea = (x, y, distance, centrePoints = true) => {
        const halfDist = distance / 2;
        const allPoints = [];
        const allYCoords = [];
        let yCoordCtr = 0;
        do {
          allYCoords.push(yCoordCtr);
          yCoordCtr = distance * constants.EQUI_TRIANGLE_HEIGHT_FACTOR + yCoordCtr;
        } while (yCoordCtr < y);
        const hasOffsetCollision = false;
        let yIdxCtr = 0;
        do {
          let xCtr = 0;
          do {
            if (math.isEven(yIdxCtr)) {
              allPoints.push({ x: xCtr, y: allYCoords[yIdxCtr] });
            } else {
              if (halfDist + xCtr <= x) {
                allPoints.push({ x: halfDist + xCtr, y: allYCoords[yIdxCtr] });
              }
            }
            xCtr = xCtr + distance;
          } while (xCtr < x);
          yIdxCtr = yIdxCtr + 1;
        } while (yIdxCtr < allYCoords.length);
        if (!centrePoints) {
          return allPoints;
        }
        const simplePts = allPoints.map((pt) => [pt.x, pt.y]);
        const pointCentroid = ptCentroid(simplePts, "2d");
        return allPoints.map((pt) => {
          return {
            x: pt.x - pointCentroid[0],
            y: pt.y - pointCentroid[1]
          };
        });
      };
      const getSquarePtsInArea = (x, y, distance, centrePoints = true) => {
        const halfDist = distance / 2;
        const allXCoords = [];
        let xCtr = 0;
        do {
          allXCoords.push(xCtr);
          xCtr = xCtr + distance;
        } while (xCtr <= x);
        const allYCoords = [];
        let yCtr = 0;
        do {
          allYCoords.push(yCtr);
          yCtr = yCtr + distance;
        } while (yCtr <= y);
        const allPoints = math.arrayCartesianProduct(allXCoords, allYCoords);
        const outPts = allPoints.map((pt) => {
          return { x: pt[0], y: pt[1] };
        });
        if (!centrePoints) {
          return outPts;
        }
        const simplePts = outPts.map((pt) => [pt.x, pt.y]);
        const pointCentroid = ptCentroid(simplePts, "2d");
        return outPts.map((pt) => {
          return {
            x: pt.x - pointCentroid[0],
            y: pt.y - pointCentroid[1]
          };
        });
      };
      const points = {
        centroid: ptCentroid
      };
      const regPoly = geoRegPolyModule.init({ jscad, swcadJs });
      const reinforcement = reinforcementModule.init({ jscad, swcadJs });
      return {
        angleOfTwoPtLine,
        pointFromAngleAndDist,
        getLineDataFromOutlinePoints,
        getTriangularPtsInArea,
        getSquarePtsInArea,
        points,
        regPoly,
        reinforcement
      };
    };
    module2.exports = { init: geometryInit };
  }
});

// packages/swcad-js-calcs/src/math/index.js
var require_math = __commonJS({
  "packages/swcad-js-calcs/src/math/index.js"(exports2, module2) {
    "use strict";
    var arrayCartesianProduct = (a, b) => a.reduce((acc, x) => [...acc, ...b.map((y) => [x, y])], []);
    var mathUtils = ({ jscad, swcadJs }) => {
      const {
        INCHES_MM_FACTOR
      } = swcadJs.data.constants;
      return {
        /**
         * ...
         * @param {*} n 
         * @returns ...
         * @memberof calcs.math
         */
        isEven: (n) => {
          return n % 2 == 0;
        },
        /**
         * ...
         * @memberof calcs.math
         * @param {*} n 
         * @returns ...
         */
        isOdd: (n) => {
          return Math.abs(n % 2) == 1;
        },
        arrayCartesianProduct,
        /**
         * ...
         * @memberof calcs.math
         * @param {*} numInches 
         * @returns ...
         */
        inchesToMm: (numInches) => numInches * INCHES_MM_FACTOR,
        /**
         * ...
         * @memberof calcs.math
         * @param {*} numInches 
         * @returns ...
         */
        mmToInches: (numMils) => numMils / INCHES_MM_FACTOR,
        /**
         * ...
         * @memberof calcs.math
         * @param {*} numInches 
         * @returns ...
         */
        factorize: (num) => {
          const int1 = Math.floor(Math.sqrt(num));
          const rem = num % int1;
          if (rem === 0) {
            return [int1, int1];
          }
          const int2 = (num - rem) / int1;
          return [int1, int2 + 1];
        },
        getRandomInt: (min, max) => {
          const minCeiled = Math.ceil(min);
          const maxFloored = Math.floor(max);
          return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        }
      };
    };
    module2.exports = { init: mathUtils };
  }
});

// packages/swcad-js-calcs/src/position/pos-cuboid.js
var require_pos_cuboid = __commonJS({
  "packages/swcad-js-calcs/src/position/pos-cuboid.js"(exports2, module2) {
    "use strict";
    var geoCuboid = ({ jscad, swcadJs }) => {
      const {
        measureDimensions,
        measureBoundingBox,
        measureCenter
      } = jscad.measurements;
      const { position } = swcadJs.calcs;
      const getCuboidCoords = (cuboidGeom) => {
        return position.getGeomCoords(cuboidGeom);
      };
      const getCuboidCorners = (cuboidGeom) => {
        const bBox = measureBoundingBox(cuboidGeom);
        const coords = getCuboidCoords(cuboidGeom);
        return {
          c1: bBox[1],
          c2: [coords.left, coords.back, coords.top],
          c3: [coords.right, coords.front, coords.top],
          c4: [coords.left, coords.front, coords.top],
          c5: [coords.right, coords.back, coords.bottom],
          c6: [coords.left, coords.back, coords.bottom],
          c7: [coords.right, coords.front, coords.bottom],
          c8: bBox[0]
        };
      };
      const getCuboidCentre = (cuboidGeom) => {
        return measureCenter(cuboidGeom);
      };
      const getCuboidCtrlPoints = (cuboidGeom) => {
        const bBox = measureBoundingBox(cuboidGeom);
        const dims = measureDimensions(cuboidGeom);
        const coords = getCuboidCoords(cuboidGeom);
        const corners = getCuboidCorners(cuboidGeom);
        const centre = getCuboidCentre(cuboidGeom);
        const edgeMidpoints = {
          e1: [coords.right, centre[1], coords.bottom],
          // midpoint of edge (Y axis, +Y, +Z)
          e2: [centre[0], coords.back, coords.bottom],
          // midpoint of edge (X axis, +Y, +Z)
          e3: [coords.left, centre[1], coords.bottom],
          // midpoint of edge (Y axis, -Y, -Z)
          e4: [centre[0], coords.front, coords.bottom],
          // midpoint of edge (X axis, -Y, -Z)
          e5: [centre[0], centre[1], centre[2]],
          // midpoint of edge (Z axis, +X, +Z)
          e6: [centre[0], centre[1], centre[2]],
          // midpoint of edge (Z axis, -X, +Z)
          e7: [centre[0], centre[1], centre[2]],
          // midpoint of edge (Z axis, -X, -Z)
          e8: [centre[0], centre[1], centre[2]],
          // midpoint of edge (Z axis, +X, -Z)
          e9: [coords.right, centre[1], coords.top],
          // midpoint of edge (Y axis, +X, +Y)
          e10: [centre[0], coords.back, coords.top],
          // midpoint of edge (X axis, +X, +Y)
          e11: [coords.left, centre[1], coords.top],
          // midpoint of edge (Y axis, -X, -Y)
          e12: [centre[0], coords.front, coords.top]
          // midpoint of edge (X axis, -X, -Y)
        };
        const faceMidpoints = {
          f1: [coords.right, centre[1], centre[2]],
          // right (+X)
          f2: [coords.left, centre[1], centre[2]],
          // left (-X)
          f3: [centre[0], coords.back, centre[2]],
          // back (+Y)
          f4: [centre[0], coords.front, centre[2]],
          // front (-Y)
          f5: [centre[0], centre[1], coords.top],
          // top (+Z)
          f6: [centre[0], centre[1], coords.bottom]
          // bottom (-Z)
        };
        const qtrCuboidDims = [dims[0] / 4, dims[1] / 4, dims[2] / 4];
        const internal = {
          i0: centre,
          i1: [
            centre[0] + qtrCuboidDims[0],
            // octant I (+X, +Y, +Z)
            centre[1] + qtrCuboidDims[1],
            centre[2] + qtrCuboidDims[2]
          ],
          i2: [
            centre[0] - qtrCuboidDims[0],
            // octant II (-X, +Y, +Z)
            centre[1] + qtrCuboidDims[1],
            centre[2] + qtrCuboidDims[2]
          ],
          i3: [
            centre[0] + qtrCuboidDims[0],
            // octant III (+X, -Y, +Z)
            centre[1] - qtrCuboidDims[1],
            centre[2] + qtrCuboidDims[2]
          ],
          i4: [
            centre[0] - qtrCuboidDims[0],
            // octant VI (-X, -Y, +Z)
            centre[1] - qtrCuboidDims[1],
            centre[2] + qtrCuboidDims[2]
          ],
          i5: [
            centre[0] + qtrCuboidDims[0],
            // octant V (+X, +Y, -Z)
            centre[1] + qtrCuboidDims[1],
            centre[2] - qtrCuboidDims[2]
          ],
          i6: [
            centre[0] - qtrCuboidDims[0],
            // octant VI (-X, +Y, -Z)
            centre[1] + qtrCuboidDims[1],
            centre[2] - qtrCuboidDims[2]
          ],
          i7: [
            centre[0] + qtrCuboidDims[0],
            // octant VII (+X, -Y, -Z)
            centre[1] - qtrCuboidDims[1],
            centre[2] - qtrCuboidDims[2]
          ],
          i8: [
            centre[0] - qtrCuboidDims[0],
            // octant VIII (-X, -Y, -Z)
            centre[1] - qtrCuboidDims[1],
            centre[2] - qtrCuboidDims[2]
          ]
        };
        return {
          ...internal,
          ...corners,
          ...edgeMidpoints,
          ...faceMidpoints
        };
      };
      return {
        getCuboidCoords,
        getCuboidCorners,
        getCuboidCentre,
        getCuboidCtrlPoints
      };
    };
    module2.exports = {
      init: geoCuboid
    };
  }
});

// packages/swcad-js-calcs/src/position/pos-rectangle.js
var require_pos_rectangle = __commonJS({
  "packages/swcad-js-calcs/src/position/pos-rectangle.js"(exports2, module2) {
    "use strict";
    var geoRectangle = ({ jscad, swcadJs }) => {
      const {
        measureDimensions,
        measureBoundingBox,
        measureCenter
      } = jscad.measurements;
      const { position } = swcadJs.calcs;
      const getRectangleCoords = (rectGeom) => {
        return position.getGeomCoords(rectGeom);
      };
      const getRectangleCorners = (rectGeom) => {
        const bBox = measureBoundingBox(rectGeom);
        const coords = getRectangleCoords(rectGeom);
        return {
          c1: [coords.right, coords.front, 0],
          // (+X, -Y)
          c2: [coords.right, coords.back, 0],
          // (+X, +Y)
          c3: [coords.left, coords.back, 0],
          // (-X, +Y)
          c4: [coords.left, coords.front, 0]
          // (-X, -Y)
        };
      };
      const getRectangleCentre = (rectGeom) => {
        return measureCenter(rectGeom);
      };
      const getRectangleCtrlPoints = (rectGeom) => {
        const bBox = measureBoundingBox(rectGeom);
        const dims = measureDimensions(rectGeom);
        const coords = getRectangleCoords(rectGeom);
        const corners = getRectangleCorners(rectGeom);
        const centre = getRectangleCentre(rectGeom);
        const edgeMidpoints = {
          e1: [coords.right, centre[1], centre[2]],
          // midpoint of edge (Y axis, +X,)
          e2: [centre[0], coords.back, centre[2]],
          // midpoint of edge (X axis, +Y,)
          e3: [coords.left, centre[1], centre[2]],
          // midpoint of edge (Y axis, -X,)
          e4: [centre[0], coords.front, centre[2]]
          // midpoint of edge (X axis, -Y,)
        };
        const qtrRectDims = [dims[0] / 4, dims[1] / 4, 0];
        const internal = {
          i0: centre,
          i1: [centre[0] + qtrRectDims[0], centre[1] + qtrRectDims[1], centre[2]],
          // quadrant I (+X, +Y)
          i2: [centre[0] - qtrRectDims[0], centre[1] + qtrRectDims[1], centre[2]],
          // quadrant II (-X, +Y)
          i3: [centre[0] - qtrRectDims[0], centre[1] - qtrRectDims[1], centre[2]],
          // quadrant III (-X, -Y)
          i4: [centre[0] + qtrRectDims[0], centre[1] - qtrRectDims[1], centre[2]]
          // quadrant VI (+X, -Y)
        };
        return {
          ...internal,
          ...corners,
          ...edgeMidpoints
        };
      };
      return {
        getRectangleCoords,
        getRectangleCorners,
        getRectangleCentre,
        getRectangleCtrlPoints
      };
    };
    module2.exports = { init: geoRectangle };
  }
});

// packages/swcad-js-calcs/src/position/pos-triangle.js
var require_pos_triangle = __commonJS({
  "packages/swcad-js-calcs/src/position/pos-triangle.js"(exports2, module2) {
    "use strict";
    var geoTriangle = ({ jscad, swcadJs }) => {
      const { measureDimensions, measureBoundingBox, measureCenter } = jscad.measurements;
      const { TAU } = jscad.maths.constants;
      const getTriangleCtrlPoints = (points) => {
        return null;
      };
      const centroid = (points) => {
        return null;
      };
      const orthocentre = (points) => {
        return null;
      };
      const circumcentre = (points) => {
        return null;
      };
      const circumradius = (points) => {
        return null;
      };
      const incentre = (points) => {
        return null;
      };
      const incircleRadius = (points) => {
        return null;
      };
      const eulerLine = (points) => {
        return null;
      };
      const rightTriangleOpts = ({
        hypot,
        long,
        short,
        longAngle,
        shortAngle
      }) => {
        const isValueValid = (val) => {
          return typeof val == "number" && val >= 0;
        };
        const sides = { hypot, long, short };
        const angles = { longAngle, shortAngle };
        const validSides = Object.entries(sides).filter(([sideName, sideVal]) => {
          return isValueValid(sideVal);
        });
        const validAngles = Object.entries(angles).filter(([angleName, angleVal]) => {
          return isValueValid(angleVal);
        });
        if (validSides.length == 0 && validAngles.length == 0) {
          return null;
        }
        const sideKeys = validSides.map((vSide) => vSide[0]);
        const angleKeys = validAngles.map((vSide) => vSide[0]);
        let outType = "SSS";
        let outValues = [1, 1, 1];
        if (validSides.length == 3) {
          outType = "SSS";
          outValues = [short, hypot, long];
        } else if (sideKeys.includes("long") && sideKeys.includes("short")) {
          outType = "SAS";
          outValues = [short, TAU / 4, long];
        } else if (sideKeys.includes("long") && angleKeys.includes("shortAngle")) {
          outType = "AAS";
          outValues = [TAU / 4, shortAngle, long];
        } else if (sideKeys.includes("long") && angleKeys.includes("longAngle")) {
          outType = "ASA";
          outValues = [TAU / 4, long, longAngle];
        } else if (sideKeys.includes("short") && angleKeys.includes("longAngle")) {
          outType = "AAS";
          outValues = [TAU / 4, longAngle, short];
        } else if (sideKeys.includes("short") && angleKeys.includes("shortAngle")) {
          outType = "ASA";
          outValues = [TAU / 4, short, shortAngle];
        } else if (sideKeys.includes("hypot") && angleKeys.includes("longAngle") && angleKeys.includes("shortAngle")) {
          outType = "ASA";
          outValues = [longAngle, hypot, shortAngle];
        }
        return {
          type: outType,
          values: outValues
        };
      };
      return {
        getTriangleCtrlPoints,
        centroid,
        orthocentre,
        circumcentre,
        circumradius,
        incentre,
        incircleRadius,
        eulerLine,
        rightTriangleOpts
      };
    };
    module2.exports = { init: geoTriangle };
  }
});

// packages/swcad-js-calcs/src/position/position.js
var require_position = __commonJS({
  "packages/swcad-js-calcs/src/position/position.js"(exports2, module2) {
    "use strict";
    var posCuboid = require_pos_cuboid();
    var posRectangle = require_pos_rectangle();
    var posTriangle = require_pos_triangle();
    var positionUtils = ({ jscad, swcadJs }) => {
      const {
        align
      } = jscad.transforms;
      const {
        measureDimensions,
        measureBoundingBox
      } = jscad.measurements;
      const alignModes = {
        ctr: ["center", "center", "center"],
        ctrMin: ["center", "center", "min"],
        ctrMax: ["center", "center", "max"]
      };
      const ctr = (inGeom, pt = [0, 0, 0]) => {
        return align({ modes: alignModes.ctr, relativeTo: pt }, inGeom);
      };
      const ctrMin = (inGeom, pt = [0, 0, 0]) => {
        return align({ modes: alignModes.ctrMin, relativeTo: pt }, inGeom);
      };
      const ctrMax = (inGeom, pt = [0, 0, 0]) => {
        return align({ modes: alignModes.ctrMax, relativeTo: pt }, inGeom);
      };
      const measure = (inputGeom) => {
        return {
          boundingBox: measureBoundingBox(inputGeom),
          dimensions: measureDimensions(inputGeom)
        };
      };
      const getGeomCoords = (geom) => {
        const bBox = measureBoundingBox(geom);
        return {
          right: bBox[1][0],
          // (+X)
          left: bBox[0][0],
          // (-X)
          back: bBox[1][1],
          // (+Y)
          front: bBox[0][1],
          // (-Y)
          top: bBox[1][2],
          // (+Z)
          bottom: bBox[0][2]
          // (-Z)
        };
      };
      const findLongAxis = (size) => {
        const is2d = size.length == 2 && size.every((sizeNum) => typeof sizeNum === "number" && sizeNum > 0);
        const is3d = size.length == 3 && size.every((sizeNum) => typeof sizeNum === "number" && sizeNum > 0);
        if (!is2d && !is3d) {
          return null;
        }
        const maxDim = Math.max(...size);
        const maxDimIdx = size.indexOf(maxDim);
        const axes = ["x", "y", "z"];
        return axes[maxDimIdx];
      };
      const positionCore = {
        measure,
        getGeomCoords,
        findLongAxis,
        /**
         * Gets the keypoints for a given object
         * @memberof calcs.position
         * @instance
         * @returns ...
         */
        getKeypoints: (inputGeom) => {
          return null;
        },
        alignModes,
        ctr,
        ctrMin,
        ctrMax
      };
      const preLib = {
        ...swcadJs,
        calcs: {
          position: positionCore
        }
      };
      return {
        ...positionCore,
        cuboid: posCuboid.init({ jscad, swcadJs: preLib }),
        rectangle: posRectangle.init({ jscad, swcadJs: preLib }),
        triangle: posTriangle.init({ jscad, swcadJs: preLib })
      };
    };
    module2.exports = { init: positionUtils };
  }
});

// packages/swcad-js-calcs/src/position/index.js
var require_position2 = __commonJS({
  "packages/swcad-js-calcs/src/position/index.js"(exports2, module2) {
    "use strict";
    var positionInit = ({ jscad, swcadJs }) => {
      return require_position().init({ jscad, swcadJs });
    };
    module2.exports = { init: positionInit };
  }
});

// packages/swcad-js-calcs/src/transform/index.js
var require_transform = __commonJS({
  "packages/swcad-js-calcs/src/transform/index.js"(exports2, module2) {
    "use strict";
    var transformUtils = ({ jscad, swcadJs }) => {
      const { subtract, union } = jscad.booleans;
      const { measureDimensions } = jscad.measurements;
      const { cuboid, rectangle } = jscad.primitives;
      const { align, mirror, rotate } = jscad.transforms;
      const { colorize } = jscad.colors;
      const {
        position
      } = swcadJs.calcs;
      const stack = ({ reverse = false }, geoms) => {
        let stackHeight = 0;
        const geomList = reverse ? geoms.reverse() : geoms;
        return geomList.map((geom) => {
          const alignedGeom = align({ modes: ["center", "center", "min"], relativeTo: [0, 0, stackHeight] }, geom);
          stackHeight = stackHeight + measureDimensions(geom)[2];
          return alignedGeom;
        });
      };
      const cutQuadrant = (inShape) => {
        const inShapeDims = measureDimensions(inShape);
        const maskDims = [
          inShapeDims[0] + 5,
          inShapeDims[1] + 5
        ];
        const cornerCutDims = [
          maskDims[0] / 2,
          maskDims[1] / 2
        ];
        const cornerCutCtr = [cornerCutDims[0] / 2, cornerCutDims[1] / 2, 0];
        const mask = subtract(
          rectangle({
            size: maskDims
          }),
          rectangle({
            size: cornerCutDims,
            center: cornerCutCtr
          })
        );
        return subtract(
          position.ctr(inShape),
          mask
        );
      };
      const cloneQuadrant = (inShape) => {
        const firstMirror = mirror({ normal: [0, 1, 0] }, inShape);
        const firstHalf = union(
          inShape,
          firstMirror
        );
        const otherHalf = mirror({ normal: [1, 0, 0] }, firstHalf);
        return union(
          firstHalf,
          otherHalf
        );
      };
      return {
        /**
         * Cuts a given geometry in half.
         * @memberof calcs.transform
         * @instance
         * @param {Object} opts
         * @param {string} opts.axis - Axis direction pointing to the remaining geometry. This could be negative, specified like "x" or "-y"
         * @param {Object} geom - Object we're cutting
         * @returns bisected geometry
         */
        bisect3d: (opts, geom) => {
          const geomDims = measureDimensions(geom);
          const baseCutBox = cuboid({
            size: [
              geomDims[0] + 3,
              geomDims[1] + 3,
              geomDims[2] + 3
            ]
          });
          let alignedCutBox = null;
          const remAxis = opts.axis || "z";
          switch (remAxis) {
            case "-x":
              alignedCutBox = align({ modes: ["min", "center", "center"] }, baseCutBox);
              break;
            case "x":
              alignedCutBox = align({ modes: ["max", "center", "center"] }, baseCutBox);
              break;
            case "-y":
              alignedCutBox = align({ modes: ["center", "min", "center"] }, baseCutBox);
              break;
            case "y":
              alignedCutBox = align({ modes: ["center", "max", "center"] }, baseCutBox);
              break;
            case "-z":
              alignedCutBox = align({ modes: ["center", "center", "min"] }, baseCutBox);
              break;
            case "z":
            default:
              alignedCutBox = align({ modes: ["center", "center", "max"] }, baseCutBox);
          }
          return subtract(
            geom,
            alignedCutBox
          );
        },
        /**
         * Cuts a slice of an object
         * @memberof calcs.transform
         * @instance
         * @param {Object} opts
         * @param {number} opts.centralAngle
         * @param {Object} geom - Object we're cutting
         * @returns bisected geometry
         */
        cutCircularSlice: (opts, geom) => {
          const geomDims = measureDimensions(geom);
          const baseCutBox = cuboid({
            size: [
              geomDims[0] + 3,
              geomDims[1] + 3,
              geomDims[2] + 3
            ]
          });
          const cutBox1 = colorize(
            [0.7, 0.7, 0.1, 0.5],
            rotate([0, 0, opts.centralAngle / 2], align({ modes: ["max", "center", "center"] }, baseCutBox))
          );
          const cutBox2 = mirror({ normal: [1, 0, 0] }, cutBox1);
          let cutAssembly = subtract(geom, cutBox1);
          cutAssembly = subtract(cutAssembly, cutBox2);
          return cutAssembly;
        },
        stack,
        cutQuadrant,
        cloneQuadrant
      };
    };
    module2.exports = { init: transformUtils };
  }
});

// packages/swcad-js-calcs/src/index.js
var require_src2 = __commonJS({
  "packages/swcad-js-calcs/src/index.js"(exports2, module2) {
    "use strict";
    var geometry = require_geometry();
    var mathModule = require_math();
    var positionModule = require_position2();
    var transform = require_transform();
    var calcsInit = ({ jscad, swcadJs }) => {
      const math = mathModule.init({ jscad, swcadJs });
      const position = positionModule.init({ jscad, swcadJs });
      const preLib = {
        ...swcadJs,
        calcs: {
          math,
          position
        }
      };
      const calcs = {
        math,
        position,
        geometry: geometry.init({ jscad, swcadJs: preLib }),
        transform: transform.init({ jscad, swcadJs: preLib })
      };
      return calcs;
    };
    module2.exports = {
      init: calcsInit
    };
  }
});

// packages/swcad-js-profiles/src/beads-bits/index.js
var require_beads_bits = __commonJS({
  "packages/swcad-js-profiles/src/beads-bits/index.js"(exports2, module2) {
    "use strict";
    var beadsBitsInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle,
        polygon,
        ellipse
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math,
        position,
        transform
      } = swcadJs.calcs;
      const modelDefaults = () => {
        const defaultValues = {
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4),
              math.inchesToMm(1)
            ]
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          radius1: math.inchesToMm(1 / 2),
          radius2: math.inchesToMm(3 / 4),
          offset1: 0,
          offset2: 0,
          offset3: 0,
          offset4: 0
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          radius1 = defaults.opts.radius1,
          radius2 = defaults.opts.radius2,
          offset1 = defaults.opts.offset1,
          offset2 = defaults.opts.offset2,
          offset3 = defaults.opts.offset3,
          offset4 = defaults.opts.offset4,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4,
          ...stdOpts
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const lgProfileBeadWidth = interfaceThickness * 1.75;
        const mdProfileBeadWidth = interfaceThickness * 1.5;
        const smProfileBeadWidth = interfaceThickness * 1.125;
        const modelConstants = {
          type,
          scale
        };
        const modelOpts2 = {
          type,
          scale
        };
        const modelDims = {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4,
          interfaceThickness,
          fitGap
        };
        const modelPoints = {
          centre: defaults.vals.points.centre
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const rabbet = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4
        } = modelProperties.dims;
        const baseRect = rectangle({
          size: [radius1 * 2, radius2 * 2]
        });
        const baseShape = transform.cutQuadrant(baseRect);
        let offsetRectX = null;
        let offsetRectY = null;
        let offsetShape = baseShape;
        const hasOffsetRectX = offset1 && offset2;
        if (hasOffsetRectX) {
          offsetRectX = rectangle({
            size: [radius1 + offset1, offset2]
          });
          offsetRectX = align(
            { modes: ["min", "max", "center"] },
            offsetRectX
          );
          offsetShape = union(
            offsetShape,
            offsetRectX
          );
        }
        if (offset3 && offset4) {
          const extraOffset = hasOffsetRectX ? offset2 : 0;
          const nudgeDist = hasOffsetRectX ? -offset4 : 0;
          offsetRectY = rectangle({
            size: [offset3, radius2 + offset4 + extraOffset]
          });
          offsetRectY = align(
            { modes: ["max", "min", "center"] },
            offsetRectY
          );
          offsetRectY = translate([0, nudgeDist, 0], offsetRectY);
          offsetShape = union(
            offsetShape,
            offsetRectY
          );
        }
        const cornerBit = align(
          { modes: ["min", "min", "center"] },
          offsetShape
        );
        const fullBit = transform.cloneQuadrant(cornerBit);
        const mainModel = fullBit;
        const modelParts = {
          mainModel,
          fullBit
        };
        return [mainModel, modelParts, modelProperties];
      };
      const chamfer = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4
        } = modelProperties.dims;
        const diamondPts = [
          [0, -radius2],
          [radius1, 0],
          [0, radius2],
          [-radius1, 0]
        ];
        const baseDiamond = polygon({ points: diamondPts });
        const baseShape = transform.cutQuadrant(baseDiamond);
        let offsetRectX = null;
        let offsetRectY = null;
        let offsetShape = baseShape;
        if (offset1) {
          offsetRectX = rectangle({
            size: [radius1, offset1]
          });
          offsetRectX = align(
            { modes: ["min", "max", "center"] },
            offsetRectX
          );
          offsetShape = union(
            offsetShape,
            offsetRectX
          );
        }
        if (offset2) {
          offsetRectY = rectangle({
            size: [offset2, radius2 + offset1]
          });
          offsetRectY = align(
            { modes: ["max", "min", "center"] },
            offsetRectY
          );
          offsetRectY = translate([0, -offset1, 0], offsetRectY);
          offsetShape = union(
            offsetShape,
            offsetRectY
          );
        }
        const cornerBit = align(
          { modes: ["min", "min", "center"] },
          offsetShape
        );
        const fullBit = transform.cloneQuadrant(cornerBit);
        const mainModel = fullBit;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const roundOver = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4
        } = modelProperties.dims;
        const baseRect = rectangle({
          size: [radius1, radius2],
          center: [radius1 / -2, radius2 / -2]
        });
        const baseEllipse = ellipse({ radius: [radius1, radius2] });
        const baseShape = align(
          { modes: ["min", "min", "center"] },
          subtract(baseRect, baseEllipse)
        );
        let offsetRectX = null;
        let offsetRectY = null;
        let offsetShape = baseShape;
        if (offset1) {
          offsetRectX = rectangle({
            size: [radius1, offset1]
          });
          offsetRectX = align(
            { modes: ["min", "max", "center"] },
            offsetRectX
          );
          offsetShape = union(
            offsetShape,
            offsetRectX
          );
        }
        if (offset2) {
          offsetRectY = rectangle({
            size: [offset2, radius2 + offset1]
          });
          offsetRectY = align(
            { modes: ["max", "min", "center"] },
            offsetRectY
          );
          offsetRectY = translate([0, -offset1, 0], offsetRectY);
          offsetShape = union(
            offsetShape,
            offsetRectY
          );
        }
        const cornerBit = align(
          { modes: ["min", "min", "center"] },
          offsetShape
        );
        const fullBit = transform.cloneQuadrant(cornerBit);
        const mainModel = fullBit;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const cove = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4
        } = modelProperties.dims;
        const baseEllipse = ellipse({ radius: [radius1, radius2] });
        const baseShape = transform.cutQuadrant(baseEllipse);
        let offsetRectX = null;
        let offsetRectY = null;
        let offsetShape = baseShape;
        const hasOffsetRectX = offset1 && offset2;
        if (hasOffsetRectX) {
          offsetRectX = rectangle({
            size: [radius1 + offset1, offset2]
          });
          offsetRectX = align(
            { modes: ["min", "max", "center"] },
            offsetRectX
          );
          offsetShape = union(
            offsetShape,
            offsetRectX
          );
        }
        if (offset3 && offset4) {
          const extraOffset = hasOffsetRectX ? offset2 : 0;
          const nudgeDist = hasOffsetRectX ? -offset4 : 0;
          offsetRectY = rectangle({
            size: [offset3, radius2 + offset4 + extraOffset]
          });
          offsetRectY = align(
            { modes: ["max", "min", "center"] },
            offsetRectY
          );
          offsetRectY = translate([0, nudgeDist, 0], offsetRectY);
          offsetShape = union(
            offsetShape,
            offsetRectY
          );
        }
        const cornerBit = align(
          { modes: ["min", "min", "center"] },
          offsetShape
        );
        const fullBit = transform.cloneQuadrant(cornerBit);
        const mainModel = fullBit;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const corner = {
        rabbet,
        chamfer,
        roundOver,
        cove
      };
      return {
        corner
      };
    };
    module2.exports = {
      init: beadsBitsInit
    };
  }
});

// packages/swcad-js-profiles/src/connections/index.js
var require_connections = __commonJS({
  "packages/swcad-js-profiles/src/connections/index.js"(exports2, module2) {
    "use strict";
    var connectionProfilesInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        ellipse: ellipseShape,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math,
        position
      } = swcadJs.calcs;
      const modelDefaults = () => {
        const defaultValues = {
          constants: {
            sampleThickness: 1
            // scission only works with 3D objects. Need a filler thickness for now
          },
          opts: {
            segments: 6,
            unitSegments: 24,
            numConnectors: 3
          },
          dims: {
            size: [
              math.inchesToMm(2.5),
              math.inchesToMm(1.625),
              math.inchesToMm(1)
            ],
            unitSpacing: math.inchesToMm(1),
            unitRadius: 6.35,
            radius: 12.7,
            interfaceMargin: math.inchesToMm(3 / 8)
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          radius: defaultValues.dims.radius,
          unitSpacing: defaultValues.dims.unitSpacing,
          unitRadius: defaultValues.dims.unitRadius,
          segments: defaultValues.opts.segments,
          unitSegments: defaultValues.opts.unitSegments,
          numConnectors: defaultValues.opts.numConnectors,
          interfaceMargin: defaultValues.dims.interfaceMargin
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          size = defaults.opts.size,
          radius: radius2 = defaults.opts.radius,
          unitSpacing = defaults.opts.unitSpacing,
          unitRadius = defaults.opts.unitRadius,
          unitSegments = defaults.opts.unitSegments,
          numConnectors = defaults.opts.numConnectors,
          segments = defaults.opts.segments,
          interfaceMargin = defaults.opts.interfaceMargin,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          ...stdOpts,
          size,
          radius: radius2,
          unitSpacing,
          unitRadius,
          segments,
          unitSegments,
          numConnectors,
          interfaceMargin
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          size,
          radius: radius2,
          unitSpacing,
          unitRadius,
          segments,
          unitSegments,
          numConnectors,
          interfaceMargin,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        const diametre = radius2 * 2;
        const unitDiametre = unitRadius * 2;
        let interMargin = interfaceMargin;
        if (typeof interfaceMargin == "number") {
          interMargin = [interfaceMargin, interfaceMargin];
        }
        const midPoint = [
          width / 2,
          depth / 2
        ];
        const modelConstants = {
          sampleThickness: defaults.vals.constants.sampleThickness
        };
        const modelOpts2 = {
          type,
          scale,
          segments,
          unitSegments,
          numConnectors
        };
        const modelDims = {
          size,
          interfaceThickness,
          fitGap,
          width,
          depth,
          radius: radius2,
          unitSpacing,
          unitRadius,
          diametre,
          unitDiametre,
          interfaceMargin: interMargin
        };
        const modelPoints = {
          centrePt: midPoint
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const connectionTrapezoid = ({ depth, width, angle, reverse = false }) => {
        const baseRect = rectangle({ size: [depth, width] });
        const baseRectCoords = position.getGeomCoords(baseRect);
        const triOpts = position.triangle.rightTriangleOpts({ long: depth, longAngle: angle });
        const triangleEnds = [
          align(
            { modes: ["center", "max", "center"], relativeTo: [0, baseRectCoords.back, 0] },
            mirror({ normal: [0, 1, 0] }, triangle(triOpts))
          ),
          align(
            { modes: ["center", "min", "center"], relativeTo: [0, baseRectCoords.front, 0] },
            triangle(triOpts)
          )
        ];
        const outShape = subtract(baseRect, triangleEnds);
        if (reverse) {
          return mirror({ normal: [1, 0, 0] }, outShape);
        }
        return outShape;
      };
      const dovetail = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          width,
          depth,
          fitGap,
          interfaceMargin
        } = modelProperties.dims;
        const {
          centrePt
        } = modelProperties.points;
        const {
          sampleThickness
        } = modelProperties.constants;
        const dovetailWidth = width - interfaceMargin[0] * 2;
        const dovetailLength = depth - interfaceMargin[1] * 2;
        const dovetailEndSize = [
          dovetailLength / 6,
          dovetailLength
        ];
        const widthCoords = [
          interfaceMargin[0],
          interfaceMargin[0] + dovetailWidth
        ];
        const lengthCoords = [
          interfaceMargin[1],
          interfaceMargin[1] + dovetailLength
        ];
        const baseProfilePanel = cuboid({
          size: [width, depth, sampleThickness],
          center: [centrePt[0], centrePt[1], 0]
        });
        const lowerPts = [
          [0, lengthCoords[0]],
          [widthCoords[0] + dovetailEndSize[0], lengthCoords[0]],
          [widthCoords[1] - dovetailEndSize[0], lengthCoords[0]],
          [width, lengthCoords[0]]
        ];
        const upperPts = [
          [widthCoords[0], lengthCoords[1]],
          [widthCoords[1], lengthCoords[1]]
        ];
        const allPts = [
          lowerPts[0],
          lowerPts[1],
          ...upperPts,
          lowerPts[2],
          lowerPts[3]
        ];
        let dovetailCutPoints = allPts.map((dtPt) => {
          return cylinder({
            radius: fitGap / 2,
            height: sampleThickness * 10,
            center: [dtPt[0], dtPt[1], 0]
          });
        });
        const dovetailCut = hullChain(dovetailCutPoints);
        const cutPanel = subtract(
          baseProfilePanel,
          dovetailCut
        );
        const cutParts = scission(cutPanel);
        const dTailProfiles = [
          align({ modes: ["center", "center", "center"] }, cutParts[1]),
          align({ modes: ["center", "center", "center"] }, cutParts[0])
        ];
        const dovetailProfiles = [
          project({}, dTailProfiles[0]),
          project({}, dTailProfiles[1])
        ];
        const mainModel = [
          dovetailProfiles[1],
          dovetailProfiles[0]
        ];
        const modelParts = {
          male: dovetailProfiles[1],
          female: dovetailProfiles[0],
          cut: dovetailCut
        };
        return [mainModel, modelParts, modelProperties];
      };
      const tab = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          width,
          depth,
          fitGap,
          interfaceMargin
        } = modelProperties.dims;
        const {
          sampleThickness
        } = modelProperties.constants;
        const {
          centrePt
        } = modelProperties.points;
        const tabWidth = width - interfaceMargin[0] * 2;
        const tabLength = depth - interfaceMargin[1] * 2;
        const tabEndSize = [
          tabLength / 6,
          tabLength
        ];
        const widthCoords = [
          interfaceMargin[0],
          interfaceMargin[0] + tabWidth
        ];
        const lengthCoords = [
          interfaceMargin[1],
          interfaceMargin[1] + tabLength
        ];
        const baseProfilePanel = cuboid({
          size: [width, depth, sampleThickness],
          center: [centrePt[0], centrePt[1], 0]
        });
        const lowerPts = [
          [0, lengthCoords[0]],
          [widthCoords[0], lengthCoords[0]],
          [widthCoords[1], lengthCoords[0]],
          [width, lengthCoords[0]]
        ];
        const upperPts = [
          [widthCoords[0] + tabEndSize[0], lengthCoords[1]],
          [widthCoords[1] - tabEndSize[0], lengthCoords[1]]
        ];
        const allPts = [
          lowerPts[0],
          lowerPts[1],
          ...upperPts,
          lowerPts[2],
          lowerPts[3]
        ];
        let tabCutPoints = allPts.map((dtPt) => {
          return cylinder({
            radius: fitGap / 2,
            height: sampleThickness * 10,
            center: [dtPt[0], dtPt[1], 0]
          });
        });
        const tabCut = hullChain(tabCutPoints);
        const cutPanel = subtract(
          baseProfilePanel,
          tabCut
        );
        const cutParts = scission(cutPanel);
        const dTailProfiles = [
          align({ modes: ["center", "center", "center"] }, cutParts[1]),
          align({ modes: ["center", "center", "center"] }, cutParts[0])
        ];
        const tabProfiles = [
          project({}, dTailProfiles[0]),
          project({}, dTailProfiles[1])
        ];
        const mainModel = [
          tabProfiles[1],
          tabProfiles[0]
        ];
        const modelParts = {
          male: tabProfiles[1],
          female: tabProfiles[0],
          cut: tabCut
        };
        return [mainModel, modelParts, modelProperties];
      };
      const polygon = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          segments
        } = modelProperties.opts;
        const {
          width,
          depth,
          radius: radius2,
          fitGap,
          diametre,
          interfaceMargin
        } = modelProperties.dims;
        const {
          sampleThickness
        } = modelProperties.constants;
        const halfGap = fitGap / 2;
        const cornerRadius = math.inchesToMm(1 / 4);
        const specs = {
          dowelRadius: -halfGap + radius2,
          holeRadius: halfGap + radius2
        };
        specs.totalWidth = interfaceMargin[0] * 2 + diametre;
        const halfWidth = specs.totalWidth / 2;
        specs.cornerPoints = [
          [halfWidth - cornerRadius, halfWidth - cornerRadius, 0],
          [-halfWidth + cornerRadius, halfWidth - cornerRadius, 0],
          [-halfWidth + cornerRadius, -halfWidth + cornerRadius, 0],
          [halfWidth - cornerRadius, -halfWidth + cornerRadius, 0]
        ];
        const dowel = circle({ radius: specs.dowelRadius, segments });
        const dowelDie = circle({ radius: specs.holeRadius, segments });
        const corners = specs.cornerPoints.map((cPt) => {
          return translate(cPt, circle({ radius: cornerRadius }));
        });
        const basePlate = hull(corners);
        const male = dowel;
        const female = subtract(basePlate, dowelDie);
        const polygonProfiles = [
          female,
          male
        ];
        const mainModel = [
          polygonProfiles[1],
          polygonProfiles[0]
        ];
        const modelParts = {
          male: polygonProfiles[1],
          female: polygonProfiles[0]
        };
        return [mainModel, modelParts, modelProperties];
      };
      const ellipse = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          segments
        } = modelProperties.opts;
        const {
          width,
          depth,
          fitGap,
          interfaceMargin
        } = modelProperties.dims;
        const {
          sampleThickness
        } = modelProperties.constants;
        const halfGap = fitGap / 2;
        const cornerRadius = math.inchesToMm(1 / 4);
        const diam = [
          width - interfaceMargin[0] * 2,
          (depth - interfaceMargin[1] * 2) * 2
        ];
        const radius2 = [
          diam[0] / 2,
          diam[1] / 2
        ];
        const holeRadius = [
          radius2[0] + fitGap / 2,
          radius2[1] + fitGap / 2
        ];
        const dowelCtr = [0, depth / -2 + interfaceMargin[1], 0];
        const dowel = ellipseShape({ radius: radius2, segments, center: dowelCtr });
        const dowelDie = ellipseShape({ radius: holeRadius, segments, center: dowelCtr });
        const mPlate = rectangle({
          size: [
            width,
            interfaceMargin[1],
            0
          ]
        });
        let malePlate = align({
          modes: ["center", "min", "center"],
          relativeTo: [0, depth / -2, 0]
        }, mPlate);
        let cutDowel = subtract(
          align({
            modes: ["center", "center", "center"]
          }, dowel),
          align({
            modes: ["center", "max", "center"]
          }, rectangle({ size: [holeRadius[0] * 2, holeRadius[1] * 2] }))
        );
        cutDowel = align({
          modes: ["center", "min", "center"],
          relativeTo: dowelCtr
        }, cutDowel);
        const fPlate = rectangle({
          size: [
            width,
            depth - interfaceMargin[1] - fitGap,
            0
          ]
        });
        let femalePlate = align({
          modes: ["center", "max", "center"],
          relativeTo: [0, depth / 2, 0]
        }, fPlate);
        const male = union(cutDowel, malePlate);
        const female = subtract(femalePlate, dowelDie);
        const ellipseProfiles = [
          female,
          male
        ];
        const mainModel = [
          ellipseProfiles[1],
          ellipseProfiles[0]
        ];
        const modelParts = {
          male: ellipseProfiles[1],
          female: ellipseProfiles[0]
        };
        return [mainModel, modelParts, modelProperties];
      };
      const pegboard = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          unitSegments
        } = modelProperties.opts;
        const {
          width,
          depth,
          unitRadius,
          unitSpacing,
          fitGap,
          unitDiametre,
          interfaceMargin
        } = modelProperties.dims;
        const {
          sampleThickness
        } = modelProperties.constants;
        const halfGap = fitGap / 2;
        const cornerRadius = unitDiametre * 0.75;
        const specs = {
          dowelRadius: -halfGap + unitRadius,
          holeRadius: halfGap + unitRadius
        };
        specs.totalWidth = interfaceMargin[0] * 2 + (unitRadius * 2 + unitSpacing);
        const halfWidth = specs.totalWidth / 2;
        specs.cornerPoints = [
          [halfWidth - cornerRadius, halfWidth - cornerRadius, 0],
          [-halfWidth + cornerRadius, halfWidth - cornerRadius, 0],
          [-halfWidth + cornerRadius, -halfWidth + cornerRadius, 0],
          [halfWidth - cornerRadius, -halfWidth + cornerRadius, 0]
        ];
        const halfUnit = unitSpacing / 2;
        specs.dowelPoints = [
          [halfUnit, halfUnit, 0],
          [-halfUnit, halfUnit, 0],
          [-halfUnit, -halfUnit, 0],
          [halfUnit, -halfUnit, 0]
        ];
        const corners = specs.cornerPoints.map((cPt) => {
          return translate(cPt, circle({ radius: cornerRadius }));
        });
        const dowels = specs.dowelPoints.map((dPt) => {
          return translate(dPt, circle({ radius: specs.dowelRadius, segments: unitSegments }));
        });
        const dowelDies = specs.dowelPoints.map((dPt) => {
          return translate(dPt, circle({ radius: specs.holeRadius, segments: unitSegments }));
        });
        const basePlate = hull(corners);
        const dowelAssembly = union(dowels);
        const male = dowelAssembly;
        const female = subtract(basePlate, dowelDies);
        const pegboardProfiles = [
          female,
          male
        ];
        const mainModel = [
          pegboardProfiles[1],
          pegboardProfiles[0]
        ];
        const modelParts = {
          male: pegboardProfiles[1],
          female: pegboardProfiles[0]
        };
        return [mainModel, modelParts, modelProperties];
      };
      const boltCircle = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          segments,
          unitSegments
        } = modelProperties.opts;
        const {
          radius: radius2,
          diametre,
          unitRadius,
          unitSpacing,
          fitGap,
          unitDiametre,
          interfaceMargin
        } = modelProperties.dims;
        const {
          sampleThickness
        } = modelProperties.constants;
        const halfGap = fitGap / 2;
        const holeRadius = unitRadius + halfGap;
        const inCircle = circle({ radius: radius2, segments });
        const holePoints = toOutlines(inCircle)[0];
        const basePunch = circle({ radius: unitRadius });
        const dowels = holePoints.map((dPt) => {
          return translate(dPt, circle({ radius: unitRadius, segments: unitSegments }));
        });
        const dowelDies = holePoints.map((dPt) => {
          return translate(dPt, circle({ radius: holeRadius, segments: unitSegments }));
        });
        const basePlateRadius = radius2 + unitRadius + interfaceMargin[0];
        const basePlate = circle({ radius: basePlateRadius });
        const dowelAssembly = union(dowels);
        const male = dowelAssembly;
        const female = subtract(basePlate, dowelDies);
        const pegboardProfiles = [
          female,
          male
        ];
        const mainModel = [
          pegboardProfiles[1],
          pegboardProfiles[0]
        ];
        const modelParts = {
          male: pegboardProfiles[1],
          female: pegboardProfiles[0]
        };
        return [mainModel, modelParts, modelProperties];
      };
      const dovetailRow = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          numConnectors
        } = modelProperties.opts;
        const {
          width,
          depth,
          fitGap,
          interfaceMargin
        } = modelProperties.dims;
        const {
          centrePt
        } = modelProperties.points;
        const {
          sampleThickness
        } = modelProperties.constants;
        const numMargins = numConnectors + 1;
        const totalConnectionWidths = width - interfaceMargin[0] * numMargins;
        const connectionWidth = totalConnectionWidths / numConnectors;
        const connectionUnitWidth = 2 * interfaceMargin[0] + connectionWidth;
        const dovetailCutOpts = modelOpts({
          ...opts,
          size: [connectionUnitWidth, depth]
        });
        const dovetailCutData = dovetail(dovetailCutOpts);
        const dovetailCutBase = dovetailCutData[1].cut;
        const baseProfilePanel = cuboid({
          size: [width, depth, sampleThickness],
          center: [centrePt[0], centrePt[1], 0]
        });
        let dovetailRowCut = dovetailCutBase;
        const translateDistBase = interfaceMargin[0] + connectionWidth;
        for (let idx = 1; idx < numConnectors; idx++) {
          const translateDist = translateDistBase * idx;
          dovetailRowCut = union(
            dovetailRowCut,
            translate([translateDist, 0, 0], dovetailCutBase)
          );
        }
        const cutPanel = subtract(
          baseProfilePanel,
          dovetailRowCut
        );
        const cutParts = scission(cutPanel);
        const dTailProfiles = [
          align({ modes: ["center", "center", "center"] }, cutParts[1]),
          align({ modes: ["center", "center", "center"] }, cutParts[0])
        ];
        const dovetailProfiles = [
          project({}, dTailProfiles[0]),
          project({}, dTailProfiles[1])
        ];
        const mainModel = [
          dovetailProfiles[0],
          dovetailProfiles[1]
        ];
        const modelParts = {
          male: dovetailProfiles[0],
          female: dovetailProfiles[1],
          cut: dovetailRowCut
        };
        return [mainModel, modelParts, modelProperties];
      };
      const tabRow = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          numConnectors
        } = modelProperties.opts;
        const {
          width,
          depth,
          fitGap,
          interfaceMargin
        } = modelProperties.dims;
        const {
          centrePt
        } = modelProperties.points;
        const {
          sampleThickness
        } = modelProperties.constants;
        const numMargins = numConnectors + 1;
        const totalConnectionWidths = width - interfaceMargin[0] * numMargins;
        const connectionWidth = totalConnectionWidths / numConnectors;
        const connectionUnitWidth = 2 * interfaceMargin[0] + connectionWidth;
        const tabCutOpts = modelOpts({
          ...opts,
          size: [connectionUnitWidth, depth]
        });
        const tabCutData = tab(tabCutOpts);
        const tabCutBase = tabCutData[1].cut;
        const baseProfilePanel = cuboid({
          size: [width, depth, sampleThickness],
          center: [centrePt[0], centrePt[1], 0]
        });
        let tabRowCut = tabCutBase;
        const translateDistBase = interfaceMargin[0] + connectionWidth;
        for (let idx = 1; idx < numConnectors; idx++) {
          const translateDist = translateDistBase * idx;
          tabRowCut = union(
            tabRowCut,
            translate([translateDist, 0, 0], tabCutBase)
          );
        }
        const cutPanel = subtract(
          baseProfilePanel,
          tabRowCut
        );
        const cutParts = scission(cutPanel);
        const tProfiles = [
          align({ modes: ["center", "center", "center"] }, cutParts[1]),
          align({ modes: ["center", "center", "center"] }, cutParts[0])
        ];
        const tabProfiles = [
          project({}, tProfiles[0]),
          project({}, tProfiles[1])
        ];
        const mainModel = [
          tabProfiles[0],
          tabProfiles[1]
        ];
        const modelParts = {
          male: tabProfiles[0],
          female: tabProfiles[1],
          cut: tabRowCut
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: modelDefaults,
        props: modelProps,
        dovetail,
        tab,
        polygon,
        ellipse,
        pegboard,
        boltCircle,
        dovetailRow,
        tabRow
      };
    };
    module2.exports = {
      init: connectionProfilesInit
    };
  }
});

// packages/swcad-js-profiles/src/curve/index.js
var require_curve = __commonJS({
  "packages/swcad-js-profiles/src/curve/index.js"(exports2, module2) {
    "use strict";
    var curveBuilder = ({ jscad, swcadJs }) => {
      const { square, circle, rectangle, triangle, ellipse } = jscad.primitives;
      const { intersect, union, subtract } = jscad.booleans;
      const { rotate, align } = jscad.transforms;
      const { bezier } = jscad.curves;
      const { geom2, path2 } = jscad.geometries;
      const { constants } = swcadJs.data;
      const { position } = swcadJs.calcs;
      const getBezierPts = (bezierCurve, segments) => {
        const points = [];
        const segmentsInput = segments - 1;
        const totalLength = bezier.length(100, bezierCurve);
        const increment = totalLength / segmentsInput;
        for (let i = 0; i <= segmentsInput; i++) {
          const t = bezier.arcLengthToT({ distance: i * increment }, bezierCurve);
          const point = bezier.valueAt(t, bezierCurve);
          points.push(point);
        }
        return points;
      };
      const createRtCornerCurve = ({ width, depth, ratio }) => {
        const validSize = [
          width || depth / ratio,
          depth || width * ratio
        ];
        const container = rectangle({ size: validSize });
        const bez = bezier.create([
          [0, 0],
          [0, validSize[1]],
          [validSize[0], validSize[1]]
        ]);
        const segments = 12;
        const bezPts = getBezierPts(bez, segments);
        const bezPath = path2.fromPoints({ closed: true }, [[0, validSize[1]], ...bezPts]);
        const bezGeom = align({ modes: ["center", "center", "center"] }, geom2.fromPoints(path2.toPoints(bezPath)));
        return subtract(container, bezGeom);
      };
      const curves = {
        rightCorner: {
          /**
           * ...
           * @memberof profiles.curve
           * @param {object} opts
           * @returns ...
           */
          golden: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.PHI });
          },
          /**
           * ...
           * @memberof profiles.curve
           * @param {object} opts
           * @returns ...
           */
          sixtyThirty: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: 2 });
          },
          /**
           * ...
           * @memberof profiles.curve
           * @param {object} opts
           * @returns ...
           */
          silver: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.SILVER_RATIO });
          },
          /**
           * ...
           * @memberof profiles.curve
           * @param {object} opts
           * @returns ...
           */
          bronze: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.BRONZE_RATIO });
          },
          /**
           * ...
           * @memberof profiles.curve
           * @param {object} opts
           * @returns ...
           */
          copper: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.COPPER_RATIO });
          },
          /**
           * ...
           * @memberof profiles.curve
           * @param {object} opts
           * @returns ...
           */
          superGolden: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.SUPERGOLDEN_RATIO });
          },
          /**
           * ...
           * @memberof profiles.curve
           * @param {object} opts
           * @returns ...
           */
          plastic: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.PLASTIC_RATIO });
          }
        }
      };
      return curves;
    };
    module2.exports = { init: curveBuilder };
  }
});

// packages/swcad-js-profiles/src/joint-panel/index.js
var require_joint_panel = __commonJS({
  "packages/swcad-js-profiles/src/joint-panel/index.js"(exports2, module2) {
    "use strict";
    var jointPanelInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        connections
      } = swcadJs.profiles;
      const jointPanelDefaults = () => {
        const defaultValues = {
          constants: {
            sampleThickness: 1
            // scission only works with 3D objects. Need a filler thickness for now
          },
          opts: {
            axis: "x",
            jointNumConnectors: 3
          },
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4),
              math.inchesToMm(1)
            ],
            jointWidth: math.inchesToMm(3 / 8),
            jointMargin: math.inchesToMm(1 / 4)
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            tab: { id: "tab", desc: "Tab" },
            dovetail: { id: "dovetail", desc: "Dovetail" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.tab.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          jointWidth: defaultValues.dims.jointWidth,
          jointMargin: defaultValues.dims.jointMargin,
          jointNumConnectors: defaultValues.opts.jointNumConnectors,
          axis: defaultValues.opts.axis
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const jointPanelOpts = (opts) => {
        const defaults = jointPanelDefaults();
        const {
          size = defaults.opts.size,
          jointWidth = defaults.opts.jointWidth,
          jointMargin = defaults.opts.jointMargin,
          jointNumConnectors = defaults.opts.jointNumConnectors,
          axis = defaults.opts.axis,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          size,
          jointWidth,
          jointMargin,
          jointNumConnectors,
          axis,
          ...stdOpts
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = jointPanelDefaults();
        const {
          size,
          jointWidth,
          jointMargin,
          jointNumConnectors,
          axis,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        const midPoint = [
          width / 2,
          depth / 2
        ];
        let jMargin = jointMargin;
        if (typeof jointMargin == "number") {
          jMargin = [jointMargin, jointMargin];
        }
        const totalJointWidth = jMargin[1] * 2 + jointWidth;
        const modelConstants = {
          sampleThickness: defaults.vals.constants.sampleThickness
        };
        const modelOpts = {
          type,
          scale,
          axis,
          jointNumConnectors
        };
        const modelDims = {
          size,
          width,
          depth,
          jointWidth,
          jointMargin: jMargin,
          totalJointWidth,
          interfaceThickness,
          fitGap
        };
        const modelPoints = {
          centrePt: midPoint
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const oneJointRectPanel = (opts) => {
        const defaults = jointPanelDefaults();
        const initOpts = jointPanelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          sampleThickness
        } = modelProperties.constants;
        const {
          type,
          axis,
          jointNumConnectors
        } = modelProperties.opts;
        const {
          size,
          width,
          depth,
          jointWidth,
          jointMargin,
          totalJointWidth
        } = modelProperties.dims;
        const {
          centrePt
        } = modelProperties.points;
        let jointSize = [width, totalJointWidth];
        if (axis == "y") {
          jointSize = [depth, totalJointWidth];
        }
        const jointOpts = {
          size: jointSize,
          interfaceMargin: jointMargin,
          numConnectors: jointNumConnectors
        };
        let jointData = connections.tabRow(jointOpts);
        if (type == "dovetail") {
          jointData = connections.dovetailRow(jointOpts);
        }
        let jointCut = position.ctr(jointData[1].cut);
        if (axis == "y") {
          jointCut = rotate([0, 0, TAU / 4], jointCut);
        }
        const oneJointRectBasePanel = cuboid({
          size: [width, depth, sampleThickness]
        });
        const cutPanel = subtract(
          oneJointRectBasePanel,
          jointCut
        );
        const cutParts = scission(cutPanel);
        const oProfiles = [
          align({ modes: ["center", "center", "center"] }, cutParts[1]),
          align({ modes: ["center", "center", "center"] }, cutParts[0])
        ];
        const outProfiles = [
          project({}, oProfiles[0]),
          project({}, oProfiles[1])
        ];
        const mainModel = [
          outProfiles[0],
          outProfiles[1]
        ];
        const modelParts = {
          male: outProfiles[0],
          female: outProfiles[1],
          cut: jointCut
        };
        return [mainModel, modelParts, modelProperties];
      };
      const twoJointRectPanel = (opts) => {
        const defaults = jointPanelDefaults();
        const initOpts = jointPanelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          sampleThickness
        } = modelProperties.constants;
        const {
          type,
          axis,
          jointNumConnectors
        } = modelProperties.opts;
        const {
          size,
          width,
          depth,
          jointWidth,
          jointMargin,
          totalJointWidth
        } = modelProperties.dims;
        const {
          centrePt
        } = modelProperties.points;
        let jNumConnectors = jointNumConnectors;
        if (typeof jointNumConnectors == "number") {
          jNumConnectors = [
            jointNumConnectors,
            jointNumConnectors
          ];
        }
        const jointSizeX = [width, totalJointWidth];
        const jointOptsX = {
          size: jointSizeX,
          interfaceMargin: jointMargin,
          numConnectors: jNumConnectors[0]
        };
        let jointDataX = connections.tabRow(jointOptsX);
        if (type == "dovetail") {
          jointDataX = connections.dovetailRow(jointOptsX);
        }
        const jointCutX = position.ctr(jointDataX[1].cut);
        const jointSizeY = [depth, totalJointWidth];
        const jointOptsY = {
          size: jointSizeY,
          interfaceMargin: jointMargin,
          numConnectors: jNumConnectors[1]
        };
        let jointDataY = connections.tabRow(jointOptsY);
        if (type == "dovetail") {
          jointDataY = connections.dovetailRow(jointOptsY);
        }
        const jointCutY = rotate([0, 0, TAU / 4], position.ctr(jointDataY[1].cut));
        const comboCut = union(jointCutX, jointCutY);
        const twoJointRectBasePanel = cuboid({
          size: [width, depth, sampleThickness]
        });
        const cutPanel = subtract(
          twoJointRectBasePanel,
          comboCut
        );
        const cutParts = scission(cutPanel);
        const oProfiles = [
          align({ modes: ["center", "center", "center"] }, cutParts[0]),
          align({ modes: ["center", "center", "center"] }, cutParts[1]),
          align({ modes: ["center", "center", "center"] }, cutParts[2]),
          align({ modes: ["center", "center", "center"] }, cutParts[3])
        ];
        const outProfiles = [
          project({}, oProfiles[0]),
          project({}, oProfiles[1]),
          project({}, oProfiles[2]),
          project({}, oProfiles[3])
        ];
        const mainModel = outProfiles;
        const modelParts = {
          model: outProfiles,
          cut: comboCut
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: jointPanelDefaults,
        props: modelProps,
        oneJointRectPanel,
        twoJointRectPanel
      };
    };
    module2.exports = {
      init: jointPanelInit
    };
  }
});

// packages/swcad-js-profiles/src/shapes/ellipse/index.js
var require_ellipse = __commonJS({
  "packages/swcad-js-profiles/src/shapes/ellipse/index.js"(exports2, module2) {
    "use strict";
    var ellipseInit = ({ jscad, swcadJs }) => {
      const { square, circle, rectangle, triangle, ellipse } = jscad.primitives;
      const { intersect, union, subtract } = jscad.booleans;
      const { rotate, align } = jscad.transforms;
      const { geom2, path2 } = jscad.geometries;
      const { constants } = swcadJs.data;
      const { position } = swcadJs.calcs;
      const createEllipse = ({ width, depth, ratio }) => {
        const validSize = [
          width || depth / ratio,
          depth || width * ratio
        ];
        return ellipse({ radius: validSize });
      };
      const ellipses = {
        /**
         * ...
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @returns ...
         */
        golden: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.PHI });
        },
        /**
         * ...
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @returns ...
         */
        sixtyThirty: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: 2 });
        },
        /**
         * ...
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @returns ...
         */
        silver: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.SILVER_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @returns ...
         */
        bronze: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.BRONZE_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @returns ...
         */
        copper: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.COPPER_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @returns ...
         */
        superGolden: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.SUPERGOLDEN_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @returns ...
         */
        plastic: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.PLASTIC_RATIO });
        }
      };
      return ellipses;
    };
    module2.exports = { init: ellipseInit };
  }
});

// packages/swcad-js-profiles/src/shapes/rectangle/reinforced-rect.js
var require_reinforced_rect = __commonJS({
  "packages/swcad-js-profiles/src/shapes/rectangle/reinforced-rect.js"(exports2, module2) {
    "use strict";
    var reinforcedRectInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        square,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math
      } = swcadJs.calcs;
      const {
        reinforcement
      } = swcadJs.calcs.geometry;
      const reinforcedRectDefaults = () => {
        const defaultValues = {
          constants: {
            reinforcementPatterns: ["x", "cross", "diamond", "full"]
          },
          dims: {
            size: [
              math.inchesToMm(3),
              math.inchesToMm(4)
            ],
            reinforcementThickness: [5, 4, 3]
          },
          points: {
            centrePt: [0, 0, 0]
          },
          types: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          reinforcementPattern: defaultValues.constants.reinforcementPatterns[0],
          reinforcementThickness: defaultValues.dims.reinforcementThickness
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const reinforcedRectOpts = (opts) => {
        const defaults = reinforcedRectDefaults();
        console.log("modelOpts() -- opts", opts);
        const {
          size = defaults.opts.size,
          reinforcementPattern = defaults.opts.reinforcementPattern,
          reinforcementThickness = defaults.opts.reinforcementThickness,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          size,
          reinforcementPattern,
          reinforcementThickness,
          ...stdOpts
        };
        console.log("modelOpts() -- initOpts", initOpts);
        return initOpts;
      };
      const reinforcedRectProps = (opts) => {
        const defaults = reinforcedRectDefaults();
        console.log("modelProps() -- opts", opts);
        const {
          size,
          reinforcementPattern,
          reinforcementThickness,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        let rThickness = [
          defaults.vals.dims.reinforcementThickness,
          defaults.vals.dims.reinforcementThickness,
          defaults.vals.dims.reinforcementThickness
        ];
        if (typeof reinforcementThickness == "number") {
          rThickness = [
            reinforcementThickness,
            reinforcementThickness,
            reinforcementThickness
          ];
        } else if (Array.isArray(reinforcementThickness)) {
          if (reinforcementThickness.length == 3 && typeof reinforcementThickness[0] == "number") {
            rThickness = [
              reinforcementThickness[0],
              reinforcementThickness[1],
              reinforcementThickness[2]
            ];
          }
          if (reinforcementThickness.length == 2 && typeof reinforcementThickness[0] == "number") {
            rThickness = [
              reinforcementThickness[0],
              reinforcementThickness[1],
              reinforcementThickness[1]
            ];
          }
        }
        const reinforcementDataSize = [
          size[0] - reinforcementThickness[0],
          size[1] - reinforcementThickness[0]
        ];
        const reinforcementData = reinforcement.reinforcedRectangle({
          reinforcementDataSize,
          reinforcementPattern
        });
        const reinforcementNodes = [
          circle({ radius: rThickness[0] / 2 }),
          circle({ radius: rThickness[1] / 2 }),
          circle({ radius: rThickness[2] / 2 })
        ];
        const cornerNode = square({ size: rThickness[0] });
        const modelConstants = {};
        const modelOpts = {
          type,
          scale,
          reinforcementPattern
        };
        const modelDims = {
          size,
          width,
          depth,
          reinforcementThickness: rThickness,
          interfaceThickness,
          fitGap
        };
        const modelPoints = {
          centrePt: defaults.vals.points.centrePt,
          ...reinforcementData.points
        };
        const modelComponents = {
          reinforcementNodes,
          cornerNode
        };
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        console.log("modelProps() -- modelProperties", modelProperties);
        return modelProperties;
      };
      const reinforcedRect = (opts) => {
        const defaults = reinforcedRectDefaults();
        const initOpts = reinforcedRectOpts(opts);
        const modelProperties = reinforcedRectProps(initOpts);
        const rectOutline = (modelProps) => {
          const {
            corners
          } = modelProps.points;
          const {
            cornerNode
          } = modelProps.components;
          const hullPts = corners;
          hullPts.push(hullPts[0]);
          const hullNodes = hullPts.map((hullPt) => {
            return translate([hullPt[0], hullPt[1], 0], cornerNode);
          });
          return hullChain(hullNodes);
        };
        const rectPrimaryBracing = (modelProps) => {
          const {
            primaryLines
          } = modelProps.points;
          const {
            reinforcementNodes
          } = modelProps.components;
          let returnBracing = null;
          const braceLines = primaryLines.map((pLine) => {
            const lineStartPt = pLine[0];
            const lineEndPt = pLine[1];
            const nodeStart = translate(lineStartPt, reinforcementNodes[1]);
            const nodeEnd = translate(lineEndPt, reinforcementNodes[1]);
            return hull(nodeStart, nodeEnd);
          });
          if (braceLines.length > 0) {
            returnBracing = union(...braceLines);
          }
          return braceLines;
        };
        const rectSecondaryBracing = (modelProps) => {
          const {
            secondaryLines
          } = modelProps.points;
          const {
            reinforcementNodes
          } = modelProps.components;
          let returnBracing = null;
          const braceLines = secondaryLines.map((pLine) => {
            const lineStartPt = pLine[0];
            const lineEndPt = pLine[1];
            const nodeStart = translate(lineStartPt, reinforcementNodes[2]);
            const nodeEnd = translate(lineEndPt, reinforcementNodes[2]);
            return hull(nodeStart, nodeEnd);
          });
          if (braceLines.length > 0) {
            returnBracing = union(...braceLines);
          }
          return braceLines;
        };
        const finalAssembly = (modelProps) => {
          const rectOutlineInst2 = rectOutline(modelProps);
          const rectPrimaryBracingInst2 = rectPrimaryBracing(modelProperties);
          const rectSecondaryBracingInst2 = rectSecondaryBracing(modelProperties);
          let finalShape = rectOutlineInst2;
          if (rectPrimaryBracingInst2) {
            finalShape = union(finalShape, rectPrimaryBracingInst2);
          }
          if (rectSecondaryBracingInst2) {
            finalShape = union(finalShape, rectSecondaryBracingInst2);
          }
          return finalShape;
        };
        const rectOutlineInst = rectOutline(modelProperties);
        const rectPrimaryBracingInst = rectPrimaryBracing(modelProperties);
        const rectSecondaryBracingInst = rectSecondaryBracing(modelProperties);
        let mainModel = finalAssembly(modelProperties);
        let modelParts = {
          rectOutline: rectOutlineInst,
          rectPrimaryBracing: rectPrimaryBracingInst,
          rectSecondaryBracing: rectSecondaryBracingInst
        };
        return [mainModel, modelParts, modelProperties];
      };
      return reinforcedRect;
    };
    module2.exports = {
      init: reinforcedRectInit
    };
  }
});

// packages/swcad-js-profiles/src/shapes/rectangle/index.js
var require_rectangle = __commonJS({
  "packages/swcad-js-profiles/src/shapes/rectangle/index.js"(exports2, module2) {
    "use strict";
    var reinforcedRectModule = require_reinforced_rect();
    var rectangleInit = ({ jscad, swcadJs }) => {
      const { square, circle, rectangle, triangle, ellipse } = jscad.primitives;
      const { intersect, union, subtract } = jscad.booleans;
      const { rotate, align } = jscad.transforms;
      const { geom2, path2 } = jscad.geometries;
      const { constants } = swcadJs.data;
      const { position } = swcadJs.calcs;
      const createRect = ({ width, depth, ratio }) => {
        const validSize = [
          width || depth / ratio,
          depth || width * ratio
        ];
        return rectangle({ size: validSize });
      };
      const rectangles = {
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        golden: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.PHI });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        sixtyThirty: ({ width, depth }) => {
          return createRect({ width, depth, ratio: 2 });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        silver: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.SILVER_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        bronze: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.BRONZE_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        copper: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.COPPER_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        superGolden: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.SUPERGOLDEN_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        plastic: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.PLASTIC_RATIO });
        }
      };
      return {
        ...rectangles,
        reinforcedRect: reinforcedRectModule.init({ jscad, swcadJs })
      };
    };
    module2.exports = {
      init: rectangleInit
    };
  }
});

// packages/swcad-js-profiles/src/shapes/square/index.js
var require_square = __commonJS({
  "packages/swcad-js-profiles/src/shapes/square/index.js"(exports2, module2) {
    "use strict";
    var squareInit = ({ jscad, swcadJs }) => {
      const { square, circle, rectangle, triangle, ellipse } = jscad.primitives;
      const { intersect, union, subtract } = jscad.booleans;
      const { rotate, align } = jscad.transforms;
      const { geom2, path2 } = jscad.geometries;
      const { constants } = swcadJs.data;
      const { position } = swcadJs.calcs;
      const squares = {
        /**
         * Square with circular notches at corners.
         * @memberof profiles.shapes.square
         * @instance
         * @param {Object} opts 
         * @param {number} opts.sqLength - side length for bounding square 
         * @param {number} opts.notchRadius - radius of circular notch
         */
        cornerCircNotch: (opts) => {
          const sqLen = opts.sqLength;
          const halfUnit = sqLen / 2;
          const cornerRad = opts.notchRadius || sqLen / 4;
          const centrePoints = [
            [halfUnit, halfUnit],
            [-halfUnit, halfUnit],
            [halfUnit, -halfUnit],
            [-halfUnit, -halfUnit]
          ];
          const baseSquare = square({ size: sqLen });
          const cornerCircles = union(centrePoints.map((cPt) => {
            return circle({ radius: cornerRad, center: cPt });
          }));
          return subtract(baseSquare, cornerCircles);
        },
        /**
         * Square with circles at corners.
         * @memberof profiles.shapes.square
         * @instance
         * @param {Object} opts 
         * @param {number} opts.sqLength - side length for bounding square 
         * @param {number} opts.cornerRadius - radius of circular corner
         */
        cornerCircles: (opts) => {
          const sqLen = opts.sqLength;
          const baseSqLen = sqLen * 2 / 3;
          const halfUnit = baseSqLen / 2;
          const cornerRad = opts.cornerRadius || baseSqLen / 4;
          const centrePoints = [
            [halfUnit, halfUnit],
            [-halfUnit, halfUnit],
            [halfUnit, -halfUnit],
            [-halfUnit, -halfUnit]
          ];
          const baseSquare = square({ size: baseSqLen });
          const cornerCircles = union(centrePoints.map((cPt) => {
            return circle({ radius: cornerRad, center: cPt });
          }));
          return union(baseSquare, cornerCircles);
        }
      };
      return squares;
    };
    module2.exports = { init: squareInit };
  }
});

// packages/swcad-js-profiles/src/shapes/triangle/index.js
var require_triangle = __commonJS({
  "packages/swcad-js-profiles/src/shapes/triangle/index.js"(exports2, module2) {
    "use strict";
    var triangleInit = ({ jscad, swcadJs }) => {
      const { square, circle, rectangle, triangle, ellipse } = jscad.primitives;
      const { intersect, union, subtract } = jscad.booleans;
      const { rotate, align } = jscad.transforms;
      const { geom2, path2 } = jscad.geometries;
      const { constants } = swcadJs.data;
      const { position } = swcadJs.calcs;
      const createRtTriangle = ({ base, height, ratio }) => {
        const validOpts = {
          short: base || height / ratio,
          long: height || base * ratio
        };
        const triOpts = position.triangle.rightTriangleOpts({ ...validOpts });
        return triangle(triOpts);
      };
      const triangles = {
        /**
         * ...
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @returns ...
         */
        equilateral: ({ base }) => {
          return triangle({ type: "SSS", values: [base, base, base] });
        },
        /**
         * ...
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @returns ...
         */
        right45: ({ base }) => {
          const triOpts = position.triangle.rightTriangleOpts({ short: base, long: base });
          return triangle(triOpts);
        },
        /**
         * ...
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @returns ...
         */
        right30: ({ base, height }) => {
          return createRtTriangle({ base, height, ratio: 2 });
        },
        /**
         * ...
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @returns ...
         */
        rightGolden: ({ base, height }) => {
          return createRtTriangle({ base, height, ratio: constants.PHI });
        },
        /**
         * ...
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @returns ...
         */
        rightSilver: ({ base, height }) => {
          return createRtTriangle({ base, height, ratio: constants.SILVER_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @returns ...
         */
        rightBronze: ({ base, height }) => {
          return createRtTriangle({ base, height, ratio: constants.BRONZE_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @returns ...
         */
        rightCopper: ({ base, height }) => {
          return createRtTriangle({ base, height, ratio: constants.COPPER_RATIO });
        }
      };
      return triangles;
    };
    module2.exports = { init: triangleInit };
  }
});

// packages/swcad-js-profiles/src/shapes/index.js
var require_shapes = __commonJS({
  "packages/swcad-js-profiles/src/shapes/index.js"(exports2, module2) {
    "use strict";
    var ellipseModule = require_ellipse();
    var rectangleModule = require_rectangle();
    var squareModule = require_square();
    var triangleModule = require_triangle();
    var profileBuilder = ({ jscad, swcadJs }) => {
      const { square, circle, rectangle, triangle, ellipse } = jscad.primitives;
      const { intersect, union, subtract } = jscad.booleans;
      const { rotate, align } = jscad.transforms;
      const { geom2, path2 } = jscad.geometries;
      const { constants } = swcadJs.data;
      const { position } = swcadJs.calcs;
      const ellipses = ellipseModule.init({ jscad, swcadJs });
      const rectangles = rectangleModule.init({ jscad, swcadJs });
      const squares = squareModule.init({ jscad, swcadJs });
      const triangles = triangleModule.init({ jscad, swcadJs });
      const shapes = {
        ellipse: ellipses,
        rectangle: rectangles,
        square: squares,
        triangle: triangles,
        octagon: {
          /**
           * octFromDiam
           * @memberof profiles.shapes
           * @alias octagon
           * @instance
           * @param {Object} opts 
           * @param {number} opts.sqLength - side length for bounding square 
           */
          octFromDiam: (opts) => {
            const sqLen = opts.sqLength;
            const baseSquare = square({ size: sqLen });
            const angledSquare = rotate([0, 0, Math.PI / 4], baseSquare);
            return intersect(baseSquare, angledSquare);
          }
        }
      };
      return shapes;
    };
    module2.exports = { init: profileBuilder };
  }
});

// packages/swcad-js-profiles/src/shapes/rectangle/frame-rect.js
var require_frame_rect = __commonJS({
  "packages/swcad-js-profiles/src/shapes/rectangle/frame-rect.js"(exports2, module2) {
    "use strict";
    var rectangularFrameInit = ({ jscad, swcadJs }) => {
      const { circle, rectangle } = jscad.primitives;
      const { rotate, align, mirror } = jscad.transforms;
      const { subtract, union } = jscad.booleans;
      const { measureDimensions } = jscad.measurements;
      const { TAU } = jscad.maths.constants;
      const { shapes, curve } = swcadJs.profiles;
      const { position } = swcadJs.calcs;
      const cornerStyleTypes = ["round", "tri", "rect", "ellipse", "cornerBez"];
      const cStyleDefault = { inv: false, inset: true, offset: false };
      const cStRound = { inv: true, offset: true };
      const cStRect = { inv: true, offset: true };
      const cStEllipse = { ...cStRect };
      const cStCornerBez = { inv: true };
      const cRoundStyles = {
        round: {
          id: "round",
          ...cStyleDefault,
          ...cStRound,
          func: ({ radius: radius2 }) => {
            return circle({ radius: radius2 });
          }
        }
      };
      const cTriStyles = {
        tri45deg: {
          id: "tri45deg",
          ...cStyleDefault,
          func: shapes.triangle.right45
        },
        tri30deg: {
          id: "tri30deg",
          ...cStyleDefault,
          func: shapes.triangle.right30
        },
        triGolden: {
          id: "triGolden",
          ...cStyleDefault,
          func: shapes.triangle.rightGolden
        },
        triSilver: {
          id: "triSilver",
          ...cStyleDefault,
          func: shapes.triangle.rightSilver
        },
        triBronze: {
          id: "triBronze",
          ...cStyleDefault,
          func: shapes.triangle.rightBronze
        },
        triCopper: {
          id: "triCopper",
          ...cStyleDefault,
          func: shapes.triangle.rightCopper
        }
      };
      const cStDefRect = {
        ...cStyleDefault,
        ...cStRect
      };
      const cRectStyles = {
        rectGolden: {
          id: "rectGolden",
          ...cStDefRect,
          func: shapes.rectangle.golden
        },
        rectSixtyThirty: {
          id: "rectSixtyThirty",
          ...cStDefRect,
          func: shapes.rectangle.sixtyThirty
        },
        rectSilver: {
          id: "rectSilver",
          ...cStDefRect,
          func: shapes.rectangle.silver
        },
        rectBronze: {
          id: "rectBronze",
          ...cStDefRect,
          func: shapes.rectangle.bronze
        },
        rectCopper: {
          id: "rectCopper",
          ...cStDefRect,
          func: shapes.rectangle.copper
        },
        rectSuperGolden: {
          id: "rectSuperGolden",
          ...cStDefRect,
          func: shapes.rectangle.superGolden
        },
        rectPlastic: {
          id: "rectPlastic",
          ...cStDefRect,
          func: shapes.rectangle.plastic
        }
      };
      const cStDefEllipse = {
        ...cStyleDefault,
        ...cStEllipse
      };
      const cEllipseStyles = {
        ellipseGolden: {
          id: "ellipseGolden",
          ...cStDefEllipse,
          func: shapes.ellipse.golden
        },
        ellipseSixtyThirty: {
          id: "ellipseSixtyThirty",
          ...cStDefEllipse,
          func: shapes.ellipse.sixtyThirty
        },
        ellipseSilver: {
          id: "ellipseSilver",
          ...cStDefEllipse,
          func: shapes.ellipse.silver
        },
        ellipseBronze: {
          id: "ellipseBronze",
          ...cStDefEllipse,
          func: shapes.ellipse.bronze
        },
        ellipseCopper: {
          id: "ellipseCopper",
          ...cStDefEllipse,
          func: shapes.ellipse.copper
        },
        ellipseSuperGolden: {
          id: "ellipseSuperGolden",
          ...cStDefEllipse,
          func: shapes.ellipse.superGolden
        },
        ellipsePlastic: {
          id: "ellipsePlastic",
          ...cStDefEllipse,
          func: shapes.ellipse.plastic
        }
      };
      const cStDefCornBez = {
        ...cStyleDefault,
        ...cStCornerBez
      };
      const cCornerBezStyles = {
        cornerBezGolden: {
          id: "cornerBezGolden",
          ...cStDefCornBez,
          func: curve.rightCorner.golden
        },
        cornerBezSixtyThirty: {
          id: "cornerBezSixtyThirty",
          ...cStDefCornBez,
          func: curve.rightCorner.sixtyThirty
        },
        cornerBezSilver: {
          id: "cornerBezSilver",
          ...cStDefCornBez,
          func: curve.rightCorner.silver
        },
        cornerBezBronze: {
          id: "cornerBezBronze",
          ...cStDefCornBez,
          func: curve.rightCorner.bronze
        },
        cornerBezCopper: {
          id: "cornerBezCopper",
          ...cStDefCornBez,
          func: curve.rightCorner.copper
        },
        cornerBezSuperGolden: {
          id: "cornerBezSuperGolden",
          ...cStDefCornBez,
          func: curve.rightCorner.superGolden
        },
        cornerBezPlastic: {
          id: "cornerBezPlastic",
          ...cStDefCornBez,
          func: curve.rightCorner.plastic
        }
      };
      const cornerStyles = {
        ...cRoundStyles,
        ...cTriStyles,
        ...cRectStyles,
        ...cEllipseStyles,
        ...cCornerBezStyles
      };
      const rectangularFrameDefOpts = {
        direction: "in",
        frameWidth: 5,
        cornerOpts: {
          style: "round",
          radius: 2.5
        },
        cornerStyle: cRoundStyles.round
      };
      rectangularFrameDefOpts.outCornerOpts = rectangularFrameDefOpts.cornerOpts;
      const shapedRectangle = ({
        size,
        cornerOpts = rectangularFrameDefOpts.cornerOpts
      }) => {
        let outRect = rectangle({ size });
        const outRectCoords = position.getGeomCoords(outRect);
        const outRectCorners = position.rectangle.getRectangleCorners(outRect);
        const cornerStyle = cornerStyles[cornerOpts.style];
        const cornerPieces = [];
        const notches = [];
        if (cornerStyle) {
          const styleType = cornerStyleTypes.find((cStyleType) => cornerStyle.id.startsWith(cStyleType));
          const cornerPiece = cornerStyle.func(cornerOpts);
          const cornerPieceDims = measureDimensions(cornerPiece);
          let baseNotch = rectangle({ size: [cornerPieceDims[0] / 2, cornerPieceDims[1] / 2] });
          if (["tri", "cornerBez"].includes(styleType)) {
            baseNotch = rectangle({ size: [cornerPieceDims[0] - 0.01, cornerPieceDims[1] - 0.01] });
          }
          Object.entries(outRectCorners).forEach(([cName, cPt]) => {
            let inPieceRotation = null;
            let inPieceAlign = ["center", "center", "center"];
            let inPieceMirror = null;
            if (cornerOpts.longAxis == "y") {
              if (styleType == "tri") {
                inPieceRotation = [0, 0, 0];
              } else {
                inPieceRotation = [0, 0, TAU / 4];
              }
            } else {
              if (styleType == "tri") {
                inPieceRotation = [0, 0, TAU / 4];
              } else {
                inPieceRotation = [0, 0, 0];
              }
            }
            if (cName == "c4") {
              inPieceAlign = ["min", "min", "center"];
              if (styleType == "cornerBez") {
                inPieceRotation = [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2]];
                inPieceMirror = cornerOpts.longAxis == "y" ? null : [0, 1, 0];
              }
              if (styleType == "tri") {
                inPieceRotation = [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2]];
                inPieceMirror = cornerOpts.longAxis == "y" ? [0, 1, 0] : null;
              }
            } else if (cName == "c3") {
              inPieceAlign = ["min", "max", "center"];
              if (styleType == "cornerBez") {
                inPieceRotation = cornerOpts.longAxis == "y" ? [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2] + TAU / 2] : [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2]];
                inPieceMirror = cornerOpts.longAxis == "y" ? [1, 0, 0] : null;
              }
              if (styleType == "tri") {
                inPieceRotation = cornerOpts.longAxis == "y" ? [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2]] : [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2] + TAU / 2];
                inPieceMirror = cornerOpts.longAxis == "y" ? null : [1, 0, 0];
              }
            } else if (cName == "c2") {
              inPieceAlign = ["max", "max", "center"];
              if (styleType == "cornerBez") {
                inPieceRotation = [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2] + TAU / 2];
                inPieceMirror = cornerOpts.longAxis == "y" ? null : [0, 1, 0];
              }
              if (styleType == "tri") {
                inPieceRotation = [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2] + TAU / 2];
                inPieceMirror = cornerOpts.longAxis == "y" ? [0, 1, 0] : null;
              }
            } else {
              inPieceAlign = ["max", "min", "center"];
              if (styleType == "cornerBez") {
                inPieceRotation = cornerOpts.longAxis == "y" ? [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2]] : [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2] + TAU / 2];
                inPieceMirror = cornerOpts.longAxis == "y" ? [1, 0, 0] : null;
              }
              if (styleType == "tri") {
                inPieceRotation = cornerOpts.longAxis == "y" ? [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2] + TAU / 2] : [inPieceRotation[0], inPieceRotation[1], inPieceRotation[2]];
                inPieceMirror = cornerOpts.longAxis == "y" ? null : [1, 0, 0];
              }
            }
            const rotatedNotch = rotate(inPieceRotation, baseNotch);
            const newNotch = align(
              { modes: inPieceAlign, relativeTo: cPt },
              rotatedNotch
            );
            notches.push(newNotch);
            let rotatedCornerPiece = rotate(inPieceRotation, cornerPiece);
            if (inPieceMirror) {
              rotatedCornerPiece = mirror({ normal: inPieceMirror }, rotatedCornerPiece);
            }
            const newCornerPiece = align(
              { modes: inPieceAlign, relativeTo: cPt },
              rotatedCornerPiece
            );
            cornerPieces.push(newCornerPiece);
          });
          outRect = subtract(outRect, ...notches);
          outRect = union(outRect, ...cornerPieces);
        }
        return outRect;
      };
      const rectangularFrame = ({
        size,
        direction = rectangularFrameDefOpts.direction,
        frameWidth = rectangularFrameDefOpts.frameWidth,
        cornerOpts = rectangularFrameDefOpts.cornerOpts,
        outCornerOpts = rectangularFrameDefOpts.outCornerOpts
      }) => {
        const specs = {
          totalSize: [
            frameWidth * 2 + size[0],
            frameWidth * 2 + size[1]
          ],
          longAxis: cornerOpts.longAxis || position.findLongAxis(size)
        };
        const iCornOpts = { ...cornerOpts, longAxis: specs.longAxis };
        const oCornOpts = { ...outCornerOpts, longAxis: specs.longAxis };
        const inRectBase = rectangle({ size });
        const inCornerStyle = cornerStyles[iCornOpts.style];
        const outRectBase = rectangle({ size: specs.totalSize });
        const outCornerStyle = cornerStyles[oCornOpts.style];
        let inRect = inRectBase;
        let outRect = outRectBase;
        if (direction != "out" && inCornerStyle) {
          inRect = shapedRectangle({
            size,
            cornerOpts: iCornOpts
          });
        }
        if (direction != "in" && outCornerStyle) {
          outRect = shapedRectangle({
            size: specs.totalSize,
            cornerOpts: oCornOpts
          });
        }
        return subtract(outRect, inRect);
      };
      return rectangularFrame;
    };
    module2.exports = { init: rectangularFrameInit };
  }
});

// packages/swcad-js-profiles/src/structure/foils-2d.js
var require_foils_2d = __commonJS({
  "packages/swcad-js-profiles/src/structure/foils-2d.js"(exports2, module2) {
    "use strict";
    var foilBuilder = ({ jscad, swcadJs }) => {
      const { union } = jscad.booleans;
      const { rotate, align } = jscad.transforms;
      const { circle } = jscad.primitives;
      const buildFoil2d = (opts) => {
        const centralAngle = Math.PI * 2 / opts.numLobes;
        const sinHalfCentral = Math.sin(centralAngle / 2);
        const lobeRadiusInSlice = sinHalfCentral / (1 + sinHalfCentral) * opts.radius;
        const lobeRadiusDiff = opts.radius / 2 - lobeRadiusInSlice;
        const lobeRadiusMean = lobeRadiusInSlice + lobeRadiusDiff / 2;
        const lobeRadType = opts.lobeRadiusType || "mean";
        let lobeRadius = lobeRadiusMean;
        if (lobeRadType === "inSlice") {
          lobeRadius = lobeRadiusInSlice;
        } else if (lobeRadType === "halfRadius") {
          lobeRadius = opts.radius / 2;
        }
        const lobeCircle = circle({ radius: lobeRadius });
        const alignedLobeCircle = align({ modes: ["none", "min"], relativeTo: [0, -opts.radius] }, lobeCircle);
        let centreCircle = lobeCircle;
        if (opts.numLobes === 3) {
          if (lobeRadType === "mean") {
            centreCircle = circle({ radius: opts.radius * 0.435 });
          } else if (lobeRadType === "inSlice") {
            centreCircle = circle({ radius: opts.radius * 0.3 });
          }
        }
        const rotationAngles = [];
        for (let index = 1; index < opts.numLobes; index++) {
          rotationAngles.push(centralAngle * index);
        }
        const rotatedLobes = rotationAngles.map((angle) => {
          return rotate([0, 0, angle], alignedLobeCircle);
        });
        return union(centreCircle, alignedLobeCircle, ...rotatedLobes);
      };
      return {
        buildFoil2d,
        /**
         * Builds a trefoil opening using a given 2d cross-section profile
         * @memberof profiles.structure.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        trefoil: (opts, geomProfile) => {
          return buildFoil2d({ ...opts, numLobes: 3 });
        },
        /**
         * Builds a quatrefoil opening using a given 2d cross-section profile
         * @memberof profiles.structure.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        quatrefoil: (opts, geomProfile) => {
          return buildFoil2d({ ...opts, numLobes: 4 });
        },
        /**
         * Builds a cinquefoil opening using a given 2d cross-section profile
         * @memberof profiles.structure.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        cinquefoil: (opts, geomProfile) => {
          return buildFoil2d({ ...opts, numLobes: 5 });
        },
        /**
         * Builds a sexfoil opening using a given 2d cross-section profile
         * @memberof profiles.structure.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        sexfoil: (opts, geomProfile) => {
          return buildFoil2d({ ...opts, numLobes: 6 });
        },
        /**
         * Builds an octofoil opening using a given 2d cross-section profile
         * @memberof profiles.structure.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        octofoil: (opts, geomProfile) => {
          return buildFoil2d({ ...opts, numLobes: 8 });
        }
      };
    };
    module2.exports = { init: foilBuilder };
  }
});

// packages/swcad-js-profiles/src/structure/mesh-2d.js
var require_mesh_2d = __commonJS({
  "packages/swcad-js-profiles/src/structure/mesh-2d.js"(exports2, module2) {
    var mesh2dInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math,
        position,
        geometry
      } = swcadJs.calcs;
      const {
        constants
      } = swcadJs.data;
      const meshPanelDefaults = () => {
        const defaultValues = {
          dims: {
            size: [
              math.inchesToMm(6),
              math.inchesToMm(3)
            ]
          },
          points: {
            centre: [0, 0, 0]
          },
          typeDetails: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          }
        };
        const defaultOpts = {
          size: defaultValues.dims.size,
          type: "default",
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128),
          logMode: "normal",
          edgeMargin: math.inchesToMm(3 / 16),
          holeRadius: math.inchesToMm(0.125),
          holeDistance: math.inchesToMm(1),
          holePattern: "tri"
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const meshPanelProps = (opts) => {
        const defaults = meshPanelDefaults();
        const {
          type,
          scale,
          interfaceThickness,
          fitGap,
          logMode,
          size,
          edgeMargin,
          holeRadius,
          holeDistance,
          holePattern
        } = opts;
        const width = size[0];
        const depth = size[1];
        const holeDiam = holeRadius * 2;
        const meshAreaSize = [
          size[0] - holeDiam - edgeMargin * 2,
          size[1] - holeDiam - edgeMargin * 2
        ];
        const modelConstants = {
          type,
          scale
        };
        const modelOpts = {
          type,
          scale,
          holePattern
        };
        const modelDims = {
          size,
          meshAreaSize,
          interfaceThickness,
          fitGap,
          width,
          depth,
          edgeMargin,
          holeRadius,
          holeDiam,
          holeDistance
        };
        const modelPoints = {
          centre: defaults.vals.points.centre
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const meshPanel = (opts) => {
        const defaults = meshPanelDefaults();
        const {
          // size = defaults.opts.size,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap,
          logMode = defaults.opts.logMode,
          size = defaults.opts.size,
          edgeMargin = defaults.opts.edgeMargin,
          holeRadius = defaults.opts.holeRadius,
          holeDistance = defaults.opts.holeDistance,
          holePattern = defaults.opts.holePattern
        } = opts;
        const inOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap,
          logMode,
          size,
          edgeMargin,
          holeRadius,
          holeDistance,
          holePattern
        };
        const modelProperties = meshPanelProps(inOpts);
        const meshPanelPoints = (modelProps) => {
          const {
            size: size2,
            meshAreaSize,
            edgeMargin: edgeMargin2,
            holeRadius: holeRadius2,
            holeDistance: holeDistance2
          } = modelProps.dims;
          const {
            holePattern: holePattern2
          } = modelProps.opts;
          let pts = [];
          if (holePattern2 == "tri") {
            pts = geometry.getTriangularPtsInArea(meshAreaSize[0], meshAreaSize[1], holeDistance2);
          } else {
            pts = geometry.getSquarePtsInArea(meshAreaSize[0], meshAreaSize[1], holeDistance2);
          }
          return pts;
        };
        const meshPanelCutProfile = (modelProps) => {
          const {
            size: size2,
            edgeMargin: edgeMargin2,
            holeRadius: holeRadius2,
            holeDistance: holeDistance2
          } = modelProps.dims;
          const {
            holePattern: holePattern2
          } = modelProps.opts;
          const cutPts = meshPanelPoints(modelProps);
          const cutCircles = cutPts.map((cutPt) => {
            return circle({ radius: holeRadius2, center: [cutPt.x, cutPt.y] });
          });
          return cutCircles;
        };
        const meshPanelProfile = (modelProps) => {
          const {
            size: size2,
            edgeMargin: edgeMargin2,
            holeRadius: holeRadius2,
            holeDistance: holeDistance2
          } = modelProps.dims;
          const {
            holePattern: holePattern2
          } = modelProps.opts;
          const baseRect = rectangle({ size: size2 });
          return baseRect;
        };
        const finalAssembly = (modelProps) => {
          let subComp12 = meshPanelProfile(modelProps);
          let subComp22 = meshPanelCutProfile(modelProps);
          return subtract(
            subComp12,
            subComp22
          );
        };
        let subComp1 = meshPanelCutProfile(modelProperties);
        let subComp2 = meshPanelProfile(modelProperties);
        let mainModel = finalAssembly(modelProperties);
        let modelParts = {
          meshPanelCutProfile: subComp1,
          meshPanelProfile: subComp2
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        meshPanel
      };
    };
    module2.exports = { init: mesh2dInit };
  }
});

// packages/swcad-js-profiles/src/structure/arch-2d.js
var require_arch_2d = __commonJS({
  "packages/swcad-js-profiles/src/structure/arch-2d.js"(exports2, module2) {
    "use strict";
    var archBuilder = ({ jscad, swcadJs }) => {
      const { path2, geom2 } = jscad.geometries;
      const { extrudeRotate } = jscad.extrusions;
      const { arc, cuboid } = jscad.primitives;
      const { translate, mirror, rotate, align } = jscad.transforms;
      const { union, subtract, intersect } = jscad.booleans;
      const { measureDimensions } = jscad.measurements;
      return {
        /**
         * Builds a one-centre (semicircular) arch.
         * @memberof profiles.structure.arch
         * @instance
         * @param {Object} opts 
         * @param {number} opts.arcRadius - arc radius 
         */
        onePtArch: (opts) => {
          const arcRad = opts.arcRadius;
          const baseArchPath = path2.close(arc({ radius: arcRad, endAngle: Math.PI, segments: 48 }));
          return geom2.fromPoints(path2.toPoints(baseArchPath));
        },
        /**
         * Builds a two-centre pointed arch.
         * @memberof profiles.structure.arch
         * @instance
         * @param {Object} opts 
         * @param {number} opts.arcRadius - arc radius 
         * @param {number} opts.archWidth - arch width 
         */
        twoPtArch: (opts) => {
          const arcRad = opts.arcRadius;
          const archWth = opts.archWidth;
          const baseArchPath = path2.close(arc({ radius: arcRad, endAngle: Math.PI, segments: 48 }));
          const baseArch = geom2.fromPoints(path2.toPoints(baseArchPath));
          const mirrorAxis = arcRad - archWth / 2;
          const reflectedArch = mirror({ normal: [1, 0, 0], origin: [mirrorAxis, 0, 0] }, baseArch);
          return align({ modes: ["center", "min", "min"] }, intersect(baseArch, reflectedArch));
        },
        threePt: (opts) => {
          return null;
        },
        fourPt: (opts) => {
          return null;
        }
      };
    };
    module2.exports = { init: archBuilder };
  }
});

// packages/swcad-js-profiles/src/structure/index.js
var require_structure = __commonJS({
  "packages/swcad-js-profiles/src/structure/index.js"(exports2, module2) {
    "use strict";
    var structureInit = ({ jscad, swcadJs }) => {
      const structure = {
        foil: require_foils_2d().init({ jscad, swcadJs }),
        mesh: require_mesh_2d().init({ jscad, swcadJs }),
        arch: require_arch_2d().init({ jscad, swcadJs })
      };
      return structure;
    };
    module2.exports = { init: structureInit };
  }
});

// packages/swcad-js-profiles/src/text/index.js
var require_text = __commonJS({
  "packages/swcad-js-profiles/src/text/index.js"(exports2, module2) {
    "use strict";
    var textUtils = ({ jscad, swcadJs }) => {
      const { union } = jscad.booleans;
      const { circle } = jscad.primitives;
      const { translate } = jscad.transforms;
      const { vectorText } = jscad.text;
      const { hullChain } = jscad.hulls;
      const basicText = (opts) => {
        const lineRadius = opts.charLineWidth / 2;
        const lineCorner = circle({ radius: lineRadius });
        const lineSegmentPointArrays = vectorText({ x: 0, y: 0, input: opts.message, height: opts.fontSize });
        const lineSegments = [];
        lineSegmentPointArrays.forEach((segmentPoints) => {
          const corners = segmentPoints.map((point) => translate(point, lineCorner));
          lineSegments.push(hullChain(corners));
        });
        return union(lineSegments);
      };
      return {
        basicText
      };
    };
    module2.exports = { init: textUtils };
  }
});

// packages/swcad-js-profiles/src/trim/trim-aranea.js
var require_trim_aranea = __commonJS({
  "packages/swcad-js-profiles/src/trim/trim-aranea.js"(exports2, module2) {
    "use strict";
    var trimAranea = ({ jscad, swcadJs }) => {
      const { polygon, square } = jscad.primitives;
      const { subtract, union } = jscad.booleans;
      const { rotate, translate, mirror, center } = jscad.transforms;
      const { constants } = swcadJs.data;
      const { math } = swcadJs.calcs;
      const {
        beadsBits: beadsBitsProfiles
      } = swcadJs.profiles;
      const trimAraneaDefaults = () => {
        const defaultValues = {
          constants: {
            numLevels: 3
          },
          dims: {
            size: [
              math.inchesToMm(1.5),
              math.inchesToMm(0.75)
            ],
            detailDepth: math.inchesToMm(0.75) / 3
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            dado: { id: "dado", desc: "Dado Trim" },
            base: { id: "base", desc: "Base Trim" },
            crown: { id: "crown", desc: "Crown Trim" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.dado.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          detailDepth: defaultValues.dims.detailDepth
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const trimAraneaOpts = (opts) => {
        const defaults = trimAraneaDefaults();
        const {
          size = defaults.opts.size,
          detailDepth,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        let dDepth = size[1] / 3;
        if (detailDepth) {
          dDepth = detailDepth;
        }
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          size,
          detailDepth: dDepth,
          ...stdOpts
        };
        return initOpts;
      };
      const trimAraneaProps = (opts) => {
        const defaults = trimAraneaDefaults();
        const {
          size,
          detailDepth,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        const numLevels = defaults.vals.constants.numLevels;
        const levelPoints = {};
        const ornamentPoints = {};
        const thicknessPoints = {};
        for (let levelIdx = 0; levelIdx <= numLevels; levelIdx++) {
          levelPoints[`l${levelIdx}`] = width * levelIdx;
          thicknessPoints[`t${levelIdx}`] = depth * levelIdx;
          ornamentPoints[`o${levelIdx + 1}`] = width * levelIdx + width * constants.PHI_INV;
        }
        levelPoints[`lHalf`] = width / 2;
        const controlPts = {};
        const getPointsForLevel = (levelPt) => {
          const lPoints = {};
          for (const [tPtName, tPtValue] of Object.entries(thicknessPoints)) {
            lPoints[tPtName] = [tPtValue, levelPt];
          }
          return lPoints;
        };
        for (const [ptName, ptValue] of Object.entries(levelPoints)) {
          controlPts[ptName] = getPointsForLevel(ptValue);
        }
        for (const [ptName, ptValue] of Object.entries(ornamentPoints)) {
          controlPts[ptName] = getPointsForLevel(ptValue);
        }
        const modelConstants = {};
        const modelOpts = {
          type,
          scale
        };
        const modelDims = {
          size,
          detailDepth,
          interfaceThickness,
          fitGap,
          width,
          depth
        };
        const modelPoints = {
          centre: defaults.vals.points.centre,
          controlPts
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const aranea = (opts) => {
        const defaults = trimAraneaDefaults();
        const initOpts = trimAraneaOpts(opts);
        const modelProperties = trimAraneaProps(initOpts);
        const detailCornerExt = ({ sideLength }) => {
          const chamferOpts = {
            radius1: sideLength,
            radius2: sideLength
          };
          const chamferData = beadsBitsProfiles.corner.chamfer(chamferOpts);
          const chamferModel = chamferData[0];
          return chamferModel;
        };
        const detailCornerInt = ({ sideLength }) => {
          const chamferOpts = {
            radius1: sideLength,
            radius2: sideLength
          };
          const chamferData = beadsBitsProfiles.corner.chamfer(chamferOpts);
          const chamferModel = chamferData[0];
          return chamferModel;
        };
        const detailOrnament = ({ sideLength }) => {
          const chamferOpts = {
            radius1: sideLength,
            radius2: sideLength
          };
          const chamferData = beadsBitsProfiles.corner.chamfer(chamferOpts);
          const chamferModel = chamferData[0];
          return chamferModel;
        };
        const extraSmall = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.lHalf.t1;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              controlPts.lHalf.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner2);
          }
          return cutShape;
        };
        const small = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.l1.t1;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              controlPts.l1.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner2);
          }
          return cutShape;
        };
        const smallOrnament1 = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const baseShape = small(mProperties);
          const oPt = controlPts.o1.t1;
          const bCorner = detailOrnament({ sideLength: detailDepth / 2 });
          const oCorner = translate([...oPt, 0], bCorner);
          return subtract(baseShape, oCorner);
        };
        const medium = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.l1.t1;
          const cornerPt3 = controlPts.l1.t2;
          const cornerPt4 = controlPts.l2.t2;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              cornerPt3,
              cornerPt4,
              controlPts.l2.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerInt);
          const corner3 = translate([...cornerPt3, 0], baseCornerExt);
          const corner4 = translate([...cornerPt4, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          cutShape = union(cutShape, corner2);
          cutShape = subtract(cutShape, corner3);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner4);
          }
          return cutShape;
        };
        const mediumOrnament1 = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const baseShape = medium(mProperties);
          const oPt1 = controlPts.o2.t2;
          const oPt2 = controlPts.o1.t1;
          const bCorner = detailOrnament({ sideLength: detailDepth / 2 });
          const oCorner1 = translate([...oPt1, 0], bCorner);
          let oCorner2 = translate([...oPt2, 0], bCorner);
          oCorner2 = mirror({ origin: [0, controlPts.l1.t1[1] / 2, 0], normal: [0, 1, 0] }, oCorner2);
          let cutShape = subtract(baseShape, oCorner1);
          cutShape = subtract(cutShape, oCorner2);
          return cutShape;
        };
        const large = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.l1.t1;
          const cornerPt3 = controlPts.l1.t2;
          const cornerPt4 = controlPts.l2.t2;
          const cornerPt5 = controlPts.l2.t3;
          const cornerPt6 = controlPts.l3.t3;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              cornerPt3,
              cornerPt4,
              cornerPt5,
              cornerPt6,
              controlPts.l3.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerInt);
          const corner3 = translate([...cornerPt3, 0], baseCornerExt);
          const corner4 = translate([...cornerPt4, 0], baseCornerInt);
          const corner5 = translate([...cornerPt5, 0], baseCornerExt);
          const corner6 = translate([...cornerPt6, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          cutShape = union(cutShape, corner2);
          cutShape = subtract(cutShape, corner3);
          cutShape = union(cutShape, corner4);
          cutShape = subtract(cutShape, corner5);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner6);
          }
          return cutShape;
        };
        const largeOrnament1 = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const baseShape = large(mProperties);
          const oPt1 = controlPts.o3.t3;
          const oPt2 = controlPts.o1.t1;
          const bCorner = detailOrnament({ sideLength: detailDepth / 2 });
          const oCorner1 = translate([...oPt1, 0], bCorner);
          let oCorner2 = translate([...oPt2, 0], bCorner);
          oCorner2 = mirror({ origin: [0, controlPts.l1.t1[1] / 2, 0], normal: [0, 1, 0] }, oCorner2);
          let cutShape = subtract(baseShape, oCorner1);
          cutShape = subtract(cutShape, oCorner2);
          return cutShape;
        };
        const crownOpts = {
          ...modelProperties
        };
        crownOpts.opts.type = "crown";
        const crown = {
          extraSmall: center({}, extraSmall(crownOpts)),
          small: center({}, small(crownOpts)),
          medium: center({}, medium(crownOpts)),
          large: center({}, large(crownOpts)),
          smallOrn1: center({}, smallOrnament1(crownOpts)),
          mediumOrn1: center({}, mediumOrnament1(crownOpts)),
          largeOrn1: center({}, largeOrnament1(crownOpts))
        };
        const dadoOpts = {
          ...modelProperties
        };
        dadoOpts.opts.type = "dado";
        const dado = {
          extraSmall: center({}, mirror(
            { normal: [0, 1, 0] },
            extraSmall(dadoOpts)
          )),
          small: center({}, mirror(
            { normal: [0, 1, 0] },
            small(dadoOpts)
          )),
          smallOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            smallOrnament1(dadoOpts)
          )),
          medium: center({}, mirror(
            { normal: [0, 1, 0] },
            medium(dadoOpts)
          )),
          mediumOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            mediumOrnament1(dadoOpts)
          )),
          large: center({}, mirror(
            { normal: [0, 1, 0] },
            large(dadoOpts)
          )),
          largeOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            largeOrnament1(dadoOpts)
          ))
        };
        const base = {
          extraSmall: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.extraSmall
          )),
          small: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.small
          )),
          smallOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.smallOrn1
          )),
          medium: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.medium
          )),
          mediumOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.mediumOrn1
          )),
          large: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.large
          )),
          largeOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.largeOrn1
          ))
        };
        return {
          crown,
          dado,
          base
        };
      };
      return aranea;
    };
    module2.exports = { init: trimAranea };
  }
});

// packages/swcad-js-profiles/src/trim/trim-bibliopoli.js
var require_trim_bibliopoli = __commonJS({
  "packages/swcad-js-profiles/src/trim/trim-bibliopoli.js"(exports2, module2) {
    "use strict";
    var trimBibliopoli = ({ jscad, swcadJs }) => {
      const { polygon, square } = jscad.primitives;
      const { subtract, union } = jscad.booleans;
      const { rotate, translate, mirror, center } = jscad.transforms;
      const { constants } = swcadJs.data;
      const { math } = swcadJs.calcs;
      const {
        beadsBits: beadsBitsProfiles
      } = swcadJs.profiles;
      const trimBibliopoliDefaults = () => {
        const defaultValues = {
          constants: {
            numLevels: 3
          },
          dims: {
            size: [
              math.inchesToMm(1.5),
              math.inchesToMm(0.75)
            ],
            detailDepth: math.inchesToMm(0.75) / 3
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            dado: { id: "dado", desc: "Dado Trim" },
            base: { id: "base", desc: "Base Trim" },
            crown: { id: "crown", desc: "Crown Trim" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.dado.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          detailDepth: defaultValues.dims.detailDepth
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const trimBibliopoliOpts = (opts) => {
        const defaults = trimBibliopoliDefaults();
        const {
          size = defaults.opts.size,
          detailDepth,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        let dDepth = size[1] / 3;
        if (detailDepth) {
          dDepth = detailDepth;
        }
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          size,
          detailDepth: dDepth,
          ...stdOpts
        };
        return initOpts;
      };
      const trimBibliopoliProps = (opts) => {
        const defaults = trimBibliopoliDefaults();
        const {
          size,
          detailDepth,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        const numLevels = defaults.vals.constants.numLevels;
        const levelPoints = {};
        const ornamentPoints = {};
        const thicknessPoints = {};
        for (let levelIdx = 0; levelIdx <= numLevels; levelIdx++) {
          levelPoints[`l${levelIdx}`] = width * levelIdx;
          thicknessPoints[`t${levelIdx}`] = depth * levelIdx;
          ornamentPoints[`o${levelIdx + 1}`] = width * levelIdx + width * constants.PHI_INV;
        }
        levelPoints[`lHalf`] = width / 2;
        const controlPts = {};
        const getPointsForLevel = (levelPt) => {
          const lPoints = {};
          for (const [tPtName, tPtValue] of Object.entries(thicknessPoints)) {
            lPoints[tPtName] = [tPtValue, levelPt];
          }
          return lPoints;
        };
        for (const [ptName, ptValue] of Object.entries(levelPoints)) {
          controlPts[ptName] = getPointsForLevel(ptValue);
        }
        for (const [ptName, ptValue] of Object.entries(ornamentPoints)) {
          controlPts[ptName] = getPointsForLevel(ptValue);
        }
        const modelConstants = {};
        const modelOpts = {
          type,
          scale
        };
        const modelDims = {
          size,
          detailDepth,
          interfaceThickness,
          fitGap,
          width,
          depth
        };
        const modelPoints = {
          centre: defaults.vals.points.centre,
          controlPts
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const bibliopoli = (opts) => {
        const defaults = trimBibliopoliDefaults();
        const initOpts = trimBibliopoliOpts(opts);
        const modelProperties = trimBibliopoliProps(initOpts);
        const detailCornerExt = ({ sideLength }) => {
          const coveOpts = {
            radius1: sideLength,
            radius2: sideLength
          };
          const coveData = beadsBitsProfiles.corner.cove(coveOpts);
          const coveModel = coveData[0];
          return coveModel;
        };
        const detailCornerInt = ({ sideLength }) => {
          const roundOverOpts = {
            radius1: sideLength,
            radius2: sideLength
          };
          const roundOverData = beadsBitsProfiles.corner.roundOver(roundOverOpts);
          const roundOverModel = roundOverData[0];
          return roundOverModel;
        };
        const detailOrnament = ({ sideLength }) => {
          const coveOpts = {
            radius1: sideLength,
            radius2: sideLength
          };
          const coveData = beadsBitsProfiles.corner.cove(coveOpts);
          const coveModel = coveData[0];
          return coveModel;
        };
        const extraSmall = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.lHalf.t1;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              controlPts.lHalf.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner2);
          }
          return cutShape;
        };
        const small = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.l1.t1;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              controlPts.l1.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner2);
          }
          return cutShape;
        };
        const smallOrnament1 = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const baseShape = small(mProperties);
          const oPt = controlPts.o1.t1;
          const bCorner = detailOrnament({ sideLength: detailDepth / 2 });
          const oCorner = translate([...oPt, 0], bCorner);
          return subtract(baseShape, oCorner);
        };
        const medium = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.l1.t1;
          const cornerPt3 = controlPts.l1.t2;
          const cornerPt4 = controlPts.l2.t2;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              cornerPt3,
              cornerPt4,
              controlPts.l2.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerInt);
          const corner3 = translate([...cornerPt3, 0], baseCornerExt);
          const corner4 = translate([...cornerPt4, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          cutShape = union(cutShape, corner2);
          cutShape = subtract(cutShape, corner3);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner4);
          }
          return cutShape;
        };
        const mediumOrnament1 = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const baseShape = medium(mProperties);
          const oPt1 = controlPts.o2.t2;
          const oPt2 = controlPts.o1.t1;
          const bCorner = detailOrnament({ sideLength: detailDepth / 2 });
          const oCorner1 = translate([...oPt1, 0], bCorner);
          let oCorner2 = translate([...oPt2, 0], bCorner);
          oCorner2 = mirror({ origin: [0, controlPts.l1.t1[1] / 2, 0], normal: [0, 1, 0] }, oCorner2);
          let cutShape = subtract(baseShape, oCorner1);
          cutShape = subtract(cutShape, oCorner2);
          return cutShape;
        };
        const large = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.l1.t1;
          const cornerPt3 = controlPts.l1.t2;
          const cornerPt4 = controlPts.l2.t2;
          const cornerPt5 = controlPts.l2.t3;
          const cornerPt6 = controlPts.l3.t3;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              cornerPt3,
              cornerPt4,
              cornerPt5,
              cornerPt6,
              controlPts.l3.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerInt);
          const corner3 = translate([...cornerPt3, 0], baseCornerExt);
          const corner4 = translate([...cornerPt4, 0], baseCornerInt);
          const corner5 = translate([...cornerPt5, 0], baseCornerExt);
          const corner6 = translate([...cornerPt6, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          cutShape = union(cutShape, corner2);
          cutShape = subtract(cutShape, corner3);
          cutShape = union(cutShape, corner4);
          cutShape = subtract(cutShape, corner5);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner6);
          }
          return cutShape;
        };
        const largeOrnament1 = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const baseShape = large(mProperties);
          const oPt1 = controlPts.o3.t3;
          const oPt2 = controlPts.o1.t1;
          const bCorner = detailOrnament({ sideLength: detailDepth / 2 });
          const oCorner1 = translate([...oPt1, 0], bCorner);
          let oCorner2 = translate([...oPt2, 0], bCorner);
          oCorner2 = mirror({ origin: [0, controlPts.l1.t1[1] / 2, 0], normal: [0, 1, 0] }, oCorner2);
          let cutShape = subtract(baseShape, oCorner1);
          cutShape = subtract(cutShape, oCorner2);
          return cutShape;
        };
        const crownOpts = {
          ...modelProperties
        };
        crownOpts.opts.type = "crown";
        const crown = {
          extraSmall: center({}, extraSmall(crownOpts)),
          small: center({}, small(crownOpts)),
          medium: center({}, medium(crownOpts)),
          large: center({}, large(crownOpts)),
          smallOrn1: center({}, smallOrnament1(crownOpts)),
          mediumOrn1: center({}, mediumOrnament1(crownOpts)),
          largeOrn1: center({}, largeOrnament1(crownOpts))
        };
        const dadoOpts = {
          ...modelProperties
        };
        dadoOpts.opts.type = "dado";
        const dado = {
          extraSmall: center({}, mirror(
            { normal: [0, 1, 0] },
            extraSmall(dadoOpts)
          )),
          small: center({}, mirror(
            { normal: [0, 1, 0] },
            small(dadoOpts)
          )),
          smallOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            smallOrnament1(dadoOpts)
          )),
          medium: center({}, mirror(
            { normal: [0, 1, 0] },
            medium(dadoOpts)
          )),
          mediumOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            mediumOrnament1(dadoOpts)
          )),
          large: center({}, mirror(
            { normal: [0, 1, 0] },
            large(dadoOpts)
          )),
          largeOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            largeOrnament1(dadoOpts)
          ))
        };
        const base = {
          extraSmall: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.extraSmall
          )),
          small: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.small
          )),
          smallOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.smallOrn1
          )),
          medium: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.medium
          )),
          mediumOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.mediumOrn1
          )),
          large: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.large
          )),
          largeOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.largeOrn1
          ))
        };
        return {
          crown,
          dado,
          base
        };
      };
      return bibliopoli;
    };
    module2.exports = { init: trimBibliopoli };
  }
});

// packages/swcad-js-profiles/src/trim/trim-catonis.js
var require_trim_catonis = __commonJS({
  "packages/swcad-js-profiles/src/trim/trim-catonis.js"(exports2, module2) {
    "use strict";
    var trimCatonis = ({ jscad, swcadJs }) => {
      const { polygon, square } = jscad.primitives;
      const { subtract, union } = jscad.booleans;
      const { rotate, translate, mirror, center } = jscad.transforms;
      const { constants } = swcadJs.data;
      const { math } = swcadJs.calcs;
      const {
        beadsBits: beadsBitsProfiles
      } = swcadJs.profiles;
      const trimCatonisDefaults = () => {
        const defaultValues = {
          constants: {
            numLevels: 3
          },
          dims: {
            size: [
              math.inchesToMm(1.5),
              math.inchesToMm(0.75)
            ],
            detailDepth: math.inchesToMm(0.75) / 3
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            dado: { id: "dado", desc: "Dado Trim" },
            base: { id: "base", desc: "Base Trim" },
            crown: { id: "crown", desc: "Crown Trim" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.dado.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          detailDepth: defaultValues.dims.detailDepth
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const trimCatonisOpts = (opts) => {
        const defaults = trimCatonisDefaults();
        const {
          size = defaults.opts.size,
          detailDepth,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        let dDepth = size[1] / 3;
        if (detailDepth) {
          dDepth = detailDepth;
        }
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          size,
          detailDepth: dDepth,
          ...stdOpts
        };
        return initOpts;
      };
      const trimCatonisProps = (opts) => {
        const defaults = trimCatonisDefaults();
        const {
          size,
          detailDepth,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        const numLevels = defaults.vals.constants.numLevels;
        const levelPoints = {};
        const ornamentPoints = {};
        const thicknessPoints = {};
        for (let levelIdx = 0; levelIdx <= numLevels; levelIdx++) {
          levelPoints[`l${levelIdx}`] = width * levelIdx;
          thicknessPoints[`t${levelIdx}`] = depth * levelIdx;
          ornamentPoints[`o${levelIdx + 1}`] = width * levelIdx + width * constants.PHI_INV;
        }
        levelPoints[`lHalf`] = width / 2;
        const controlPts = {};
        const getPointsForLevel = (levelPt) => {
          const lPoints = {};
          for (const [tPtName, tPtValue] of Object.entries(thicknessPoints)) {
            lPoints[tPtName] = [tPtValue, levelPt];
          }
          return lPoints;
        };
        for (const [ptName, ptValue] of Object.entries(levelPoints)) {
          controlPts[ptName] = getPointsForLevel(ptValue);
        }
        for (const [ptName, ptValue] of Object.entries(ornamentPoints)) {
          controlPts[ptName] = getPointsForLevel(ptValue);
        }
        const modelConstants = {};
        const modelOpts = {
          type,
          scale
        };
        const modelDims = {
          size,
          detailDepth,
          interfaceThickness,
          fitGap,
          width,
          depth
        };
        const modelPoints = {
          centre: defaults.vals.points.centre,
          controlPts
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const catonis = (opts) => {
        const defaults = trimCatonisDefaults();
        const initOpts = trimCatonisOpts(opts);
        const modelProperties = trimCatonisProps(initOpts);
        const detailCornerExt = ({ sideLength }) => {
          const roundOverOpts = {
            radius1: sideLength,
            radius2: sideLength
          };
          const roundOverData = beadsBitsProfiles.corner.roundOver(roundOverOpts);
          const roundOverModel = roundOverData[0];
          return roundOverModel;
        };
        const detailCornerInt = ({ sideLength }) => {
          const roundOverOpts = {
            radius1: sideLength,
            radius2: sideLength
          };
          const roundOverData = beadsBitsProfiles.corner.roundOver(roundOverOpts);
          const roundOverModel = roundOverData[0];
          return roundOverModel;
        };
        const detailOrnament = ({ sideLength }) => {
          const coveOpts = {
            radius1: sideLength,
            radius2: sideLength
          };
          const coveData = beadsBitsProfiles.corner.cove(coveOpts);
          const coveModel = coveData[0];
          return coveModel;
        };
        const extraSmall = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.lHalf.t1;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              controlPts.lHalf.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner2);
          }
          return cutShape;
        };
        const small = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.l1.t1;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              controlPts.l1.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner2);
          }
          return cutShape;
        };
        const smallOrnament1 = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const baseShape = small(mProperties);
          const oPt = controlPts.o1.t1;
          const bCorner = detailOrnament({ sideLength: detailDepth / 2 });
          const oCorner = translate([...oPt, 0], bCorner);
          return subtract(baseShape, oCorner);
        };
        const medium = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.l1.t1;
          const cornerPt3 = controlPts.l1.t2;
          const cornerPt4 = controlPts.l2.t2;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              cornerPt3,
              cornerPt4,
              controlPts.l2.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerInt);
          const corner3 = translate([...cornerPt3, 0], baseCornerExt);
          const corner4 = translate([...cornerPt4, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          cutShape = union(cutShape, corner2);
          cutShape = subtract(cutShape, corner3);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner4);
          }
          return cutShape;
        };
        const mediumOrnament1 = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const baseShape = medium(mProperties);
          const oPt1 = controlPts.o2.t2;
          const oPt2 = controlPts.o1.t1;
          const bCorner = detailOrnament({ sideLength: detailDepth / 2 });
          const oCorner1 = translate([...oPt1, 0], bCorner);
          let oCorner2 = translate([...oPt2, 0], bCorner);
          oCorner2 = mirror({ origin: [0, controlPts.l1.t1[1] / 2, 0], normal: [0, 1, 0] }, oCorner2);
          let cutShape = subtract(baseShape, oCorner1);
          cutShape = subtract(cutShape, oCorner2);
          return cutShape;
        };
        const large = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const cornerPt1 = controlPts.l0.t1;
          const cornerPt2 = controlPts.l1.t1;
          const cornerPt3 = controlPts.l1.t2;
          const cornerPt4 = controlPts.l2.t2;
          const cornerPt5 = controlPts.l2.t3;
          const cornerPt6 = controlPts.l3.t3;
          const baseShape = polygon({
            points: [
              controlPts.l0.t0,
              cornerPt1,
              cornerPt2,
              cornerPt3,
              cornerPt4,
              cornerPt5,
              cornerPt6,
              controlPts.l3.t0
            ]
          });
          const baseCornerExt = detailCornerExt({ sideLength: detailDepth });
          const baseCornerInt = detailCornerInt({ sideLength: detailDepth });
          const corner1 = translate([...cornerPt1, 0], baseCornerExt);
          const corner2 = translate([...cornerPt2, 0], baseCornerInt);
          const corner3 = translate([...cornerPt3, 0], baseCornerExt);
          const corner4 = translate([...cornerPt4, 0], baseCornerInt);
          const corner5 = translate([...cornerPt5, 0], baseCornerExt);
          const corner6 = translate([...cornerPt6, 0], baseCornerExt);
          let cutShape = subtract(baseShape, corner1);
          cutShape = union(cutShape, corner2);
          cutShape = subtract(cutShape, corner3);
          cutShape = union(cutShape, corner4);
          cutShape = subtract(cutShape, corner5);
          if (!["crown", "base"].includes(type)) {
            cutShape = subtract(cutShape, corner6);
          }
          return cutShape;
        };
        const largeOrnament1 = (mProperties) => {
          const {
            size,
            width,
            depth,
            detailDepth
          } = mProperties.dims;
          const {
            type
          } = mProperties.opts;
          const {
            controlPts,
            levelPts,
            ornamentPts,
            thicknessPts
          } = mProperties.points;
          const baseShape = large(mProperties);
          const oPt1 = controlPts.o3.t3;
          const oPt2 = controlPts.o1.t1;
          const bCorner = detailOrnament({ sideLength: detailDepth / 2 });
          const oCorner1 = translate([...oPt1, 0], bCorner);
          let oCorner2 = translate([...oPt2, 0], bCorner);
          oCorner2 = mirror({ origin: [0, controlPts.l1.t1[1] / 2, 0], normal: [0, 1, 0] }, oCorner2);
          let cutShape = subtract(baseShape, oCorner1);
          cutShape = subtract(cutShape, oCorner2);
          return cutShape;
        };
        const crownOpts = {
          ...modelProperties
        };
        crownOpts.opts.type = "crown";
        const crown = {
          extraSmall: center({}, extraSmall(crownOpts)),
          small: center({}, small(crownOpts)),
          medium: center({}, medium(crownOpts)),
          large: center({}, large(crownOpts)),
          smallOrn1: center({}, smallOrnament1(crownOpts)),
          mediumOrn1: center({}, mediumOrnament1(crownOpts)),
          largeOrn1: center({}, largeOrnament1(crownOpts))
        };
        const dadoOpts = {
          ...modelProperties
        };
        dadoOpts.opts.type = "dado";
        const dado = {
          extraSmall: center({}, mirror(
            { normal: [0, 1, 0] },
            extraSmall(dadoOpts)
          )),
          small: center({}, mirror(
            { normal: [0, 1, 0] },
            small(dadoOpts)
          )),
          smallOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            smallOrnament1(dadoOpts)
          )),
          medium: center({}, mirror(
            { normal: [0, 1, 0] },
            medium(dadoOpts)
          )),
          mediumOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            mediumOrnament1(dadoOpts)
          )),
          large: center({}, mirror(
            { normal: [0, 1, 0] },
            large(dadoOpts)
          )),
          largeOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            largeOrnament1(dadoOpts)
          ))
        };
        const base = {
          extraSmall: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.extraSmall
          )),
          small: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.small
          )),
          smallOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.smallOrn1
          )),
          medium: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.medium
          )),
          mediumOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.mediumOrn1
          )),
          large: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.large
          )),
          largeOrn1: center({}, mirror(
            { normal: [0, 1, 0] },
            crown.largeOrn1
          ))
        };
        return {
          crown,
          dado,
          base
        };
      };
      return catonis;
    };
    module2.exports = { init: trimCatonis };
  }
});

// packages/swcad-js-profiles/src/trim/index.js
var require_trim = __commonJS({
  "packages/swcad-js-profiles/src/trim/index.js"(exports2, module2) {
    "use strict";
    var araneaModule = require_trim_aranea();
    var bibliopoliModule = require_trim_bibliopoli();
    var catonisModule = require_trim_catonis();
    var init2 = ({ jscad, swcadJs }) => {
      const trim = {
        aranea: araneaModule.init({ jscad, swcadJs }),
        bibliopoli: bibliopoliModule.init({ jscad, swcadJs }),
        catonis: catonisModule.init({ jscad, swcadJs })
      };
      return trim;
    };
    module2.exports = { init: init2 };
  }
});

// packages/swcad-js-profiles/src/index.js
var require_src3 = __commonJS({
  "packages/swcad-js-profiles/src/index.js"(exports2, module2) {
    "use strict";
    var beadsBitsModule = require_beads_bits();
    var connectionsModule = require_connections();
    var curveModule = require_curve();
    var jointPanelModule = require_joint_panel();
    var shapesModule = require_shapes();
    var rectFrameModule = require_frame_rect();
    var structureModule = require_structure();
    var textModule = require_text();
    var trimModule = require_trim();
    var profilesInit = ({ jscad, swcadJs }) => {
      const shapesCore = shapesModule.init({ jscad, swcadJs });
      const curve = curveModule.init({ jscad, swcadJs });
      const beadsBits = beadsBitsModule.init({ jscad, swcadJs });
      let preLib = {
        ...swcadJs,
        profiles: {
          shapes: shapesCore,
          curve,
          beadsBits
        }
      };
      const shapes = {
        ...shapesCore,
        rectangle: {
          ...shapesCore.rectangle,
          frame: rectFrameModule.init({ jscad, swcadJs: preLib })
        }
      };
      const connections = connectionsModule.init({ jscad, swcadJs: preLib });
      preLib = {
        ...swcadJs,
        profiles: {
          shapes,
          curve,
          beadsBits,
          connections
        }
      };
      return {
        shapes,
        beadsBits,
        connections,
        curve,
        structure: structureModule.init({ jscad, swcadJs: preLib }),
        jointPanel: jointPanelModule.init({ jscad, swcadJs: preLib }),
        text: textModule.init({ jscad, swcadJs: preLib }),
        trim: trimModule.init({ jscad, swcadJs: preLib })
      };
    };
    module2.exports = {
      init: profilesInit
    };
  }
});

// packages/swcad-js-profile-spec/src/lumber/index.js
var require_lumber = __commonJS({
  "packages/swcad-js-profile-spec/src/lumber/index.js"(exports2, module2) {
    "use strict";
    var lumberInit = ({ jscad, swcadJs }) => {
      const { rectangle } = jscad.primitives;
      const { lumber } = swcadJs.data.standards;
      const dimLumberModels = [];
      for (const [stdKey, stdVal] of Object.entries(lumber.dimensional)) {
        const hasDepth = typeof stdVal === "object" && "depth" in stdVal;
        const hasWidth = typeof stdVal === "object" && "depth" in stdVal;
        if (hasDepth && hasWidth) {
          dimLumberModels.push({
            id: stdKey,
            ...stdVal,
            geom: rectangle({ size: [stdVal.width, stdVal.depth] })
          });
        }
      }
      const output = {
        dimensional: dimLumberModels
      };
      return output;
    };
    module2.exports = { init: lumberInit };
  }
});

// packages/swcad-js-profile-spec/src/paper/index.js
var require_paper = __commonJS({
  "packages/swcad-js-profile-spec/src/paper/index.js"(exports2, module2) {
    "use strict";
    var init2 = ({ jscad, swcadJs }) => {
      const { rectangle } = jscad.primitives;
      const { functions } = swcadJs.data;
      const { paper } = swcadJs.data.standards;
      const metric = {};
      Object.entries(paper.metric).forEach(([key, val]) => {
        const newKey = functions.camelCase(key.replaceAll("_", " ").toLocaleLowerCase());
        metric[newKey] = rectangle({ size: val });
      });
      const imperial = {};
      const ansi = {};
      const arch = {};
      Object.entries(paper.imperial).forEach(([key, val]) => {
        if (key === "ansi") {
          Object.entries(val).forEach(([aKey, aVal]) => {
            const ansiKey = functions.camelCase(aKey.replaceAll("_", " ").toLocaleLowerCase());
            ansi[ansiKey] = rectangle({ size: aVal });
          });
        } else if (key === "arch") {
          Object.entries(val).forEach(([arKey, arVal]) => {
            const archKey = functions.camelCase(arKey.replaceAll("_", " ").toLocaleLowerCase());
            arch[archKey] = rectangle({ size: arVal });
          });
        } else {
          const newKey = functions.camelCase(key.replaceAll("_", " ").toLocaleLowerCase());
          imperial[newKey] = rectangle({ size: val });
        }
      });
      const cards = {};
      Object.entries(paper.cards).forEach(([key, val]) => {
        const newKey = functions.camelCase(key.replaceAll("_", " ").toLocaleLowerCase());
        cards[newKey] = rectangle({ size: val });
      });
      const bookmarks = {};
      Object.entries(paper.bookmarks).forEach(([key, val]) => {
        const newKey = functions.camelCase(key.replaceAll("_", " ").toLocaleLowerCase());
        bookmarks[newKey] = rectangle({ size: val });
      });
      const poster = {};
      Object.entries(paper.poster).forEach(([key, val]) => {
        const newKey = functions.camelCase(key.replaceAll("_", " ").toLocaleLowerCase());
        poster[newKey] = rectangle({ size: val });
      });
      const photos = {};
      Object.entries(paper.photos).forEach(([key, val]) => {
        const newKey = functions.camelCase(key.replaceAll("_", " ").toLocaleLowerCase());
        photos[newKey] = rectangle({ size: val });
      });
      const outPaper = {
        metric,
        ansi,
        arch,
        imperial,
        cards,
        bookmarks,
        poster,
        photos
      };
      return outPaper;
    };
    module2.exports = { init: init2 };
  }
});

// packages/swcad-js-profile-spec/src/index.js
var require_src4 = __commonJS({
  "packages/swcad-js-profile-spec/src/index.js"(exports2, module2) {
    "use strict";
    var lumber = require_lumber();
    var paper = require_paper();
    var profileSpecInit = ({ jscad, swcadJs }) => {
      const profileSpec = {
        lumber: lumber.init({ jscad, swcadJs }),
        paper: paper.init({ jscad, swcadJs })
      };
      return profileSpec;
    };
    module2.exports = {
      init: profileSpecInit
    };
  }
});

// packages/swcad-js-components/src/beads-bits/index.js
var require_beads_bits2 = __commonJS({
  "packages/swcad-js-components/src/beads-bits/index.js"(exports2, module2) {
    "use strict";
    var beadsBitsInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        constants
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        beadsBits
      } = swcadJs.profiles;
      const modelDefaults = () => {
        const defaultValues = {
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4),
              math.inchesToMm(1)
            ]
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          radius1: math.inchesToMm(1 / 2),
          radius2: math.inchesToMm(3 / 4),
          offset1: 0,
          offset2: 0,
          offset3: 0,
          offset4: 0
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          radius1 = defaults.opts.radius1,
          radius2 = defaults.opts.radius2,
          offset1 = defaults.opts.offset1,
          offset2 = defaults.opts.offset2,
          offset3 = defaults.opts.offset3,
          offset4 = defaults.opts.offset4,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4,
          ...stdOpts
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const lgProfileBeadWidth = interfaceThickness * 1.75;
        const mdProfileBeadWidth = interfaceThickness * 1.5;
        const smProfileBeadWidth = interfaceThickness * 1.125;
        const modelConstants = {
          type,
          scale
        };
        const modelOpts2 = {
          type,
          scale
        };
        const modelDims = {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4,
          interfaceThickness,
          fitGap
        };
        const modelPoints = {
          centre: defaults.vals.points.centre
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const rabbet = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const bitProfile = beadsBits.corner.rabbet(opts)[0];
        const extrudedBit = extrudeRotate({ segments: 32 }, bitProfile);
        const mainModel = extrudedBit;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const chamfer = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const bitProfile = beadsBits.corner.chamfer(opts)[0];
        const extrudedBit = extrudeRotate({ segments: 32 }, bitProfile);
        const mainModel = extrudedBit;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const roundOver = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const bitProfile = beadsBits.corner.roundOver(opts)[0];
        const extrudedBit = extrudeRotate({ segments: 32 }, bitProfile);
        const mainModel = extrudedBit;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const cove = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const bitProfile = beadsBits.corner.cove(opts)[0];
        const extrudedBit = extrudeRotate({ segments: 32 }, bitProfile);
        const mainModel = extrudedBit;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const corner = {
        rabbet,
        chamfer,
        roundOver,
        cove
      };
      const profileBeads = (baseThickness, smWidth, mdWidth, lgWidth) => {
        const edgeOffset = baseThickness / constants.TRI_30_FACTOR / 2;
        const lgTopWidth = lgWidth - edgeOffset * 2;
        const mdTopWidth = mdWidth - edgeOffset * 2;
        const smTopWidth = smWidth - edgeOffset * 2;
        const lgProfile = cylinderElliptic({
          height: baseThickness,
          startRadius: [lgWidth / 2, lgWidth / 2],
          endRadius: [lgTopWidth / 2, lgTopWidth / 2]
        });
        const mdProfile = cylinderElliptic({
          height: baseThickness,
          startRadius: [mdWidth / 2, mdWidth / 2],
          endRadius: [mdTopWidth / 2, mdTopWidth / 2]
        });
        const smProfile = cylinderElliptic({
          height: baseThickness,
          startRadius: [smWidth / 2, smWidth / 2],
          endRadius: [smTopWidth / 2, smTopWidth / 2]
        });
        return {
          lg: lgProfile,
          md: mdProfile,
          sm: smProfile
        };
      };
      return {
        profileBeads,
        corner
      };
    };
    module2.exports = {
      init: beadsBitsInit
    };
  }
});

// packages/swcad-js-components/src/component-line/index.js
var require_component_line = __commonJS({
  "packages/swcad-js-components/src/component-line/index.js"(exports2, module2) {
    "use strict";
    var moduleInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        constants
      } = swcadJs.data;
      const {
        math,
        position,
        geometry
      } = swcadJs.calcs;
      const {
        beadsBits
      } = swcadJs.components;
      const modelDefaults = () => {
        const defaultValues = {
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4),
              math.inchesToMm(1)
            ]
          },
          points: {
            centre: [0, 0, 0],
            startPt: [math.inchesToMm(0.5), math.inchesToMm(0.5)],
            endPt: [math.inchesToMm(3), math.inchesToMm(4)]
          },
          types: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          },
          component: cuboid({
            size: [
              math.inchesToMm(6 / 16),
              math.inchesToMm(9 / 16),
              math.inchesToMm(3 / 16)
            ]
          })
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          unitLength: math.inchesToMm(1),
          startPt: defaultValues.points.startPt,
          endPt: defaultValues.points.endPt,
          endOffset: 0,
          baseLineOffset: 0,
          component: defaultValues.component
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap,
          unitLength = defaults.opts.unitLength,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          startPt = defaults.opts.startPt,
          endPt = defaults.opts.endPt,
          endOffset = defaults.opts.endOffset,
          baseLineOffset = defaults.opts.baseLineOffset,
          component = defaults.opts.component
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          unitLength,
          startPt,
          endPt,
          endOffset,
          baseLineOffset,
          component,
          ...stdOpts
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          interfaceThickness,
          fitGap,
          unitLength,
          type,
          scale,
          startPt,
          endPt,
          endOffset,
          baseLineOffset,
          component
        } = opts;
        const coordDiffs = [
          endPt[0] - startPt[0],
          endPt[1] - startPt[1]
        ];
        const midPt = [
          startPt[0] + coordDiffs[0] / 2,
          startPt[1] + coordDiffs[1] / 2
        ];
        const lineLength = Math.hypot(coordDiffs[0], coordDiffs[1]);
        const offsetLineLength = lineLength - endOffset * 2;
        const numSubLengths = Math.floor(offsetLineLength / unitLength);
        const componentUnits = numSubLengths + 1;
        const componentDims = measureDimensions(component);
        const componentBoundingBox = measureBoundingBox(component);
        const componentLineLength = offsetLineLength - componentDims[0];
        const componentUnitLength = componentLineLength / numSubLengths;
        const compLineAngle = geometry.angleOfTwoPtLine(startPt, endPt);
        const lgProfileBeadWidth = interfaceThickness * 1.75;
        const mdProfileBeadWidth = interfaceThickness * 1.5;
        const smProfileBeadWidth = interfaceThickness * 1.125;
        const modelConstants = {
          type,
          scale
        };
        const modelOpts2 = {
          type,
          scale,
          types: defaults.vals.types,
          componentUnits
        };
        const modelDims = {
          interfaceThickness,
          fitGap,
          unitLength,
          componentUnitLength,
          lineLength,
          offsetLineLength,
          componentLineLength,
          componentDims,
          componentBoundingBox,
          endOffset,
          baseLineOffset,
          lgProfileBeadWidth,
          mdProfileBeadWidth,
          smProfileBeadWidth,
          compLineAngle
        };
        const modelPoints = {
          centre: defaults.vals.points.centre,
          startPt,
          midPt,
          endPt
        };
        const modelComponents = {
          component,
          interface: {
            profileBeads: beadsBits.profileBeads(
              interfaceThickness,
              smProfileBeadWidth,
              mdProfileBeadWidth,
              lgProfileBeadWidth
            )
          }
        };
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const componentLine = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const interfaceProfileBeads = (modelProps2) => {
          const {
            interfaceThickness,
            lgProfileBeadWidth,
            mdProfileBeadWidth,
            smProfileBeadWidth
          } = modelProps2.dims;
          const edgeOffset = interfaceThickness / constants.TRI_30_FACTOR / 2;
          const lgTopWidth = lgProfileBeadWidth - edgeOffset * 2;
          const mdTopWidth = mdProfileBeadWidth - edgeOffset * 2;
          const smTopWidth = smProfileBeadWidth - edgeOffset * 2;
          const lgProfile = cylinderElliptic({
            height: interfaceThickness,
            startRadius: [lgProfileBeadWidth / 2, lgProfileBeadWidth / 2],
            endRadius: [lgTopWidth / 2, lgTopWidth / 2]
          });
          const mdProfile = cylinderElliptic({
            height: interfaceThickness,
            startRadius: [mdProfileBeadWidth / 2, mdProfileBeadWidth / 2],
            endRadius: [mdTopWidth / 2, mdTopWidth / 2]
          });
          const smProfile = cylinderElliptic({
            height: interfaceThickness,
            startRadius: [smProfileBeadWidth / 2, smProfileBeadWidth / 2],
            endRadius: [smTopWidth / 2, smTopWidth / 2]
          });
          return {
            lg: lgProfile,
            md: mdProfile,
            sm: smProfile
          };
        };
        const baseLine = (modelProps2) => {
          const {
            startPt,
            endPt
          } = modelProps2.points;
          const beadProfile = interfaceProfileBeads(modelProps2).md;
          return hull(
            translate([startPt[0], startPt[1], 0], beadProfile),
            translate([endPt[0], endPt[1], 0], beadProfile)
          );
        };
        const componentSet = (modelProps2) => {
          const {
            component
          } = modelProps2.components;
          const {
            componentUnits
          } = modelProps2.opts;
          const {
            interfaceThickness,
            fitGap,
            unitLength,
            componentUnitLength,
            lineLength,
            componentDims,
            componentBoundingBox
          } = modelProps2.dims;
          const lineComponents = [];
          for (let idx = 0; idx < componentUnits; idx++) {
            lineComponents.push(translate(
              [idx * componentUnitLength, 0, 0],
              position.ctr(component)
            ));
          }
          const cSet = position.ctr(union(...lineComponents));
          return cSet;
        };
        const cutBox = (modelProps2) => {
          const {
            interfaceThickness,
            fitGap,
            unitLength,
            lineLength,
            componentDims,
            componentBoundingBox
          } = modelProps2.dims;
          return cuboid({
            size: [
              lineLength,
              interfaceThickness * 2 + componentDims[1],
              interfaceThickness * 2 + componentDims[2]
            ]
          });
        };
        const finalAssembly = (modelProps2) => {
          const {
            interfaceThickness,
            fitGap,
            unitLength,
            lineLength,
            componentDims,
            componentBoundingBox,
            baseLineOffset,
            compLineAngle
          } = modelProps2.dims;
          const {
            startPt,
            midPt,
            endPt
          } = modelProps2.points;
          let bLine = baseLine(modelProps2);
          let cSet = componentSet(modelProps2);
          const midPoint = [midPt[0], midPt[1], 0];
          let a1 = cutBox(modelProps2);
          const rotatedCompLine = rotate(
            [0, 0, compLineAngle],
            cSet
          );
          const shiftedCompLine = translate(
            midPoint,
            rotatedCompLine
          );
          const axisOffsetAngle = compLineAngle - TAU / 4;
          const lineMidPointAdj = geometry.pointFromAngleAndDist(axisOffsetAngle, baseLineOffset);
          const lineMidPoint = [
            midPoint[0] + lineMidPointAdj[0],
            midPoint[1] + lineMidPointAdj[1]
          ];
          const combinedAssembly = union(
            position.ctrMin(bLine, lineMidPoint),
            position.ctrMin(shiftedCompLine, midPoint)
          );
          const cBox = rotate(
            [0, 0, compLineAngle],
            cutBox(modelProps2)
          );
          const cutAssembly = intersect(
            position.ctrMin(cBox, midPoint),
            combinedAssembly
          );
          return cutAssembly;
        };
        let baseLineInst = baseLine(modelProperties);
        let componentSetInst = componentSet(modelProperties);
        let cutBoxInst = cutBox(modelProperties);
        let mainPart = finalAssembly(modelProperties);
        let auxParts = {
          baseLine: baseLineInst,
          componentSet: componentSetInst,
          cutBox: cutBoxInst
        };
        return [mainPart, auxParts, modelProperties];
      };
      return componentLine;
    };
    module2.exports = {
      init: moduleInit
    };
  }
});

// packages/swcad-js-components/src/mesh/index.js
var require_mesh = __commonJS({
  "packages/swcad-js-components/src/mesh/index.js"(exports2, module2) {
    "use strict";
    var mesh3dInit = ({ jscad, swcadJs }) => {
      const { cuboid, cylinder, triangle, rectangle } = jscad.primitives;
      const { translate, rotate, align, mirror } = jscad.transforms;
      const { subtract, union } = jscad.booleans;
      const { measureBoundingBox } = jscad.measurements;
      const { extrudeRotate, extrudeLinear } = jscad.extrusions;
      const { TAU } = jscad.maths.constants;
      const {
        math
      } = swcadJs.calcs;
      const {
        mesh: mesh2d
      } = swcadJs.profiles.structure;
      const edgeFlange = (type = "inset", width, thickness, flipOpts = []) => {
        let triangleAlignOpts = {};
        let triangleMirrorOpts = null;
        let bearingSurfaceAlignOpts = {};
        let mirrorOpts = null;
        const height = width * 2;
        if (type === "inset") {
          triangleAlignOpts = { modes: ["max", "min", "center"], relativeTo: [0, 0, 0] };
          bearingSurfaceAlignOpts = { modes: ["max", "max", "center"], relativeTo: [0, 0, 0] };
          if (flipOpts.includes("vertical")) {
            triangleAlignOpts.modes = ["max", "max", "center"];
            bearingSurfaceAlignOpts.modes = ["max", "min", "center"];
            triangleMirrorOpts = { normal: [0, 1, 0], origin: [0, -height - thickness, 0] };
          }
        } else if (type === "offset") {
          triangleAlignOpts = { modes: ["min", "min", "center"], relativeTo: [0, 0, 0] };
          bearingSurfaceAlignOpts = { modes: ["min", "max", "center"], relativeTo: [0, 0, 0] };
          mirrorOpts = { normal: [1, 0, 0] };
          if (flipOpts.includes("vertical")) {
            triangleAlignOpts.modes = ["max", "max", "center"];
            bearingSurfaceAlignOpts.modes = ["max", "min", "center"];
            triangleMirrorOpts = { normal: [0, 1, 0], origin: [0, -height - thickness, 0] };
          }
        } else {
          return null;
        }
        let triangleProfile = triangle({ type: "SAS", values: [width, TAU / 4, height] });
        if (triangleMirrorOpts != null) {
          triangleProfile = mirror(triangleMirrorOpts, triangleProfile);
        }
        const triangleSection = align(
          triangleAlignOpts,
          triangleProfile
        );
        const bearingSurface = align(
          bearingSurfaceAlignOpts,
          rectangle({ size: [width, thickness] })
        );
        let finalShape = union(bearingSurface, triangleSection);
        if (mirrorOpts != null) {
          finalShape = mirror(mirrorOpts, finalShape);
        }
        return align({ modes: ["center", "center", "center"] }, finalShape);
      };
      const meshPanel = ({
        size,
        thickness = 1.333333,
        edgeMargin = math.inchesToMm(1 / 8),
        holeRadius,
        holeDistance,
        holePattern = "tri"
      }) => {
        const mPanelProfile = mesh2d.meshPanel({
          size: [size[0], size[1]],
          edgeMargin,
          holeRadius,
          holeDistance,
          holePattern
        })[0];
        const mPanel = extrudeLinear({ height: thickness }, mPanelProfile);
        return mPanel;
      };
      const meshCylinder = ({
        radius: radius2,
        height,
        segments = 16,
        thickness = 2,
        edgeMargin,
        edgeInsets = [0, 0],
        edgeOffsets = [0, 0],
        meshRadius,
        meshMinWidth,
        meshSegments = 16
      }) => {
        const specs = {
          edgeMargin: edgeMargin || meshMinWidth
        };
        const baseCylinder = cylinder({ radius: radius2, height, segments });
        const cutCylinder = cylinder({ radius: radius2 - thickness, height: height + radius2, segments });
        const baseShape = align(
          { modes: ["center", "center", "min"] },
          subtract(baseCylinder, cutCylinder)
        );
        const circumference = TAU * radius2;
        let numPunches = 1;
        let circCtr = numPunches * meshRadius;
        while (circCtr < circumference) {
          circCtr += meshRadius * 2 + meshMinWidth;
          if (circCtr < circumference) {
            numPunches += 1;
          }
        }
        const punches = [];
        for (let idx = 0; idx < numPunches; idx++) {
          const currAngle = idx / numPunches * TAU;
          punches.push(rotate([0, 0, currAngle], align(
            { modes: ["min", "center", "center"] },
            rotate(
              [0, Math.PI / 2, 0],
              cylinder({ radius: meshRadius, height: radius2 * 2, segments: meshSegments })
            )
          )));
        }
        let numPunchDiscs = 1;
        let htCtr = 0;
        let remainingHt = height;
        let discHeightInterval = (meshRadius * 2 + meshMinWidth) * 0.86603;
        while (htCtr < height) {
          htCtr += discHeightInterval;
          if (htCtr < height) {
            numPunchDiscs += 1;
            remainingHt -= discHeightInterval;
          }
        }
        const completePunch = align(
          { modes: ["center", "center", "min"], relativeTo: [0, 0, (specs.edgeMargin + remainingHt) / 2 * 0.86603] },
          union(...punches)
        );
        let reinforcedTube = baseShape;
        const hasInset = edgeInsets.some((insetVal) => insetVal > 0);
        const hasOffset = edgeOffsets.some((offsetVal) => offsetVal > 0);
        if (hasInset) {
          edgeInsets.forEach((insetWidth, idx) => {
            if (insetWidth === 0) {
              return;
            }
            const isTop = idx === 0;
            let sectionAlignOpts = {};
            let ringAlignOpts = {};
            const flipOpts = [];
            if (isTop) {
              sectionAlignOpts = { modes: ["min", "min", "max"], relativeTo: [0, 0, height] };
              ringAlignOpts = { modes: ["center", "center", "max"], relativeTo: [0, 0, height] };
              flipOpts.push("vertical");
            } else {
              sectionAlignOpts = { modes: ["min", "min", "min"], relativeTo: [0, 0, 0] };
              ringAlignOpts = { modes: ["center", "center", "min"], relativeTo: [0, 0, 0] };
            }
            const insetSection = align(
              sectionAlignOpts,
              edgeFlange("inset", insetWidth, 0.5, flipOpts)
            );
            const insetRing = align(
              ringAlignOpts,
              extrudeRotate({ segments }, translate([radius2 - thickness - insetWidth, 0, 0], insetSection))
            );
            reinforcedTube = union(reinforcedTube, insetRing);
          });
        }
        if (hasOffset) {
          edgeOffsets.forEach((offsetWidth, idx) => {
            if (offsetWidth === 0) {
              return;
            }
            const isTop = idx === 0;
            let sectionAlignOpts = {};
            let ringAlignOpts = {};
            const flipOpts = [];
            if (isTop) {
              sectionAlignOpts = { modes: ["min", "min", "max"], relativeTo: [0, 0, height] };
              ringAlignOpts = { modes: ["center", "center", "max"], relativeTo: [0, 0, height] };
              flipOpts.push("vertical");
            } else {
              sectionAlignOpts = { modes: ["min", "min", "min"], relativeTo: [0, 0, 0] };
              ringAlignOpts = { modes: ["center", "center", "min"], relativeTo: [0, 0, 0] };
            }
            const offsetSection = align(
              sectionAlignOpts,
              edgeFlange("offset", offsetWidth, 0.5, flipOpts)
            );
            const offsetRing = align(
              ringAlignOpts,
              extrudeRotate({ segments }, translate([radius2, 0, 0], offsetSection))
            );
            reinforcedTube = union(reinforcedTube, offsetRing);
          });
        }
        let punchedTube = subtract(reinforcedTube, completePunch);
        for (let idx = 0; idx < numPunchDiscs - 1; idx++) {
          const zOffset = discHeightInterval * idx;
          let discRotation = [0, 0, 0];
          if (math.isOdd(idx)) {
            discRotation = [0, 0, TAU / (numPunches * 2)];
          }
          punchedTube = subtract(
            punchedTube,
            translate(
              [0, 0, zOffset],
              rotate(discRotation, completePunch)
            )
          );
        }
        return punchedTube;
      };
      return {
        meshPanel,
        meshCylinder
      };
    };
    module2.exports = { init: mesh3dInit };
  }
});

// packages/swcad-js-components/src/moulding/index.js
var require_moulding = __commonJS({
  "packages/swcad-js-components/src/moulding/index.js"(exports2, module2) {
    "use strict";
    var mouldBuilder = ({ jscad, swLib }) => {
      const { measureBoundingBox } = jscad.measurements;
      const { extrudeLinear, extrudeRotate } = jscad.extrusions;
      const { union, intersect } = jscad.booleans;
      const { rotate, align, translate, mirror } = jscad.transforms;
      const { cuboid, cylinder } = jscad.primitives;
      const cuboidMouldingOneEdge = (opts, geomProfile) => {
        const profileBbox = measureBoundingBox(geomProfile);
        const profileSize = [
          profileBbox[1][0] - profileBbox[0][0],
          profileBbox[1][1] - profileBbox[0][1]
        ];
        const baseBlock = cuboid({
          size: [
            opts.size[0] - profileSize[0],
            opts.size[1],
            opts.size[2]
          ]
        });
        const edgeBlock = rotate(
          [Math.PI / 2, 0, 0],
          extrudeLinear(
            { height: opts.size[1] },
            geomProfile
          )
        );
        const baseBlockBbox = measureBoundingBox(baseBlock);
        const alignedEdgeBlock = align({
          modes: ["min", "max", "none"],
          relativeTo: baseBlockBbox[1]
        }, edgeBlock);
        return align(
          { modes: ["center", "center", "none"] },
          union(baseBlock, alignedEdgeBlock)
        );
      };
      const cuboidMouldingTwoEdges = (opts, geomProfile) => {
        let returnBlock = null;
        switch (opts.axis) {
          case "y":
            const yHalfSize = [opts.size[1] / 2, opts.size[0], opts.size[2]];
            const yHalfBlock = rotate(
              [0, 0, Math.PI / -2],
              cuboidMouldingOneEdge(
                { size: yHalfSize },
                geomProfile
              )
            );
            const yHalfBlockAdj = align({ modes: ["center", "max", "none"] }, yHalfBlock);
            const yBlock = union(
              yHalfBlockAdj,
              mirror({ normal: [0, 1, 0] }, yHalfBlockAdj)
            );
            returnBlock = yBlock;
            break;
          case "x":
          default:
            const xHalfSize = [opts.size[0] / 2, opts.size[1], opts.size[2]];
            const xHalfBlock = align(
              { modes: ["min", "center", "none"] },
              cuboidMouldingOneEdge({ size: xHalfSize }, geomProfile)
            );
            const xBlock = union(xHalfBlock, mirror({ normal: [1, 0, 0] }, xHalfBlock));
            returnBlock = xBlock;
            break;
        }
        return returnBlock;
      };
      const cuboidMoulding = (opts, geomProfile) => {
        const xHalfSize = [opts.size[0] / 2, opts.size[1], opts.size[2]];
        const xHalfBlock = align(
          { modes: ["min", "center", "none"] },
          cuboidMouldingOneEdge({ size: xHalfSize }, geomProfile)
        );
        const xBlock = union(xHalfBlock, mirror({ normal: [1, 0, 0] }, xHalfBlock));
        const yHalfSize = [opts.size[1] / 2, opts.size[0], opts.size[2]];
        const yHalfBlock = rotate(
          [0, 0, Math.PI / -2],
          cuboidMouldingOneEdge(
            { size: yHalfSize },
            geomProfile
          )
        );
        const yHalfBlockAdj = align({ modes: ["center", "max", "none"] }, yHalfBlock);
        const yBlock = union(
          yHalfBlockAdj,
          mirror({ normal: [0, 1, 0] }, yHalfBlockAdj)
        );
        return intersect(xBlock, yBlock);
      };
      const circularMoulding = (opts, geomProfile) => {
        const profileBbox = measureBoundingBox(geomProfile);
        const profileSize = [
          profileBbox[1][0] - profileBbox[0][0],
          profileBbox[1][1] - profileBbox[0][1]
        ];
        const baseCylRad = opts.radius - profileSize[0];
        const baseCyl = cylinder({
          radius: baseCylRad + 0.05,
          height: opts.height
        });
        const adjProfile = translate([baseCylRad + profileSize[0] / 2], geomProfile);
        const edgeMoulding = extrudeRotate({ segments: opts.segments || 48 }, adjProfile);
        return union(baseCyl, edgeMoulding);
      };
      return {
        cuboidMouldingOneEdge,
        cuboidMouldingTwoEdges,
        cuboidMoulding,
        circularMoulding
      };
    };
    module2.exports = { init: mouldBuilder };
  }
});

// packages/swcad-js-components/src/open-web-joist/index.js
var require_open_web_joist = __commonJS({
  "packages/swcad-js-components/src/open-web-joist/index.js"(exports2, module2) {
    "use strict";
    var openWebJoistInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        beadsBits
      } = swcadJs.components;
      const modelDefaults = () => {
        const defaultValues = {
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4),
              math.inchesToMm(1)
            ]
          },
          points: {
            centre: [0, 0, 0]
          },
          typeDetails: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          },
          width: math.inchesToMm(1.125),
          length: math.inchesToMm(5.5),
          type: "default",
          reinforcementLevel: 1,
          unitLength: math.inchesToMm(1),
          dowelHolderLength: math.inchesToMm(5 / 16),
          interfaceThickness: 1.333,
          fitGap: math.inchesToMm(1 / 128),
          ratioDiamToHolderHeight: 1.666667,
          ratioDiamToChannelDepth: 0.866667,
          ratioDiamToSideChannelWidth: 1,
          ratioDiamToDowelDepth: 0.333333
        };
        const defaultOpts = {
          type: "default",
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128),
          logMode: "normal",
          width: defaultValues.width,
          length: defaultValues.length,
          reinforcementLevel: defaultValues.reinforcementLevel,
          unitLength: defaultValues.unitLength,
          dowelHolderLength: defaultValues.dowelHolderLength
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          type,
          scale,
          interfaceThickness,
          fitGap,
          logMode,
          width,
          length,
          reinforcementLevel,
          unitLength,
          dowelHolderLength
        } = opts;
        const lgProfileBeadWidth = interfaceThickness * 1.75;
        const mdProfileBeadWidth = interfaceThickness * 1.5;
        const smProfileBeadWidth = interfaceThickness * 1.125;
        const lengthUnits = Math.ceil(length / unitLength);
        const edgeWidth = lgProfileBeadWidth;
        const supportWidth = mdProfileBeadWidth;
        const lightSupportWidth = smProfileBeadWidth;
        const modelConstants = {
          ratioDiamToHolderHeight: defaults.vals.ratioDiamToHolderHeight,
          ratioDiamToChannelDepth: defaults.vals.ratioDiamToChannelDepth,
          ratioDiamToSideChannelWidth: defaults.vals.ratioDiamToSideChannelWidth,
          ratioDiamToDowelDepth: defaults.vals.ratioDiamToDowelDepth
        };
        const modelOpts = {
          type,
          scale,
          reinforcementLevel
        };
        const modelDims = {
          width,
          length,
          unitLength,
          lengthUnits,
          dowelHolderLength,
          interfaceThickness,
          fitGap,
          edgeWidth,
          supportWidth,
          lightSupportWidth
        };
        const modelPoints = {
          centre: defaults.vals.points.centre
        };
        const modelComponents = {
          interfaceProfileBeads: beadsBits.profileBeads(
            interfaceThickness,
            smProfileBeadWidth,
            mdProfileBeadWidth,
            lgProfileBeadWidth
          )
        };
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const openWebJoist = (opts) => {
        const defaults = modelDefaults();
        const {
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap,
          logMode = defaults.opts.logMode,
          width = defaults.opts.width,
          length = defaults.opts.length,
          // // dowelRadius = defaults.opts.dowelRadius,
          // // dovetailOpt = defaults.opts.dovetailOpt,
          reinforcementLevel = defaults.opts.reinforcementLevel,
          unitLength = defaults.opts.unitLength,
          dowelHolderLength = defaults.opts.dowelHolderLength
        } = opts;
        const inOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap,
          logMode,
          width,
          length,
          // dovetailOpt,
          reinforcementLevel,
          unitLength,
          dowelHolderLength
        };
        const modelProperties = modelProps(inOpts);
        const framePanelWebs = (modelProps2) => {
          const {
            reinforcementLevel: reinforcementLevel2
          } = modelProps2.opts;
          const {
            size,
            lengthUnits,
            unitLength: unitLength2,
            length: length2,
            interfaceThickness: interfaceThickness2,
            fitGap: fitGap2,
            width: width2,
            edgeWidth,
            supportWidth,
            lightSupportWidth
          } = modelProps2.dims;
          const {
            interfaceProfileBeads
          } = modelProps2.components;
          const panelPtsWidth = width2 - edgeWidth;
          const braceUnitSize = [
            panelPtsWidth,
            unitLength2
          ];
          const braceUnitMidpoint = [
            braceUnitSize[0] / 2,
            braceUnitSize[1] / 2
          ];
          const braceUnitCentrePoints = [];
          for (let idx = 0; idx < lengthUnits; idx++) {
            braceUnitCentrePoints.push([
              braceUnitMidpoint[0],
              unitLength2 * idx + braceUnitMidpoint[1],
              0
            ]);
          }
          let braceUnitPts = [
            [0, 0, 0],
            [braceUnitSize[0], braceUnitSize[1], 0],
            [braceUnitSize[0], 0, 0],
            [0, braceUnitSize[1], 0]
          ];
          const supportPts = braceUnitPts.map((buPt) => {
            return translate(buPt, interfaceProfileBeads.md);
          });
          const supportLine1 = hull(supportPts[0], supportPts[1]);
          const supportLine2 = hull(supportPts[2], supportPts[3]);
          let diagonalSupports = supportLine1;
          if (reinforcementLevel2 > 1) {
            diagonalSupports = union(supportLine1, supportLine2);
          }
          const lightSupportPts = [
            [0, 0, 0],
            [braceUnitSize[0], 0, 0],
            [0, braceUnitSize[1], 0],
            [braceUnitSize[0], braceUnitSize[1], 0],
            [0, braceUnitMidpoint[1], 0],
            [braceUnitSize[0], braceUnitMidpoint[1], 0]
          ];
          let lightSupportProfilePts = lightSupportPts.map((lsPts) => {
            return translate(lsPts, interfaceProfileBeads.sm);
          });
          const lightSupportLine1 = hull(lightSupportProfilePts[0], lightSupportProfilePts[1]);
          const lightSupportLine2 = hull(lightSupportProfilePts[2], lightSupportProfilePts[3]);
          const lightSupportLine3 = hull(lightSupportProfilePts[4], lightSupportProfilePts[5]);
          let lightSupports = union(
            lightSupportLine1,
            lightSupportLine2
          );
          if (reinforcementLevel2 > 2) {
            lightSupports = union(
              lightSupports,
              lightSupportLine3
            );
          }
          const braceUnit = union(
            diagonalSupports,
            lightSupports
          );
          let braceUnits = braceUnitCentrePoints.map((bucPt) => {
            return align({ modes: ["center", "center", "center"], relativeTo: bucPt }, braceUnit);
          });
          braceUnits = union(...braceUnits);
          const edgePts = [
            [0, 0, 0],
            [0, length2, 0],
            [braceUnitSize[0], 0, 0],
            [braceUnitSize[0], length2, 0]
          ];
          const edgeProfilePts = edgePts.map((edgePt) => {
            return align({
              modes: ["center", "center", "center"],
              relativeTo: edgePt
            }, interfaceProfileBeads.lg);
          });
          const edge1 = hull(edgeProfilePts[0], edgeProfilePts[1]);
          const edge2 = hull(edgeProfilePts[2], edgeProfilePts[3]);
          const joistEdges = union(
            edge1,
            edge2
          );
          let endCap = cuboid({ size: [width2, edgeWidth, interfaceThickness2] });
          endCap = align({
            modes: ["min", "min", "center"],
            relativeTo: [edgeWidth / -2, 0, 0]
          }, endCap);
          const endCaps = union(
            endCap,
            translate([0, length2 - edgeWidth, 0], endCap)
          );
          const joistWebs = union(
            position.ctr(joistEdges),
            position.ctr(braceUnits),
            position.ctr(endCaps)
          );
          const keepArea = cuboid({
            size: [
              width2,
              length2,
              interfaceThickness2 * 2
            ]
          });
          return intersect(joistWebs, keepArea);
        };
        const finalAssembly = (modelProps2) => {
          fPanelWebs = framePanelWebs(modelProps2);
          return fPanelWebs;
        };
        let fPanelWebs = framePanelWebs(modelProperties);
        let mainModel = finalAssembly(modelProperties);
        let modelParts = {
          framePanelWebs: fPanelWebs
        };
        return [mainModel, modelParts, modelProperties];
      };
      return openWebJoist;
    };
    module2.exports = {
      init: openWebJoistInit
    };
  }
});

// packages/swcad-js-components/src/reinforced-rect-panel/index.js
var require_reinforced_rect_panel = __commonJS({
  "packages/swcad-js-components/src/reinforced-rect-panel/index.js"(exports2, module2) {
    "use strict";
    var reinforcedRectPanelInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math
      } = swcadJs.calcs;
      const {
        shapes
      } = swcadJs.profiles;
      const reinforcedRectPanelDefaults = () => {
        const defaultValues = {
          constants: {
            reinforcementPatterns: ["x", "cross", "diamond", "full"]
          },
          dims: {
            size: [
              math.inchesToMm(3),
              math.inchesToMm(4),
              math.inchesToMm(1 / 8)
            ],
            reinforcementThickness: [5, 4, 3]
          },
          points: {
            centrePt: [0, 0, 0]
          },
          types: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          reinforcementPattern: defaultValues.constants.reinforcementPatterns[0],
          reinforcementThickness: defaultValues.dims.reinforcementThickness
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const reinforcedRectPanelOpts = (opts) => {
        const defaults = reinforcedRectPanelDefaults();
        console.log("modelOpts() -- opts", opts);
        const {
          size = defaults.opts.size,
          reinforcementPattern = defaults.opts.reinforcementPattern,
          reinforcementThickness = defaults.opts.reinforcementThickness,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          size,
          reinforcementPattern,
          reinforcementThickness,
          ...stdOpts
        };
        console.log("modelOpts() -- initOpts", initOpts);
        return initOpts;
      };
      const reinforcedRectPanelProps = (opts) => {
        const defaults = reinforcedRectPanelDefaults();
        console.log("modelProps() -- opts", opts);
        const {
          size,
          reinforcementPattern,
          reinforcementThickness,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        const height = size[2];
        const modelConstants = {};
        const modelOpts = {
          type,
          scale,
          reinforcementPattern
        };
        const modelDims = {
          size,
          width,
          depth,
          height,
          reinforcementThickness,
          interfaceThickness,
          fitGap
        };
        const modelPoints = {
          centrePt: defaults.vals.points.centrePt
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        console.log("modelProps() -- modelProperties", modelProperties);
        return modelProperties;
      };
      const reinforcedRectPanel = (opts) => {
        const defaults = reinforcedRectPanelDefaults();
        const initOpts = reinforcedRectPanelOpts(opts);
        const modelProperties = reinforcedRectPanelProps(initOpts);
        const {
          reinforcementPattern
        } = modelProperties.opts;
        const {
          size,
          reinforcementThickness
        } = modelProperties.dims;
        const reinforcedRectOpts = {
          size: [size[0], size[1]],
          reinforcementPattern,
          reinforcementThickness
        };
        const reinforcedRect = shapes.rectangle.reinforcedRect(reinforcedRectOpts)[0];
        const extrudedReinforcedRect = extrudeLinear({ height: size[2] }, reinforcedRect);
        const mainModel = extrudedReinforcedRect;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      return reinforcedRectPanel;
    };
    module2.exports = {
      init: reinforcedRectPanelInit
    };
  }
});

// packages/swcad-js-components/src/routed-shapes/index.js
var require_routed_shapes = __commonJS({
  "packages/swcad-js-components/src/routed-shapes/index.js"(exports2, module2) {
    "use strict";
    var routedShapesInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math,
        geometry,
        position
      } = swcadJs.calcs;
      const {
        beadsBits: beadsBits2d
      } = swcadJs.profiles;
      const {
        beadsBits
      } = swcadJs.components;
      const modelDefaults = () => {
        const defaultValues = {
          dims: {
            size: [
              math.inchesToMm(3),
              math.inchesToMm(6),
              math.inchesToMm(2)
            ],
            height: math.inchesToMm(2),
            radius: [math.inchesToMm(1.5), math.inchesToMm(3)]
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          },
          topBit: {
            type: "chamfer",
            radius1: math.inchesToMm(1 / 2),
            radius2: math.inchesToMm(3 / 4),
            offset1: 0,
            offset2: 0,
            offset3: 0,
            offset4: 0
          },
          bottomBit: {
            type: "cove",
            radius1: math.inchesToMm(1 / 2),
            radius2: math.inchesToMm(3 / 4),
            offset1: 0,
            offset2: 0,
            offset3: 0,
            offset4: 0
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          height: defaultValues.dims.height,
          radius: defaultValues.dims.radius,
          topBit: defaultValues.topBit.type,
          topBitOpts: defaultValues.topBit,
          bottomBit: defaultValues.bottomBit.type,
          bottomBitOpts: defaultValues.bottomBit
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelCuboidOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          size = defaults.opts.size,
          topBit = defaults.opts.topBit,
          topBitOpts = defaults.opts.topBitOpts,
          bottomBit = defaults.opts.bottomBit,
          bottomBitOpts = defaults.opts.bottomBitOpts,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          size,
          topBit,
          topBitOpts,
          bottomBit,
          bottomBitOpts,
          ...stdOpts
        };
        return initOpts;
      };
      const modelCylinderEllipticOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          height = defaults.opts.height,
          radius: radius2 = defaults.opts.radius,
          topBit = defaults.opts.topBit,
          topBitOpts = defaults.opts.topBitOpts,
          bottomBit = defaults.opts.bottomBit,
          bottomBitOpts = defaults.opts.bottomBitOpts,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          height,
          radius: radius2,
          topBit,
          topBitOpts,
          bottomBit,
          bottomBitOpts,
          ...stdOpts
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          size,
          height,
          radius: radius2,
          topBit,
          topBitOpts,
          bottomBit,
          bottomBitOpts,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const lgProfileBeadWidth = interfaceThickness * 1.75;
        const mdProfileBeadWidth = interfaceThickness * 1.5;
        const smProfileBeadWidth = interfaceThickness * 1.125;
        const modelConstants = {
          type,
          scale
        };
        const modelOpts = {
          type,
          scale,
          topBit,
          bottomBit
        };
        const modelDims = {
          size,
          height,
          radius: radius2,
          topBit: topBitOpts,
          bottomBit: bottomBitOpts,
          interfaceThickness,
          fitGap
        };
        const modelPoints = {
          centre: defaults.vals.points.centre
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const generateRouterCutPath = (outlinePts, bitProfile, bitModel) => {
        const closedOutlinePts = [
          ...outlinePts,
          outlinePts[0]
        ];
        const cutPoints = outlinePts.map((outlinePt) => {
          return translate(
            [
              outlinePt[0],
              outlinePt[1],
              0
            ],
            bitModel
          );
        });
        const lineData = geometry.getLineDataFromOutlinePoints(closedOutlinePts);
        const lineModels = lineData.map((lData) => {
          let lineModel = extrudeLinear({ height: lData.length }, bitProfile);
          lineModel = rotate(
            [TAU / 4, 0, TAU / -4],
            lineModel
          );
          lineModel = position.ctr(lineModel);
          let adjLineModel = rotate([0, 0, lData.angle], lineModel);
          adjLineModel = translate([
            lData.mid[0],
            lData.mid[1],
            0
          ], adjLineModel);
          return adjLineModel;
        });
        const cutLines = lineModels;
        const cutPath = union(
          ...cutPoints,
          ...cutLines
        );
        return cutPath;
      };
      const routerCut = (outlinePts, bitType, bitOpts) => {
        let baseRouterBitProfile = null;
        let baseRouterBit = null;
        let cutPathGenMode = "complex";
        switch (bitType) {
          case "cove":
            baseRouterBitProfile = beadsBits2d.corner.cove(bitOpts)[0];
            baseRouterBit = beadsBits.corner.cove(bitOpts)[0];
            break;
          case "roundOver":
            baseRouterBitProfile = beadsBits2d.corner.roundOver(bitOpts)[0];
            baseRouterBit = beadsBits.corner.roundOver(bitOpts)[0];
            break;
          case "rabbet":
            baseRouterBitProfile = beadsBits2d.corner.rabbet(bitOpts)[0];
            baseRouterBit = beadsBits.corner.rabbet(bitOpts)[0];
            break;
          case "chamfer":
          default:
            baseRouterBitProfile = beadsBits2d.corner.chamfer(bitOpts)[0];
            baseRouterBit = beadsBits.corner.chamfer(bitOpts)[0];
            cutPathGenMode = "naive";
            break;
        }
        const cutPath = generateRouterCutPath(outlinePts, baseRouterBitProfile, baseRouterBit);
        return cutPath;
      };
      const routedCuboid = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelCuboidOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          topBit: topBitType,
          bottomBit: bottomBitType
        } = modelProperties.opts;
        const {
          size,
          topBit,
          bottomBit
        } = modelProperties.dims;
        const baseShape = cuboid({
          size
        });
        const baseShapeProfile = project({}, baseShape);
        const baseShapeProfileOutlinePts = toOutlines(baseShapeProfile)[0];
        const cutPathTop = routerCut(baseShapeProfileOutlinePts, topBitType, topBit);
        const cutPathBottom = routerCut(baseShapeProfileOutlinePts, bottomBitType, bottomBit);
        let cutShape = baseShape;
        const hasTop = !!topBitType && topBitType != "none";
        const hasBottom = !!bottomBitType && bottomBitType != "none";
        if (hasTop) {
          cutShape = subtract(
            cutShape,
            translate([0, 0, size[2] / 2], cutPathTop)
          );
        }
        if (hasBottom) {
          cutShape = subtract(
            cutShape,
            translate([0, 0, size[2] / -2], cutPathBottom)
          );
        }
        const mainModel = cutShape;
        const modelParts = {
          mainModel,
          cutPathTop,
          cutPathBottom
        };
        return [mainModel, modelParts, modelProperties];
      };
      const routedCylinderElliptic = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelCylinderEllipticOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          topBit: topBitType,
          bottomBit: bottomBitType
        } = modelProperties.opts;
        const {
          height,
          radius: radius2,
          topBit,
          bottomBit
        } = modelProperties.dims;
        const baseShape = cylinderElliptic({
          height,
          startRadius: radius2,
          endRadius: radius2
        });
        const baseShapeProfile = project({}, baseShape);
        const baseShapeProfileOutlinePts = toOutlines(baseShapeProfile)[0];
        const cutPathTop = routerCut(baseShapeProfileOutlinePts, topBitType, topBit);
        const cutPathBottom = routerCut(baseShapeProfileOutlinePts, bottomBitType, bottomBit);
        let cutShape = baseShape;
        const hasTop = !!topBitType && topBitType != "none";
        const hasBottom = !!bottomBitType && bottomBitType != "none";
        if (hasTop) {
          cutShape = subtract(
            cutShape,
            translate([0, 0, height / 2], cutPathTop)
          );
        }
        if (hasBottom) {
          cutShape = subtract(
            cutShape,
            translate([0, 0, height / -2], cutPathBottom)
          );
        }
        const mainModel = cutShape;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const routedShapes = {
        routedCuboid,
        routedCylinderElliptic
      };
      return routedShapes;
    };
    module2.exports = {
      init: routedShapesInit
    };
  }
});

// packages/swcad-js-components/src/sheet-mould/index.js
var require_sheet_mould = __commonJS({
  "packages/swcad-js-components/src/sheet-mould/index.js"(exports2, module2) {
    "use strict";
    var moduleInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        beadsBits,
        mesh: meshLib
      } = swcadJs.components;
      const modelDefaults = () => {
        const interfaceThickness = 1.333333;
        const edgeMargin = math.inchesToMm(1 / 4);
        const modelTypes = {
          default: { id: "default", desc: "Default" },
          alt: { id: "alt", desc: "Alternate" }
        };
        const defaultValues = {
          opts: {
            type: modelTypes.default.id,
            scale: 1,
            bead: {
              type: "cone"
            },
            mesh: {
              segments: 8
            }
          },
          dims: {
            interfaceThickness,
            fitGap: math.inchesToMm(1 / 128),
            edgeMargin,
            bead: {
              radius: math.inchesToMm(1 / 16),
              height: math.inchesToMm(1 / 16)
            },
            mesh: {
              radius: math.inchesToMm(3 / 32),
              distance: interfaceThickness * 0.75 + math.inchesToMm(3 / 32),
              thickness: interfaceThickness,
              margin: edgeMargin
            }
          },
          points: {
            dots: [
              [
                math.inchesToMm(2),
                math.inchesToMm(2)
              ],
              [
                math.inchesToMm(-2),
                math.inchesToMm(2)
              ],
              [
                math.inchesToMm(2),
                math.inchesToMm(-2)
              ],
              [
                math.inchesToMm(-2),
                math.inchesToMm(-2)
              ]
            ],
            lines: [
              [
                [
                  math.inchesToMm(1.5),
                  math.inchesToMm(-1.5)
                ],
                [
                  math.inchesToMm(1.5),
                  math.inchesToMm(1.5)
                ]
              ],
              [
                [
                  math.inchesToMm(-1.5),
                  math.inchesToMm(-1.5)
                ],
                [
                  math.inchesToMm(-1.5),
                  math.inchesToMm(1.5)
                ]
              ]
            ]
          }
        };
        const standardOpts = {
          type: defaultValues.opts.type,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          bead: {
            type: defaultValues.opts.bead.type,
            radius: defaultValues.dims.bead.radius,
            height: defaultValues.dims.bead.height
          },
          mesh: {
            segments: defaultValues.opts.mesh.segments,
            radius: defaultValues.dims.mesh.radius,
            distance: defaultValues.dims.mesh.distance,
            thickness: defaultValues.dims.mesh.thickness,
            margin: defaultValues.dims.mesh.margin
          },
          edgeMargin: defaultValues.dims.edgeMargin,
          dots: defaultValues.points.dots,
          lines: defaultValues.points.lines
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          size = defaults.opts.size,
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap,
          bead = defaults.opts.bead,
          mesh = defaults.opts.mesh,
          edgeMargin = defaults.opts.edgeMargin,
          dots = defaults.opts.dots,
          lines = defaults.opts.lines
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          bead,
          mesh,
          edgeMargin,
          dots,
          lines,
          ...stdOpts
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          size,
          type,
          scale,
          interfaceThickness,
          fitGap,
          bead,
          mesh,
          edgeMargin,
          dots,
          lines
        } = opts;
        const lgProfileBeadWidth = interfaceThickness * 1.75;
        const mdProfileBeadWidth = interfaceThickness * 1.5;
        const smProfileBeadWidth = interfaceThickness * 1.125;
        let width = null;
        let depth = null;
        let minX = Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxX = Number.MIN_VALUE;
        let maxY = Number.MIN_VALUE;
        const checkPt = (pt) => {
          const currentX = pt[0];
          const currentY = pt[1];
          if (currentX < minX) {
            minX = currentX;
          } else if (currentX > maxX) {
            maxX = currentX;
          }
          if (currentY < minY) {
            minY = currentY;
          } else if (currentY > maxY) {
            maxY = currentY;
          }
        };
        dots.forEach((dot) => {
          checkPt(dot);
        });
        lines.forEach((line) => {
          line.forEach((linePt) => {
            checkPt(linePt);
          });
        });
        const distX = maxX - minX;
        const distY = maxY - minY;
        const distHalfX = distX / 2;
        const distHalfY = distY / 2;
        let ctrX = minX + distHalfX;
        let ctrY = minY + distHalfY;
        let ctrOffsetX = 0;
        let ctrOffsetY = 0;
        if (size) {
          width = size[0];
          depth = size[1];
        } else {
          width = edgeMargin * 2 + distX;
          depth = edgeMargin * 2 + distY;
        }
        const modelConstants = {};
        const modelOpts2 = {
          type,
          scale,
          bead: {
            type: bead.type
          },
          mesh: {
            segments: mesh.segments
          }
        };
        const modelDims = {
          interfaceThickness,
          fitGap,
          width,
          depth,
          bead: {
            radius: bead.radius,
            height: bead.height
          },
          mesh: {
            radius: mesh.radius,
            distance: mesh.distance,
            margin: mesh.margin,
            thickness: mesh.thickness
          }
        };
        const modelPoints = {
          centre: [ctrX, ctrY, 0],
          dots,
          lines
        };
        const modelComponents = {
          interface: {
            profileBeads: beadsBits.profileBeads(
              interfaceThickness,
              smProfileBeadWidth,
              mdProfileBeadWidth,
              lgProfileBeadWidth
            )
          }
        };
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const sheetMould = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const mouldBase = (modelProps2) => {
          const {
            metadata,
            opts: opts2,
            dims,
            points
          } = modelProps2;
          const meshTextureSlab = meshLib.meshPanel({
            size: [dims.width, dims.depth, dims.interfaceThickness],
            holeRadius: dims.mesh.radius,
            holeDistance: dims.mesh.distance,
            edgeMargin: dims.mesh.margin
          });
          return meshTextureSlab;
        };
        const mouldPtSupportCore = (modelProps2) => {
          const {
            metadata,
            opts: opts2,
            dims,
            points
          } = modelProps2;
          const edgeMouldSupport = cylinder({
            height: dims.interfaceThickness,
            radius: dims.bead.radius
          });
          return edgeMouldSupport;
        };
        const mouldPointSupport = (modelProps2) => {
          const {
            metadata,
            opts: opts2,
            dims,
            points
          } = modelProps2;
          const edgeMouldSupport = mouldPtSupportCore(modelProps2);
          const mouldSupportFlange = cuboid({
            size: [
              dims.mesh.radius * 2.125,
              dims.interfaceThickness,
              dims.interfaceThickness
            ]
          });
          let holeMouldSupport = union(edgeMouldSupport, mouldSupportFlange);
          return holeMouldSupport;
        };
        const mouldPoint = (modelProps2) => {
          const {
            metadata,
            opts: opts2,
            dims,
            points
          } = modelProps2;
          const holeMouldPoint = cylinderElliptic({
            height: dims.bead.height,
            startRadius: [dims.bead.radius, dims.bead.radius],
            endRadius: [0, 0]
          });
          return holeMouldPoint;
        };
        const mouldPtAssembly = (modelProps2) => {
          const {
            metadata,
            opts: opts2,
            dims,
            points
          } = modelProps2;
          const hMouldPoint = mouldPoint(modelProps2);
          const holeMould = union(
            position.ctrMax(mouldPtSupportCore(modelProps2)),
            position.ctrMin(hMouldPoint)
          );
          return holeMould;
        };
        const mouldPtFlangedAssembly = (modelProps2) => {
          const {
            metadata,
            opts: opts2,
            dims,
            points
          } = modelProps2;
          const hMouldPoint = mouldPoint(modelProps2);
          const holeMould = union(
            position.ctrMax(mouldPointSupport(modelProps2)),
            position.ctrMin(hMouldPoint)
          );
          return holeMould;
        };
        const dotMoulds = (modelProps2) => {
          const {
            metadata,
            opts: opts2,
            dims,
            points
          } = modelProps2;
          let holeMoulds = [];
          points.dots.forEach((pt) => {
            holeMoulds.push(
              align(
                {
                  modes: ["center", "center", "min"],
                  relativeTo: [pt[0], pt[1], 0]
                },
                mouldPtFlangedAssembly(modelProps2)
              )
            );
          });
          let holeMouldSet = null;
          if (holeMoulds.length > 0) {
            holeMouldSet = union(...holeMoulds);
          }
          return holeMouldSet;
        };
        const lineMoulds = (modelProps2) => {
          const {
            metadata,
            opts: opts2,
            dims,
            points
          } = modelProps2;
          const lineMouldPoints = [];
          points.lines.forEach((linePoints) => {
            const lineSet = linePoints.map((linePt) => {
              return align(
                {
                  modes: ["center", "center", "min"],
                  relativeTo: [linePt[0], linePt[1], 0]
                },
                mouldPtAssembly(modelProps2)
              );
            });
            lineMouldPoints.push(hullChain(...lineSet));
          });
          const lineMouldAssemblies = union(...lineMouldPoints);
          return lineMouldAssemblies;
        };
        const finalAssembly = (modelProps2) => {
          const {
            metadata,
            opts: opts2,
            dims,
            points
          } = modelProps2;
          let mainPart = position.ctrMin(
            mouldBase(modelProps2),
            [points.centre[0], points.centre[1], 0]
          );
          const dMould = dotMoulds(modelProps2);
          const lMould = lineMoulds(modelProps2);
          if (dMould) {
            mainPart = union(
              mainPart,
              dMould
            );
          }
          if (lMould) {
            mainPart = union(
              mainPart,
              lMould
            );
          }
          return mainPart;
        };
        let mouldPointInst = mouldPoint(modelProperties);
        let mouldPointSupportInst = mouldPointSupport(modelProperties);
        let dotMouldsInst = dotMoulds(modelProperties);
        let lineMouldsInst = lineMoulds(modelProperties);
        let mainModel = finalAssembly(modelProperties);
        let modelParts = {
          mouldPoint: mouldPointInst,
          mouldPointSupport: mouldPointSupportInst,
          dotMoulds: dotMouldsInst,
          lineMoulds: lineMouldsInst
        };
        return [mainModel, modelParts, modelProperties];
      };
      return sheetMould;
    };
    module2.exports = {
      init: moduleInit
    };
  }
});

// packages/swcad-js-components/src/text/index.js
var require_text2 = __commonJS({
  "packages/swcad-js-components/src/text/index.js"(exports2, module2) {
    "use strict";
    var DEFAULT_EXTRUDE_HEIGHT = 1;
    var textUtils = ({ jscad, swcadJs }) => {
      const { subtract } = jscad.booleans;
      const { cuboid } = jscad.primitives;
      const { align } = jscad.transforms;
      const { extrudeLinear } = jscad.extrusions;
      const { measureDimensions } = jscad.measurements;
      const { text: text2d } = swcadJs.profiles;
      const flatText = (opts) => {
        if (opts.message === void 0 || opts.message.length === 0) return [];
        const message2D = text2d.basicText({
          message: opts.message,
          fontSize: opts.fontSize,
          charLineWidth: opts.charLineWidth
        });
        const message3D = extrudeLinear({ height: opts.extrudeHeight || DEFAULT_EXTRUDE_HEIGHT }, message2D);
        return align({ modes: ["center", "center", "center"] }, message3D);
      };
      return {
        flatText,
        /**
         * Creates a rectangular panel with engraved text
         * @memberof components.text
         * @instance
         * @param {*} opts 
         * @returns ...
         */
        textPanel: (opts) => {
          const extrudeHt = opts.extrudeHeight || DEFAULT_EXTRUDE_HEIGHT;
          const textModel = flatText({
            ...opts,
            extrudeHeight: extrudeHt
          });
          const textModelDims = measureDimensions(textModel);
          const panelOffset = opts.panelOffset || 2;
          const textPanel = cuboid({
            size: [
              textModelDims[0] + panelOffset,
              textModelDims[1] + panelOffset,
              opts.panelThickness || extrudeHt * 2
            ]
          });
          const embossedPanel = subtract(
            align({ modes: ["center", "center", "max"] }, textPanel),
            align({ modes: ["center", "center", "max"] }, textModel)
          );
          return align({ modes: ["center", "center", "center"] }, embossedPanel);
        }
      };
    };
    module2.exports = { init: textUtils };
  }
});

// packages/swcad-js-components/src/trim-family-frame/index.js
var require_trim_family_frame = __commonJS({
  "packages/swcad-js-components/src/trim-family-frame/index.js"(exports2, module2) {
    "use strict";
    var trimFamilyFrameInit = ({ jscad, swcadJs }) => {
      const {
        cube,
        cylinder,
        sphere,
        cylinderElliptic,
        circle,
        cuboid,
        roundedCuboid,
        roundedCylinder,
        roundedRectangle,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        rotate,
        mirror
      } = jscad.transforms;
      const {
        intersect,
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        extrudeLinear,
        extrudeRotate,
        project
      } = jscad.extrusions;
      const {
        measureDimensions,
        measureBoundingBox,
        measureVolume
      } = jscad.measurements;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { vectorText } = jscad.text;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const { colorize } = jscad.colors;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        trim
      } = swcadJs.profiles;
      const modelDefaults = () => {
        const cornerThickness = math.inchesToMm(1 / 4);
        const defaultValues = {
          opts: {
            trimType: "plain",
            frameForm: "half",
            trimJointType: "plain",
            cornerType: "plain",
            backingType: "none",
            ornaments: {
              trimLevels: 1
            }
          },
          dims: {
            size: [math.inchesToMm(2.5), math.inchesToMm(3)],
            interfaceThickness: 1.333,
            fitGap: math.inchesToMm(1 / 128),
            backingThickness: 1.333,
            trimWidth: math.inchesToMm(3 / 8),
            trimThickness: math.inchesToMm(3 / 16),
            trimJointWidth: math.inchesToMm(1 / 2),
            trimJointThickness: math.inchesToMm(7 / 32),
            trimJointLength: math.inchesToMm(1 / 4),
            cornerWidth: math.inchesToMm(5 / 8),
            cornerThickness,
            cornerRadius: cornerThickness / 2,
            rabbetWidth: math.inchesToMm(1 / 8),
            rabbetDepth: math.inchesToMm(1 / 8)
          },
          points: {
            centre: [0, 0, 0]
          },
          types: {
            default: { id: "default", desc: "Default" },
            alt: { id: "alt", desc: "Alternate" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128)
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          trimType: defaultValues.opts.trimType,
          frameForm: defaultValues.opts.frameForm,
          trimJointType: defaultValues.opts.trimJointType,
          cornerType: defaultValues.opts.cornerType,
          backingType: defaultValues.opts.backingType,
          backingThickness: defaultValues.dims.backingThickness,
          ornaments: defaultValues.opts.ornaments,
          trimWidth: defaultValues.dims.trimWidth,
          trimThickness: defaultValues.dims.trimThickness,
          cornerWidth: defaultValues.dims.cornerWidth,
          cornerThickness: defaultValues.dims.cornerThickness,
          cornerRadius: defaultValues.dims.cornerRadius,
          trimJointWidth: defaultValues.dims.trimJointWidth,
          trimJointThickness: defaultValues.dims.trimJointThickness,
          trimJointLength: defaultValues.dims.trimJointLength,
          rabbetWidth: defaultValues.dims.rabbetWidth,
          rabbetDepth: defaultValues.dims.rabbetDepth
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          type = defaults.opts.type,
          scale = defaults.opts.scale,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap,
          size = defaults.opts.size,
          trimType = defaults.opts.trimType,
          frameForm = defaults.opts.frameForm,
          trimJointType = defaults.opts.trimJointType,
          cornerType = defaults.opts.cornerType,
          backingType = defaults.opts.backingType,
          backingThickness = defaults.opts.backingThickness,
          ornaments = defaults.opts.ornaments,
          trimWidth = defaults.opts.trimWidth,
          trimThickness = defaults.opts.trimThickness,
          cornerWidth = defaults.opts.cornerWidth,
          cornerThickness = defaults.opts.cornerThickness,
          cornerRadius = defaults.opts.cornerRadius,
          trimJointWidth = defaults.opts.trimJointWidth,
          trimJointThickness = defaults.opts.trimJointThickness,
          trimJointLength = defaults.opts.trimJointLength,
          rabbetWidth = defaults.opts.rabbetWidth,
          rabbetDepth = defaults.opts.rabbetDepth
        } = opts;
        const stdOpts = {
          type,
          scale,
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          size,
          trimType,
          frameForm,
          trimJointType,
          cornerType,
          backingType,
          backingThickness,
          ornaments,
          trimWidth,
          trimThickness,
          cornerWidth,
          cornerThickness,
          cornerRadius,
          trimJointWidth,
          trimJointThickness,
          trimJointLength,
          rabbetWidth,
          rabbetDepth,
          ...stdOpts
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          size,
          type,
          scale,
          interfaceThickness,
          fitGap,
          trimType,
          frameForm,
          trimJointType,
          cornerType,
          backingType,
          backingThickness,
          ornaments,
          trimWidth,
          trimThickness,
          cornerWidth,
          cornerThickness,
          cornerRadius,
          trimJointWidth,
          trimJointThickness,
          trimJointLength,
          rabbetWidth,
          rabbetDepth
        } = opts;
        const width = size[0];
        const depth = size[1];
        const hasCorner = cornerType && cornerType != "none";
        const hasCornerJoint = trimJointType && trimJointType != "none";
        const cWidth = hasCorner ? cornerWidth : 0;
        const cThickness = hasCorner ? cornerThickness : 0;
        const cRadius = hasCorner ? cornerRadius : 0;
        const cornerDiff = cWidth - trimWidth;
        const tJointWidth = hasCorner && hasCornerJoint ? trimJointWidth : 0;
        const tJointThickness = hasCorner && hasCornerJoint ? trimJointThickness : 0;
        const tJointLength = hasCorner && hasCornerJoint ? trimJointLength : 0;
        const cornerWidthOffset = hasCorner ? cWidth * 2 : 0;
        const trimJointOffset = hasCorner && hasCornerJoint ? trimJointLength * 2 : 0;
        let trimOffset = 0;
        let trimCentreOffset = trimWidth / 2;
        if (cornerDiff > 0) {
          trimOffset = cornerDiff / 2;
          trimCentreOffset = trimOffset + trimWidth / 2;
        }
        const trimLengthX = width - trimOffset * 2;
        const trimLengthY = depth - trimOffset * 2;
        const backingWidth = width - trimCentreOffset * 2;
        const backingHeight = depth - trimCentreOffset * 2;
        const frameInnerWidth = trimLengthX - trimWidth * 2;
        const frameInnerHeight = trimLengthY - trimWidth * 2;
        const cornerPoints = [
          [0, 0, 0],
          [width, 0, 0],
          [0, depth, 0],
          [width, depth, 0]
        ];
        const centrePoint = [width / 2, depth / 2, 0];
        const trimPoints = [
          [centrePoint[0], trimOffset, 0],
          [centrePoint[0], depth - trimOffset, 0],
          [trimOffset, centrePoint[1], 0],
          [width - trimOffset, centrePoint[1], 0]
        ];
        const modelConstants = {};
        const modelOpts2 = {
          type,
          scale,
          trimType,
          frameForm,
          trimJointType,
          cornerType,
          backingType,
          ornaments
        };
        const modelDims = {
          size,
          width,
          depth,
          interfaceThickness,
          fitGap,
          trimWidth,
          trimThickness,
          frameInnerWidth,
          frameInnerHeight,
          trimJointWidth: tJointWidth,
          trimJointThickness: tJointThickness,
          trimJointLength: tJointLength,
          cornerWidth: cWidth,
          cornerThickness: cThickness,
          cornerRadius: cRadius,
          backingThickness,
          cornerWidthOffset,
          trimJointOffset,
          trimLengthX,
          trimLengthY,
          trimOffset,
          trimCentreOffset,
          backingWidth,
          backingHeight,
          rabbetWidth,
          rabbetDepth
        };
        const modelPoints = {
          centre: centrePoint,
          corners: cornerPoints,
          trimEdges: trimPoints
        };
        const modelComponents = {};
        const modelProperties = {
          metadata: {
            id: "9999",
            name: "New Model",
            project: "New Project",
            author: "Somebody Somewhere",
            organization: "Salvador Workshop",
            client: null
          },
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const trimFamilyFrame = (opts) => {
        const defaults = modelDefaults();
        const initOpts = modelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const frameCorner = (modelProps2) => {
          const {
            opts: opts2,
            dims,
            points
          } = modelProps2;
          let fCorner = null;
          if (!opts2.cornerType || opts2.cornerType == "none") {
            return fCorner;
          } else {
            switch (opts2.cornerType) {
              case "rounded":
                fCorner = cylinder({
                  height: dims.cornerThickness,
                  radius: dims.cornerRadius || 0.5
                });
                break;
              case "plain":
              default:
                fCorner = cuboid({
                  size: [dims.cornerWidth, dims.cornerWidth, dims.cornerThickness]
                });
                break;
            }
          }
          return fCorner;
        };
        const frameCornerJoint = (modelProps2) => {
          const {
            opts: opts2,
            dims,
            points
          } = modelProps2;
          let fCornerJoint = null;
          if (!opts2.trimJointType || opts2.trimJointType == "none") {
            return fCornerJoint;
          } else {
            switch (opts2.trimJointType) {
              case "rounded":
                fCornerJoint = roundedCuboid({
                  size: [dims.trimJointWidth, dims.trimJointLength, dims.trimJointThickness],
                  radius: radius || 0.5
                });
                break;
              case "plain":
              default:
                fCornerJoint = cuboid({
                  size: [dims.trimJointWidth, dims.trimJointLength, dims.trimJointThickness]
                });
                break;
            }
          }
          return fCornerJoint;
        };
        const cornerFrameAssembly = (modelProps2) => {
          const {
            opts: opts2,
            dims,
            points
          } = modelProps2;
          if ((!opts2.cornerType || opts2.cornerType == "none") && (!opts2.trimJointType || opts2.trimJointType == "none")) {
            return null;
          }
          let corner = frameCorner(modelProps2);
          const cornerBbox = measureBoundingBox(corner);
          const cornerJoint = frameCornerJoint(modelProps2);
          const jointX = align({
            modes: ["min", "center", "min"],
            relativeTo: [
              cornerBbox[1][0],
              0,
              cornerBbox[0][2]
            ]
          }, rotate([0, 0, Math.PI / 2], cornerJoint));
          const jointY = align({
            modes: ["center", "min", "min"],
            relativeTo: [
              0,
              cornerBbox[1][1],
              cornerBbox[0][2]
            ]
          }, cornerJoint);
          let cornerAssembly = corner;
          if (jointX) {
            cornerAssembly = union(cornerAssembly, jointX);
          }
          if (jointY) {
            cornerAssembly = union(cornerAssembly, jointY);
          }
          return cornerAssembly;
        };
        const frameTrim = (modelProps2, length) => {
          const {
            opts: opts2,
            dims,
            points
          } = modelProps2;
          let fTrim = null;
          if (!opts2.trimType || opts2.trimType == "none") {
            return fTrim;
          } else {
            let mitredTrimProfile = triangle({
              type: "ASA",
              values: [
                Math.PI / 4,
                length,
                Math.PI / 4
              ]
            });
            mitredTrimProfile = rotate([0, 0, Math.PI / 2], mitredTrimProfile);
            let mitredTrimArea = extrudeLinear({ height: dims.trimThickness * 2 }, mitredTrimProfile);
            mitredTrimArea = translate([dims.trimWidth / 2, 0, -dims.trimThickness], mitredTrimArea);
            const unitHeight = dims.trimWidth / opts2.ornaments.trimLevels;
            const unitDepth = dims.trimThickness / opts2.ornaments.trimLevels;
            const trimSizeDims = [unitHeight, unitDepth];
            const trimStyle = "dado";
            let trimSize = "small";
            switch (opts2.trimType) {
              case "aranea":
                switch (opts2.ornaments.trimLevels) {
                  case 3:
                    trimSize = "largeOrn1";
                    break;
                  case 2:
                    trimSize = "mediumOrn1";
                    break;
                  case 1:
                  default:
                    trimSize = "smallOrn1";
                    break;
                }
                const tFamilyAranea = trim.aranea({
                  size: trimSizeDims
                });
                let frameProfileAranea = tFamilyAranea[trimStyle][trimSize];
                let araneaTrim = extrudeLinear({ height: length }, frameProfileAranea);
                araneaTrim = rotate([Math.PI / -2, Math.PI / -2, 0], araneaTrim);
                fTrim = extrudeLinear({ height: length }, araneaTrim);
                break;
              case "bibliopoli":
                switch (opts2.ornaments.trimLevels) {
                  case 3:
                    trimSize = "largeOrn1";
                    break;
                  case 2:
                    trimSize = "mediumOrn1";
                    break;
                  case 1:
                  default:
                    trimSize = "smallOrn1";
                    break;
                }
                const tFamilyBibliopoli = trim.bibliopoli({
                  size: trimSizeDims
                });
                let frameProfileBibliopoli = tFamilyBibliopoli[trimStyle][trimSize];
                let bibliopoliTrim = extrudeLinear({ height: length }, frameProfileBibliopoli);
                bibliopoliTrim = rotate([Math.PI / -2, Math.PI / -2, 0], bibliopoliTrim);
                fTrim = extrudeLinear({ height: length }, bibliopoliTrim);
                break;
              case "catonis":
                switch (opts2.ornaments.trimLevels) {
                  case 3:
                    trimSize = "largeOrn1";
                    break;
                  case 2:
                    trimSize = "mediumOrn1";
                    break;
                  case 1:
                  default:
                    trimSize = "smallOrn1";
                    break;
                }
                const tFamilyCatonis = trim.catonis({
                  size: trimSizeDims
                });
                let frameProfileCatonis = tFamilyCatonis[trimStyle][trimSize];
                let catonisTrim = extrudeLinear({ height: length }, frameProfileCatonis);
                catonisTrim = rotate([Math.PI / -2, Math.PI / -2, 0], catonisTrim);
                fTrim = extrudeLinear({ height: length }, catonisTrim);
                break;
              case "rounded":
                fTrim = roundedCuboid({
                  size: [dims.trimWidth, length, dims.trimThickness],
                  radius: dims.interfaceThickness
                });
                break;
              case "plain":
              default:
                fTrim = cuboid({
                  size: [dims.trimWidth, length, dims.trimThickness]
                });
                break;
            }
            fTrim = intersect(
              fTrim,
              mitredTrimArea
            );
          }
          return fTrim;
        };
        const assembledTrim = (modelProps2) => {
          const {
            opts: opts2,
            dims,
            points
          } = modelProps2;
          const trimX = frameTrim(modelProps2, dims.trimLengthX);
          const trimY = frameTrim(modelProps2, dims.trimLengthY);
          const trimLengths = [
            align({
              modes: ["center", "min", "min"],
              relativeTo: points.trimEdges[0]
            }, rotate([0, 0, Math.PI / -2], trimX)),
            align({
              modes: ["center", "max", "min"],
              relativeTo: points.trimEdges[1]
            }, rotate([0, 0, Math.PI / 2], trimX)),
            align({
              modes: ["min", "center", "min"],
              relativeTo: points.trimEdges[2]
            }, rotate([0, 0, Math.PI], trimY)),
            align({
              modes: ["max", "center", "min"],
              relativeTo: points.trimEdges[3]
            }, trimY)
          ];
          let aTrim = union(...trimLengths);
          return aTrim;
        };
        const assembledFrame = (modelProps2) => {
          const {
            opts: opts2,
            dims,
            points
          } = modelProps2;
          let aFrame = assembledTrim(modelProps2);
          let corners = null;
          if (!opts2.cornerType || opts2.cornerType == "none") {
            corners = null;
          } else {
            const cornerOffset = dims.trimThickness / 2;
            const cornerPts = [
              {
                point: [
                  points.corners[0][0],
                  points.corners[0][1],
                  points.corners[0][2]
                ],
                rotation: [0, 0, 0],
                alignmentMode: ["min", "min", "min"]
              },
              {
                point: [
                  points.corners[1][0],
                  points.corners[1][1],
                  points.corners[1][2]
                ],
                rotation: [0, 0, Math.PI / 2],
                alignmentMode: ["max", "min", "min"]
              },
              {
                point: [
                  points.corners[2][0],
                  points.corners[2][1],
                  points.corners[2][2]
                ],
                rotation: [0, 0, Math.PI / -2],
                alignmentMode: ["min", "max", "min"]
              },
              {
                point: [
                  points.corners[3][0],
                  points.corners[3][1],
                  points.corners[3][2]
                ],
                rotation: [0, 0, Math.PI],
                alignmentMode: ["max", "max", "min"]
              }
            ];
            const cornerAssemblies = cornerPts.map((cornerPt, idx) => {
              const corner = cornerFrameAssembly(modelProps2);
              return align({
                modes: cornerPt.alignmentMode,
                relativeTo: cornerPt.point
              }, rotate(cornerPt.rotation, corner));
            });
            corners = union(...cornerAssemblies);
            aFrame = union(aFrame, corners);
          }
          let backing = null;
          aFrame = align({ modes: ["center", "center", "min"] }, aFrame);
          if (opts2.backingType && opts2.backingType != "none") {
            backing = cuboid({
              size: [
                dims.backingWidth,
                dims.backingHeight,
                dims.backingThickness
              ]
            });
            backing = align({ modes: ["center", "center", "min"] }, backing);
            aFrame = union(aFrame, backing);
          }
          return aFrame;
        };
        const fullFrameBack = (modelProps2, backOutline) => {
          const {
            opts: opts2,
            dims,
            points
          } = modelProps2;
          const extBox = extrudeLinear({ height: dims.rabbetDepth }, backOutline);
          const intBox = cuboid({
            size: [
              dims.frameInnerWidth + dims.rabbetWidth * 2,
              dims.frameInnerHeight + dims.rabbetWidth * 2,
              dims.rabbetDepth
            ]
          });
          return subtract(
            position.ctr(extBox),
            position.ctr(intBox)
          );
        };
        const finalAssembly = (modelProps2) => {
          const aFrame = assembledFrame(modelProps2);
          let mainPart = aFrame;
          if (modelProps2.opts.frameForm == "full") {
            const aFrameBackOutline = project(
              {},
              align({ modes: ["center", "center", "min"] }, aFrame)
            );
            const fBack = fullFrameBack(modelProps2, aFrameBackOutline);
            mainPart = union(
              align({ modes: ["center", "center", "min"] }, mainPart),
              align({ modes: ["center", "center", "max"] }, fBack)
            );
          }
          return mainPart;
        };
        const frameCornerInst = frameCorner(modelProperties);
        const frameCornerJointInst = frameCornerJoint(modelProperties);
        const cornerFrameAssemblyInst = cornerFrameAssembly(modelProperties);
        const frameTrimInst = frameTrim(modelProperties, 25.4);
        const assembledTrimInst = assembledTrim(modelProperties);
        const assembledFrameInst = assembledFrame(modelProperties);
        let mainModel = finalAssembly(modelProperties);
        let modelParts = {
          frameCorner: frameCornerInst,
          frameCornerJoint: frameCornerJointInst,
          cornerFrameAssembly: cornerFrameAssemblyInst,
          frameTrim: frameTrimInst,
          assembledTrim: assembledTrimInst,
          assembledFrame: assembledFrameInst
        };
        return [mainModel, modelParts, modelProperties];
      };
      return trimFamilyFrame;
    };
    module2.exports = {
      init: trimFamilyFrameInit
    };
  }
});

// packages/swcad-js-components/src/index.js
var require_src5 = __commonJS({
  "packages/swcad-js-components/src/index.js"(exports2, module2) {
    "use strict";
    var beadsBitsModule = require_beads_bits2();
    var componentLineModule = require_component_line();
    var meshModule = require_mesh();
    var mouldingModule = require_moulding();
    var openWebJoistModule = require_open_web_joist();
    var reinforcedRectPanelModule = require_reinforced_rect_panel();
    var routedShapesModule = require_routed_shapes();
    var sheetMouldModule = require_sheet_mould();
    var textModule = require_text2();
    var trimFamilyFrameModule = require_trim_family_frame();
    var componentsInit = ({ jscad, swcadJs }) => {
      const beadsBits = beadsBitsModule.init({ jscad, swcadJs });
      const preLib = {
        ...swcadJs,
        components: {
          beadsBits
        }
      };
      const routedShapes = routedShapesModule.init({ jscad, swcadJs: preLib });
      const mesh = meshModule.init({ jscad, swcadJs: preLib });
      const componentLine = componentLineModule.init({ jscad, swcadJs: preLib });
      preLib.components = {
        beadsBits,
        routedShapes,
        mesh,
        componentLine
      };
      const components = {
        beadsBits,
        routedShapes,
        mesh,
        componentLine,
        moulding: mouldingModule.init({ jscad, swcadJs: preLib }),
        openWebJoist: openWebJoistModule.init({ jscad, swcadJs: preLib }),
        reinforcedRectPanel: reinforcedRectPanelModule.init({ jscad, swcadJs: preLib }),
        sheetMould: sheetMouldModule.init({ jscad, swcadJs: preLib }),
        text: textModule.init({ jscad, swcadJs: preLib }),
        trimFamilyFrame: trimFamilyFrameModule.init({ jscad, swcadJs: preLib })
      };
      return components;
    };
    module2.exports = {
      init: componentsInit
    };
  }
});

// packages/swcad-js-component-spec/src/brick/index.js
var require_brick = __commonJS({
  "packages/swcad-js-component-spec/src/brick/index.js"(exports2, module2) {
    "use strict";
    var brickInit = ({ jscad, swcadJs }) => {
      const { cuboid } = jscad.primitives;
      const { masonry } = swcadJs.data.standards;
      const brickNorAm = {};
      const brickNorAmSpecs = [
        {
          name: "nominal",
          length: masonry.brick.US_BRICK_LENGTH_NOM,
          width: masonry.brick.US_BRICK_WIDTH_NOM,
          height: masonry.brick.US_BRICK_HEIGHT_NOM
        },
        {
          name: "actualStdJoint",
          length: masonry.brick.US_BRICK_LENGTH,
          width: masonry.brick.US_BRICK_WIDTH,
          height: masonry.brick.US_BRICK_HEIGHT
        },
        {
          name: "actualWideJoint",
          length: masonry.brick.US_BRICK_LENGTH_LG_JOINT,
          width: masonry.brick.US_BRICK_WIDTH_LG_JOINT,
          height: masonry.brick.US_BRICK_HEIGHT_LG_JOINT
        }
      ];
      brickNorAmSpecs.forEach((brickSpec) => {
        brickNorAm[brickSpec.name] = cuboid({ size: [brickSpec.length, brickSpec.width, brickSpec.height] });
      });
      return brickNorAm;
    };
    module2.exports = { init: brickInit };
  }
});

// packages/swcad-js-component-spec/src/crafts/index.js
var require_crafts = __commonJS({
  "packages/swcad-js-component-spec/src/crafts/index.js"(exports2, module2) {
    "use strict";
    var init2 = ({ jscad, swcadJs }) => {
      const { rectangle, cuboid, triangle, circle, cylinder, roundedRectangle } = jscad.primitives;
      const { union, subtract } = jscad.booleans;
      const { translate, align, mirror, rotate } = jscad.transforms;
      const { hull } = jscad.hulls;
      const { extrudeLinear, extrudeRotate } = jscad.extrusions;
      const { TAU } = jscad.maths.constants;
      const { standards } = swcadJs.data;
      const { math, position } = swcadJs.calcs;
      const toothpickSpecs = {
        radius: standards.crafts.DIAM_TOOTHPICK / 2,
        length: math.inchesToMm(4),
        pointLength: math.inchesToMm(1 / 4)
      };
      const bbqSkewerSpecs = {
        radius: standards.crafts.DIAM_BBQ_SKEWER / 2,
        length: math.inchesToMm(12),
        pointLength: math.inchesToMm(0.5)
      };
      const popsicleStickSpecs = {
        width: standards.crafts.POPSICLE_STICK_WIDTH,
        thickness: standards.crafts.POPSICLE_STICK_THICKNESS,
        length: standards.crafts.POPSICLE_STICK_LENGTH,
        endRadius: standards.crafts.POPSICLE_STICK_WIDTH / 2
      };
      const toothpickProfile = ({
        radius: radius2 = toothpickSpecs.radius,
        length = toothpickSpecs.length,
        pointLength = toothpickSpecs.pointLength
      }) => {
        const core2d = rectangle({ size: [pointLength * -2 + length, radius2 * 2] });
        const core2dCoords = position.getGeomCoords(core2d);
        const pointTriangleSide = Math.hypot(radius2, pointLength);
        const pointAngle = Math.atan(radius2 / pointLength) * 2;
        const pointTriangle = triangle({ type: "SSA", values: [radius2 * 2, pointTriangleSide, pointAngle] });
        const point2d1 = align(
          { modes: ["max", "center", "center"], relativeTo: [core2dCoords.left, 0, 0] },
          rotate([0, 0, TAU / 4], pointTriangle)
        );
        const point2d2 = align(
          { modes: ["min", "center", "center"], relativeTo: [core2dCoords.right, 0, 0] },
          rotate([0, 0, TAU / -4], pointTriangle)
        );
        const baseShape = rotate([0, 0, TAU / 4], union(core2d, point2d1, point2d2));
        return baseShape;
      };
      const toothpick = ({
        radius: radius2 = toothpickSpecs.radius,
        length = toothpickSpecs.length,
        pointLength = toothpickSpecs.pointLength
      }) => {
        const baseShape = toothpickProfile({ radius: radius2, length, pointLength });
        return extrudeRotate({ segments: 12 }, baseShape);
      };
      const bbqSkewerProfile = ({
        radius: radius2 = bbqSkewerSpecs.radius,
        length = bbqSkewerSpecs.length,
        pointLength = bbqSkewerSpecs.pointLength
      }) => {
        const core2d = rectangle({ size: [length - pointLength, radius2 * 2] });
        const core2dCoords = position.getGeomCoords(core2d);
        const pointTriangleSide = Math.hypot(radius2, pointLength);
        const pointAngle = Math.atan(radius2 / pointLength) * 2;
        const pointTriangle = triangle({ type: "SSA", values: [radius2 * 2, pointTriangleSide, pointAngle] });
        const point2d = align(
          { modes: ["min", "center", "center"], relativeTo: [core2dCoords.right, 0, 0] },
          rotate([0, 0, TAU / -4], pointTriangle)
        );
        const baseShape = rotate([0, 0, TAU / 4], union(core2d, point2d));
        return baseShape;
      };
      const bbqSkewer = ({
        radius: radius2 = bbqSkewerSpecs.radius,
        length = bbqSkewerSpecs.length,
        pointLength = bbqSkewerSpecs.pointLength
      }) => {
        const baseShape = bbqSkewerProfile({ radius: radius2, length, pointLength });
        return extrudeRotate({ segments: 12 }, baseShape);
      };
      const popsicleStickProfile = ({
        width = popsicleStickSpecs.width,
        length = popsicleStickSpecs.length,
        endRadius = popsicleStickSpecs.endRadius
      }) => {
        const ends = [
          align(
            { modes: ["min", "center", "center"], relativeTo: [length / -2, 0, 0] },
            roundedRectangle({ size: [width, width], roundRadius: endRadius - 0.01 })
          ),
          align(
            { modes: ["max", "center", "center"], relativeTo: [length / 2, 0, 0] },
            roundedRectangle({ size: [width, width], roundRadius: endRadius - 0.01 })
          )
        ];
        const baseShape = hull(ends);
        return baseShape;
      };
      const popsicleStick = ({
        width = popsicleStickSpecs.width,
        thickness = popsicleStickSpecs.thickness,
        length = popsicleStickSpecs.length,
        endRadius = popsicleStickSpecs.endRadius
      }) => {
        const baseShape = popsicleStickProfile({ width, length, endRadius });
        return extrudeLinear({ height: thickness }, baseShape);
      };
      const crafts = {
        toothpickProfile,
        toothpick,
        bbqSkewerProfile,
        bbqSkewer,
        popsicleStickProfile,
        popsicleStick
      };
      return crafts;
    };
    module2.exports = { init: init2 };
  }
});

// packages/swcad-js-component-spec/src/tile/index.js
var require_tile = __commonJS({
  "packages/swcad-js-component-spec/src/tile/index.js"(exports2, module2) {
    "use strict";
    var tileInit = ({ jscad, swcadJs }) => {
      const { cuboid } = jscad.primitives;
      const { math } = swcadJs.calcs;
      const { functions } = swcadJs.data;
      const tileStandards = {
        TILE_THICKNESS_LG: math.inchesToMm(9 / 32),
        // 7.14375 mm
        TILE_THICKNESS_MD: math.inchesToMm(1 / 4),
        // 6.35 mm
        TILE_THICKNESS_SM: math.inchesToMm(7 / 32),
        // 5.55625 mm
        TILE_SIZE_MOSAIC: 10,
        TILE_SIZE_SM: math.inchesToMm(3),
        TILE_SIZE_MD: math.inchesToMm(4),
        TILE_SIZE_LG: math.inchesToMm(5)
      };
      const thicknesses = {
        thin: tileStandards.TILE_THICKNESS_SM,
        medium: tileStandards.TILE_THICKNESS_MD,
        thick: tileStandards.TILE_THICKNESS_LG
      };
      const sizes = {
        mosaic: tileStandards.TILE_SIZE_MOSAIC,
        small: tileStandards.TILE_SIZE_SM,
        medium: tileStandards.TILE_SIZE_MD,
        large: tileStandards.TILE_SIZE_LG
      };
      const tileModels = {};
      Object.entries(thicknesses).forEach(([thKey, thVal], thIdx) => {
        Object.entries(sizes).forEach(([sKey, sVal], sIdx) => {
          const thicknessLabel = thKey === "medium" ? "" : ` ${thKey}`;
          const modelName = functions.camelCase(`${sKey}${thicknessLabel}`);
          const modelSize = [sVal, sVal, thVal];
          tileModels[modelName] = {
            name: modelName,
            size: modelSize,
            length: sKey,
            lengthDim: sVal,
            thickness: thKey,
            thicknessDim: thVal,
            geom: cuboid({ size: modelSize })
          };
        });
      });
      return tileModels;
    };
    module2.exports = { init: tileInit };
  }
});

// packages/swcad-js-component-spec/src/index.js
var require_src6 = __commonJS({
  "packages/swcad-js-component-spec/src/index.js"(exports2, module2) {
    "use strict";
    var brick = require_brick();
    var crafts = require_crafts();
    var tile = require_tile();
    var componentSpecInit = ({ jscad, swcadJs }) => {
      const componentSpec = {
        brick: brick.init({ jscad, swcadJs }),
        crafts: crafts.init({ jscad, swcadJs }),
        tile: tile.init({ jscad, swcadJs })
      };
      return componentSpec;
    };
    module2.exports = {
      init: componentSpecInit
    };
  }
});

// packages/swcad-js-utils/src/colors.js
var require_colors = __commonJS({
  "packages/swcad-js-utils/src/colors.js"(exports2, module2) {
    "use strict";
    var colourUtils = ({ jscad, swcadJs }) => {
      const { hexToRgb } = jscad.colors;
      const colors = {
        /** @memberof utils.colors */
        red: hexToRgb("#f44336"),
        /** @memberof utils.colors */
        pink: hexToRgb("#e91e63"),
        /** @memberof utils.colors */
        purple: hexToRgb("#9c27b0"),
        /** @memberof utils.colors */
        deepPurple: hexToRgb("#673ab7"),
        /** @memberof utils.colors */
        indigo: hexToRgb("#3f51b5"),
        /** @memberof utils.colors */
        blue: hexToRgb("#2196f3"),
        /** @memberof utils.colors */
        lightBlue: hexToRgb("#03a9f4"),
        /** @memberof utils.colors */
        cyan: hexToRgb("#00bcd4"),
        /** @memberof utils.colors */
        teal: hexToRgb("#009688"),
        /** @memberof utils.colors */
        green: hexToRgb("#4caf50"),
        /** @memberof utils.colors */
        lightGreen: hexToRgb("#8bc34a"),
        /** @memberof utils.colors */
        lime: hexToRgb("#cddc39"),
        /** @memberof utils.colors */
        yellow: hexToRgb("#ffeb3b"),
        /** @memberof utils.colors */
        amber: hexToRgb("#ffc107"),
        /** @memberof utils.colors */
        orange: hexToRgb("#ff9800"),
        /** @memberof utils.colors */
        deepOrange: hexToRgb("#ff5722"),
        /** @memberof utils.colors */
        brown: hexToRgb("#795548"),
        /** @memberof utils.colors */
        grey: hexToRgb("#9e9e9e"),
        /** @memberof utils.colors */
        blueGrey: hexToRgb("#607d8b"),
        /** @memberof utils.colors */
        white: hexToRgb("#ffffff")
      };
      for (const [colour, rgbVal] of Object.entries(colors)) {
        const capColName = colour.slice(0, 1).toUpperCase() + colour.slice(1);
        colors[`translucent${capColName}1`] = [...rgbVal, 0.3];
        colors[`translucent${capColName}2`] = [...rgbVal, 0.5];
        colors[`translucent${capColName}`] = [...rgbVal, 0.5];
        colors[`translucent${capColName}3`] = [...rgbVal, 0.7];
      }
      return colors;
    };
    module2.exports = { init: colourUtils };
  }
});

// packages/swcad-js-utils/src/layout.js
var require_layout = __commonJS({
  "packages/swcad-js-utils/src/layout.js"(exports2, module2) {
    "use strict";
    var layoutUtils = ({ jscad, swcadJs }) => {
      const { cuboid, rectangle } = jscad.primitives;
      const { union, subtract } = jscad.booleans;
      const { translate, align } = jscad.transforms;
      const { measureDimensions } = jscad.measurements;
      const isGeom2 = jscad.geometries.geom2.isA;
      const isPath2 = jscad.geometries.path2.isA;
      const { math } = swcadJs.calcs;
      const { text: text2d } = swcadJs.profiles;
      const { text: text3d } = swcadJs.components;
      const layoutElements = /* @__PURE__ */ new Map();
      let largestDimensionX = 0;
      let largestDimensionY = 0;
      let sortedLayoutEntries = [];
      const largestDimension = () => {
        return [largestDimensionX, largestDimensionY];
      };
      const getXYArea = (dims) => {
        return dims[0] * dims[1];
      };
      const dimsSizeAsc = (firstEntry, secondEntry) => {
        const firstArea = getXYArea(firstEntry.layoutDims);
        const secondArea = getXYArea(secondEntry.layoutDims);
        if (firstArea.size > secondArea.size) {
          return 1;
        } else if (firstArea.size < secondArea.size) {
          return -1;
        } else {
          return 0;
        }
      };
      const addLayoutEntry = ({ layoutEntry }) => {
        layoutElements.set(layoutEntry.id, layoutEntry);
        const newEntries = [...sortedLayoutEntries, layoutEntry];
        sortedLayoutEntries = newEntries.sort(dimsSizeAsc);
        if (layoutEntry.layoutDims[0] > largestDimensionX) {
          largestDimensionX = layoutEntry.layoutDims[0];
        }
        if (layoutEntry.layoutDims[1] > largestDimensionY) {
          largestDimensionY = layoutEntry.layoutDims[1];
        }
      };
      const layoutFrame = ({
        title,
        subtitle = ". . .",
        data1 = "..",
        data2 = "....",
        objectDims,
        layoutDims,
        is2D = false
      }) => {
        const frameWidth = 1.5;
        const frameOpts = {};
        const ctrlPts = {
          topLeft: [layoutDims[0] / -2, layoutDims[1] / 2],
          topRight: [layoutDims[0] / 2, layoutDims[1] / 2],
          bottomLeft: [layoutDims[0] / -2, layoutDims[1] / -2],
          bottomRight: [layoutDims[0] / 2, layoutDims[1] / -2]
        };
        const alignmentSlots = {
          topLeft: { modes: ["min", "max", "min"], relativeTo: [...ctrlPts.topLeft, 0] },
          topRight: { modes: ["max", "max", "min"], relativeTo: [...ctrlPts.topRight, 0] },
          bottomLeft: { modes: ["min", "min", "min"], relativeTo: [...ctrlPts.bottomLeft, 0] },
          bottomRight: { modes: ["max", "min", "min"], relativeTo: [...ctrlPts.bottomRight, 0] }
        };
        if (is2D) {
          const titleText2 = text2d.basicText({
            message: title,
            fontSize: 3.5,
            charLineWidth: 1,
            ...frameOpts
          });
          const subtitleText2 = text2d.basicText({
            message: subtitle,
            fontSize: 3,
            charLineWidth: 0.75,
            ...frameOpts
          });
          ;
          const data1Text2 = text2d.basicText({
            message: data1,
            fontSize: 3,
            charLineWidth: 0.75,
            ...frameOpts
          });
          ;
          const data2Text2 = text2d.basicText({
            message: data2,
            fontSize: 3,
            charLineWidth: 0.75,
            ...frameOpts
          });
          ;
          const frameSpacer = frameWidth * 1.25;
          const basicFrame2 = subtract(
            rectangle({
              size: [
                layoutDims[0] + frameSpacer + frameWidth * 2,
                layoutDims[1] + frameSpacer + frameWidth * 2
              ]
            }),
            rectangle({
              size: [
                layoutDims[0] + frameSpacer,
                layoutDims[1] + frameSpacer
              ]
            })
          );
          return union(
            align({ modes: ["center", "center", "min"] }, basicFrame2),
            align(alignmentSlots.topLeft, data1Text2),
            align(alignmentSlots.topRight, data2Text2),
            align(alignmentSlots.bottomLeft, titleText2),
            align(alignmentSlots.bottomRight, subtitleText2)
          );
        }
        const recessDepth = 0.6667;
        frameOpts.extrudeHeight = recessDepth;
        frameOpts.panelThickness = frameWidth + recessDepth;
        frameOpts.panelOffset = (frameWidth + recessDepth) * 2;
        const titleText = text3d.textPanel({
          message: title,
          fontSize: 3.5,
          charLineWidth: 1,
          ...frameOpts
        });
        const subtitleText = text3d.textPanel({
          message: subtitle,
          fontSize: 3,
          charLineWidth: 0.75,
          ...frameOpts
        });
        const data1Text = text3d.textPanel({
          message: data1,
          fontSize: 3,
          charLineWidth: 0.75,
          ...frameOpts
        });
        const data2Text = text3d.textPanel({
          message: data2,
          fontSize: 3,
          charLineWidth: 0.75,
          ...frameOpts
        });
        const basicFrame = subtract(
          cuboid({ size: [layoutDims[0], layoutDims[1], frameWidth] }),
          cuboid({ size: [layoutDims[0] - frameWidth * 2, layoutDims[1] - frameWidth * 2, 3] })
        );
        return union(
          align({ modes: ["center", "center", "min"] }, basicFrame),
          align(alignmentSlots.topLeft, data1Text),
          align(alignmentSlots.topRight, data2Text),
          align(alignmentSlots.bottomLeft, titleText),
          align(alignmentSlots.bottomRight, subtitleText)
        );
      };
      const linearLayout = ({ layoutOpts }) => {
        const layoutContent = [];
        layoutElements.values().forEach((val, idx) => {
          const offsets = { x: 0, y: 0, z: 0 };
          if (layoutOpts.relativeTo) {
            offsets.x = offsets.x + layoutOpts.relativeTo[0];
            offsets.y = offsets.y + layoutOpts.relativeTo[1];
            offsets.z = offsets.z + layoutOpts.relativeTo[2];
          }
          const gridUnits = [
            largestDimension()[0] + layoutOpts.layoutSpace,
            largestDimension()[1] + layoutOpts.layoutSpace
          ];
          let layoutPosition = [
            gridUnits[0] * idx + offsets.x,
            offsets.y,
            offsets.z
          ];
          if (layoutOpts.column) {
            layoutPosition = [
              offsets.x,
              gridUnits[1] * idx + offsets.y,
              offsets.z
            ];
          }
          const nextLayoutGeoms = [
            translate(layoutPosition, val.geom)
          ];
          const skipFrame = layoutOpts.noFrame || val.tags.includes("noFrame");
          const is2D = val.tags.includes("is2D");
          if (!skipFrame) {
            const frameGeom = translate(layoutPosition, layoutFrame({
              title: val.name,
              subtitle: val.desc,
              objectDims: val.objectDims,
              layoutDims: val.layoutDims,
              is2D
            }));
            nextLayoutGeoms.push(frameGeom);
          }
          layoutContent.push(...nextLayoutGeoms);
        });
        return layoutContent;
      };
      const gridLayout = ({ layoutOpts }) => {
        const gridSize = math.factorize(layoutElements.size);
        const numColumns = gridSize[1];
        const layoutContent = [];
        let gridRow = -1;
        layoutElements.values().forEach((val, idx) => {
          const gridCol = idx % numColumns;
          if (gridCol === 0) {
            gridRow += 1;
          }
          const gridPos = { row: gridRow, col: gridCol };
          const offsets = { x: 0, y: 0, z: 0 };
          if (layoutOpts.relativeTo) {
            offsets.x = offsets.x + layoutOpts.relativeTo[0];
            offsets.y = offsets.y + layoutOpts.relativeTo[1];
            offsets.z = offsets.z + layoutOpts.relativeTo[2];
          }
          const gridUnits = [
            largestDimension()[0] + layoutOpts.layoutSpace,
            largestDimension()[1] + layoutOpts.layoutSpace
          ];
          let layoutPosition = [
            gridUnits[0] * gridPos.col + offsets.x,
            gridUnits[1] * gridPos.row + offsets.y,
            offsets.z
          ];
          const nextLayoutGeoms = [
            translate(layoutPosition, val.geom)
          ];
          const skipFrame = layoutOpts.noFrame || val.tags.includes("noFrame");
          const is2D = val.tags.includes("is2D");
          if (!skipFrame) {
            const frameGeom = translate(layoutPosition, layoutFrame({
              title: val.name,
              subtitle: val.desc,
              objectDims: val.objectDims,
              layoutDims: val.layoutDims,
              is2D
            }));
            nextLayoutGeoms.push(frameGeom);
          }
          layoutContent.push(...nextLayoutGeoms);
        });
        return layoutContent;
      };
      return {
        /**
         * Adds element to layout
         * @param {Object} opts 
         * @param {string} opts.name 
         * @param {string} opts.desc 
         * @param {string[]} opts.tags 
         * @param {Object} opts.layoutOpts 
         * @param {number[]} opts.layoutOpts.minSize -- [x,y,z] showing minimum size for element layout
         * @param {boolean} opts.layoutOpts.is2D -- 
         * @param {Object} geom
         * @memberof utils.layout
         * @instance
         */
        addToLayout: ({
          name = "",
          desc = "",
          tags = [],
          layoutOpts = {}
        }, geom) => {
          const layoutId = name + "-randomTag";
          const objectDims = measureDimensions(geom);
          const layoutMargin = layoutOpts.layoutMargin || 10;
          const layoutDims = [
            layoutMargin * 2 + objectDims[0],
            layoutMargin * 2 + objectDims[1],
            layoutMargin * 2 + objectDims[2]
          ];
          const extraTags = [
            isGeom2(geom) || isPath2(geom) ? "is2D" : "is3D"
          ];
          const layoutEntry = {
            id: layoutId,
            name,
            desc,
            tags: [...tags, ...extraTags],
            geom: align({ modes: ["center", "center", "min"] }, geom),
            objectDims,
            layoutDims
          };
          addLayoutEntry({ layoutEntry });
          return layoutEntry;
        },
        removeFromLayout: ({ id }) => {
          layoutElements.delete(id);
        },
        clearLayout: () => {
          layoutElements.clear();
        },
        linearLayout,
        gridLayout
      };
    };
    module2.exports = { init: layoutUtils };
  }
});

// packages/swcad-js-utils/src/palette.js
var require_palette = __commonJS({
  "packages/swcad-js-utils/src/palette.js"(exports2, module2) {
    "use strict";
    var paletteUtils = ({ jscad, swcadJs }) => {
      const { colors } = swcadJs.utils;
      const palette = {
        /** @memberof utils.palette */
        light: {
          default: colors.blue,
          primary: colors.indigo,
          secondary: colors.green,
          tertiary: colors.pink,
          layout: colors.translucentDeepOrange,
          detail: colors.lightBlue,
          guide: colors.translucentGrey
        },
        /** @memberof utils.palette */
        dark: {
          default: colors.blue,
          primary: colors.indigo,
          secondary: colors.green,
          tertiary: colors.pink,
          layout: colors.translucentDeepOrange,
          detail: colors.lightBlue,
          guide: colors.translucentGrey
        }
      };
      return palette;
    };
    module2.exports = { init: paletteUtils };
  }
});

// packages/swcad-js-utils/src/index.js
var require_src7 = __commonJS({
  "packages/swcad-js-utils/src/index.js"(exports2, module2) {
    "use strict";
    var colors = require_colors();
    var layout = require_layout();
    var palette = require_palette();
    var utilsInit = ({ jscad, swcadJs }) => {
      const coloursCore = colors.init({ jscad, swcadJs });
      const preLib = {
        ...swcadJs,
        utils: {
          colors: coloursCore
        }
      };
      const utils = {
        colors: coloursCore,
        layout: layout.init({ jscad, swcadJs: preLib }),
        palette: palette.init({ jscad, swcadJs: preLib })
      };
      return utils;
    };
    module2.exports = {
      init: utilsInit
    };
  }
});

// packages/swcad-js-models/src/arch/index.js
var require_arch = __commonJS({
  "packages/swcad-js-models/src/arch/index.js"(exports2, module2) {
    "use strict";
    var archBuilder = ({ jscad, swcadJs }) => {
      const { path2, geom2 } = jscad.geometries;
      const { extrudeRotate } = jscad.extrusions;
      const { arc, cuboid } = jscad.primitives;
      const { translate, mirror, rotate, align } = jscad.transforms;
      const { union, subtract, intersect } = jscad.booleans;
      const { measureDimensions } = jscad.measurements;
      return {
        /**
         * Builds a one-centre (semicircular) arch.
         * @memberof models.arch
         * @instance
         * @param {Object} opts 
         * @param {number} opts.arcRadius - arc radius 
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        onePtArch: (opts, geomProfile) => {
          const arcRad = opts.arcRadius;
          const profile = translate([arcRad, 0, 0], geomProfile);
          const baseArch = extrudeRotate({ segments: 48, angle: Math.PI }, profile);
          return align({ modes: ["center", "center", "min"] }, rotate([Math.PI / 2, 0, 0], baseArch));
        },
        /**
         * Builds a two-centre pointed arch.
         * @memberof models.arch
         * @instance
         * @param {Object} opts 
         * @param {number} opts.arcRadius - arc radius 
         * @param {number} opts.archWidth - arch width 
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        twoPtArch: (opts, geomProfile) => {
          const arcRad = opts.arcRadius;
          const archWth = opts.archWidth;
          const profileSpecs = measureDimensions(geomProfile);
          const profile = translate([profileSpecs[0] / 2 + arcRad, 0, 0], geomProfile);
          const baseArch = extrudeRotate({ segments: 48, angle: Math.PI }, profile);
          const cutawaySize = Math.max(archWth, arcRad) * 2;
          const mirrorAxis = arcRad - archWth / 2;
          const cutawayOffset = cutawaySize / -2 + mirrorAxis;
          const archCutaway = translate([cutawayOffset, cutawaySize / 2, 0], cuboid(
            {
              size: [cutawaySize, cutawaySize, profileSpecs[1] * 1.25],
              center: [0, 0, 0]
            }
          ));
          const cutArch = subtract(baseArch, archCutaway);
          const reflectedArch = mirror({ normal: [1, 0, 0], origin: [mirrorAxis, 0, 0] }, cutArch);
          return align({ modes: ["center", "center", "min"] }, rotate([Math.PI / 2, 0, 0], union(cutArch, reflectedArch)));
        },
        threePt: (opts, geomProfile) => {
          return null;
        },
        fourPt: (opts, geomProfile) => {
          return null;
        }
      };
    };
    module2.exports = { init: archBuilder };
  }
});

// packages/swcad-js-models/src/foil/index.js
var require_foil = __commonJS({
  "packages/swcad-js-models/src/foil/index.js"(exports2, module2) {
    "use strict";
    var foilBuilder = ({ jscad, swcadJs }) => {
      const { union, subtract, scission } = jscad.booleans;
      const { rotate, align, translate, mirror } = jscad.transforms;
      const { cuboid, rectangle } = jscad.primitives;
      const { measureBoundingBox } = jscad.measurements;
      const { extrudeRotate } = jscad.extrusions;
      const buildFoil3d = (opts, geomProfile) => {
        const centralAngle = Math.PI * 2 / opts.numLobes;
        const sinHalfCentral = Math.sin(centralAngle / 2);
        const isCentreCut = opts.cutCentre || true;
        const lobeRadiusInSlice = sinHalfCentral / (1 + sinHalfCentral) * opts.radius;
        const lobeRadiusDiff = opts.radius / 2 - lobeRadiusInSlice;
        const lobeRadiusMean = lobeRadiusInSlice + lobeRadiusDiff / 2;
        const lobeRadType = opts.lobeRadiusType || "mean";
        let lobeRadius = lobeRadiusMean;
        if (lobeRadType === "inSlice") {
          lobeRadius = lobeRadiusInSlice;
        } else if (lobeRadType === "halfRadius") {
          lobeRadius = opts.radius / 2;
        }
        const translatedProfile = translate([lobeRadius, 0, 0], geomProfile);
        const lobeCircle = extrudeRotate({ segments: 48 }, translatedProfile);
        const alignedLobeCircle = translate([0, -(opts.radius - lobeRadius), 0], lobeCircle);
        const lobeCircleBbox = measureBoundingBox(alignedLobeCircle);
        const cutBlockThickness = (lobeCircleBbox[1][2] - lobeCircleBbox[0][2]) * 2;
        const cutBlock1 = rotate([0, 0, centralAngle / 2], align({ modes: ["min", "center", "none"] }, cuboid({ size: [lobeRadius, opts.radius * 2, cutBlockThickness] })));
        const cutBlock2 = mirror({ normal: [1, 0, 0] }, cutBlock1);
        const cutBlock = union(cutBlock1, cutBlock2);
        let cutLobe = subtract(alignedLobeCircle, cutBlock);
        const profileBbox = measureBoundingBox(geomProfile);
        const profileSize = [profileBbox[1][0] - profileBbox[0][0], profileBbox[1][1] - profileBbox[0][1]];
        const negProfile = subtract(rectangle({ size: [profileSize[0] + 1, profileSize[1] + 1] }), geomProfile);
        const negProfileCut = subtract(negProfile, translate([(profileSize[0] + 2) / 2, 0, 0], rectangle({ size: [profileSize[0] + 2, profileSize[1] + 2] })));
        const negProfileAdj = translate([profileSize[0] / 2, 0, 0], negProfileCut);
        let centreCircle = extrudeRotate({ segments: 48 }, translate([lobeRadius, 0, 0], negProfileAdj));
        if (opts.numLobes === 3) {
          if (lobeRadType === "mean") {
            centreCircle = extrudeRotate({ segments: 48 }, translate([opts.radius * 0.435, 0, 0], negProfileCut));
          } else if (lobeRadType === "inSlice") {
            centreCircle = extrudeRotate({ segments: 48 }, translate([opts.radius * 0.3, 0, 0], negProfileCut));
          } else if (lobeRadType === "halfRadius") {
            centreCircle = extrudeRotate({ segments: 48 }, translate([opts.radius * 0.5, 0, 0], negProfileCut));
          }
        }
        if (isCentreCut) {
          cutLobe = scission(subtract(cutLobe, centreCircle))[0];
        }
        const rotationAngles = [];
        for (let index = 1; index < opts.numLobes; index++) {
          rotationAngles.push(centralAngle * index);
        }
        const rotatedLobes = rotationAngles.map((angle) => {
          return rotate([0, 0, angle], cutLobe);
        });
        return union(cutLobe, ...rotatedLobes);
      };
      return {
        buildFoil3d,
        /**
         * Builds a trefoil opening using a given 2d cross-section profile
         * @memberof models.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        trefoil: (opts, geomProfile) => {
          return buildFoil3d({ ...opts, numLobes: 3 }, geomProfile);
        },
        /**
         * Builds a quatrefoil opening using a given 2d cross-section profile
         * @memberof models.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        quatrefoil: (opts, geomProfile) => {
          return buildFoil3d({ ...opts, numLobes: 4 }, geomProfile);
        },
        /**
         * Builds a cinquefoil opening using a given 2d cross-section profile
         * @memberof models.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        cinquefoil: (opts, geomProfile) => {
          return buildFoil3d({ ...opts, numLobes: 5 }, geomProfile);
        },
        /**
         * Builds a sexfoil opening using a given 2d cross-section profile
         * @memberof models.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        sexfoil: (opts, geomProfile) => {
          return buildFoil3d({ ...opts, numLobes: 6 }, geomProfile);
        },
        /**
         * Builds an octofoil opening using a given 2d cross-section profile
         * @memberof models.foil
         * @instance
         * @param {Object} opts
         * @param {number} opts.radius - radius of container circle
         * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
         * @param {boolean} opts.cutCentre - if true, cuts a circular hole in centre of opening (only for 3D)
         * @param {geom2.Geom2} geomProfile - 2D cross-section profile
         */
        octofoil: (opts, geomProfile) => {
          return buildFoil3d({ ...opts, numLobes: 8 }, geomProfile);
        }
      };
    };
    module2.exports = { init: foilBuilder };
  }
});

// packages/swcad-js-models/src/structure/wall/index.js
var require_wall = __commonJS({
  "packages/swcad-js-models/src/structure/wall/index.js"(exports2, module2) {
    "use strict";
    var wallBuilder = ({ jscad, swcadJs }) => {
      const { union, subtract } = jscad.booleans;
      const { align } = jscad.transforms;
      const { cuboid } = jscad.primitives;
      const { measureDimensions } = jscad.measurements;
      const { moulding } = swcadJs.components;
      const { trim } = swcadJs.profiles;
      const { PHI_INV } = swcadJs.data.constants;
      const crownTrim = ({ totalThickness, totalLength, trimProfile }) => {
        const profileDims = measureDimensions(trimProfile);
        return moulding.cuboidMoulding({ size: [totalLength, totalThickness, profileDims[1]] }, trimProfile);
      };
      const dadoTrim = ({ totalThickness, totalLength, trimProfile }) => {
        const profileDims = measureDimensions(trimProfile);
        return moulding.cuboidMoulding({ size: [totalLength, totalThickness, profileDims[1]] }, trimProfile);
      };
      const baseTrim = ({ totalThickness, totalLength, trimProfile }) => {
        const profileDims = measureDimensions(trimProfile);
        return moulding.cuboidMoulding({ size: [totalLength, totalThickness, profileDims[1]] }, trimProfile);
      };
      const getEntryTrimForDadoUnits = ({ dadoUnits, trimUnitHeight, trimUnitDepth }) => {
        const tFamilyAranea = trim.aranea({ size: [trimUnitHeight, trimUnitDepth] });
        let entryTrim = tFamilyAranea.crown.small;
        if (dadoUnits === 1) {
          entryTrim = tFamilyAranea.crown.medium;
        } else if (dadoUnits === 2) {
          entryTrim = tFamilyAranea.crown.large;
        }
        return entryTrim;
      };
      const verifyTrimUnits = ({ trimOpts, baseUnits, dadoUnits, crownUnits }) => {
        let bUnits = baseUnits || 0;
        let dUnits = dadoUnits || 0;
        let cUnits = crownUnits || 0;
        if (!trimOpts.includes("base")) {
          bUnits = 0;
        }
        if (!trimOpts.includes("dado")) {
          dUnits = 0;
        }
        if (!trimOpts.includes("crown")) {
          cUnits = 0;
        }
        return {
          baseUnits: bUnits,
          dadoUnits: dUnits,
          crownUnits: cUnits
        };
      };
      return {
        getEntryTrimForDadoUnits,
        verifyTrimUnits,
        /**
         * Builds a wall.
         * @memberof models.structure.wall
         * @instance
         * @param {Object} opts 
         * @param {number} opts.length
         * @param {number} opts.thickness
         * @param {number} opts.height
         * @param {string[]} opts.trimOpts - ['base', 'dado', 'crown']
         * @param {string} opts.half  - 'upper' or 'lower'
         * @param {number} opts.crownUnits - Style level of crow trim. Expects integer between 0 to 2
         * @param {number} opts.dadoHeight - height of dado rail
         * @param {number} opts.dadoUnits - Style level of dado wall and trim. Expects integer between 0 to 2
         * @param {number} opts.baseUnits - Style level of base trim. Expects integer between 0 to 2
         * @param {number} opts.trimUnitHeight
         * @param {number} opts.trimUnitDepth
         * @param {string[]} opts.wallOpts 
         * @param {number} opts.trimSides - sides where trim is present. Expects integer between 1 to 4
         * @returns Wall geometry
        */
        buildWall: (opts) => {
          const {
            baseUnits,
            dadoUnits,
            crownUnits
          } = verifyTrimUnits({
            trimOpts: opts.trimOpts,
            baseUnits: opts.baseUnits,
            dadoUnits: opts.dadoUnits,
            crownUnits: opts.crownUnits
          });
          const baseWall = align({ modes: ["center", "center", "min"] }, cuboid({
            size: [opts.length, opts.thickness, opts.height]
          }));
          const tFamilyAranea = trim.aranea({
            size: [opts.trimUnitHeight, opts.trimUnitDepth]
          });
          const dadoHt = opts.dadoHeight || opts.height * (1 - PHI_INV);
          const dadoHtAdj = dadoHt - opts.trimUnitHeight * (dadoUnits + 0.5);
          const dadoAdj = dadoUnits * 2 * opts.trimUnitDepth;
          const dadoWallSpecs = [dadoAdj + opts.length, dadoAdj + opts.thickness];
          const dadoWall = align({ modes: ["center", "center", "min"] }, cuboid({
            size: [dadoWallSpecs[0], dadoWallSpecs[1], dadoHtAdj]
          }));
          let wallWithTrim = baseWall;
          if (opts.trimOpts.includes("base") && opts.half != "upper") {
            let baseProfile = tFamilyAranea.base.small;
            if (baseUnits === 1) {
              baseProfile = tFamilyAranea.base.medium;
            } else if (baseUnits === 2) {
              baseProfile = tFamilyAranea.base.large;
            }
            const baseAdj = (dadoUnits + baseUnits + 1) * 2 * opts.trimUnitDepth;
            const baseTrimSpecs = [baseAdj + opts.length, baseAdj + opts.thickness];
            const bTrim = align({ modes: ["center", "center", "min"] }, baseTrim({
              totalLength: baseTrimSpecs[0],
              totalThickness: baseTrimSpecs[1],
              trimProfile: baseProfile
            }));
            wallWithTrim = union(wallWithTrim, bTrim);
          }
          if (opts.trimOpts.includes("dado") && opts.half != "upper") {
            wallWithTrim = union(wallWithTrim, dadoWall);
            let dadoProfile = tFamilyAranea.dado.small;
            if (dadoUnits === 1) {
              dadoProfile = tFamilyAranea.dado.medium;
            } else if (dadoUnits === 2) {
              dadoProfile = tFamilyAranea.dado.large;
            }
            const dadoTrimSpecs = [dadoWallSpecs[0] + opts.trimUnitDepth, dadoWallSpecs[1] + opts.trimUnitDepth];
            const dTrim = align({ modes: ["center", "center", "max"], relativeTo: [0, 0, dadoHt] }, dadoTrim({
              totalLength: dadoTrimSpecs[0],
              totalThickness: dadoTrimSpecs[1],
              trimProfile: dadoProfile
            }));
            wallWithTrim = union(wallWithTrim, dTrim);
          }
          if (opts.trimOpts.includes("crown") && opts.half != "lower") {
            let crownProfile = tFamilyAranea.crown.small;
            if (crownUnits === 1) {
              crownProfile = tFamilyAranea.crown.medium;
            } else if (crownUnits === 2) {
              crownProfile = tFamilyAranea.crown.large;
            }
            const crownAdj = (crownUnits + 1) * 2 * opts.trimUnitDepth;
            const crownTrimSpecs = [crownAdj + opts.length, crownAdj + opts.thickness];
            const cTrim = align({ modes: ["center", "center", "max"], relativeTo: [0, 0, opts.height] }, crownTrim({
              totalLength: crownTrimSpecs[0],
              totalThickness: crownTrimSpecs[1],
              trimProfile: crownProfile
            }));
            wallWithTrim = union(wallWithTrim, cTrim);
          }
          const wallDim = measureDimensions(baseWall);
          const cutBoxSpecs = [wallDim[0] * 2, wallDim[1] * 2, wallDim[2] * 1.25];
          if (opts.half === "upper") {
            const cutBox = align({ modes: ["center", "center", "max"], relativeTo: [0, 0, dadoHt] }, cuboid({ size: cutBoxSpecs }));
            wallWithTrim = subtract(wallWithTrim, cutBox);
          } else if (opts.half === "lower") {
            const cutBox = align({ modes: ["center", "center", "min"], relativeTo: [0, 0, dadoHt] }, cuboid({ size: cutBoxSpecs }));
            wallWithTrim = subtract(wallWithTrim, cutBox);
          }
          return wallWithTrim;
        }
      };
    };
    module2.exports = { init: wallBuilder };
  }
});

// packages/swcad-js-models/src/structure/wall-entryway/index.js
var require_wall_entryway = __commonJS({
  "packages/swcad-js-models/src/structure/wall-entryway/index.js"(exports2, module2) {
    "use strict";
    var entrywayBuilder = ({ jscad, swcadJs }) => {
      const { union, subtract, intersect } = jscad.booleans;
      const { translate, rotate, mirror } = jscad.transforms;
      const { cuboid } = jscad.primitives;
      const { measureDimensions } = jscad.measurements;
      const { extrudeLinear } = jscad.extrusions;
      const { hull } = jscad.hulls;
      const {
        arch
      } = swcadJs.models;
      const {
        wall
      } = swcadJs.models.structure;
      const {
        arch: arch2d
      } = swcadJs.profiles.structure;
      return {
        /**
         * Builds a gothic entryway.
         * @memberof models.structure.wallEntryway
         * @instance
         * @param {Object} opts 
         * @param {number} opts.wallLength
         * @param {number} opts.wallThickness
         * @param {number} opts.wallHeight
         * @param {number} opts.entryLength
         * @param {number} opts.trimUnitHeight
         * @param {number} opts.trimUnitDepth
         * @param {number} opts.crownUnits
         * @param {number} opts.dadoHeight
         * @param {number} opts.dadoUnits
         * @param {number} opts.baseUnits
         * @param {number} opts.wallOpts
         * @param {number} opts.trimSides
         * @param {string[]} opts.trimOpts - ['base', 'dado', 'crown']
         * @param {string[]} opts.entryOpts 
         * @param {number} opts.archRadFactor - arch radius factor
         * @returns Entryway geometry
         */
        buildGothicEntryway: (opts) => {
          const wallSpace = opts.wallLength - opts.entryLength;
          const wall1Specs = [wallSpace / 2, opts.wallThickness, opts.wallHeight];
          const wall2Specs = [wallSpace / 2, opts.wallThickness, opts.wallHeight];
          const topWallSpecs = [opts.wallLength, opts.wallThickness, opts.wallHeight];
          const trimUnits = wall.verifyTrimUnits({
            trimOpts: opts.trimOpts,
            baseUnits: opts.baseUnits,
            dadoUnits: opts.dadoUnits,
            crownUnits: opts.crownUnits
          });
          const wall1 = wall.buildWall({
            height: wall1Specs[2],
            thickness: wall1Specs[1],
            length: wall1Specs[0],
            // wallOpts: 0,
            half: "lower",
            trimOpts: opts.trimOpts,
            baseUnits: trimUnits.baseUnits,
            dadoUnits: trimUnits.dadoUnits,
            crownUnits: trimUnits.crownUnits,
            dadoHeight: opts.dadoHeight,
            trimUnitHeight: opts.trimUnitHeight,
            trimUnitDepth: opts.trimUnitDepth
          });
          const wall1Dims = measureDimensions(wall1);
          const wall2 = wall.buildWall({
            height: wall2Specs[2],
            thickness: wall2Specs[1],
            length: wall2Specs[0],
            half: "lower",
            trimOpts: opts.trimOpts,
            baseUnits: trimUnits.baseUnits,
            dadoUnits: trimUnits.dadoUnits,
            crownUnits: trimUnits.crownUnits,
            dadoHeight: opts.dadoHeight,
            trimUnitHeight: opts.trimUnitHeight,
            trimUnitDepth: opts.trimUnitDepth
          });
          const topWall = wall.buildWall({
            height: topWallSpecs[2],
            thickness: topWallSpecs[1],
            length: topWallSpecs[0],
            half: "upper",
            trimOpts: opts.trimOpts,
            baseUnits: trimUnits.baseUnits,
            dadoUnits: trimUnits.dadoUnits,
            crownUnits: trimUnits.crownUnits,
            dadoHeight: opts.dadoHeight,
            trimUnitHeight: opts.trimUnitHeight,
            trimUnitDepth: opts.trimUnitDepth
          });
          let archTrimProfile = wall.getEntryTrimForDadoUnits({
            dadoUnits: trimUnits.dadoUnits,
            trimUnitHeight: opts.trimUnitHeight,
            trimUnitDepth: opts.trimUnitDepth
          });
          archTrimProfile = rotate([0, 0, Math.PI * 1.5], archTrimProfile);
          const archTrimProfileSpecs = measureDimensions(archTrimProfile);
          const archRadFactor = opts.archRadFactor || 0.75;
          const thinWallThickness = opts.wallThickness - archTrimProfileSpecs[1] * 2;
          const trimArch = arch.twoPtArch({ arcRadius: opts.entryLength * archRadFactor, archWidth: opts.entryLength, profileWidth: 5 }, archTrimProfile);
          const adjTrimArch = translate([0, (thinWallThickness + archTrimProfileSpecs[1]) / 2, wall1Dims[2]], trimArch);
          const adjTrimArchOpp = mirror({ normal: [0, 1, 0] }, adjTrimArch);
          const trimArchDims = measureDimensions(trimArch);
          const innerOpeningSpecs = [opts.entryLength, 5 * opts.wallThickness, null];
          const innerOpeningProfile = arch2d.twoPtArch({ arcRadius: innerOpeningSpecs[0] * archRadFactor, archWidth: innerOpeningSpecs[0] });
          const innerOpening = rotate([Math.PI / 2, 0, 0], extrudeLinear({ height: innerOpeningSpecs[1] }, innerOpeningProfile));
          const adjInnerOpening = translate([0, innerOpeningSpecs[1] / 2, wall1Dims[2]], innerOpening);
          const trimOpeningSpecs = [
            archTrimProfileSpecs[0] * 2 + opts.entryLength,
            4 * opts.wallThickness,
            wall1Dims[2] + trimArchDims[2]
          ];
          const trimOpening = hull([
            translate([0, trimOpeningSpecs[1] / -2, 0], adjTrimArch),
            translate([0, trimOpeningSpecs[1] / 2, 0], adjTrimArch)
          ]);
          const adjTrimOpening = translate([0, 0, 0], trimOpening);
          const thinWall = intersect(
            translate([0, 0, opts.wallHeight / 2], cuboid({
              size: [
                opts.wallLength,
                thinWallThickness,
                opts.wallHeight
              ]
            })),
            topWall
          );
          let punchedTopWall = subtract(topWall, adjInnerOpening);
          if (opts.trimOpts.includes("dado")) {
            punchedTopWall = subtract(punchedTopWall, adjTrimOpening);
            punchedTopWall = union(punchedTopWall, thinWall);
            punchedTopWall = subtract(punchedTopWall, adjInnerOpening);
          }
          const wallAdj = wallSpace / 4 + opts.entryLength / 2;
          const trimArches = union(
            adjTrimArch,
            adjTrimArchOpp
          );
          const entryway = union(
            translate([-wallAdj, 0, 0], wall1),
            translate([wallAdj, 0, 0], wall2),
            translate([0, 0, 0], punchedTopWall)
          );
          return union(entryway, trimArches);
        }
      };
    };
    module2.exports = { init: entrywayBuilder };
  }
});

// packages/swcad-js-models/src/structure/index.js
var require_structure2 = __commonJS({
  "packages/swcad-js-models/src/structure/index.js"(exports2, module2) {
    "use strict";
    var wallModule = require_wall();
    var wallEntrywayModule = require_wall_entryway();
    var structureInit = ({ jscad, swcadJs }) => {
      const wall = wallModule.init({ jscad, swcadJs });
      const preLib = {
        ...swcadJs
      };
      preLib.models.structure = {
        wall
      };
      const structure = {
        wall: wallModule.init({ jscad, swcadJs }),
        wallEntryway: wallEntrywayModule.init({ jscad, swcadJs })
      };
      return structure;
    };
    module2.exports = {
      init: structureInit
    };
  }
});

// packages/swcad-js-models/src/index.js
var require_src8 = __commonJS({
  "packages/swcad-js-models/src/index.js"(exports2, module2) {
    "use strict";
    var archModule = require_arch();
    var foilModule = require_foil();
    var structureModule = require_structure2();
    var modelsInit = ({ jscad, swcadJs }) => {
      const arch = archModule.init({ jscad, swcadJs });
      const preLib = {
        ...swcadJs,
        models: {
          arch
        }
      };
      const models = {
        arch,
        foil: foilModule.init({ jscad, swcadJs: preLib }),
        structure: structureModule.init({ jscad, swcadJs: preLib })
      };
      return models;
    };
    module2.exports = {
      init: modelsInit
    };
  }
});

// packages/swcad-js-core/src/index.js
var require_src9 = __commonJS({
  "packages/swcad-js-core/src/index.js"(exports2, module2) {
    "use strict";
    var coreInit = ({ jscad }) => {
      const swcadJsCore = {
        data: require_src().init({ jscad }),
        calcs: null,
        profiles: null,
        profileSpec: null,
        components: null,
        componentSpec: null,
        utils: null,
        models: null
      };
      let swcadJsAssembly = swcadJsCore;
      const assemblyCalcs = require_src2().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.calcs = assemblyCalcs;
      const assemblyProfiles = require_src3().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.profiles = assemblyProfiles;
      const assemblyProfileSpec = require_src4().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.profileSpec = assemblyProfileSpec;
      const assemblyComponents = require_src5().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.components = assemblyComponents;
      const assemblyComponentSpec = require_src6().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.componentSpec = assemblyComponentSpec;
      const assemblyUtils = require_src7().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.utils = assemblyUtils;
      const assemblyModels = require_src8().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.models = assemblyModels;
      const swcadJs = {
        data: swcadJsAssembly.data,
        calcs: swcadJsAssembly.calcs,
        profiles: swcadJsAssembly.profiles,
        profileSpec: swcadJsAssembly.profileSpec,
        components: swcadJsAssembly.components,
        componentSpec: swcadJsAssembly.componentSpec,
        utils: swcadJsAssembly.utils,
        models: swcadJsAssembly.models
      };
      console.log("swcadJs initialized", swcadJs);
      return swcadJs;
    };
    module2.exports = {
      init: coreInit
    };
  }
});

// src/index.js
var coreModule = require_src9();
var init = ({ jscad }) => {
  const swcadJs = coreModule.init({ jscad });
  return swcadJs;
};
module.exports = { init };
