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
       * Tri_45_Factor
       * @memberof data.constants
       * @constant {number}
       */
      TRI_45_FACTOR: tri45Factor,
      /**
       * Tri_30_Factor
       * @memberof data.constants
       * @constant {number}
       */
      TRI_30_FACTOR: tri30Factor,
      /**
       * Plastic_Ratio
       * @memberof data.constants
       * @constant {number}
       */
      PLASTIC_RATIO: 1.3247179572,
      /**
       * Supergolden_Ratio
       * @memberof data.constants
       * @constant {number}
       */
      SUPERGOLDEN_RATIO: 1.4655712319,
      /**
       * Golden_Ratio
       * @memberof data.constants
       * @constant {number}
       */
      GOLDEN_RATIO: phi,
      /**
       * Silver_Ratio
       * @memberof data.constants
       * @constant {number}
       */
      SILVER_RATIO: 1 + tri45Factor,
      // 2.4142
      /**
       * Bronze_Ratio
       * @memberof data.constants
       * @constant {number}
       */
      BRONZE_RATIO: 3 + Math.sqrt(13) / 2,
      // 3.3028
      /**
       * Copper_Ratio
       * @memberof data.constants
       * @constant {number}
       */
      COPPER_RATIO: 2 + Math.sqrt(5),
      // 4.2361
      /**
       * Nickel_Ratio
       * @memberof data.constants
       * @constant {number}
       */
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

// packages/swcad-js-data/src/standards/std-crafts.js
var require_std_crafts = __commonJS({
  "packages/swcad-js-data/src/standards/std-crafts.js"(exports2, module2) {
    "use strict";
    var craftStd = ({ jscad }) => {
      return {
        /**
         * Diam_Toothpick
         * @memberof data.standards.crafts
         * @constant {number}
         */
        DIAM_TOOTHPICK: 2.3,
        /**
         * Diam_Bbq_Skewer
         * @memberof data.standards.crafts
         * @constant {number}
         */
        DIAM_BBQ_SKEWER: 3.25,
        /**
         * Popsicle_Stick_Width
         * @memberof data.standards.crafts
         * @constant {number}
         */
        POPSICLE_STICK_WIDTH: 10,
        /**
         * Popsicle_Stick_Thickness
         * @memberof data.standards.crafts
         * @constant {number}
         */
        POPSICLE_STICK_THICKNESS: 2,
        /**
         * Popsicle_Stick_Length
         * @memberof data.standards.crafts
         * @constant {number}
         */
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
      const masonryCore = {
        MORTAR_JOINT: inchesToMm(3 / 8),
        MORTAR_JOINT_LG: inchesToMm(1 / 2)
      };
      const brick = {
        /**
         * Us_Brick_Length_Nom
         * @memberof data.standards.masonry.brick
         */
        US_BRICK_LENGTH_NOM: inchesToMm(8),
        /**
         * Us_Brick_Width_Nom
         * @memberof data.standards.masonry.brick
         */
        US_BRICK_WIDTH_NOM: inchesToMm(4),
        /**
         * Us_Brick_Height_Nom
         * @memberof data.standards.masonry.brick
         */
        US_BRICK_HEIGHT_NOM: inchesToMm(2 + 2 / 3),
        /**
         * Uk_Brick_Length_Nom
         * @memberof data.standards.masonry.brick
         */
        UK_BRICK_LENGTH_NOM: 215,
        /**
         * Uk_Brick_Width_Nom
         * @memberof data.standards.masonry.brick
         */
        UK_BRICK_WIDTH_NOM: 102.5,
        /**
         * Uk_Brick_Height_Nom
         * @memberof data.standards.masonry.brick
         */
        UK_BRICK_HEIGHT_NOM: 65
      };
      brick["US_BRICK_LENGTH"] = brick.US_BRICK_LENGTH_NOM - masonryCore.MORTAR_JOINT;
      brick["US_BRICK_WIDTH"] = brick.US_BRICK_WIDTH_NOM - masonryCore.MORTAR_JOINT;
      brick["US_BRICK_HEIGHT"] = brick.US_BRICK_HEIGHT_NOM - masonryCore.MORTAR_JOINT;
      brick["US_BRICK_LENGTH_LG_JOINT"] = brick.US_BRICK_LENGTH_NOM - masonryCore.MORTAR_JOINT_LG;
      brick["US_BRICK_WIDTH_LG_JOINT"] = brick.US_BRICK_WIDTH_NOM - masonryCore.MORTAR_JOINT_LG;
      brick["US_BRICK_HEIGHT_LG_JOINT"] = brick.US_BRICK_HEIGHT_NOM - masonryCore.MORTAR_JOINT_LG;
      const concrete = {
        /**
         * Cmu_Face_Thickness
         * @memberof data.standards.masonry.concrete
         */
        CMU_FACE_THICKNESS: 36,
        /**
         * Cmu_Web_Thickness
         * @memberof data.standards.masonry.concrete
         */
        CMU_WEB_THICKNESS: 32,
        /**
         * Cmu_Web_Thickness_Sm
         * @memberof data.standards.masonry.concrete
         */
        CMU_WEB_THICKNESS_SM: 26,
        /**
         * Cmu_4_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_4_NOM: [inchesToMm(16), inchesToMm(4), inchesToMm(8)],
        /**
         * Cmu_6_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_6_NOM: [inchesToMm(16), inchesToMm(6), inchesToMm(8)],
        /**
         * Cmu_8_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_8_NOM: [inchesToMm(16), inchesToMm(8), inchesToMm(8)],
        /**
         * Cmu_10_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_10_NOM: [inchesToMm(16), inchesToMm(10), inchesToMm(8)],
        /**
         * Cmu_12_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_12_NOM: [inchesToMm(16), inchesToMm(12), inchesToMm(8)],
        /**
         * Cmu_4half_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_4HALF_NOM: [inchesToMm(8), inchesToMm(4), inchesToMm(8)],
        /**
         * Cmu_6half_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_6HALF_NOM: [inchesToMm(8), inchesToMm(6), inchesToMm(8)],
        /**
         * Cmu_8half_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_8HALF_NOM: [inchesToMm(8), inchesToMm(8), inchesToMm(8)],
        /**
         * Cmu_10half_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_10HALF_NOM: [inchesToMm(8), inchesToMm(10), inchesToMm(8)],
        /**
         * Cmu_12half_Nom
         * @memberof data.standards.masonry.concrete
         */
        CMU_12HALF_NOM: [inchesToMm(8), inchesToMm(12), inchesToMm(8)]
      };
      Object.entries(concrete).forEach(([concKey, concVal]) => {
        if (concKey.includes("_NOM")) {
          const newKey = concKey.replace("_NOM", "");
          concrete[newKey] = [
            concVal[0] - masonryCore.MORTAR_JOINT,
            concVal[1] - masonryCore.MORTAR_JOINT,
            concVal[2] - masonryCore.MORTAR_JOINT
          ];
          concrete[`${newKey}_LG_JOINT`] = [
            concVal[0] - masonryCore.MORTAR_JOINT_LG,
            concVal[1] - masonryCore.MORTAR_JOINT_LG,
            concVal[2] - masonryCore.MORTAR_JOINT_LG
          ];
        }
      });
      const masonry = {
        ...masonryCore,
        brick,
        concrete
      };
      return masonry;
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
        /**
         * A0 sheet
         * @memberof data.standards.paper.metric
         */
        A0: [841, 1189],
        /**
         * A1 sheet
         * @memberof data.standards.paper.metric
         */
        A1: [594, 841],
        /**
         * A2 sheet
         * @memberof data.standards.paper.metric
         */
        A2: [420, 594],
        /**
         * A3 sheet
         * @memberof data.standards.paper.metric
         */
        A3: [297, 420],
        /**
         * A4 sheet
         * @memberof data.standards.paper.metric
         */
        A4: [210, 297],
        /**
         * A5 sheet
         * @memberof data.standards.paper.metric
         */
        A5: [148, 210],
        /**
         * A6 sheet
         * @memberof data.standards.paper.metric
         */
        A6: [105, 148],
        /**
         * A7 sheet
         * @memberof data.standards.paper.metric
         */
        A7: [74, 105],
        /**
         * A8 sheet
         * @memberof data.standards.paper.metric
         */
        A8: [52, 74],
        /**
         * A9 sheet
         * @memberof data.standards.paper.metric
         */
        A9: [37, 52],
        /**
         * A10 sheet
         * @memberof data.standards.paper.metric
         */
        A10: [26, 37],
        /**
         * B0 sheet
         * @memberof data.standards.paper.metric
         */
        B0: [1e3, 1414],
        /**
         * B1 sheet
         * @memberof data.standards.paper.metric
         */
        B1: [707, 1e3],
        /**
         * B2 sheet
         * @memberof data.standards.paper.metric
         */
        B2: [500, 707],
        /**
         * B3 sheet
         * @memberof data.standards.paper.metric
         */
        B3: [353, 500],
        /**
         * B4 sheet
         * @memberof data.standards.paper.metric
         */
        B4: [250, 353],
        /**
         * B5 sheet
         * @memberof data.standards.paper.metric
         */
        B5: [167, 250],
        /**
         * B6 sheet
         * @memberof data.standards.paper.metric
         */
        B6: [125, 176],
        /**
         * B7 sheet
         * @memberof data.standards.paper.metric
         */
        B7: [88, 125],
        /**
         * B8 sheet
         * @memberof data.standards.paper.metric
         */
        B8: [62, 88],
        /**
         * B9 sheet
         * @memberof data.standards.paper.metric
         */
        B9: [44, 62],
        /**
         * B10 sheet
         * @memberof data.standards.paper.metric
         */
        B10: [31, 44],
        /**
         * C0 sheet
         * @memberof data.standards.paper.metric
         */
        C0: [917, 1297],
        /**
         * C1 sheet
         * @memberof data.standards.paper.metric
         */
        C1: [648, 917],
        /**
         * C2 sheet
         * @memberof data.standards.paper.metric
         */
        C2: [458, 648],
        /**
         * C3 sheet
         * @memberof data.standards.paper.metric
         */
        C3: [324, 458],
        /**
         * C4 sheet
         * @memberof data.standards.paper.metric
         */
        C4: [229, 324],
        /**
         * C5 sheet
         * @memberof data.standards.paper.metric
         */
        C5: [162, 229],
        /**
         * C6 sheet
         * @memberof data.standards.paper.metric
         */
        C6: [114, 162],
        /**
         * C7 sheet
         * @memberof data.standards.paper.metric
         */
        C7: [81, 114],
        /**
         * C8 sheet
         * @memberof data.standards.paper.metric
         */
        C8: [57, 81],
        /**
         * C9 sheet
         * @memberof data.standards.paper.metric
         */
        C9: [40, 57],
        /**
         * C10 sheet
         * @memberof data.standards.paper.metric
         */
        C10: [28, 40]
      };
      const imperialAnsi = {
        /**
         * Ansi_A sheet
         * @memberof data.standards.paper.imperialAnsi
         */
        ANSI_A: [inchesToMm(8.5), inchesToMm(11)],
        /**
         * Ansi_B sheet
         * @memberof data.standards.paper.imperialAnsi
         */
        ANSI_B: [inchesToMm(11), inchesToMm(17)],
        /**
         * Ansi_C sheet
         * @memberof data.standards.paper.imperialAnsi
         */
        ANSI_C: [inchesToMm(17), inchesToMm(22)],
        /**
         * Ansi_D sheet
         * @memberof data.standards.paper.imperialAnsi
         */
        ANSI_D: [inchesToMm(22), inchesToMm(34)],
        /**
         * Ansi_E sheet
         * @memberof data.standards.paper.imperialAnsi
         */
        ANSI_E: [inchesToMm(34), inchesToMm(44)]
      };
      const imperialArch = {
        /**
         * Arch_A sheet
         * @memberof data.standards.paper.imperialArch
         */
        ARCH_A: [inchesToMm(9), inchesToMm(12)],
        /**
         * Arch_B sheet
         * @memberof data.standards.paper.imperialArch
         */
        ARCH_B: [inchesToMm(12), inchesToMm(18)],
        /**
         * Arch_C sheet
         * @memberof data.standards.paper.imperialArch
         */
        ARCH_C: [inchesToMm(18), inchesToMm(24)],
        /**
         * Arch_D sheet
         * @memberof data.standards.paper.imperialArch
         */
        ARCH_D: [inchesToMm(24), inchesToMm(36)],
        /**
         * Arch_E1 sheet
         * @memberof data.standards.paper.imperialArch
         */
        ARCH_E1: [inchesToMm(30), inchesToMm(42)],
        /**
         * Arch_E sheet
         * @memberof data.standards.paper.imperialArch
         */
        ARCH_E: [inchesToMm(36), inchesToMm(48)]
      };
      const imperial = {
        /**
         * Letter sheet
         * @memberof data.standards.paper.imperial
         */
        LETTER: imperialAnsi.ANSI_A,
        /**
         * Legal sheet
         * @memberof data.standards.paper.imperial
         */
        LEGAL: [inchesToMm(8.5), inchesToMm(14)],
        /**
         * Tabloid sheet
         * @memberof data.standards.paper.imperial
         */
        TABLOID: imperialAnsi.ANSI_B,
        /**
         * Ledger sheet
         * @memberof data.standards.paper.imperial
         */
        LEDGER: [inchesToMm(17), inchesToMm(11)]
      };
      const cards = {
        /**
         * Business_Card sheet
         * @memberof data.standards.paper.cards
         */
        BUSINESS_CARD: [inchesToMm(3.5), inchesToMm(2)],
        /**
         * Business_Card_Sq sheet
         * @memberof data.standards.paper.cards
         */
        BUSINESS_CARD_SQ: [inchesToMm(2.5), inchesToMm(2.5)],
        /**
         * Credit_Card sheet
         * @memberof data.standards.paper.cards
         */
        CREDIT_CARD: [85.6, 53.98],
        /**
         * Devotional sheet
         * @memberof data.standards.paper.cards
         */
        DEVOTIONAL: [inchesToMm(2.5), inchesToMm(4.5)],
        /**
         * Index_Sm sheet
         * @memberof data.standards.paper.cards
         */
        INDEX_SM: [inchesToMm(5), inchesToMm(3)],
        /**
         * Index_Md sheet
         * @memberof data.standards.paper.cards
         */
        INDEX_MD: [inchesToMm(6), inchesToMm(4)],
        /**
         * Index_Lg sheet
         * @memberof data.standards.paper.cards
         */
        INDEX_LG: [inchesToMm(8), inchesToMm(5)],
        /**
         * Index_Xl sheet
         * @memberof data.standards.paper.cards
         */
        INDEX_XL: [inchesToMm(9), inchesToMm(6)],
        /**
         * Postcard sheet
         * @memberof data.standards.paper.cards
         */
        POSTCARD: [inchesToMm(6), inchesToMm(4)]
      };
      const bookmarks = {
        /**
         * Bookmark_Sm sheet
         * @memberof data.standards.paper.bookmarks
         */
        BOOKMARK_SM: [inchesToMm(1.5), inchesToMm(4.5)],
        /**
         * Bookmark_Md sheet
         * @memberof data.standards.paper.bookmarks
         */
        BOOKMARK_MD: [inchesToMm(2), inchesToMm(6.5)],
        /**
         * Bookmark_Lg sheet
         * @memberof data.standards.paper.bookmarks
         */
        BOOKMARK_LG: [inchesToMm(2.25), inchesToMm(8.5)]
      };
      const poster = {
        /**
         * Posterjam sheet
         * @memberof data.standards.paper.poster
         */
        POSTERJAM: metric.B2,
        /**
         * Album_Cover sheet
         * @memberof data.standards.paper.poster
         */
        ALBUM_COVER: [inchesToMm(12 + 3 / 8), inchesToMm(12 + 3 / 8)]
      };
      const photos = {
        /**
         * Passport_Can photo
         * @memberof data.standards.paper.photos
         */
        PASSPORT_CAN: [50, 70],
        /**
         * Passport_Us photo
         * @memberof data.standards.paper.photos
         */
        PASSPORT_US: [inchesToMm(2), inchesToMm(2)],
        /**
         * Wallet photo
         * @memberof data.standards.paper.photos
         */
        WALLET: [inchesToMm(2), inchesToMm(3)],
        /**
         * R2 photo
         * @memberof data.standards.paper.photos
         */
        R2: [inchesToMm(2.5), inchesToMm(3.5)],
        /**
         * R3 photo
         * @memberof data.standards.paper.photos
         */
        R3: [inchesToMm(3.5), inchesToMm(5)],
        /**
         * R4 photo
         * @memberof data.standards.paper.photos
         */
        R4: [inchesToMm(5.04), inchesToMm(6)],
        /**
         * R5 photo
         * @memberof data.standards.paper.photos
         */
        R5: [inchesToMm(5), inchesToMm(7)],
        /**
         * R6 photo
         * @memberof data.standards.paper.photos
         */
        R6: [inchesToMm(6), inchesToMm(8)],
        /**
         * R8 photo
         * @memberof data.standards.paper.photos
         */
        R8: [inchesToMm(8), inchesToMm(10)],
        /**
         * R10 photo
         * @memberof data.standards.paper.photos
         */
        R10: [inchesToMm(10), inchesToMm(12)],
        /**
         * R11 photo
         * @memberof data.standards.paper.photos
         */
        R11: [inchesToMm(11), inchesToMm(14)],
        /**
         * R12 photo
         * @memberof data.standards.paper.photos
         */
        R12: [inchesToMm(12), inchesToMm(15)]
      };
      return {
        cards,
        metric,
        imperial,
        imperialAnsi,
        imperialArch,
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
        /**
         * Pegboard_Spacing
         * @memberof data.standards.pegboard
         */
        PEGBOARD_SPACING: inchesToMm(1),
        /**
         * Pegboard_Hole_Diam
         * @memberof data.standards.pegboard
         */
        PEGBOARD_HOLE_DIAM: inchesToMm(7 / 32),
        /**
         * Micro_Pegboard_Spacing
         * @memberof data.standards.pegboard
         */
        MICRO_PEGBOARD_SPACING: inchesToMm(1 / 2),
        /**
         * Micro_Pegboard_Hole_Diam
         * @memberof data.standards.pegboard
         */
        MICRO_PEGBOARD_HOLE_DIAM: inchesToMm(1 / 8)
      };
      const gridfinity = {
        /**
         * Gridfinity_Spacing
         * @memberof data.standards.gridfinity
         */
        GRIDFINITY_SPACING: 42,
        /**
         * Gridfinity_Rail_Width
         * @memberof data.standards.gridfinity
         */
        GRIDFINITY_RAIL_WIDTH: 7
      };
      const types = {
        /**
         * Type_Default
         * @memberof data.standards.types
         */
        TYPE_DEFAULT: { id: "default", desc: "Default" },
        /**
         * Type_Alt
         * @memberof data.standards.types
         */
        TYPE_ALT: { id: "alt", desc: "Alternate" }
      };
      const interfaceThickness = 1.333333;
      const fitGap = inchesToMm(1 / 128);
      const panelThicknessXs = interfaceThickness * 0.5;
      const panelThicknessSm = interfaceThickness * 0.75;
      const panelThicknessMd = interfaceThickness;
      const panelThicknessLg = interfaceThickness * 1.25;
      const panelThicknessXl = interfaceThickness * 1.5;
      const smProfileBeadWidth = interfaceThickness * 1.125;
      const mdProfileBeadWidth = interfaceThickness * 1.5;
      const lgProfileBeadWidth = interfaceThickness * 1.75;
      const xsReinforcementWidth = 2;
      const smReinforcementWidth = 3;
      const mdReinforcementWidth = 4;
      const lgReinforcementWidth = 5;
      const swDefaults = {
        /**
         * Interface thickness
         * @memberof data.standards
         */
        INTERFACE_THICKNESS: interfaceThickness,
        /**
         * Fit_Gap
         * @memberof data.standards
         */
        FIT_GAP: fitGap,
        /**
         * Panel_Thickness_Xs
         * @memberof data.standards
         */
        PANEL_THICKNESS_XS: panelThicknessXs,
        /**
         * Panel_Thickness_Sm
         * @memberof data.standards
         */
        PANEL_THICKNESS_SM: panelThicknessSm,
        /**
         * Panel_Thickness_Md
         * @memberof data.standards
         */
        PANEL_THICKNESS_MD: panelThicknessMd,
        /**
         * Panel_Thickness_Lg
         * @memberof data.standards
         */
        PANEL_THICKNESS_LG: panelThicknessLg,
        /**
         * Panel_Thickness_Xl
         * @memberof data.standards
         */
        PANEL_THICKNESS_XL: panelThicknessXl,
        /**
         * Sm_Profile_Bead_Width
         * @memberof data.standards
         */
        SM_PROFILE_BEAD_WIDTH: smProfileBeadWidth,
        /**
         * Md_Profile_Bead_Width
         * @memberof data.standards
         */
        MD_PROFILE_BEAD_WIDTH: mdProfileBeadWidth,
        /**
         * Lg_Profile_Bead_Width
         * @memberof data.standards
         */
        LG_PROFILE_BEAD_WIDTH: lgProfileBeadWidth,
        /**
         * Xs_Reinforcement_Width
         * @memberof data.standards
         */
        XS_REINFORCEMENT_WIDTH: xsReinforcementWidth,
        /**
         * Sm_Reinforcement_Width
         * @memberof data.standards
         */
        SM_REINFORCEMENT_WIDTH: smReinforcementWidth,
        /**
         * Md_Reinforcement_Width
         * @memberof data.standards
         */
        MD_REINFORCEMENT_WIDTH: mdReinforcementWidth,
        /**
         * Lg_Reinforcement_Width
         * @memberof data.standards
         */
        LG_REINFORCEMENT_WIDTH: lgReinforcementWidth
      };
      const params = {
        /**
         * Obj_2d_Size
         * @memberof data.standards.params
         */
        OBJ_2D_SIZE: [
          inchesToMm(2),
          inchesToMm(4)
        ],
        /**
         * Obj_3d_Size
         * @memberof data.standards.params
         */
        OBJ_3D_SIZE: [
          inchesToMm(2),
          inchesToMm(4),
          inchesToMm(1)
        ]
      };
      return {
        ...swDefaults,
        pegboard,
        gridfinity,
        types,
        params,
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
    var standards = require_standards();
    var errors = require_errors();
    var internals = require_internals();
    var dataInit = ({ jscad }) => {
      const data = {
        constants,
        functions,
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
         * Calculates side length from apothem and # of sides
         * @memberof calcs.geometry.regPoly
         * @param {number} apothem - distance from center to the midpoint of one side
         * @param {number} numSides - number of polygon sides
         * @returns side length
         */
        sideLengthFromApothem: (apothem, numSides) => {
          return apothem * 2 * Math.tan(Math.PI / numSides);
        },
        /**
         * Calculates side length from circumradius and # of sides
         * @memberof calcs.geometry.regPoly
         * @param {number} circumradius - distance from center to vertex
         * @param {number} numSides - number of polygon sides
         * @returns side length
         */
        sideLengthFromCircumRadius: (circumradius, numSides) => {
          return circumradius * 2 * Math.sin(Math.PI / numSides);
        },
        /**
         * Calculates apothem from circumradius and # of sides
         * @memberof calcs.geometry.regPoly
         * @param {number} circumradius - distance from center to vertex
         * @param {number} numSides - number of polygon sides
         * @returns apothem
         */
        apothemFromCircumradius: (circumradius, numSides) => {
          return circumradius * Math.cos(Math.PI / numSides);
        },
        /**
         * Calculates apothem from side length and # of sides
         * @memberof calcs.geometry.regPoly
         * @param {number} sideLength - side length
         * @param {number} numSides - number of polygon sides
         * @returns apothem
         */
        apothemFromSideLength: (sideLength, numSides) => {
          return sideLength / 2 * Math.tan(Math.PI / numSides);
        },
        /**
         * Calculates circumradius from apothem and # of sides
         * @memberof calcs.geometry.regPoly
         * @param {number} apothem - distance from center to the midpoint of one side
         * @param {number} numSides - number of polygon sides
         * @returns circumradius
         */
        circumradiusFromApothem: (apothem, numSides) => {
          return apothem / Math.cos(Math.PI / numSides);
        },
        /**
         * Calculates circumradius from side length and # of sides
         * @memberof calcs.geometry.regPoly
         * @param {number} sideLength - side length
         * @param {number} numSides - number of polygon sides
         * @returns circumradius
         */
        circumradiusFromSideLength: (sideLength, numSides) => {
          return sideLength / 2 * Math.sin(Math.PI / numSides);
        },
        /**
         * Calculates interior angle from # of sides
         * @memberof calcs.geometry.regPoly
         * @param {number} numSides - number of polygon sides
         * @returns interior angle
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
        math
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
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
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
            reinforcementPatterns: ["x", "cross", "diamond", "full", "full-double"]
          },
          dims: {
            size: [40, 50]
          },
          points: {
            centre: [0, 0]
          },
          typeDetails: {
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const defaultOpts = {
          size: defaultValues.dims.size,
          reinforcementPattern: defaultValues.opts.reinforcementPatterns[0],
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP,
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
        const qtrX = width / 4;
        const midX = width / 2;
        const threeQtrX = qtrX + midX;
        const qtrY = length / 4;
        const midY = length / 2;
        const threeQtrY = qtrY + midY;
        const midPoint = [midX, midY];
        const corners = [
          [0, 0],
          [width, 0],
          [width, length],
          [0, length]
        ];
        const midPoints = [
          [midX, 0],
          [width, midY],
          [midX, length],
          [0, midY]
        ];
        const qtrPoints = [
          [qtrX, 0],
          [threeQtrX, 0],
          [0, qtrY],
          [0, threeQtrY],
          [qtrX, length],
          [threeQtrX, length],
          [width, qtrY],
          [width, threeQtrY]
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
            midPoint,
            corners[1]
          ],
          [
            midPoint,
            corners[3]
          ]
        ];
        const crossBraces = [
          [
            midPoints[0],
            midPoints[2]
          ],
          [
            midPoints[1],
            midPoints[3]
          ]
        ];
        const midBraces = [
          [
            midPoints[0],
            midPoints[1]
          ],
          [
            midPoints[1],
            midPoints[2]
          ],
          [
            midPoints[2],
            midPoints[3]
          ],
          [
            midPoints[3],
            midPoints[0]
          ]
        ];
        const doubleFullBraces = [
          [
            qtrPoints[0],
            qtrPoints[4]
          ],
          [
            qtrPoints[1],
            qtrPoints[5]
          ],
          [
            qtrPoints[2],
            qtrPoints[6]
          ],
          [
            qtrPoints[3],
            qtrPoints[7]
          ]
        ];
        let dots = [];
        let lines = [];
        let primaryLines = [];
        let secondaryLines = [];
        switch (reinforcementPattern) {
          case "full-double":
            primaryLines = [
              ...crossBraces
            ];
            secondaryLines = [
              ...midBraces,
              ...diagBraces,
              ...doubleFullBraces
            ];
            lines = [
              ...primaryLines,
              ...secondaryLines
            ];
            break;
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
          centre: midPoint,
          outline,
          midpoints: midPoints,
          braces: {
            cross: crossBraces,
            diagonal: diagBraces,
            mid: midBraces,
            doubleFull: doubleFullBraces
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
    var coordDiffBetweenPoints = (startPt, endPt) => {
      return [
        endPt[0] - startPt[0],
        endPt[1] - startPt[1]
      ];
    };
    var distanceBetweenPoints = (startPt, endPt) => {
      const coordDiffs = coordDiffBetweenPoints(startPt, endPt);
      const lineLength = Math.hypot(coordDiffs[0], coordDiffs[1]);
      return lineLength;
    };
    var midpointBetweenPoints = (startPt, endPt) => {
      const coordDiffs = coordDiffBetweenPoints(startPt, endPt);
      const midPt = [
        startPt[0] + coordDiffs[0] / 2,
        startPt[1] + coordDiffs[1] / 2
      ];
      return midPt;
    };
    var geometryInit = ({ jscad, swcadJs }) => {
      const { math } = swcadJs.calcs;
      const { constants } = swcadJs.data;
      const angleOfTwoPtLine = (startPt, endPt, mode = "rad") => {
        const coordDiffs = coordDiffBetweenPoints(startPt, endPt);
        const angleRad = Math.atan2(coordDiffs[1], coordDiffs[0]);
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
          const midPt = midpointBetweenPoints(startPt, endPt);
          const lineLength = distanceBetweenPoints(startPt, endPt);
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
        coordDiffBetweenPoints,
        angleOfTwoPtLine,
        midpointBetweenPoints,
        pointFromAngleAndDist,
        getLineDataFromOutlinePoints,
        getTriangularPtsInArea,
        getSquarePtsInArea,
        distanceBetweenPoints,
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
         * Checks if a given integer is even
         * @param {number} n - an integer
         * @returns true if even, false if not
         * @memberof calcs.math
         */
        isEven: (n) => {
          return n % 2 == 0;
        },
        /**
         * Checks if a given integer is odd
         * @memberof calcs.math
         * @param {number} n - an integer
         * @returns true if odd, false if not
         */
        isOdd: (n) => {
          return Math.abs(n % 2) == 1;
        },
        /**
         * Converts distance in inches to mm
         * @memberof calcs.math
         * @param {*} numInches 
         * @returns distance in mm
         */
        inchesToMm: (numInches) => numInches * INCHES_MM_FACTOR,
        /**
         * Converts distance in mm to inches
         * @memberof calcs.math
         * @param {number} numInches 
         * @returns distance in inches
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
        },
        arrayCartesianProduct
      };
    };
    module2.exports = { init: mathUtils };
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
      return {
        getRectangleCorners
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
      const { TAU } = jscad.maths.constants;
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
          const alignedGeom = position.ctrMin(geom, [0, 0, stackHeight]);
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
              alignedCutBox = position.ctrMin(baseCutBox);
              break;
            case "z":
            default:
              alignedCutBox = position.ctrMax(baseCutBox);
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
        rectangle,
        polygon,
        ellipse
      } = jscad.primitives;
      const {
        align,
        translate
      } = jscad.transforms;
      const {
        subtract,
        union
      } = jscad.booleans;
      const {
        math,
        transform
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
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
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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

// packages/swcad-js-profiles/src/box-curve/index.js
var require_box_curve = __commonJS({
  "packages/swcad-js-profiles/src/box-curve/index.js"(exports2, module2) {
    "use strict";
    var boxCurveInit = ({ jscad, swcadJs }) => {
      const {
        ellipse,
        rectangle
      } = jscad.primitives;
      const {
        align
      } = jscad.transforms;
      const {
        subtract
      } = jscad.booleans;
      const {
        standards
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const boxCurveDefaults = () => {
        const defaultValues = {
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4),
              math.inchesToMm(1)
            ],
            margin: [
              standards.INTERFACE_THICKNESS,
              standards.INTERFACE_THICKNESS,
              standards.INTERFACE_THICKNESS
            ]
          },
          points: {
            centrePt: [0, 0, 0]
          },
          types: {
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          margin: defaultValues.dims.margin
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const boxCurveOpts = (opts) => {
        const defaults = boxCurveDefaults();
        const {
          size = defaults.opts.size,
          margin = defaults.opts.margin,
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
          margin,
          ...stdOpts
        };
        return initOpts;
      };
      const boxCurveProps = (opts) => {
        const defaults = boxCurveDefaults();
        const {
          size,
          margin,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        const height = size[2];
        const marginWidth = margin[0];
        const marginDepth = margin[1];
        const marginHeight = margin[2];
        const ellipseRadiusQtr = [
          size[0] - marginWidth,
          size[1] - marginDepth
        ];
        const ellipseRadiusHalf = [
          size[0] / 2 - marginWidth,
          size[1] - marginDepth
        ];
        const modelConstants = {};
        const modelOpts = {
          type,
          scale
        };
        const modelDims = {
          size,
          margin,
          width,
          depth,
          height,
          marginWidth,
          marginDepth,
          marginHeight,
          ellipseRadiusQtr,
          ellipseRadiusHalf,
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
        return modelProperties;
      };
      const boxCurveQuarter = (opts) => {
        const defaults = boxCurveDefaults();
        const initOpts = boxCurveOpts(opts);
        const modelProperties = boxCurveProps(initOpts);
        const {
          size,
          margin,
          ellipseRadiusQtr
        } = modelProperties.dims;
        const blank = rectangle({ size });
        const cutaway = ellipse({ radius: ellipseRadiusQtr });
        const mainModel = subtract(
          align({
            modes: ["max", "max", "center"]
          }, blank),
          position.ctr(cutaway)
        );
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const boxCurveHalf = (opts) => {
        const defaults = boxCurveDefaults();
        const initOpts = boxCurveOpts(opts);
        const modelProperties = boxCurveProps(initOpts);
        const {
          size,
          margin,
          ellipseRadiusHalf
        } = modelProperties.dims;
        const blank = rectangle({ size });
        const cutaway = ellipse({ radius: ellipseRadiusHalf });
        const mainModel = subtract(
          align({
            modes: ["center", "max", "center"]
          }, blank),
          position.ctr(cutaway)
        );
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: boxCurveDefaults,
        props: boxCurveProps,
        boxCurveQuarter,
        boxCurveHalf
      };
    };
    module2.exports = {
      init: boxCurveInit
    };
  }
});

// packages/swcad-js-profiles/src/connections/index.js
var require_connections = __commonJS({
  "packages/swcad-js-profiles/src/connections/index.js"(exports2, module2) {
    "use strict";
    var connectionProfilesInit = ({ jscad, swcadJs }) => {
      const {
        cylinder,
        circle,
        ellipse: ellipseShape,
        cuboid,
        rectangle,
        triangle
      } = jscad.primitives;
      const {
        align,
        translate,
        mirror
      } = jscad.transforms;
      const {
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        project
      } = jscad.extrusions;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const { toOutlines } = jscad.geometries.geom2;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
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
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
          radius = defaults.opts.radius,
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
          radius,
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
          radius,
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
        const diametre = radius * 2;
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
          radius,
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
          position.ctr(cutParts[1]),
          position.ctr(cutParts[0])
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
          position.ctr(cutParts[1]),
          position.ctr(cutParts[0])
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
      const rightAngleTab = (opts) => {
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
        const rAngTabWidth = width - interfaceMargin[0] * 2;
        const rAngTabLength = depth - interfaceMargin[1] * 2;
        const widthCoords = [
          interfaceMargin[0],
          interfaceMargin[0] + rAngTabWidth
        ];
        const lengthCoords = [
          interfaceMargin[1],
          interfaceMargin[1] + rAngTabLength
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
        let rAngTabCutPoints = allPts.map((dtPt) => {
          return cylinder({
            radius: fitGap / 2,
            height: sampleThickness * 10,
            center: [dtPt[0], dtPt[1], 0]
          });
        });
        const rAngTabCut = hullChain(rAngTabCutPoints);
        const cutPanel = subtract(
          baseProfilePanel,
          rAngTabCut
        );
        const cutParts = scission(cutPanel);
        const dTailProfiles = [
          position.ctr(cutParts[1]),
          position.ctr(cutParts[0])
        ];
        const rAngTabProfiles = [
          project({}, dTailProfiles[0]),
          project({}, dTailProfiles[1])
        ];
        const mainModel = [
          rAngTabProfiles[1],
          rAngTabProfiles[0]
        ];
        const modelParts = {
          male: rAngTabProfiles[1],
          female: rAngTabProfiles[0],
          cut: rAngTabCut
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
          radius,
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
          dowelRadius: -halfGap + radius,
          holeRadius: halfGap + radius
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
        const radius = [
          diam[0] / 2,
          diam[1] / 2
        ];
        const holeRadius = [
          radius[0] + fitGap / 2,
          radius[1] + fitGap / 2
        ];
        const dowelCtr = [0, depth / -2 + interfaceMargin[1], 0];
        const dowel = ellipseShape({ radius, segments, center: dowelCtr });
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
          position.ctr(dowel),
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
          radius,
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
        const inCircle = circle({ radius, segments });
        const holePoints = toOutlines(inCircle)[0];
        const basePunch = circle({ radius: unitRadius });
        const dowels = holePoints.map((dPt) => {
          return translate(dPt, circle({ radius: unitRadius, segments: unitSegments }));
        });
        const dowelDies = holePoints.map((dPt) => {
          return translate(dPt, circle({ radius: holeRadius, segments: unitSegments }));
        });
        const basePlateRadius = radius + unitRadius + interfaceMargin[0];
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
          position.ctr(cutParts[1]),
          position.ctr(cutParts[0])
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
          position.ctr(cutParts[1]),
          position.ctr(cutParts[0])
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
      const rightAngleTabRow = (opts) => {
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
        const rAngTabCutOpts = modelOpts({
          ...opts,
          size: [connectionUnitWidth, depth]
        });
        const rAngTabCutData = rightAngleTab(rAngTabCutOpts);
        const rAngTabCutBase = rAngTabCutData[1].cut;
        const baseProfilePanel = cuboid({
          size: [width, depth, sampleThickness],
          center: [centrePt[0], centrePt[1], 0]
        });
        let rAngTabRowCut = rAngTabCutBase;
        const translateDistBase = interfaceMargin[0] + connectionWidth;
        for (let idx = 1; idx < numConnectors; idx++) {
          const translateDist = translateDistBase * idx;
          rAngTabRowCut = union(
            rAngTabRowCut,
            translate([translateDist, 0, 0], rAngTabCutBase)
          );
        }
        const cutPanel = subtract(
          baseProfilePanel,
          rAngTabRowCut
        );
        const cutParts = scission(cutPanel);
        const rtProfiles = [
          position.ctr(cutParts[1]),
          position.ctr(cutParts[0])
        ];
        const rAngTabProfiles = [
          project({}, rtProfiles[0]),
          project({}, rtProfiles[1])
        ];
        const mainModel = [
          rAngTabProfiles[0],
          rAngTabProfiles[1]
        ];
        const modelParts = {
          male: rAngTabProfiles[0],
          female: rAngTabProfiles[1],
          cut: rAngTabRowCut
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: modelDefaults,
        props: modelProps,
        dovetail,
        tab,
        rightAngleTab,
        polygon,
        ellipse,
        pegboard,
        boltCircle,
        dovetailRow,
        tabRow,
        rightAngleTabRow
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
        const bezGeom = position.ctr(geom2.fromPoints(path2.toPoints(bezPath)));
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
        cuboid
      } = jscad.primitives;
      const {
        align,
        rotate
      } = jscad.transforms;
      const {
        subtract,
        union,
        scission
      } = jscad.booleans;
      const {
        project
      } = jscad.extrusions;
      const { TAU } = jscad.maths.constants;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
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
            dovetail: { id: "dovetail", desc: "Dovetail" },
            rightAngleTab: { id: "rightAngleTab", desc: "Right-angle Tab" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.tab.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
        } else if (type == "rightAngleTab") {
          jointData = connections.rightAngleTabRow(jointOpts);
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
          position.ctr(cutParts[1]),
          position.ctr(cutParts[0])
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
        } else if (type == "rightAngleTab") {
          jointDataX = connections.rightAngleTabRow(jointOptsX);
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
        } else if (type == "rightAngleTab") {
          jointDataY = connections.rightAngleTabRow(jointOptsY);
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
          position.ctr(cutParts[0]),
          position.ctr(cutParts[1]),
          position.ctr(cutParts[2]),
          position.ctr(cutParts[3])
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
          func: ({ radius }) => {
            return circle({ radius });
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
            let inPieceAlign = position.alignModes.ctr;
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

// packages/swcad-js-profiles/src/reinforcements/reinforced-rect.js
var require_reinforced_rect = __commonJS({
  "packages/swcad-js-profiles/src/reinforcements/reinforced-rect.js"(exports2, module2) {
    "use strict";
    var reinforcedRectInit = ({ jscad, swcadJs }) => {
      const {
        square,
        circle
      } = jscad.primitives;
      const {
        translate
      } = jscad.transforms;
      const {
        union
      } = jscad.booleans;
      const {
        hull,
        hullChain
      } = jscad.hulls;
      const {
        math
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
      const {
        reinforcement
      } = swcadJs.calcs.geometry;
      const reinforcedRectDefaults = () => {
        const defaultValues = {
          constants: {
            reinforcementPatterns: ["x", "cross", "diamond", "full", "full-double"]
          },
          dims: {
            size: [
              math.inchesToMm(3),
              math.inchesToMm(4)
            ],
            reinforcementThickness: [
              standards.LG_REINFORCEMENT_WIDTH,
              standards.MD_REINFORCEMENT_WIDTH,
              standards.SM_REINFORCEMENT_WIDTH
            ]
          },
          points: {
            centrePt: [0, 0, 0]
          },
          types: {
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
        return initOpts;
      };
      const reinforcedRectProps = (opts) => {
        const defaults = reinforcedRectDefaults();
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
          size: reinforcementDataSize,
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

// packages/swcad-js-profiles/src/reinforcements/index.js
var require_reinforcements = __commonJS({
  "packages/swcad-js-profiles/src/reinforcements/index.js"(exports2, module2) {
    var reinforcedRectModule = require_reinforced_rect();
    var reinforcementsInit = ({ jscad, swcadJs }) => {
      const reinforcedRect = reinforcedRectModule.init({ jscad, swcadJs });
      return {
        reinforcedRect
      };
    };
    module2.exports = { init: reinforcementsInit };
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

// packages/swcad-js-profiles/src/shapes/rectangle/index.js
var require_rectangle = __commonJS({
  "packages/swcad-js-profiles/src/shapes/rectangle/index.js"(exports2, module2) {
    "use strict";
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
        ...rectangles
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
        circle,
        rectangle
      } = jscad.primitives;
      const {
        subtract
      } = jscad.booleans;
      const {
        math,
        geometry
      } = swcadJs.calcs;
      const {
        standards
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
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const defaultOpts = {
          size: defaultValues.dims.size,
          type: "default",
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP,
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
          let subComp1 = meshPanelProfile(modelProps);
          let subComp2 = meshPanelCutProfile(modelProps);
          return subtract(
            subComp1,
            subComp2
          );
        };
        let meshPanelCutProfileInst = meshPanelCutProfile(modelProperties);
        let meshPanelProfileInst = meshPanelProfile(modelProperties);
        let mainModel = finalAssembly(modelProperties);
        let modelParts = {
          meshPanelCutProfile: meshPanelCutProfileInst,
          meshPanelProfile: meshPanelProfileInst
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
      const { polygon } = jscad.primitives;
      const { subtract, union } = jscad.booleans;
      const { translate, mirror, center } = jscad.transforms;
      const { constants, standards } = swcadJs.data;
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
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
      const { polygon } = jscad.primitives;
      const { subtract, union } = jscad.booleans;
      const { translate, mirror, center } = jscad.transforms;
      const { constants, standards } = swcadJs.data;
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
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
      const { polygon } = jscad.primitives;
      const { subtract, union } = jscad.booleans;
      const { translate, mirror, center } = jscad.transforms;
      const { constants, standards } = swcadJs.data;
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
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
    var boxCurveModule = require_box_curve();
    var connectionsModule = require_connections();
    var curveModule = require_curve();
    var jointPanelModule = require_joint_panel();
    var rectFrameModule = require_frame_rect();
    var reinforcementsModule = require_reinforcements();
    var shapesModule = require_shapes();
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
        boxCurve: boxCurveModule.init({ jscad, swcadJs: preLib }),
        connections,
        curve,
        structure: structureModule.init({ jscad, swcadJs: preLib }),
        jointPanel: jointPanelModule.init({ jscad, swcadJs: preLib }),
        reinforcements: reinforcementsModule.init({ jscad, swcadJs: preLib }),
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
        cylinderElliptic
      } = jscad.primitives;
      const {
        extrudeRotate
      } = jscad.extrusions;
      const {
        constants,
        standards
      } = swcadJs.data;
      const {
        math
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
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
      const basic30DegBead = (baseThickness, width) => {
        const edgeOffset = baseThickness / constants.TRI_30_FACTOR / 2;
        const topWidth = width - edgeOffset * 2;
        const basic30DegBeadProfile = cylinderElliptic({
          height: baseThickness,
          startRadius: [width / 2, width / 2],
          endRadius: [topWidth / 2, topWidth / 2]
        });
        return basic30DegBeadProfile;
      };
      const basic45DegBead = (baseThickness, width) => {
        const edgeOffset = baseThickness / constants.TRI_45_FACTOR / 2;
        const topWidth = width - edgeOffset * 2;
        const basic45DegBeadProfile = cylinderElliptic({
          height: baseThickness,
          startRadius: [width / 2, width / 2],
          endRadius: [topWidth / 2, topWidth / 2]
        });
        return basic45DegBeadProfile;
      };
      const interface30DegProfileBeads = (baseThickness, smWidth, mdWidth, lgWidth) => {
        return {
          lg: basic30DegBead(baseThickness, lgWidth),
          md: basic30DegBead(baseThickness, mdWidth),
          sm: basic30DegBead(baseThickness, smWidth)
        };
      };
      return {
        interface30DegProfileBeads,
        corner
      };
    };
    module2.exports = {
      init: beadsBitsInit
    };
  }
});

// packages/swcad-js-components/src/box-support/index.js
var require_box_support = __commonJS({
  "packages/swcad-js-components/src/box-support/index.js"(exports2, module2) {
    "use strict";
    var boxSupportInit = ({ jscad, swcadJs }) => {
      const {
        ellipse,
        rectangle
      } = jscad.primitives;
      const {
        align
      } = jscad.transforms;
      const {
        subtract
      } = jscad.booleans;
      const { extrudeLinear } = jscad.extrusions;
      const {
        standards
      } = swcadJs.data;
      const {
        math
      } = swcadJs.calcs;
      const {
        boxCurve
      } = swcadJs.profiles;
      const boxSupportDefaults = () => {
        const defaultValues = {
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4),
              math.inchesToMm(1)
            ],
            margin: [
              standards.INTERFACE_THICKNESS,
              standards.INTERFACE_THICKNESS,
              standards.INTERFACE_THICKNESS
            ]
          },
          points: {
            centrePt: [0, 0, 0]
          },
          types: {
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
        };
        const defaultOpts = {
          ...standardOpts,
          size: defaultValues.dims.size,
          margin: defaultValues.dims.margin
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const boxSupportOpts = (opts) => {
        const defaults = boxSupportDefaults();
        const {
          size = defaults.opts.size,
          margin = defaults.opts.margin,
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
          margin,
          ...stdOpts
        };
        return initOpts;
      };
      const boxSupportProps = (opts) => {
        const defaults = boxSupportDefaults();
        const {
          size,
          margin,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        const height = size[2];
        const marginWidth = margin[0];
        const marginDepth = margin[1];
        const marginHeight = margin[2];
        const ellipseRadiusQtr = [
          size[0] - marginWidth,
          size[1] - marginDepth
        ];
        const ellipseRadiusHalf = [
          marginWidth * -2 + size[0] / 2,
          size[1] - marginDepth
        ];
        const modelConstants = {};
        const modelOpts = {
          type,
          scale
        };
        const modelDims = {
          size,
          margin,
          width,
          depth,
          height,
          marginWidth,
          marginDepth,
          marginHeight,
          ellipseRadiusQtr,
          ellipseRadiusHalf,
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
        return modelProperties;
      };
      const boxSupportQuarter = (opts) => {
        const defaults = boxSupportDefaults();
        const initOpts = boxSupportOpts(opts);
        const modelProperties = boxSupportProps(initOpts);
        const {
          size,
          margin,
          marginHeight
        } = modelProperties.dims;
        const boxCurvesQtrData = boxCurve.boxCurveQuarter({
          size,
          margin
        });
        const boxCurvesQtrModel = boxCurvesQtrData[0];
        const mainModel = extrudeLinear({ height: marginHeight }, boxCurvesQtrModel);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const boxSupportHalf = (opts) => {
        const defaults = boxSupportDefaults();
        const initOpts = boxSupportOpts(opts);
        const modelProperties = boxSupportProps(initOpts);
        const {
          size,
          margin,
          marginHeight
        } = modelProperties.dims;
        const boxCurvesHalfData = boxCurve.boxCurveHalf({
          size,
          margin
        });
        const boxCurvesHalfModel = boxCurvesHalfData[0];
        const mainModel = extrudeLinear({ height: marginHeight }, boxCurvesHalfModel);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: boxSupportDefaults,
        props: boxSupportProps,
        boxSupportQuarter,
        boxSupportHalf
      };
    };
    module2.exports = {
      init: boxSupportInit
    };
  }
});

// packages/swcad-js-components/src/component-line/index.js
var require_component_line = __commonJS({
  "packages/swcad-js-components/src/component-line/index.js"(exports2, module2) {
    "use strict";
    var moduleInit = ({ jscad, swcadJs }) => {
      const {
        cylinderElliptic,
        cuboid
      } = jscad.primitives;
      const {
        translate,
        rotate
      } = jscad.transforms;
      const {
        intersect,
        union
      } = jscad.booleans;
      const {
        measureDimensions,
        measureBoundingBox
      } = jscad.measurements;
      const {
        hull
      } = jscad.hulls;
      const { TAU } = jscad.maths.constants;
      const {
        constants,
        standards
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
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
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
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
        const midPt = geometry.midpointBetweenPoints(startPt, endPt);
        const lineLength = geometry.distanceBetweenPoints(startPt, endPt);
        const offsetLineLength = lineLength - endOffset * 2;
        const numSubLengths = Math.floor(offsetLineLength / unitLength);
        const componentUnits = numSubLengths + 1;
        const componentDims = measureDimensions(component);
        const componentBoundingBox = measureBoundingBox(component);
        const componentLineLength = offsetLineLength - componentDims[0];
        const componentUnitLength = componentLineLength / numSubLengths;
        const compLineAngle = geometry.angleOfTwoPtLine(startPt, endPt);
        const lgProfileBeadWidth = standards.LG_PROFILE_BEAD_WIDTH;
        const mdProfileBeadWidth = standards.MD_PROFILE_BEAD_WIDTH;
        const smProfileBeadWidth = standards.SM_PROFILE_BEAD_WIDTH;
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
            profileBeads: beadsBits.interface30DegProfileBeads(
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
        const baseLine = (modelProps2) => {
          const {
            startPt,
            endPt
          } = modelProps2.points;
          const interfProfileBeads = modelProperties.components.interface.profileBeads;
          const beadProfile = interfProfileBeads.md;
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

// packages/swcad-js-components/src/fittings/round-fitting.js
var require_round_fitting = __commonJS({
  "packages/swcad-js-components/src/fittings/round-fitting.js"(exports2, module2) {
    "use strict";
    var roundFittingInit = ({ jscad, swcadJs }) => {
      const {
        circle,
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
        subtract
      } = jscad.booleans;
      const {
        extrudeLinear
      } = jscad.extrusions;
      const {
        constants
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const roundFittingDefaults = () => {
        const defaultValues = {
          constants: {
            ratioDiamToDoubleFittingMaxHt: 2.76,
            ratioDiamToDoubleFittingDowelCtrsDist: 1.76
          },
          dims: {
            dowelRadius: 3.25 / 2,
            length: math.inchesToMm(1 / 4)
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
          dowelRadius: defaultValues.dims.dowelRadius,
          length: defaultValues.dims.length
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const roundFittingOpts = (opts) => {
        const defaults = roundFittingDefaults();
        console.log("roundFittingOpts() -- opts", opts);
        const {
          dowelRadius = defaults.opts.dowelRadius,
          length = defaults.opts.length,
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
          dowelRadius,
          length,
          ...stdOpts
        };
        console.log("roundFittingOpts() -- initOpts", initOpts);
        return initOpts;
      };
      const roundFittingProps = (opts) => {
        const defaults = roundFittingDefaults();
        console.log("roundFittingProps() -- opts", opts);
        const {
          dowelRadius,
          length,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const dowelDiam = dowelRadius * 2;
        const width = interfaceThickness * 2 + dowelDiam;
        const roundCutProfileRadius = fitGap / 2 + dowelRadius;
        const invCutProfileSideLength = dowelDiam + fitGap;
        const invCutProfileHeight = dowelDiam * constants.EQUI_TRIANGLE_HEIGHT_FACTOR;
        const simpleHeight = dowelDiam / 3 + interfaceThickness + fitGap;
        const invSimpleHeight = invCutProfileHeight + interfaceThickness + fitGap;
        const types = ["default", "alt"];
        const modelOpts = {
          type,
          scale,
          types
        };
        const modelDims = {
          dowelRadius,
          dowelDiam,
          width,
          invCutProfileHeight,
          invCutProfileSideLength,
          roundCutProfileRadius,
          simpleHeight,
          invSimpleHeight,
          length,
          interfaceThickness,
          fitGap
        };
        const modelPoints = {
          centre: defaults.vals.points.centre
        };
        const modelConstants = {
          ratioDiamToHolderHeight: 1.666667,
          ratioDiamToChannelDepth: 0.866667,
          ratioDiamToSideChannelWidth: 1,
          ratioDiamToDowelDepth: 0.333333
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
        console.log("roundFittingProps() -- modelProperties", modelProperties);
        return modelProperties;
      };
      const roundFittingCutProfile = (opts) => {
        const defaults = roundFittingDefaults();
        const initOpts = roundFittingOpts(opts);
        const modelProperties = roundFittingProps(initOpts);
        const {
          roundCutProfileRadius
        } = modelProperties.dims;
        const mainModel = circle({ radius: roundCutProfileRadius });
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const invRoundFittingCutProfile = (opts) => {
        const defaults = roundFittingDefaults();
        const initOpts = roundFittingOpts(opts);
        const modelProperties = roundFittingProps(initOpts);
        const {
          invCutProfileSideLength
        } = modelProperties.dims;
        const mainModel = triangle({
          type: "SSS",
          values: [
            invCutProfileSideLength,
            invCutProfileSideLength,
            invCutProfileSideLength
          ]
        });
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const roundFitting = (opts) => {
        const defaults = roundFittingDefaults();
        const initOpts = roundFittingOpts(opts);
        const modelProperties = roundFittingProps(initOpts);
        const {
          dowelRadius,
          dowelDiam,
          interfaceThickness,
          fitGap,
          length,
          width,
          simpleHeight
        } = modelProperties.dims;
        const baseRect = rectangle({
          size: [width, simpleHeight]
        });
        const topCutaway = roundFittingCutProfile(opts)[0];
        const dHolderSection = subtract(
          align({
            modes: ["center", "min", "center"],
            relativeTo: [0, -interfaceThickness, 0]
          }, baseRect),
          align({ modes: ["center", "min", "center"] }, topCutaway)
        );
        let dHolder = extrudeLinear({ height: length }, dHolderSection);
        dHolder = rotate([Math.PI / 2, 0, 0], dHolder);
        const mainModel = position.ctr(dHolder);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const inverseRoundFitting = (opts) => {
        const defaults = roundFittingDefaults();
        const initOpts = roundFittingOpts(opts);
        const modelProperties = roundFittingProps(initOpts);
        const {
          dowelRadius,
          dowelDiam,
          interfaceThickness,
          fitGap,
          length,
          width,
          simpleHeight,
          invCutProfileHeight,
          invSimpleHeight
        } = modelProperties.dims;
        const baseRect = rectangle({
          size: [width, invSimpleHeight]
        });
        const channelCutaway = invRoundFittingCutProfile(opts)[0];
        const dHolderSection = subtract(
          align({ modes: ["center", "min", "center"] }, baseRect),
          align({ modes: ["center", "min", "center"] }, channelCutaway)
        );
        let dHolder = extrudeLinear({ height: length }, dHolderSection);
        dHolder = rotate([Math.PI / 2, 0, 0], dHolder);
        const mainModel = position.ctr(dHolder);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const doubleRoundFitting = (opts) => {
        const defaults = roundFittingDefaults();
        const initOpts = roundFittingOpts(opts);
        const modelProperties = roundFittingProps(initOpts);
        const roundFittingSection = (modelProps) => {
          const {
            ratioDiamToHolderHeight,
            ratioDiamToChannelDepth,
            ratioDiamToSideChannelWidth,
            ratioDiamToDowelDepth
          } = modelProps.constants;
          const {
            dowelRadius,
            dowelDiam,
            interfaceThickness,
            fitGap,
            width
          } = modelProps.dims;
          const baseRect = rectangle({
            size: [
              width,
              dowelDiam * ratioDiamToHolderHeight
            ]
          });
          const topCutaway = roundFittingCutProfile(opts)[0];
          const channelCutaway = invRoundFittingCutProfile(opts)[0];
          let sideCutaway1 = triangle({
            type: "ASA",
            values: [
              Math.PI / 6,
              dowelDiam * ratioDiamToSideChannelWidth,
              Math.PI / 6
            ]
          });
          sideCutaway1 = rotate([0, 0, Math.PI / -2], sideCutaway1);
          const sideCutaway2 = mirror({ normal: [1, 0, 0] }, sideCutaway1);
          let dHolderSection = subtract(
            align({ modes: ["center", "min", "center"] }, baseRect),
            align({ modes: ["center", "min", "center"] }, channelCutaway)
          );
          dHolderSection = subtract(
            align({ modes: ["center", "max", "center"] }, dHolderSection),
            translate([0, dowelRadius / 3, 0], topCutaway)
          );
          dHolderSection = subtract(
            align({ modes: ["min", "center", "center"] }, dHolderSection),
            align({ modes: ["min", "center", "center"] }, sideCutaway1)
          );
          dHolderSection = subtract(
            align({ modes: ["max", "center", "center"] }, dHolderSection),
            align({ modes: ["max", "center", "center"] }, sideCutaway2)
          );
          return position.ctr(dHolderSection);
        };
        const finalAssembly = (modelProps) => {
          const {
            length
          } = modelProps.dims;
          const dHolderSection = roundFittingSection(modelProps);
          let dHolder = extrudeLinear({ height: length }, dHolderSection);
          dHolder = rotate([Math.PI / 2, 0, 0], dHolder);
          return position.ctr(dHolder);
        };
        const roundFittingSectionInst = roundFittingSection(modelProperties);
        const mainModel = finalAssembly(modelProperties);
        const modelParts = {
          roundFittingSection: roundFittingSectionInst
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: roundFittingDefaults,
        props: roundFittingProps,
        roundFittingCutProfile,
        invRoundFittingCutProfile,
        roundFitting,
        inverseRoundFitting,
        doubleRoundFitting
      };
    };
    module2.exports = {
      init: roundFittingInit
    };
  }
});

// packages/swcad-js-components/src/fittings/rectangular-fitting.js
var require_rectangular_fitting = __commonJS({
  "packages/swcad-js-components/src/fittings/rectangular-fitting.js"(exports2, module2) {
    "use strict";
    var rectangularFittingInit = ({ jscad, swcadJs }) => {
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
        standards
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const rectangularFittingDefaults = () => {
        const defaultValues = {
          dims: {
            subjectSize: [
              standards.crafts.POPSICLE_STICK_WIDTH,
              standards.crafts.POPSICLE_STICK_THICKNESS
            ],
            length: math.inchesToMm(1 / 4)
          },
          points: {
            centrePt: [0, 0, 0]
          },
          types: {
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
        };
        const defaultOpts = {
          ...standardOpts,
          subjectSize: defaultValues.dims.subjectSize,
          length: defaultValues.dims.length
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const rectangularFittingOpts = (opts) => {
        const defaults = rectangularFittingDefaults();
        console.log("rectangularFittingOpts() -- opts", opts);
        const {
          subjectSize = defaults.opts.subjectSize,
          length = defaults.opts.length,
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
          subjectSize,
          length,
          ...stdOpts
        };
        console.log("rectangularFittingOpts() -- initOpts", initOpts);
        return initOpts;
      };
      const rectangularFittingProps = (opts) => {
        const defaults = rectangularFittingDefaults();
        console.log("rectangularFittingProps() -- opts", opts);
        const {
          subjectSize,
          length,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
        const subjectWidth = subjectSize[0];
        const subjectHeight = subjectSize[1];
        const width = subjectWidth + interfaceThickness * 2;
        const height = subjectHeight / 3 + interfaceThickness;
        const cutProfileWidth = subjectWidth + fitGap;
        const cutProfileHeight = subjectHeight + fitGap;
        const modelConstants = {};
        const modelOpts = {
          type,
          scale
        };
        const modelDims = {
          subjectSize,
          subjectWidth,
          subjectHeight,
          length,
          width,
          height,
          cutProfileWidth,
          cutProfileHeight,
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
        console.log("rectangularFittingProps() -- modelProperties", modelProperties);
        return modelProperties;
      };
      const rectFittingCutProfile = (opts) => {
        const defaults = rectangularFittingDefaults();
        const initOpts = rectangularFittingOpts(opts);
        const modelProperties = rectangularFittingProps(initOpts);
        const {
          cutProfileWidth,
          cutProfileHeight
        } = modelProperties.dims;
        const mainModel = rectangle({
          size: [
            cutProfileWidth,
            cutProfileHeight
          ]
        });
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const rectangularFitting = (opts) => {
        const defaults = rectangularFittingDefaults();
        const initOpts = rectangularFittingOpts(opts);
        const modelProperties = rectangularFittingProps(initOpts);
        const {
          subjectSize,
          subjectWidth,
          subjectHeight,
          length,
          width,
          height,
          interfaceThickness,
          fitGap
        } = modelProperties.dims;
        const baseRect = rectangle({
          size: [width, height]
        });
        const topCutaway = rectFittingCutProfile(opts)[0];
        const dHolderSection = subtract(
          align({
            modes: ["center", "min", "center"],
            relativeTo: [0, -interfaceThickness, 0]
          }, baseRect),
          align({ modes: ["center", "min", "center"] }, topCutaway)
        );
        let dHolder = extrudeLinear({ height: length }, dHolderSection);
        dHolder = rotate([Math.PI / 2, 0, 0], dHolder);
        const mainModel = position.ctr(dHolder);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: rectangularFittingDefaults,
        props: rectangularFittingProps,
        rectFittingCutProfile,
        rectangularFitting
      };
    };
    module2.exports = {
      init: rectangularFittingInit
    };
  }
});

// packages/swcad-js-components/src/fittings/index.js
var require_fittings = __commonJS({
  "packages/swcad-js-components/src/fittings/index.js"(exports2, module2) {
    var roundFittingModule = require_round_fitting();
    var rectangularFittingModule = require_rectangular_fitting();
    var fittingsInit = ({ jscad, swcadJs }) => {
      const roundFitting = roundFittingModule.init({ jscad, swcadJs });
      const rectangularFitting = rectangularFittingModule.init({ jscad, swcadJs });
      return {
        roundFitting: roundFitting.roundFitting,
        inverseRoundFitting: roundFitting.inverseRoundFitting,
        doubleRoundFitting: roundFitting.doubleRoundFitting,
        roundFittingCutProfile: roundFitting.roundFittingCutProfile,
        invRoundFittingCutProfile: roundFitting.invRoundFittingCutProfile,
        rectangularFitting: rectangularFitting.rectangularFitting,
        rectFittingCutProfile: rectangularFitting.rectFittingCutProfile
      };
    };
    module2.exports = { init: fittingsInit };
  }
});

// packages/swcad-js-components/src/mesh/index.js
var require_mesh = __commonJS({
  "packages/swcad-js-components/src/mesh/index.js"(exports2, module2) {
    "use strict";
    var mesh3dInit = ({ jscad, swcadJs }) => {
      const { cylinder, triangle, rectangle } = jscad.primitives;
      const { translate, rotate, align, mirror } = jscad.transforms;
      const { subtract, union } = jscad.booleans;
      const { extrudeRotate, extrudeLinear } = jscad.extrusions;
      const { TAU } = jscad.maths.constants;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
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
        return position.ctr(finalShape);
      };
      const meshPanel = ({
        size,
        thickness = standards.INTERFACE_THICKNESS,
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
        radius,
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
        const baseCylinder = cylinder({ radius, height, segments });
        const cutCylinder = cylinder({ radius: radius - thickness, height: height + radius, segments });
        const baseShape = position.ctrMin(subtract(baseCylinder, cutCylinder));
        const circumference = TAU * radius;
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
              cylinder({ radius: meshRadius, height: radius * 2, segments: meshSegments })
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
        const completePunch = position.ctrMin(
          union(...punches),
          [0, 0, (specs.edgeMargin + remainingHt) / 2 * 0.86603]
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
              ringAlignOpts = { modes: position.alignModes.ctrMax, relativeTo: [0, 0, height] };
              flipOpts.push("vertical");
            } else {
              sectionAlignOpts = { modes: ["min", "min", "min"], relativeTo: [0, 0, 0] };
              ringAlignOpts = { modes: position.alignModes.ctrMin, relativeTo: [0, 0, 0] };
            }
            const insetSection = align(
              sectionAlignOpts,
              edgeFlange("inset", insetWidth, 0.5, flipOpts)
            );
            const insetRing = align(
              ringAlignOpts,
              extrudeRotate({ segments }, translate([radius - thickness - insetWidth, 0, 0], insetSection))
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
              ringAlignOpts = { modes: position.alignModes.ctrMax, relativeTo: [0, 0, height] };
              flipOpts.push("vertical");
            } else {
              sectionAlignOpts = { modes: ["min", "min", "min"], relativeTo: [0, 0, 0] };
              ringAlignOpts = { modes: position.alignModes.ctrMin, relativeTo: [0, 0, 0] };
            }
            const offsetSection = align(
              sectionAlignOpts,
              edgeFlange("offset", offsetWidth, 0.5, flipOpts)
            );
            const offsetRing = align(
              ringAlignOpts,
              extrudeRotate({ segments }, translate([radius, 0, 0], offsetSection))
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
        const xBlock = cuboidMouldingTwoEdges({
          size: opts.size,
          axis: "x"
        }, geomProfile);
        const yBlock = cuboidMouldingTwoEdges({
          size: opts.size,
          axis: "y"
        }, geomProfile);
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

// packages/swcad-js-components/src/reinforcements/reinforced-joist.js
var require_reinforced_joist = __commonJS({
  "packages/swcad-js-components/src/reinforcements/reinforced-joist.js"(exports2, module2) {
    "use strict";
    var reinforcedJoistInit = ({ jscad, swcadJs }) => {
      const {
        cuboid
      } = jscad.primitives;
      const {
        align,
        translate
      } = jscad.transforms;
      const {
        intersect,
        union
      } = jscad.booleans;
      const {
        hull
      } = jscad.hulls;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
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
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          },
          width: math.inchesToMm(1.125),
          length: math.inchesToMm(5.5),
          type: "default",
          reinforcementLevel: 1,
          unitLength: math.inchesToMm(1),
          dowelHolderLength: math.inchesToMm(5 / 16),
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP,
          ratioDiamToHolderHeight: 1.666667,
          ratioDiamToChannelDepth: 0.866667,
          ratioDiamToSideChannelWidth: 1,
          ratioDiamToDowelDepth: 0.333333
        };
        const defaultOpts = {
          type: "default",
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP,
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
        const lgProfileBeadWidth = standards.LG_PROFILE_BEAD_WIDTH;
        const mdProfileBeadWidth = standards.MD_PROFILE_BEAD_WIDTH;
        const smProfileBeadWidth = standards.SM_PROFILE_BEAD_WIDTH;
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
          interfaceProfileBeads: beadsBits.interface30DegProfileBeads(
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
      const reinforcedJoist = (opts) => {
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
            return position.ctr(braceUnit, bucPt);
          });
          braceUnits = union(...braceUnits);
          const edgePts = [
            [0, 0, 0],
            [0, length2, 0],
            [braceUnitSize[0], 0, 0],
            [braceUnitSize[0], length2, 0]
          ];
          const edgeProfilePts = edgePts.map((edgePt) => {
            return position.ctr(interfaceProfileBeads.lg, edgePt);
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
      return reinforcedJoist;
    };
    module2.exports = {
      init: reinforcedJoistInit
    };
  }
});

// packages/swcad-js-components/src/reinforcements/reinforced-rect-panel.js
var require_reinforced_rect_panel = __commonJS({
  "packages/swcad-js-components/src/reinforcements/reinforced-rect-panel.js"(exports2, module2) {
    "use strict";
    var reinforcedRectPanelInit = ({ jscad, swcadJs }) => {
      const {
        extrudeLinear
      } = jscad.extrusions;
      const {
        math
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
      const {
        reinforcements
      } = swcadJs.profiles;
      const reinforcedRectPanelDefaults = () => {
        const defaultValues = {
          constants: {
            reinforcementPatterns: ["x", "cross", "diamond", "full", "full-double"]
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
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
          }
        };
        const standardOpts = {
          type: defaultValues.types.default.id,
          scale: 1,
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
        return initOpts;
      };
      const reinforcedRectPanelProps = (opts) => {
        const defaults = reinforcedRectPanelDefaults();
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
        const reinforcedRect = reinforcements.reinforcedRect(reinforcedRectOpts)[0];
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

// packages/swcad-js-components/src/reinforcements/index.js
var require_reinforcements2 = __commonJS({
  "packages/swcad-js-components/src/reinforcements/index.js"(exports2, module2) {
    var reinforcedJoistModule = require_reinforced_joist();
    var reinforcedRectPanelModule = require_reinforced_rect_panel();
    var reinforcementsInit = ({ jscad, swcadJs }) => {
      const reinforcedJoist = reinforcedJoistModule.init({ jscad, swcadJs });
      const reinforcedRectPanel = reinforcedRectPanelModule.init({ jscad, swcadJs });
      return {
        reinforcedJoist,
        reinforcedRectPanel
      };
    };
    module2.exports = { init: reinforcementsInit };
  }
});

// packages/swcad-js-components/src/routed-shapes/index.js
var require_routed_shapes = __commonJS({
  "packages/swcad-js-components/src/routed-shapes/index.js"(exports2, module2) {
    "use strict";
    var routedShapesInit = ({ jscad, swcadJs }) => {
      const {
        cylinderElliptic,
        cuboid
      } = jscad.primitives;
      const {
        translate,
        rotate
      } = jscad.transforms;
      const {
        subtract,
        union
      } = jscad.booleans;
      const {
        extrudeLinear,
        project
      } = jscad.extrusions;
      const { toOutlines } = jscad.geometries.geom2;
      const { TAU } = jscad.maths.constants;
      const {
        math,
        geometry,
        position
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
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
            default: standards.types.TYPE_DEFAULT,
            alt: standards.types.TYPE_ALT
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
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP
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
          radius = defaults.opts.radius,
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
          radius,
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
          radius,
          topBit,
          topBitOpts,
          bottomBit,
          bottomBitOpts,
          type,
          scale,
          interfaceThickness,
          fitGap
        } = opts;
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
          radius,
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
          radius,
          topBit,
          bottomBit
        } = modelProperties.dims;
        const baseShape = cylinderElliptic({
          height,
          startRadius: radius,
          endRadius: radius
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

// packages/swcad-js-components/src/text/index.js
var require_text2 = __commonJS({
  "packages/swcad-js-components/src/text/index.js"(exports2, module2) {
    "use strict";
    var DEFAULT_EXTRUDE_HEIGHT = 1;
    var textUtils = ({ jscad, swcadJs }) => {
      const { union, subtract } = jscad.booleans;
      const { cuboid, cylinderElliptic } = jscad.primitives;
      const { align, translate } = jscad.transforms;
      const { vectorText } = jscad.text;
      const { hullChain } = jscad.hulls;
      const { extrudeLinear } = jscad.extrusions;
      const { measureDimensions } = jscad.measurements;
      const { text: text2d } = swcadJs.profiles;
      const {
        standards
      } = swcadJs.data;
      const {
        position
      } = swcadJs.calcs;
      const flatText = (opts) => {
        if (opts.message === void 0 || opts.message.length === 0) return [];
        const message2D = text2d.basicText({
          message: opts.message,
          fontSize: opts.fontSize,
          charLineWidth: opts.charLineWidth
        });
        const message3D = extrudeLinear({ height: opts.extrudeHeight || DEFAULT_EXTRUDE_HEIGHT }, message2D);
        return position.ctr(message3D);
      };
      const engravedText = (opts) => {
        const inverted = opts.inverted || false;
        const interThickness = opts.interfaceThickness || standards.INTERFACE_THICKNESS;
        const engrDepth = opts.engravingDepth || interThickness * 0.37;
        const lineRadius = engrDepth / 2;
        const lineCorner = cylinderElliptic({
          height: 0.4,
          startRadius: inverted ? [lineRadius, lineRadius] : [0, 0],
          endRadius: inverted ? [0, 0] : [lineRadius, lineRadius]
        });
        const lineSegmentPointArrays = vectorText({ x: 0, y: 0, input: opts.message, height: opts.fontSize });
        const lineSegments = [];
        lineSegmentPointArrays.forEach((segmentPoints) => {
          const corners = segmentPoints.map((point) => translate(point, lineCorner));
          lineSegments.push(hullChain(corners));
        });
        return union(lineSegments);
      };
      const textPanel = (opts) => {
        const extrudeHt = opts.extrudeHeight || DEFAULT_EXTRUDE_HEIGHT;
        const textModel = flatText({
          ...opts,
          extrudeHeight: extrudeHt
        });
        const textModelDims = measureDimensions(textModel);
        const panelOffset = opts.panelOffset || 2;
        const textPanel2 = cuboid({
          size: [
            textModelDims[0] + panelOffset,
            textModelDims[1] + panelOffset,
            opts.panelThickness || extrudeHt * 2
          ]
        });
        const embossedPanel = subtract(
          position.ctrMax(textPanel2),
          position.ctrMax(textModel)
        );
        return position.ctr(embossedPanel);
      };
      const text = {
        flatText,
        engravedText,
        textPanel
      };
      return text;
    };
    module2.exports = { init: textUtils };
  }
});

// packages/swcad-js-components/src/index.js
var require_src5 = __commonJS({
  "packages/swcad-js-components/src/index.js"(exports2, module2) {
    "use strict";
    var beadsBitsModule = require_beads_bits2();
    var boxSupportModule = require_box_support();
    var componentLineModule = require_component_line();
    var fittingsModule = require_fittings();
    var meshModule = require_mesh();
    var mouldingModule = require_moulding();
    var reinforcementsModule = require_reinforcements2();
    var routedShapesModule = require_routed_shapes();
    var textModule = require_text2();
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
        boxSupport: boxSupportModule.init({ jscad, swcadJs: preLib }),
        routedShapes,
        mesh,
        componentLine,
        fittings: fittingsModule.init({ jscad, swcadJs: preLib }),
        moulding: mouldingModule.init({ jscad, swcadJs: preLib }),
        reinforcements: reinforcementsModule.init({ jscad, swcadJs: preLib }),
        text: textModule.init({ jscad, swcadJs: preLib })
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
      const { rectangle, triangle, roundedRectangle } = jscad.primitives;
      const { union } = jscad.booleans;
      const { align, rotate } = jscad.transforms;
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
        radius = toothpickSpecs.radius,
        length = toothpickSpecs.length,
        pointLength = toothpickSpecs.pointLength
      }) => {
        const core2d = rectangle({ size: [pointLength * -2 + length, radius * 2] });
        const core2dCoords = position.getGeomCoords(core2d);
        const pointTriangleSide = Math.hypot(radius, pointLength);
        const pointAngle = Math.atan(radius / pointLength) * 2;
        const pointTriangle = triangle({ type: "SSA", values: [radius * 2, pointTriangleSide, pointAngle] });
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
        radius = toothpickSpecs.radius,
        length = toothpickSpecs.length,
        pointLength = toothpickSpecs.pointLength
      }) => {
        const baseShape = toothpickProfile({ radius, length, pointLength });
        return extrudeRotate({ segments: 12 }, baseShape);
      };
      const bbqSkewerProfile = ({
        radius = bbqSkewerSpecs.radius,
        length = bbqSkewerSpecs.length,
        pointLength = bbqSkewerSpecs.pointLength
      }) => {
        const core2d = rectangle({ size: [length - pointLength, radius * 2] });
        const core2dCoords = position.getGeomCoords(core2d);
        const pointTriangleSide = Math.hypot(radius, pointLength);
        const pointAngle = Math.atan(radius / pointLength) * 2;
        const pointTriangle = triangle({ type: "SSA", values: [radius * 2, pointTriangleSide, pointAngle] });
        const point2d = align(
          { modes: ["min", "center", "center"], relativeTo: [core2dCoords.right, 0, 0] },
          rotate([0, 0, TAU / -4], pointTriangle)
        );
        const baseShape = rotate([0, 0, TAU / 4], union(core2d, point2d));
        return baseShape;
      };
      const bbqSkewer = ({
        radius = bbqSkewerSpecs.radius,
        length = bbqSkewerSpecs.length,
        pointLength = bbqSkewerSpecs.pointLength
      }) => {
        const baseShape = bbqSkewerProfile({ radius, length, pointLength });
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
      const { math, position } = swcadJs.calcs;
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
            position.ctrMin(basicFrame2),
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
          position.ctrMin(basicFrame),
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
            geom: position.ctrMin(geom),
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
      const { position } = swcadJs.calcs;
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
          return position.ctrMin(rotate([Math.PI / 2, 0, 0], baseArch));
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
          return position.ctrMin(
            rotate([Math.PI / 2, 0, 0], union(cutArch, reflectedArch))
          );
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

// packages/swcad-js-models/src/index.js
var require_src8 = __commonJS({
  "packages/swcad-js-models/src/index.js"(exports2, module2) {
    "use strict";
    var archModule = require_arch();
    var foilModule = require_foil();
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
        foil: foilModule.init({ jscad, swcadJs: preLib })
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
