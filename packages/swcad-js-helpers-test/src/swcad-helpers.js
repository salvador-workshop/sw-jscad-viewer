var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// packages/swcad-js-helpers-data/src/constants/index.js
var require_constants = __commonJS({
  "packages/swcad-js-helpers-data/src/constants/index.js"(exports2, module2) {
    "use strict";
    var tri45Factor = Math.sqrt(2);
    var phi = 1.6180339887;
    var constants = {
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

// packages/swcad-js-helpers-data/src/functions/index.js
var require_functions = __commonJS({
  "packages/swcad-js-helpers-data/src/functions/index.js"(exports2, module2) {
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

// packages/swcad-js-helpers-data/src/standards/index.js
var require_standards = __commonJS({
  "packages/swcad-js-helpers-data/src/standards/index.js"(exports2, module2) {
    "use strict";
    var standards = ({ jscad, swcadJs }) => {
      const {
        math
      } = swcadJs.calcs;
      const pegboard = {
        /**
         * Pegboard_Spacing
         * @memberof data.standards
         */
        PEGBOARD_SPACING: math.inchesToMm(1),
        /**
         * Pegboard_Hole_Diam
         * @memberof data.standards
         */
        PEGBOARD_HOLE_DIAM: math.inchesToMm(7 / 32),
        /**
         * Micro_Pegboard_Spacing
         * @memberof data.standards
         */
        MICRO_PEGBOARD_SPACING: math.inchesToMm(1 / 2),
        /**
         * Micro_Pegboard_Hole_Diam
         * @memberof data.standards
         */
        MICRO_PEGBOARD_HOLE_DIAM: math.inchesToMm(1 / 8)
      };
      const gridfinity = {
        /**
         * Gridfinity_Spacing
         * @memberof data.standards
         */
        GRIDFINITY_SPACING: 42,
        /**
         * Gridfinity_Rail_Width
         * @memberof data.standards
         */
        GRIDFINITY_RAIL_WIDTH: 7
      };
      return {
        pegboard,
        gridfinity
      };
    };
    module2.exports = { init: standards };
  }
});

// packages/swcad-js-helpers-data/src/index.js
var require_src = __commonJS({
  "packages/swcad-js-helpers-data/src/index.js"(exports2, module2) {
    "use strict";
    var constants = require_constants();
    var functions = require_functions();
    var standards = require_standards();
    var dataInit = ({ jscad, swcadJs }) => {
      const data = {
        constants,
        functions,
        standards: standards.init({ jscad, swcadJs })
      };
      return data;
    };
    module2.exports = {
      init: dataInit
    };
  }
});

// packages/swcad-js-helpers-calcs/src/geometry/geo-triangle.js
var require_geo_triangle = __commonJS({
  "packages/swcad-js-helpers-calcs/src/geometry/geo-triangle.js"(exports2, module2) {
    "use strict";
    var geoTriangleInit = ({ jscad, swcadJs }) => {
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
    module2.exports = { init: geoTriangleInit };
  }
});

// packages/swcad-js-helpers-calcs/src/geometry/index.js
var require_geometry = __commonJS({
  "packages/swcad-js-helpers-calcs/src/geometry/index.js"(exports2, module2) {
    "use strict";
    var geoTriangleModule = require_geo_triangle();
    var geometryInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      return {
        triangle: geoTriangleModule.init({ jscad, swcadJs })
      };
    };
    module2.exports = { init: geometryInit };
  }
});

// packages/swcad-js-helpers-calcs/src/position/pos-rectangle.js
var require_pos_rectangle = __commonJS({
  "packages/swcad-js-helpers-calcs/src/position/pos-rectangle.js"(exports2, module2) {
    "use strict";
    var geoRectangleInit = ({ jscad, swcadJs }) => {
      const {
        measureBoundingBox
      } = jscad.measurements;
      const { position } = swcadJs.calcs;
      const getRectangleCoords = (rectGeom) => {
        return position.getGeomCoords(rectGeom);
      };
      const getRectangleCorners = (rectGeom) => {
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
    module2.exports = { init: geoRectangleInit };
  }
});

// packages/swcad-js-helpers-calcs/src/position/index.js
var require_position = __commonJS({
  "packages/swcad-js-helpers-calcs/src/position/index.js"(exports2, module2) {
    "use strict";
    var posRectangle = require_pos_rectangle();
    var positionInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      return {
        rectangle: posRectangle.init({ jscad, swcadJs })
      };
    };
    module2.exports = { init: positionInit };
  }
});

// packages/swcad-js-helpers-calcs/src/index.js
var require_src2 = __commonJS({
  "packages/swcad-js-helpers-calcs/src/index.js"(exports2, module2) {
    "use strict";
    var geometryModule = require_geometry();
    var positionModule = require_position();
    var calcsInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const geometry = geometryModule.init({ jscad, swcadJs, swcadJsHelpers });
      const position = positionModule.init({ jscad, swcadJs, swcadJsHelpers });
      const calcs = {
        geometry,
        position
      };
      return calcs;
    };
    module2.exports = {
      init: calcsInit
    };
  }
});

// packages/swcad-js-helpers-profiles/src/arch/index.js
var require_arch = __commonJS({
  "packages/swcad-js-helpers-profiles/src/arch/index.js"(exports2, module2) {
    "use strict";
    var archBuilder2d = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { path2, geom2 } = jscad.geometries;
      const { arc } = jscad.primitives;
      const { mirror, align } = jscad.transforms;
      const { intersect } = jscad.booleans;
      const onePtArch = (opts) => {
        const arcRad = opts.arcRadius;
        const baseArchPath = path2.close(arc({ radius: arcRad, endAngle: Math.PI, segments: 48 }));
        return geom2.fromPoints(path2.toPoints(baseArchPath));
      };
      const twoPtArch = (opts) => {
        const arcRad = opts.arcRadius;
        const archWth = opts.archWidth;
        const baseArchPath = path2.close(arc({ radius: arcRad, endAngle: Math.PI, segments: 48 }));
        const baseArch = geom2.fromPoints(path2.toPoints(baseArchPath));
        const mirrorAxis = arcRad - archWth / 2;
        const reflectedArch = mirror({ normal: [1, 0, 0], origin: [mirrorAxis, 0, 0] }, baseArch);
        return align({ modes: ["center", "min", "min"] }, intersect(baseArch, reflectedArch));
      };
      return {
        onePtArch,
        twoPtArch
      };
    };
    module2.exports = { init: archBuilder2d };
  }
});

// packages/swcad-js-helpers-profiles/src/curve/index.js
var require_curve = __commonJS({
  "packages/swcad-js-helpers-profiles/src/curve/index.js"(exports2, module2) {
    "use strict";
    var curveBuilder = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { rectangle } = jscad.primitives;
      const { subtract } = jscad.booleans;
      const { bezier } = jscad.curves;
      const { geom2, path2 } = jscad.geometries;
      const { position } = swcadJs.calcs;
      const { constants } = swcadJsHelpers.data;
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
        /**
         * Modelling functions for right-angle corner curves.
         * @memberof profiles.curve
         * @namespace rightCorner
         */
        rightCorner: {
          /**
           * Generates a right-angle corner curve with axis lengths corresponding to the Golden ratio.
           * @memberof profiles.curve.rightCorner
           * @param {object} opts
           * @param {number} opts.width
           * @param {number} opts.depth
           * @returns ...
           */
          golden: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.PHI });
          },
          /**
           * Generates a right-angle corner curve with axis lengths corresponding to a 30-degree right triangle's sides.
           * @memberof profiles.curve.rightCorner
           * @param {object} opts
           * @param {number} opts.width
           * @param {number} opts.depth
           * @returns ...
           */
          sixtyThirty: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: 2 });
          },
          /**
           * Generates a right-angle corner curve with axis lengths corresponding to the Silver ratio.
           * @memberof profiles.curve.rightCorner
           * @param {object} opts
           * @param {number} opts.width
           * @param {number} opts.depth
           * @returns ...
           */
          silver: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.SILVER_RATIO });
          },
          /**
           * Generates a right-angle corner curve with axis lengths corresponding to the Bronze ratio.
           * @memberof profiles.curve.rightCorner
           * @param {object} opts
           * @param {number} opts.width
           * @param {number} opts.depth
           * @returns ...
           */
          bronze: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.BRONZE_RATIO });
          },
          /**
           * Generates a right-angle corner curve with axis lengths corresponding to the Copper ratio.
           * @memberof profiles.curve.rightCorner
           * @param {object} opts
           * @param {number} opts.width
           * @param {number} opts.depth
           * @returns ...
           */
          copper: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.COPPER_RATIO });
          },
          /**
           * Generates a right-angle corner curve with axis lengths corresponding to the Super-golden ratio.
           * @memberof profiles.curve.rightCorner
           * @param {object} opts
           * @param {number} opts.width
           * @param {number} opts.depth
           * @returns ...
           */
          superGolden: ({ width, depth }) => {
            return createRtCornerCurve({ width, depth, ratio: constants.SUPERGOLDEN_RATIO });
          },
          /**
           * Generates a right-angle corner curve with axis lengths corresponding to the Plastic ratio.
           * @memberof profiles.curve.rightCorner
           * @param {object} opts
           * @param {number} opts.width
           * @param {number} opts.depth
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

// packages/swcad-js-helpers-profiles/src/foil/index.js
var require_foil = __commonJS({
  "packages/swcad-js-helpers-profiles/src/foil/index.js"(exports2, module2) {
    "use strict";
    var foilBuilder2d = ({ jscad, swcadJs, swcadJsHelpers }) => {
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
      const trefoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 3 });
      };
      const quatrefoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 4 });
      };
      const cinquefoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 5 });
      };
      const sexfoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 6 });
      };
      const octofoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 8 });
      };
      return {
        trefoil,
        quatrefoil,
        cinquefoil,
        sexfoil,
        octofoil
      };
    };
    module2.exports = { init: foilBuilder2d };
  }
});

// packages/swcad-js-helpers-profiles/src/rect-frame/index.js
var require_rect_frame = __commonJS({
  "packages/swcad-js-helpers-profiles/src/rect-frame/index.js"(exports2, module2) {
    "use strict";
    var rectangularFrameInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { circle, rectangle } = jscad.primitives;
      const { rotate, align, mirror } = jscad.transforms;
      const { subtract, union } = jscad.booleans;
      const { measureDimensions } = jscad.measurements;
      const { TAU } = jscad.maths.constants;
      const { position: basePosition } = swcadJs.calcs;
      const { position } = swcadJsHelpers.calcs;
      const { shapes, curve } = swcadJsHelpers.profiles;
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
            let inPieceAlign = basePosition.alignModes.ctr;
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
          longAxis: cornerOpts.longAxis || basePosition.findLongAxis(size)
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

// packages/swcad-js-helpers-profiles/src/shapes/ellipse/index.js
var require_ellipse = __commonJS({
  "packages/swcad-js-helpers-profiles/src/shapes/ellipse/index.js"(exports2, module2) {
    "use strict";
    var ellipseInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { ellipse } = jscad.primitives;
      const { constants } = swcadJsHelpers.data;
      const createEllipse = ({ width, depth, ratio }) => {
        const validSize = [
          width || depth / ratio,
          depth || width * ratio
        ];
        return ellipse({ radius: validSize });
      };
      const ellipses = {
        /**
         * Generates an ellipse with axis lengths corresponding to the Golden ratio.
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        golden: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.PHI });
        },
        /**
         * Generates an ellipse with axis lengths corresponding to a 30-degree right triangle's sides.
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        sixtyThirty: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: 2 });
        },
        /**
         * Generates an ellipse with axis lengths corresponding to the Silver ratio.
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        silver: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.SILVER_RATIO });
        },
        /**
         * Generates an ellipse with axis lengths corresponding to the Bronze ratio.
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        bronze: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.BRONZE_RATIO });
        },
        /**
         * Generates an ellipse with axis lengths corresponding to the Copper ratio.
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        copper: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.COPPER_RATIO });
        },
        /**
         * Generates an ellipse with axis lengths corresponding to the Super-golden ratio.
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        superGolden: ({ width, depth }) => {
          return createEllipse({ width, depth, ratio: constants.SUPERGOLDEN_RATIO });
        },
        /**
         * Generates an ellipse with axis lengths corresponding to the Plastic ratio.
         * @memberof profiles.shapes.ellipse
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
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

// packages/swcad-js-helpers-profiles/src/shapes/rectangle/index.js
var require_rectangle = __commonJS({
  "packages/swcad-js-helpers-profiles/src/shapes/rectangle/index.js"(exports2, module2) {
    "use strict";
    var rectangleInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { rectangle } = jscad.primitives;
      const { constants } = swcadJsHelpers.data;
      const createRect = ({ width, depth, ratio }) => {
        const validSize = [
          width || depth / ratio,
          depth || width * ratio
        ];
        return rectangle({ size: validSize });
      };
      const rectangles = {
        /**
         * Generates a rectangle with side lengths corresponding to the Golden ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        golden: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.PHI });
        },
        /**
         * Generates a rectangle with side lengths corresponding to a 30-degree right triangle's sides.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        sixtyThirty: ({ width, depth }) => {
          return createRect({ width, depth, ratio: 2 });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Silver ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        silver: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.SILVER_RATIO });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Bronze ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        bronze: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.BRONZE_RATIO });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Copper ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        copper: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.COPPER_RATIO });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Super-golden ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
         * @returns ...
         */
        superGolden: ({ width, depth }) => {
          return createRect({ width, depth, ratio: constants.SUPERGOLDEN_RATIO });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Plastic ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @param {number} opts.width
         * @param {number} opts.depth
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

// packages/swcad-js-helpers-profiles/src/shapes/square/index.js
var require_square = __commonJS({
  "packages/swcad-js-helpers-profiles/src/shapes/square/index.js"(exports2, module2) {
    "use strict";
    var squareInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { square, circle } = jscad.primitives;
      const { union, subtract } = jscad.booleans;
      const squares = {
        /**
         * Square with circular notches at corners.
         * @memberof profiles.shapes.square
         * @param {Object} opts 
         * @param {number} opts.sqLength - side length for bounding square 
         * @param {number} opts.notchRadius - radius of circular notch
         * @returns ...
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
         * @param {Object} opts 
         * @param {number} opts.sqLength - side length for bounding square 
         * @param {number} opts.cornerRadius - radius of circular corner
         * @returns ...
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

// packages/swcad-js-helpers-profiles/src/shapes/triangle/index.js
var require_triangle = __commonJS({
  "packages/swcad-js-helpers-profiles/src/shapes/triangle/index.js"(exports2, module2) {
    "use strict";
    var triangleInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { triangle } = jscad.primitives;
      const { position, geometry } = swcadJsHelpers.calcs;
      const { constants } = swcadJsHelpers.data;
      const createRtTriangle = ({ base, height, ratio }) => {
        const validOpts = {
          short: base || height / ratio,
          long: height || base * ratio
        };
        const triOpts = geometry.triangle.rightTriangleOpts({ ...validOpts });
        return triangle(triOpts);
      };
      const triangles = {
        /**
         * Generates an equilateral triangle.
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @param {number} opts.base
         * @returns ...
         */
        equilateral: ({ base }) => {
          return triangle({ type: "SSS", values: [base, base, base] });
        },
        /**
         * Generates a right triangle with a 45-degree angle.
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @param {number} opts.base
         * @returns ...
         */
        right45: ({ base }) => {
          const triOpts = geometry.triangle.rightTriangleOpts({ short: base, long: base });
          return triangle(triOpts);
        },
        /**
         * Generates a right triangle with a 30-degree angle.
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @param {number} opts.base
         * @param {number} opts.height
         * @returns ...
         */
        right30: ({ base, height }) => {
          return createRtTriangle({ base, height, ratio: 2 });
        },
        /**
         * Generates a right triangle with side lengths corresponding to the Golden ratio.
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @param {number} opts.base
         * @param {number} opts.height
         * @returns ...
         */
        rightGolden: ({ base, height }) => {
          return createRtTriangle({ base, height, ratio: constants.PHI });
        },
        /**
         * Generates a right triangle with side lengths corresponding to the Silver ratio.
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @param {number} opts.base
         * @param {number} opts.height
         * @returns ...
         */
        rightSilver: ({ base, height }) => {
          return createRtTriangle({ base, height, ratio: constants.SILVER_RATIO });
        },
        /**
         * Generates a right triangle with side lengths corresponding to the Bronze ratio.
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @param {number} opts.base
         * @param {number} opts.height
         * @returns ...
         */
        rightBronze: ({ base, height }) => {
          return createRtTriangle({ base, height, ratio: constants.BRONZE_RATIO });
        },
        /**
         * Generates a right triangle with side lengths corresponding to the Copper ratio.
         * @memberof profiles.shapes.triangle
         * @param {object} opts
         * @param {number} opts.base
         * @param {number} opts.height
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

// packages/swcad-js-helpers-profiles/src/shapes/index.js
var require_shapes = __commonJS({
  "packages/swcad-js-helpers-profiles/src/shapes/index.js"(exports2, module2) {
    "use strict";
    var ellipseModule = require_ellipse();
    var rectangleModule = require_rectangle();
    var squareModule = require_square();
    var triangleModule = require_triangle();
    var shapesBuilder = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { square } = jscad.primitives;
      const { intersect } = jscad.booleans;
      const { rotate } = jscad.transforms;
      const ellipses = ellipseModule.init({ jscad, swcadJs, swcadJsHelpers });
      const rectangles = rectangleModule.init({ jscad, swcadJs, swcadJsHelpers });
      const squares = squareModule.init({ jscad, swcadJs, swcadJsHelpers });
      const triangles = triangleModule.init({ jscad, swcadJs, swcadJsHelpers });
      const octFromDiam = (opts) => {
        const sqLen = opts.sqLength;
        const baseSquare = square({ size: sqLen });
        const angledSquare = rotate([0, 0, Math.PI / 4], baseSquare);
        return intersect(baseSquare, angledSquare);
      };
      const shapes = {
        ellipse: ellipses,
        rectangle: rectangles,
        square: squares,
        triangle: triangles,
        /**
         * Modelling functions for various polygons.
         * @memberof profiles.shapes
         * @namespace polygons
         */
        polygons: {
          octFromDiam
        }
      };
      return shapes;
    };
    module2.exports = { init: shapesBuilder };
  }
});

// packages/swcad-js-helpers-profiles/src/index.js
var require_src3 = __commonJS({
  "packages/swcad-js-helpers-profiles/src/index.js"(exports2, module2) {
    "use strict";
    var archModule = require_arch();
    var curveModule = require_curve();
    var foilModule = require_foil();
    var rectFrameModule = require_rect_frame();
    var shapesModule = require_shapes();
    var profilesInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const shapes = shapesModule.init({ jscad, swcadJs, swcadJsHelpers });
      const curve = curveModule.init({ jscad, swcadJs, swcadJsHelpers });
      let preLib = {
        ...swcadJsHelpers,
        profiles: {
          shapes,
          curve
        }
      };
      return {
        arch: archModule.init({ jscad, swcadJs, swcadJsHelpers: preLib }),
        curve,
        foil: foilModule.init({ jscad, swcadJs, swcadJsHelpers: preLib }),
        shapes,
        rectFrame: rectFrameModule.init({ jscad, swcadJs, swcadJsHelpers: preLib })
      };
    };
    module2.exports = {
      init: profilesInit
    };
  }
});

// packages/swcad-js-helpers-components/src/arch/index.js
var require_arch2 = __commonJS({
  "packages/swcad-js-helpers-components/src/arch/index.js"(exports2, module2) {
    "use strict";
    var archBuilder3d = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { geom2 } = jscad.geometries;
      const { extrudeRotate } = jscad.extrusions;
      const { cuboid } = jscad.primitives;
      const { translate, mirror, rotate } = jscad.transforms;
      const { union, subtract } = jscad.booleans;
      const { measureDimensions } = jscad.measurements;
      const { position } = swcadJs.calcs;
      const onePtArch = (opts, geomProfile) => {
        const arcRad = opts.arcRadius;
        const profile = translate([arcRad, 0, 0], geomProfile);
        const baseArch = extrudeRotate({ segments: 48, angle: Math.PI }, profile);
        return position.ctrMin(rotate([Math.PI / 2, 0, 0], baseArch));
      };
      const twoPtArch = (opts, geomProfile) => {
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
      };
      return {
        onePtArch,
        twoPtArch
      };
    };
    module2.exports = { init: archBuilder3d };
  }
});

// packages/swcad-js-helpers-components/src/foil/index.js
var require_foil2 = __commonJS({
  "packages/swcad-js-helpers-components/src/foil/index.js"(exports2, module2) {
    "use strict";
    var foilBuilder3d = ({ jscad, swcadJs, swcadJsHelpers }) => {
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
      const trefoil = (opts, geomProfile) => {
        return buildFoil3d({ ...opts, numLobes: 3 }, geomProfile);
      };
      const quatrefoil = (opts, geomProfile) => {
        return buildFoil3d({ ...opts, numLobes: 4 }, geomProfile);
      };
      const cinquefoil = (opts, geomProfile) => {
        return buildFoil3d({ ...opts, numLobes: 5 }, geomProfile);
      };
      const sexfoil = (opts, geomProfile) => {
        return buildFoil3d({ ...opts, numLobes: 6 }, geomProfile);
      };
      const octofoil = (opts, geomProfile) => {
        return buildFoil3d({ ...opts, numLobes: 8 }, geomProfile);
      };
      return {
        trefoil,
        quatrefoil,
        cinquefoil,
        sexfoil,
        octofoil
      };
    };
    module2.exports = { init: foilBuilder3d };
  }
});

// packages/swcad-js-helpers-components/src/index.js
var require_src4 = __commonJS({
  "packages/swcad-js-helpers-components/src/index.js"(exports2, module2) {
    "use strict";
    var archModule = require_arch2();
    var foilModule = require_foil2();
    var componentsInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const components = {
        arch: archModule.init({ jscad, swcadJs, swcadJsHelpers }),
        foil: foilModule.init({ jscad, swcadJs, swcadJsHelpers })
      };
      return components;
    };
    module2.exports = {
      init: componentsInit
    };
  }
});

// packages/swcad-js-helpers-utils/src/colors.js
var require_colors = __commonJS({
  "packages/swcad-js-helpers-utils/src/colors.js"(exports2, module2) {
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

// packages/swcad-js-helpers-utils/src/layout.js
var require_layout = __commonJS({
  "packages/swcad-js-helpers-utils/src/layout.js"(exports2, module2) {
    "use strict";
    var layoutUtils = ({ jscad, swcadJs, swcadJsHelpers }) => {
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
         * Adds an element to the layout.
         * @param {Object} opts 
         * @param {string} opts.name 
         * @param {string} opts.desc 
         * @param {string[]} opts.tags 
         * @param {Object} opts.layoutOpts 
         * @param {number} opts.layoutOpts.layoutMargin
         * @param {number} opts.layoutOpts.layoutSpace
         * @param {number} opts.layoutOpts.noFrame
         * @param {boolean} opts.layoutOpts.is2D
         * @param {number} opts.layoutOpts.column
         * @param {number[]} opts.layoutOpts.relativeTo
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
        /**
         * Removes an element with the given ID from the layout.
         * @param {object} opts
         * @instance
         * @memberof utils.layout
         */
        removeFromLayout: ({ id }) => {
          layoutElements.delete(id);
        },
        /**
         * Clears all the layout elements.
         * @param {object} opts
         * @instance
         * @memberof utils.layout
         */
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

// packages/swcad-js-helpers-utils/src/palette.js
var require_palette = __commonJS({
  "packages/swcad-js-helpers-utils/src/palette.js"(exports2, module2) {
    "use strict";
    var paletteUtils = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const { colors } = swcadJsHelpers.utils;
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

// packages/swcad-js-helpers-utils/src/index.js
var require_src5 = __commonJS({
  "packages/swcad-js-helpers-utils/src/index.js"(exports2, module2) {
    "use strict";
    var colors = require_colors();
    var layout = require_layout();
    var palette = require_palette();
    var utilsInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
      const coloursCore = colors.init({ jscad, swcadJs, swcadJsHelpers });
      const preLib = {
        ...swcadJsHelpers,
        utils: {
          colors: coloursCore
        }
      };
      const utils = {
        colors: coloursCore,
        layout: layout.init({ jscad, swcadJs, swcadJsHelpers: preLib }),
        palette: palette.init({ jscad, swcadJs, swcadJsHelpers: preLib })
      };
      return utils;
    };
    module2.exports = {
      init: utilsInit
    };
  }
});

// packages/swcad-js-helpers-core/src/index.js
var require_src6 = __commonJS({
  "packages/swcad-js-helpers-core/src/index.js"(exports2, module2) {
    "use strict";
    var coreInit = ({ jscad, swcadJs }) => {
      const assemblyData = require_src().init({ jscad, swcadJs });
      let swcadJsHelpersAssembly = {
        calcs: null,
        components: null,
        data: assemblyData,
        profiles: null,
        utils: null
      };
      const assemblyCalcs = require_src2().init({ jscad, swcadJs, swcadJsHelpers: swcadJsHelpersAssembly });
      swcadJsHelpersAssembly.calcs = assemblyCalcs;
      const assemblyProfiles = require_src3().init({ jscad, swcadJs, swcadJsHelpers: swcadJsHelpersAssembly });
      swcadJsHelpersAssembly.profiles = assemblyProfiles;
      const assemblyComponents = require_src4().init({ jscad, swcadJs, swcadJsHelpers: swcadJsHelpersAssembly });
      swcadJsHelpersAssembly.components = assemblyComponents;
      const assemblyUtils = require_src5().init({ jscad, swcadJs, swcadJsHelpers: swcadJsHelpersAssembly });
      swcadJsHelpersAssembly.utils = assemblyUtils;
      const swcadJsHelpers = {
        calcs: swcadJsHelpersAssembly.calcs,
        components: swcadJsHelpersAssembly.components,
        data: swcadJsHelpersAssembly.data,
        profiles: swcadJsHelpersAssembly.profiles,
        utils: swcadJsHelpersAssembly.utils
      };
      return swcadJsHelpers;
    };
    module2.exports = {
      init: coreInit
    };
  }
});

// src/index.js
var coreModule = require_src6();
var init = ({ jscad, swcadJs }) => {
  const swcadJsHelpers = coreModule.init({ jscad, swcadJs });
  return swcadJsHelpers;
};
module.exports = { init };
