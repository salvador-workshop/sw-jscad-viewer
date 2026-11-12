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
    var constants2 = {
      /**
       * Inches / Millimetre conversion rate
       * @memberof data.constants
       * @constant {number}
       */
      INCHES_MM_FACTOR: 25.4,
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
      TRI_30_FACTOR: tri30Factor
    };
    module2.exports = constants2;
  }
});

// packages/swcad-js-data/src/standards/index.js
var require_standards = __commonJS({
  "packages/swcad-js-data/src/standards/index.js"(exports2, module2) {
    "use strict";
    var inchesToMm = (numIn) => numIn * 25.4;
    var standards = ({ jscad }) => {
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
      return swDefaults;
    };
    module2.exports = { init: standards };
  }
});

// packages/swcad-js-data/src/index.js
var require_src = __commonJS({
  "packages/swcad-js-data/src/index.js"(exports2, module2) {
    "use strict";
    var constants2 = require_constants();
    var standards = require_standards();
    var dataInit = ({ jscad }) => {
      const data = {
        constants: constants2,
        standards: standards.init({ jscad })
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
         * Calculates side length from apothem and # of sides.
         * @memberof calcs.geometry.regPoly
         * @param {number} apothem - distance from center to the midpoint of one side
         * @param {number} numSides - number of polygon sides
         * @returns side length
         */
        sideLengthFromApothem: (apothem, numSides) => {
          return apothem * 2 * Math.tan(Math.PI / numSides);
        },
        /**
         * Calculates side length from circumradius and # of sides.
         * @memberof calcs.geometry.regPoly
         * @param {number} circumradius - distance from center to vertex
         * @param {number} numSides - number of polygon sides
         * @returns side length
         */
        sideLengthFromCircumRadius: (circumradius, numSides) => {
          return circumradius * 2 * Math.sin(Math.PI / numSides);
        },
        /**
         * Calculates apothem from circumradius and # of sides.
         * @memberof calcs.geometry.regPoly
         * @param {number} circumradius - distance from center to vertex
         * @param {number} numSides - number of polygon sides
         * @returns apothem
         */
        apothemFromCircumradius: (circumradius, numSides) => {
          return circumradius * Math.cos(Math.PI / numSides);
        },
        /**
         * Calculates apothem from side length and # of sides.
         * @memberof calcs.geometry.regPoly
         * @param {number} sideLength - side length
         * @param {number} numSides - number of polygon sides
         * @returns apothem
         */
        apothemFromSideLength: (sideLength, numSides) => {
          return sideLength / 2 * Math.tan(Math.PI / numSides);
        },
        /**
         * Calculates circumradius from apothem and # of sides.
         * @memberof calcs.geometry.regPoly
         * @param {number} apothem - distance from center to the midpoint of one side
         * @param {number} numSides - number of polygon sides
         * @returns circumradius
         */
        circumradiusFromApothem: (apothem, numSides) => {
          return apothem / Math.cos(Math.PI / numSides);
        },
        /**
         * Calculates circumradius from side length and # of sides.
         * @memberof calcs.geometry.regPoly
         * @param {number} sideLength - side length
         * @param {number} numSides - number of polygon sides
         * @returns circumradius
         */
        circumradiusFromSideLength: (sideLength, numSides) => {
          return sideLength / 2 * Math.sin(Math.PI / numSides);
        },
        /**
         * Calculates interior angle from # of sides.
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

// packages/swcad-js-calcs/src/geometry/points.js
var require_points = __commonJS({
  "packages/swcad-js-calcs/src/geometry/points.js"(exports2, module2) {
    "use strict";
    var poinstInit = ({ jscad, swcadJs }) => {
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
        math
      } = swcadJs.calcs;
      const ptCentroid = (points, mode = "3d") => {
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
      return {
        ptCentroid,
        getTriangularPtsInArea,
        getSquarePtsInArea
      };
    };
    module2.exports = {
      init: poinstInit
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
          }
        };
        const defaultOpts = {
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
          }
        };
        const defaultOpts = {
          size: defaultValues.dims.size,
          reinforcementPattern: defaultValues.opts.reinforcementPatterns[0]
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const modelOpts = (opts) => {
        const defaults = modelDefaults();
        const {
          size = defaults.opts.size
        } = opts;
        const stdOpts = {};
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
          reinforcementPattern = defaults.opts.reinforcementPattern
        } = opts;
        const stdOpts = {
          size,
          reinforcementPattern
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
          size
        } = opts;
        const width = size[0];
        const depth = size[1];
        const height = size[2];
        const modelConstants = {};
        const modelOpts2 = {};
        const modelDims = {
          size,
          width,
          depth,
          height
        };
        const modelPoints = {
          centre: defaults.vals.points.centre
        };
        const modelComponents = {};
        const modelProperties = {
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
          reinforcementPattern
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
    var pointsModule = require_points();
    var reinforcementModule = require_reinforcement();
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
      const points = pointsModule.init({ jscad, swcadJs });
      const regPoly = geoRegPolyModule.init({ jscad, swcadJs });
      const reinforcement = reinforcementModule.init({ jscad, swcadJs });
      return {
        coordDiffBetweenPoints,
        angleOfTwoPtLine,
        midpointBetweenPoints,
        pointFromAngleAndDist,
        getLineDataFromOutlinePoints,
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
         * Checks if a given integer is even.
         * @param {number} n - an integer
         * @returns {boolean} true if even, false if not
         * @memberof calcs.math
         */
        isEven: (n) => {
          return n % 2 == 0;
        },
        /**
         * Checks if a given integer is odd.
         * @memberof calcs.math
         * @param {number} n - an integer
         * @returns {boolean} true if odd, false if not
         */
        isOdd: (n) => {
          return Math.abs(n % 2) == 1;
        },
        /**
         * Converts distance in inches to mm.
         * @memberof calcs.math
         * @param {number} numInches - distance in inches
         * @returns {number} distance in mm
         */
        inchesToMm: (numInches) => numInches * INCHES_MM_FACTOR,
        /**
         * Converts distance in mm to inches.
         * @memberof calcs.math
         * @param {number} numMils - distance in mm
         * @returns {number} distance in inches
         */
        mmToInches: (numMils) => numMils / INCHES_MM_FACTOR,
        /**
         * Given an integer, calculates two integers that are factors for a containing rectangle around the input.
         * @memberof calcs.math
         * @param {number} num 
         * @returns {number[]} two integers that are factors for a containing rectangle around the input
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
        /**
         * Gets a random integer between `min` and `max`. The maximum is exclusive and the minimum is inclusive.
         * @param {number} min
         * @param {number} max
         * @returns {number} random integer
         * @memberof calcs.math
         */
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

// packages/swcad-js-calcs/src/position/position.js
var require_position = __commonJS({
  "packages/swcad-js-calcs/src/position/position.js"(exports2, module2) {
    "use strict";
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
        alignModes,
        measure,
        getGeomCoords,
        findLongAxis,
        ctr,
        ctrMin,
        ctrMax
      };
      return positionCore;
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
      const bisect3d = (opts, geom) => {
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
      };
      const cutCircularSlice = (opts, geom) => {
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
          rotate(
            [0, 0, opts.centralAngle / 2],
            align({ modes: ["max", "center", "center"] }, baseCutBox)
          )
        );
        const cutBox2 = mirror({ normal: [1, 0, 0] }, cutBox1);
        let cutAssembly = subtract(geom, cutBox1);
        cutAssembly = subtract(cutAssembly, cutBox2);
        return cutAssembly;
      };
      return {
        bisect3d,
        cutCircularSlice,
        stack,
        cutQuadrant,
        cloneQuadrant
      };
    };
    module2.exports = { init: transformUtils };
  }
});

// packages/swcad-js-calcs/src/geometry/lines.js
var require_lines = __commonJS({
  "packages/swcad-js-calcs/src/geometry/lines.js"(exports2, module2) {
    "use strict";
    var linesInit = ({ jscad, swcadJs }) => {
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
        geometry
      } = swcadJs.calcs;
      const lineComponentDetails = (opts) => {
        const {
          startPt,
          endPt,
          endOffset
        } = opts;
        const midPt = geometry.midpointBetweenPoints(startPt, endPt);
        const lineLength = geometry.distanceBetweenPoints(startPt, endPt);
        const offsetLineLength = lineLength - endOffset * 2;
        const lineComponentAngle = geometry.angleOfTwoPtLine(startPt, endPt);
        return {
          midPt,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        };
      };
      return {
        lineComponentDetails
      };
    };
    module2.exports = {
      init: linesInit
    };
  }
});

// packages/swcad-js-calcs/src/index.js
var require_src2 = __commonJS({
  "packages/swcad-js-calcs/src/index.js"(exports2, module2) {
    "use strict";
    var geometryModule = require_geometry();
    var mathModule = require_math();
    var positionModule = require_position2();
    var transformModule = require_transform();
    var linesModule = require_lines();
    var calcsInit = ({ jscad, swcadJs }) => {
      const math = mathModule.init({ jscad, swcadJs });
      const position = positionModule.init({ jscad, swcadJs });
      const initCalcs = {
        math,
        position
      };
      const preLib = {
        ...swcadJs,
        calcs: initCalcs
      };
      const setupGeometry = geometryModule.init({ jscad, swcadJs: preLib });
      const setupCalcs = {
        ...initCalcs,
        geometry: setupGeometry,
        transform: transformModule.init({ jscad, swcadJs: preLib })
      };
      preLib.calcs = setupCalcs;
      const finalGeometry = {
        ...setupGeometry,
        lines: linesModule.init({ jscad, swcadJs: preLib })
      };
      const calcs = {
        ...setupCalcs,
        geometry: finalGeometry
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
      const modelDefaults = () => {
        const defaultValues = {
          constants: {},
          opts: {},
          dims: {
            radius1: math.inchesToMm(1 / 2),
            radius2: math.inchesToMm(3 / 4),
            offset1: 0,
            offset2: 0,
            offset3: 0,
            offset4: 0
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
          radius1: defaultValues.dims.radius1,
          radius2: defaultValues.dims.radius2,
          offset1: defaultValues.dims.offset1,
          offset2: defaultValues.dims.offset2,
          offset3: defaultValues.dims.offset3,
          offset4: defaultValues.dims.offset4
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
          offset4 = defaults.opts.offset4
        } = opts;
        const stdOpts = {};
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
          offset4
        } = opts;
        const modelConstants = defaults.vals.constants;
        const modelOpts2 = defaults.vals.opts;
        const modelDims = {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const rabbet = (opts) => {
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
        cylinder,
        circle,
        ellipse: ellipseShape,
        cuboid,
        rectangle
      } = jscad.primitives;
      const {
        align,
        translate
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
          }
        };
        const defaultOpts = {
          fitGap: standards.FIT_GAP,
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
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
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
          segments,
          unitSegments,
          numConnectors
        };
        const modelDims = {
          size,
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

// packages/swcad-js-profiles/src/connections/joint-panel.js
var require_joint_panel = __commonJS({
  "packages/swcad-js-profiles/src/connections/joint-panel.js"(exports2, module2) {
    "use strict";
    var jointPanelInit = ({ jscad, swcadJs }) => {
      const {
        cuboid
      } = jscad.primitives;
      const {
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
          points: {},
          components: {},
          types: {
            tab: { id: "tab", desc: "Tab" },
            dovetail: { id: "dovetail", desc: "Dovetail" },
            rightAngleTab: { id: "rightAngleTab", desc: "Right-angle Tab" }
          }
        };
        const standardOpts = {
          type: defaultValues.types.tab.id,
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
          jointNumConnectors: jointNumConnectors2 = defaults.opts.jointNumConnectors,
          axis = defaults.opts.axis,
          type = defaults.opts.type,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          type,
          fitGap
        };
        const initOpts = {
          size,
          jointWidth,
          jointMargin,
          jointNumConnectors: jointNumConnectors2,
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
          jointNumConnectors: jointNumConnectors2,
          axis,
          type,
          fitGap
        } = opts;
        const width = size[0];
        const depth = size[1];
        let jMargin = jointMargin;
        if (typeof jointMargin == "number") {
          jMargin = [jointMargin, jointMargin];
        }
        const totalJointWidth = jMargin[1] * 2 + jointWidth;
        const modelConstants = defaults.vals.constants;
        const modelOpts = {
          type,
          axis,
          jointNumConnectors: jointNumConnectors2
        };
        const modelDims = {
          size,
          width,
          depth,
          jointWidth,
          jointMargin: jMargin,
          totalJointWidth,
          fitGap
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const oneJointRectPanel = (opts) => {
        const initOpts = jointPanelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          sampleThickness
        } = modelProperties.constants;
        const {
          type,
          axis,
          jointNumConnectors: jointNumConnectors2
        } = modelProperties.opts;
        const {
          width,
          depth,
          jointMargin,
          totalJointWidth,
          fitGap
        } = modelProperties.dims;
        let jointSize = [width, totalJointWidth];
        if (axis == "y") {
          jointSize = [depth, totalJointWidth];
        }
        const jointOpts = {
          size: jointSize,
          interfaceMargin: jointMargin,
          numConnectors: jointNumConnectors2,
          fitGap
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
        const initOpts = jointPanelOpts(opts);
        const modelProperties = modelProps(initOpts);
        const {
          sampleThickness
        } = modelProperties.constants;
        const {
          type,
          jointNumConnectors: jointNumConnectors2
        } = modelProperties.opts;
        const {
          width,
          depth,
          jointMargin,
          totalJointWidth,
          fitGap
        } = modelProperties.dims;
        let jNumConnectors = jointNumConnectors2;
        if (typeof jointNumConnectors2 == "number") {
          jNumConnectors = [
            jointNumConnectors2,
            jointNumConnectors2
          ];
        }
        const jointSizeX = [width, totalJointWidth];
        const jointOptsX = {
          size: jointSizeX,
          interfaceMargin: jointMargin,
          numConnectors: jNumConnectors[0],
          fitGap
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
          numConnectors: jNumConnectors[1],
          fitGap
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

// packages/swcad-js-profiles/src/mesh/index.js
var require_mesh = __commonJS({
  "packages/swcad-js-profiles/src/mesh/index.js"(exports2, module2) {
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
      const meshPanelDefaults = () => {
        const defaultValues = {
          constants: {},
          opts: {
            holePattern: "tri"
          },
          dims: {
            size: [
              math.inchesToMm(6),
              math.inchesToMm(3)
            ],
            edgeMargin: math.inchesToMm(3 / 16),
            holeRadius: math.inchesToMm(0.125),
            holeDistance: math.inchesToMm(1)
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
          size: defaultValues.dims.size,
          edgeMargin: defaultValues.dims.edgeMargin,
          holeRadius: defaultValues.dims.holeRadius,
          holeDistance: defaultValues.dims.holeDistance,
          holePattern: defaultValues.opts.holePattern
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const meshPanelProps = (opts) => {
        const defaults = meshPanelDefaults();
        const {
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
        const modelConstants = defaults.vals.constants;
        const modelOpts = {
          holePattern
        };
        const modelDims = {
          size,
          meshAreaSize,
          width,
          depth,
          edgeMargin,
          holeRadius,
          holeDiam,
          holeDistance
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
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
          size = defaults.opts.size,
          edgeMargin = defaults.opts.edgeMargin,
          holeRadius = defaults.opts.holeRadius,
          holeDistance = defaults.opts.holeDistance,
          holePattern = defaults.opts.holePattern
        } = opts;
        const inOpts = {
          size,
          edgeMargin,
          holeRadius,
          holeDistance,
          holePattern
        };
        const modelProperties = meshPanelProps(inOpts);
        const meshPanelPoints = (modelProps) => {
          const {
            meshAreaSize,
            holeDistance: holeDistance2
          } = modelProps.dims;
          const {
            holePattern: holePattern2
          } = modelProps.opts;
          let pts = [];
          if (holePattern2 == "tri") {
            pts = geometry.points.getTriangularPtsInArea(meshAreaSize[0], meshAreaSize[1], holeDistance2);
          } else {
            pts = geometry.points.getSquarePtsInArea(meshAreaSize[0], meshAreaSize[1], holeDistance2);
          }
          return pts;
        };
        const meshPanelCutProfile = (modelProps) => {
          const {
            holeRadius: holeRadius2
          } = modelProps.dims;
          const cutPts = meshPanelPoints(modelProps);
          const cutCircles = cutPts.map((cutPt) => {
            return circle({ radius: holeRadius2, center: [cutPt.x, cutPt.y] });
          });
          return cutCircles;
        };
        const meshPanelProfile = (modelProps) => {
          const {
            size: size2
          } = modelProps.dims;
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

// packages/swcad-js-profiles/src/reinforcements/box-curve.js
var require_box_curve = __commonJS({
  "packages/swcad-js-profiles/src/reinforcements/box-curve.js"(exports2, module2) {
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
          constants: {},
          opts: {},
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4)
            ],
            margin: [
              standards.INTERFACE_THICKNESS,
              standards.INTERFACE_THICKNESS,
              standards.INTERFACE_THICKNESS
            ]
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
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
          margin = defaults.opts.margin
        } = opts;
        const initOpts = {
          size,
          margin
        };
        return initOpts;
      };
      const boxCurveProps = (opts) => {
        const defaults = boxCurveDefaults();
        const {
          size,
          margin
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
        const modelConstants = defaults.vals.constants;
        const modelOpts = defaults.vals.opts;
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
          ellipseRadiusHalf
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const boxCurveQuarter = (opts) => {
        const initOpts = boxCurveOpts(opts);
        const modelProperties = boxCurveProps(initOpts);
        const {
          size,
          ellipseRadiusQtr
        } = modelProperties.dims;
        const blank = rectangle({ size });
        const cutaway = ellipse({ radius: ellipseRadiusQtr });
        const cutCurve = subtract(
          align({
            modes: ["max", "max", "center"]
          }, blank),
          position.ctr(cutaway)
        );
        const mainModel = position.ctr(cutCurve);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const boxCurveHalf = (opts) => {
        const initOpts = boxCurveOpts(opts);
        const modelProperties = boxCurveProps(initOpts);
        const {
          size,
          ellipseRadiusHalf
        } = modelProperties.dims;
        const blank = rectangle({ size });
        const cutaway = ellipse({ radius: ellipseRadiusHalf });
        const cutCurve = subtract(
          align({
            modes: ["center", "max", "center"]
          }, blank),
          position.ctr(cutaway)
        );
        const mainModel = position.ctr(cutCurve);
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
        math,
        position
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
          opts: {},
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
          points: {},
          components: {}
        };
        const defaultOpts = {
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
          reinforcementThickness = defaults.opts.reinforcementThickness
        } = opts;
        const initOpts = {
          size,
          reinforcementPattern,
          reinforcementThickness
        };
        return initOpts;
      };
      const reinforcedRectProps = (opts) => {
        const defaults = reinforcedRectDefaults();
        const {
          size,
          reinforcementPattern,
          reinforcementThickness
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
        const modelConstants = defaults.vals.constants;
        const modelOpts = {
          reinforcementPattern
        };
        const modelDims = {
          size,
          width,
          depth,
          reinforcementThickness: rThickness
        };
        const modelPoints = {
          ...reinforcementData.points
        };
        const modelComponents = {
          reinforcementNodes,
          cornerNode
        };
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const reinforcedRect = (opts) => {
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
        let mainModel = position.ctr(finalAssembly(modelProperties));
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
    var boxCurveModule = require_box_curve();
    var reinforcedRectModule = require_reinforced_rect();
    var reinforcementsInit = ({ jscad, swcadJs }) => {
      const boxCurve = boxCurveModule.init({ jscad, swcadJs });
      const reinforcedRect = reinforcedRectModule.init({ jscad, swcadJs });
      return {
        boxCurve,
        reinforcedRect
      };
    };
    module2.exports = { init: reinforcementsInit };
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
      const {
        position
      } = swcadJs.calcs;
      const basicText = (opts) => {
        const lineRadius = opts.charLineWidth / 2;
        const lineCorner = circle({ radius: lineRadius });
        const lineSegmentPointArrays = vectorText({ x: 0, y: 0, input: opts.message, height: opts.fontSize });
        const lineSegments = [];
        lineSegmentPointArrays.forEach((segmentPoints) => {
          const corners = segmentPoints.map((point) => translate(point, lineCorner));
          lineSegments.push(hullChain(corners));
        });
        const bText = union(lineSegments);
        return position.ctr(bText);
      };
      return {
        basicText
      };
    };
    module2.exports = { init: textUtils };
  }
});

// packages/swcad-js-profiles/src/index.js
var require_src3 = __commonJS({
  "packages/swcad-js-profiles/src/index.js"(exports2, module2) {
    "use strict";
    var beadsBitsModule = require_beads_bits();
    var connectionsModule = require_connections();
    var jointPanelModule = require_joint_panel();
    var meshModule = require_mesh();
    var reinforcementsModule = require_reinforcements();
    var textModule = require_text();
    var profilesInit = ({ jscad, swcadJs }) => {
      const connections = connectionsModule.init({ jscad, swcadJs });
      let preLib = {
        ...swcadJs,
        profiles: {
          connections
        }
      };
      const connectionsApi = {
        ...connections,
        jointPanel: jointPanelModule.init({ jscad, swcadJs: preLib })
      };
      return {
        beadsBits: beadsBitsModule.init({ jscad, swcadJs: preLib }),
        connections: connectionsApi,
        mesh: meshModule.init({ jscad, swcadJs: preLib }),
        reinforcements: reinforcementsModule.init({ jscad, swcadJs: preLib }),
        text: textModule.init({ jscad, swcadJs: preLib })
      };
    };
    module2.exports = {
      init: profilesInit
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
        constants: constants2
      } = swcadJs.data;
      const {
        math
      } = swcadJs.calcs;
      const {
        beadsBits
      } = swcadJs.profiles;
      const modelDefaults = () => {
        const defaultValues = {
          constants: {},
          opts: {},
          dims: {
            radius1: math.inchesToMm(1 / 2),
            radius2: math.inchesToMm(3 / 4),
            offset1: 0,
            offset2: 0,
            offset3: 0,
            offset4: 0
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
          radius1: defaultValues.dims.radius1,
          radius2: defaultValues.dims.radius2,
          offset1: defaultValues.dims.offset1,
          offset2: defaultValues.dims.offset2,
          offset3: defaultValues.dims.offset3,
          offset4: defaultValues.dims.offset4
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
          offset4 = defaults.opts.offset4
        } = opts;
        const initOpts = {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4
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
          offset4
        } = opts;
        const modelConstants = defaults.vals.constants;
        const modelOpts2 = defaults.vals.opts;
        const modelDims = {
          radius1,
          radius2,
          offset1,
          offset2,
          offset3,
          offset4
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const rabbet = (opts) => {
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
        const edgeOffset = baseThickness / constants2.TRI_30_FACTOR / 2;
        const topWidth = width - edgeOffset * 2;
        const basic30DegBeadProfile = cylinderElliptic({
          height: baseThickness,
          startRadius: [width / 2, width / 2],
          endRadius: [topWidth / 2, topWidth / 2]
        });
        return basic30DegBeadProfile;
      };
      const basic45DegBead = (baseThickness, width) => {
        const edgeOffset = baseThickness / constants2.TRI_45_FACTOR / 2;
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

// packages/swcad-js-components/src/component-line/index.js
var require_component_line = __commonJS({
  "packages/swcad-js-components/src/component-line/index.js"(exports2, module2) {
    "use strict";
    var moduleInit = ({ jscad, swcadJs }) => {
      const {
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
          constants: {},
          opts: {},
          dims: {
            size: [
              math.inchesToMm(2),
              math.inchesToMm(4),
              math.inchesToMm(1)
            ]
          },
          points: {
            startPt: [math.inchesToMm(0.5), math.inchesToMm(0.5)],
            endPt: [math.inchesToMm(3), math.inchesToMm(4)]
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
          interfaceThickness: standards.INTERFACE_THICKNESS
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
          unitLength = defaults.opts.unitLength,
          startPt = defaults.opts.startPt,
          endPt = defaults.opts.endPt,
          endOffset = defaults.opts.endOffset,
          baseLineOffset = defaults.opts.baseLineOffset,
          component = defaults.opts.component
        } = opts;
        const initOpts = {
          interfaceThickness,
          unitLength,
          startPt,
          endPt,
          endOffset,
          baseLineOffset,
          component
        };
        return initOpts;
      };
      const modelProps = (opts) => {
        const defaults = modelDefaults();
        const {
          interfaceThickness,
          unitLength,
          startPt,
          endPt,
          endOffset,
          baseLineOffset,
          component
        } = opts;
        const lineComponentDetails = geometry.lines.lineComponentDetails({
          startPt,
          endPt,
          endOffset
        });
        const {
          midPt,
          lineLength,
          offsetLineLength,
          lineComponentAngle: compLineAngle
        } = lineComponentDetails;
        const numSubLengths = Math.floor(offsetLineLength / unitLength);
        const componentUnits = numSubLengths + 1;
        const componentDims = measureDimensions(component);
        const componentBoundingBox = measureBoundingBox(component);
        const componentLineLength = offsetLineLength - componentDims[0];
        const componentUnitLength = componentLineLength / numSubLengths;
        const lgProfileBeadWidth = standards.LG_PROFILE_BEAD_WIDTH;
        const mdProfileBeadWidth = standards.MD_PROFILE_BEAD_WIDTH;
        const smProfileBeadWidth = standards.SM_PROFILE_BEAD_WIDTH;
        const modelConstants = defaults.vals.constants;
        const modelOpts2 = {
          componentUnits
        };
        const modelDims = {
          interfaceThickness,
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
          constants: modelConstants,
          opts: modelOpts2,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const componentLine = (opts) => {
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
            componentUnitLength
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
            lineLength,
            componentDims
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
            baseLineOffset,
            compLineAngle
          } = modelProps2.dims;
          const {
            midPt
          } = modelProps2.points;
          let bLine = baseLine(modelProps2);
          let cSet = componentSet(modelProps2);
          const midPoint = [midPt[0], midPt[1], 0];
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
        constants: constants2
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const roundFittingDefaults = () => {
        const defaultValues = {
          constants: {
            ratioDiamToHolderHeight: 1.666667,
            ratioDiamToChannelDepth: 0.866667,
            ratioDiamToSideChannelWidth: 1,
            ratioDiamToDowelDepth: 0.333333,
            ratioDiamToDoubleFittingMaxHt: 2.973,
            ratioDiamToDblFittingVertDowelCtrsDist: 1.973,
            ratioDiamToDblFittingSideDowelCtrsDist: 1.798
          },
          opts: {},
          dims: {
            dowelRadius: 3.25 / 2,
            length: math.inchesToMm(1 / 4)
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
          interfaceThickness: 1.333333,
          fitGap: math.inchesToMm(1 / 128),
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
        const {
          dowelRadius = defaults.opts.dowelRadius,
          length = defaults.opts.length,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          dowelRadius,
          length,
          ...stdOpts
        };
        return initOpts;
      };
      const roundFittingProps = (opts) => {
        const defaults = roundFittingDefaults();
        const {
          dowelRadius,
          length,
          interfaceThickness,
          fitGap
        } = opts;
        const dowelDiam = dowelRadius * 2;
        const width = interfaceThickness * 2 + dowelDiam;
        const roundCutProfileRadius = fitGap / 2 + dowelRadius;
        const invCutProfileSideLength = dowelDiam + fitGap;
        const invCutProfileHeight = dowelDiam * constants2.EQUI_TRIANGLE_HEIGHT_FACTOR;
        const simpleHeight = dowelDiam / 3 + interfaceThickness + fitGap;
        const invSimpleHeight = invCutProfileHeight + interfaceThickness + fitGap;
        const modelOpts = defaults.vals.opts;
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
        const modelPoints = defaults.vals.points;
        const modelConstants = defaults.vals.constants;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const roundFittingCutProfile = (opts) => {
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
        const initOpts = roundFittingOpts(opts);
        const modelProperties = roundFittingProps(initOpts);
        const {
          interfaceThickness,
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
        const initOpts = roundFittingOpts(opts);
        const modelProperties = roundFittingProps(initOpts);
        const {
          length,
          width,
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
        rectangle
      } = jscad.primitives;
      const {
        align,
        rotate
      } = jscad.transforms;
      const {
        subtract
      } = jscad.booleans;
      const {
        extrudeLinear
      } = jscad.extrusions;
      const {
        standards
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const rectangularFittingDefaults = () => {
        const defaultValues = {
          constants: {},
          opts: {},
          dims: {
            subjectSize: [10, 2],
            length: math.inchesToMm(1 / 4)
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
          interfaceThickness: standards.INTERFACE_THICKNESS,
          fitGap: standards.FIT_GAP,
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
        const {
          subjectSize = defaults.opts.subjectSize,
          length = defaults.opts.length,
          interfaceThickness = defaults.opts.interfaceThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const stdOpts = {
          interfaceThickness,
          fitGap
        };
        const initOpts = {
          subjectSize,
          length,
          ...stdOpts
        };
        return initOpts;
      };
      const rectangularFittingProps = (opts) => {
        const defaults = rectangularFittingDefaults();
        const {
          subjectSize,
          length,
          interfaceThickness,
          fitGap
        } = opts;
        const subjectWidth = subjectSize[0];
        const subjectHeight = subjectSize[1];
        const width = subjectWidth + interfaceThickness * 2;
        const height = subjectHeight / 3 + interfaceThickness;
        const cutProfileWidth = subjectWidth + fitGap;
        const cutProfileHeight = subjectHeight + fitGap;
        const modelConstants = defaults.vals.constants;
        const modelOpts = defaults.vals.opts;
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
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const rectFittingCutProfile = (opts) => {
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
        const initOpts = rectangularFittingOpts(opts);
        const modelProperties = rectangularFittingProps(initOpts);
        const {
          length,
          width,
          height,
          interfaceThickness
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
var require_mesh2 = __commonJS({
  "packages/swcad-js-components/src/mesh/index.js"(exports2, module2) {
    "use strict";
    var mesh3dInit = ({ jscad, swcadJs }) => {
      const { extrudeLinear } = jscad.extrusions;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        standards
      } = swcadJs.data;
      const {
        mesh: mesh2d
      } = swcadJs.profiles;
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
        return position.ctr(mPanel);
      };
      return {
        meshPanel
      };
    };
    module2.exports = { init: mesh3dInit };
  }
});

// packages/swcad-js-components/src/reinforcements/box-support.js
var require_box_support = __commonJS({
  "packages/swcad-js-components/src/reinforcements/box-support.js"(exports2, module2) {
    "use strict";
    var boxSupportInit = ({ jscad, swcadJs }) => {
      const { extrudeLinear } = jscad.extrusions;
      const {
        standards
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        reinforcements
      } = swcadJs.profiles;
      const boxSupportDefaults = () => {
        const defaultValues = {
          constants: {},
          opts: {},
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
          points: {},
          components: {}
        };
        const defaultOpts = {
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
          margin = defaults.opts.margin
        } = opts;
        const initOpts = {
          size,
          margin
        };
        return initOpts;
      };
      const boxSupportProps = (opts) => {
        const defaults = boxSupportDefaults();
        const {
          size,
          margin
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
        const modelConstants = defaults.vals.constants;
        const modelOpts = defaults.vals.opts;
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
          ellipseRadiusHalf
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const boxSupportQuarter = (opts) => {
        const initOpts = boxSupportOpts(opts);
        const modelProperties = boxSupportProps(initOpts);
        const {
          size,
          margin,
          marginHeight
        } = modelProperties.dims;
        const boxCurvesQtrData = reinforcements.boxCurve.boxCurveQuarter({
          size,
          margin
        });
        const boxCurvesQtrModel = boxCurvesQtrData[0];
        const mainModel = position.ctr(extrudeLinear(
          { height: marginHeight },
          boxCurvesQtrModel
        ));
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const boxSupportHalf = (opts) => {
        const initOpts = boxSupportOpts(opts);
        const modelProperties = boxSupportProps(initOpts);
        const {
          size,
          margin,
          marginHeight
        } = modelProperties.dims;
        const boxCurvesHalfData = reinforcements.boxCurve.boxCurveHalf({
          size,
          margin
        });
        const boxCurvesHalfModel = boxCurvesHalfData[0];
        const mainModel = position.ctr(extrudeLinear(
          { height: marginHeight },
          boxCurvesHalfModel
        ));
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
        translate,
        rotate
      } = jscad.transforms;
      const {
        intersect,
        union
      } = jscad.booleans;
      const {
        hull
      } = jscad.hulls;
      const { TAU } = jscad.maths.constants;
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
      const reinforcedJoistDefaults = () => {
        const interfaceThickness = standards.INTERFACE_THICKNESS;
        const defaultValues = {
          constants: {
            interfaceThickness,
            ratioDiamToHolderHeight: 1.666667,
            ratioDiamToChannelDepth: 0.866667,
            ratioDiamToSideChannelWidth: 1,
            ratioDiamToDowelDepth: 0.333333
          },
          opts: {
            reinforcementLevel: 1
          },
          dims: {
            width: math.inchesToMm(1.125),
            length: math.inchesToMm(5.5),
            unitLength: math.inchesToMm(1),
            interfaceThickness: standards.INTERFACE_THICKNESS
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
          width: defaultValues.dims.width,
          length: defaultValues.dims.length,
          unitLength: defaultValues.dims.unitLength,
          interfaceThickness: defaultValues.dims.interfaceThickness,
          reinforcementLevel: defaultValues.opts.reinforcementLevel
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const reinforcedJoistProps = (opts) => {
        const defaults = reinforcedJoistDefaults();
        const {
          interfaceThickness,
          width,
          length,
          reinforcementLevel,
          unitLength
        } = opts;
        const lgProfileBeadWidth = standards.LG_PROFILE_BEAD_WIDTH;
        const mdProfileBeadWidth = standards.MD_PROFILE_BEAD_WIDTH;
        const smProfileBeadWidth = standards.SM_PROFILE_BEAD_WIDTH;
        const lengthUnits = Math.ceil(length / unitLength);
        const edgeWidth = lgProfileBeadWidth;
        const supportWidth = mdProfileBeadWidth;
        const lightSupportWidth = smProfileBeadWidth;
        const modelConstants = defaults.vals.constants;
        const modelOpts = {
          reinforcementLevel
        };
        const modelDims = {
          width,
          length,
          unitLength,
          lengthUnits,
          interfaceThickness,
          edgeWidth,
          supportWidth,
          lightSupportWidth
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = {
          interfaceProfileBeads: beadsBits.interface30DegProfileBeads(
            interfaceThickness,
            smProfileBeadWidth,
            mdProfileBeadWidth,
            lgProfileBeadWidth
          )
        };
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const framePanelWebs = (modelProps) => {
        const {
          reinforcementLevel
        } = modelProps.opts;
        const {
          lengthUnits,
          unitLength,
          length,
          interfaceThickness,
          width,
          edgeWidth
        } = modelProps.dims;
        const {
          interfaceProfileBeads
        } = modelProps.components;
        const panelPtsWidth = width - edgeWidth;
        const braceUnitSize = [
          panelPtsWidth,
          unitLength
        ];
        const braceUnitMidpoint = [
          braceUnitSize[0] / 2,
          braceUnitSize[1] / 2
        ];
        const braceUnitCentrePoints = [];
        for (let idx = 0; idx < lengthUnits; idx++) {
          braceUnitCentrePoints.push([
            braceUnitMidpoint[0],
            unitLength * idx + braceUnitMidpoint[1],
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
        if (reinforcementLevel > 1) {
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
        if (reinforcementLevel > 2) {
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
          [0, length, 0],
          [braceUnitSize[0], 0, 0],
          [braceUnitSize[0], length, 0]
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
        let endCap = cuboid({ size: [width, edgeWidth, interfaceThickness] });
        endCap = align({
          modes: ["min", "min", "center"],
          relativeTo: [edgeWidth / -2, 0, 0]
        }, endCap);
        const endCaps = union(
          endCap,
          translate([0, length - edgeWidth, 0], endCap)
        );
        const joistWebs = union(
          position.ctr(joistEdges),
          position.ctr(braceUnits),
          position.ctr(endCaps)
        );
        const keepArea = cuboid({
          size: [
            width,
            length,
            interfaceThickness * 2
          ]
        });
        const websAssembly = intersect(joistWebs, keepArea);
        return rotate([0, 0, TAU / 4], websAssembly);
      };
      const reinforcedJoist = (opts) => {
        const defaults = reinforcedJoistDefaults();
        const {
          interfaceThickness = defaults.opts.interfaceThickness,
          width = defaults.opts.width,
          length = defaults.opts.length,
          reinforcementLevel = defaults.opts.reinforcementLevel,
          unitLength = defaults.opts.unitLength
        } = opts;
        const inOpts = {
          interfaceThickness,
          width,
          length,
          reinforcementLevel,
          unitLength
        };
        const modelProperties = reinforcedJoistProps(inOpts);
        let fPanelWebs = framePanelWebs(modelProperties);
        let mainModel = fPanelWebs;
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
        math,
        position
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
          opts: {},
          dims: {
            size: [
              math.inchesToMm(3),
              math.inchesToMm(4),
              standards.INTERFACE_THICKNESS
            ],
            reinforcementThickness: [5, 4, 3]
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
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
          reinforcementThickness = defaults.opts.reinforcementThickness
        } = opts;
        const initOpts = {
          size,
          reinforcementPattern,
          reinforcementThickness
        };
        return initOpts;
      };
      const reinforcedRectPanelProps = (opts) => {
        const defaults = reinforcedRectPanelDefaults();
        const {
          size,
          reinforcementPattern,
          reinforcementThickness
        } = opts;
        const width = size[0];
        const depth = size[1];
        const height = size[2];
        const modelConstants = defaults.vals.constants;
        const modelOpts = {
          reinforcementPattern
        };
        const modelDims = {
          size,
          width,
          depth,
          height,
          reinforcementThickness
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const reinforcedRectPanel = (opts) => {
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
        const extrudedReinforcedRect = position.ctr(extrudeLinear(
          { height: size[2] },
          reinforcedRect
        ));
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

// packages/swcad-js-components/src/reinforcements/reinforced-ring.js
var require_reinforced_ring = __commonJS({
  "packages/swcad-js-components/src/reinforcements/reinforced-ring.js"(exports2, module2) {
    "use strict";
    var reinforcedRingInit = ({ jscad, swcadJs }) => {
      const {
        cylinder,
        cuboid
      } = jscad.primitives;
      const {
        rotate
      } = jscad.transforms;
      const {
        subtract,
        union
      } = jscad.booleans;
      const { TAU } = jscad.maths.constants;
      const {
        standards
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const reinforcedRingDefaults = () => {
        const defInterfaceThickness = standards.INTERFACE_THICKNESS;
        const defFitGap = standards.FIT_GAP;
        const defaultValues = {
          constants: {
            defInterfaceThickness
          },
          opts: {},
          dims: {
            height: math.inchesToMm(1 / 8),
            holeRadius: math.inchesToMm(1 / 8),
            ringWidth: math.inchesToMm(3 / 16),
            baseThickness: defInterfaceThickness,
            reinforcementThickness: 1.125,
            fitGap: defFitGap
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
          height: defaultValues.dims.height,
          holeRadius: defaultValues.dims.holeRadius,
          ringWidth: defaultValues.dims.ringWidth,
          baseThickness: defaultValues.dims.baseThickness,
          reinforcementThickness: defaultValues.dims.reinforcementThickness,
          fitGap: defaultValues.dims.fitGap
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const reinforcedRingOpts = (opts) => {
        const defaults = reinforcedRingDefaults();
        console.log("reinforcedRingOpts() -- opts", opts);
        const {
          height = defaults.opts.height,
          holeRadius = defaults.opts.holeRadius,
          ringWidth = defaults.opts.ringWidth,
          baseThickness = defaults.opts.baseThickness,
          reinforcementThickness = defaults.opts.reinforcementThickness,
          fitGap = defaults.opts.fitGap
        } = opts;
        const initOpts = {
          height,
          holeRadius,
          ringWidth,
          baseThickness,
          reinforcementThickness,
          fitGap
        };
        console.log("reinforcedRingOpts() -- initOpts", initOpts);
        return initOpts;
      };
      const reinforcedRingProps = (opts) => {
        const defaults = reinforcedRingDefaults();
        console.log("reinforcedRingProps() -- opts", opts);
        const {
          height,
          holeRadius,
          ringWidth,
          baseThickness,
          reinforcementThickness,
          fitGap
        } = opts;
        const holeDiam = holeRadius * 2;
        const ringBlankRadius = holeRadius + ringWidth;
        const ringBlankDiam = ringBlankRadius * 2;
        const ringHoleCutRadius = holeRadius + fitGap / 2;
        const ringIntReinfBlankRadius = holeRadius + reinforcementThickness;
        const ringExtReinfHoleCutRadius = ringBlankRadius - reinforcementThickness;
        const modelConstants = defaults.vals.constants;
        const modelOpts = defaults.vals.opts;
        const modelDims = {
          height,
          holeRadius,
          ringWidth,
          baseThickness,
          reinforcementThickness,
          fitGap,
          holeDiam,
          ringBlankRadius,
          ringBlankDiam,
          ringHoleCutRadius,
          ringIntReinfBlankRadius,
          ringExtReinfHoleCutRadius
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        console.log("reinforcedRingProps() -- modelProperties", modelProperties);
        return modelProperties;
      };
      const ringReinforcementBase = (opts) => {
        const {
          baseThickness,
          ringBlankRadius,
          ringHoleCutRadius
        } = opts;
        const ringBlank = cylinder({
          height: baseThickness,
          radius: ringBlankRadius
        });
        const ringCutCylinder = cylinder({
          height: baseThickness * 2,
          radius: ringHoleCutRadius
        });
        return subtract(ringBlank, ringCutCylinder);
      };
      const ringReinforcementInnerEdge = (opts) => {
        const {
          height,
          ringIntReinfBlankRadius,
          ringHoleCutRadius
        } = opts;
        const ringReinfInBlank = cylinder({
          height,
          radius: ringIntReinfBlankRadius
        });
        const ringReinfInCutCylinder = cylinder({
          height: height * 2,
          radius: ringHoleCutRadius
        });
        return subtract(ringReinfInBlank, ringReinfInCutCylinder);
      };
      const ringReinforcementOuterEdge = (opts) => {
        const {
          height,
          ringBlankRadius,
          ringExtReinfHoleCutRadius
        } = opts;
        const ringReinfOutBlank = cylinder({
          height,
          radius: ringBlankRadius
        });
        const ringReinfOutCutCylinder = cylinder({
          height: height * 2,
          radius: ringExtReinfHoleCutRadius
        });
        return subtract(ringReinfOutBlank, ringReinfOutCutCylinder);
      };
      const ringReinforcementSpokes = (opts) => {
        const {
          reinforcementThickness,
          height,
          ringBlankDiam,
          ringHoleCutRadius
        } = opts;
        const spokeReinforcementBase = cuboid({
          size: [reinforcementThickness, ringBlankDiam - reinforcementThickness, height]
        });
        const spokeReinforcements = union(
          spokeReinforcementBase,
          rotate([0, 0, TAU / 8], spokeReinforcementBase),
          rotate([0, 0, TAU / 4], spokeReinforcementBase),
          rotate([0, 0, TAU * 0.375], spokeReinforcementBase)
        );
        const ringReinfInCutCylinder = cylinder({
          height: height * 2,
          radius: ringHoleCutRadius
        });
        return subtract(spokeReinforcements, ringReinfInCutCylinder);
      };
      const lightReinforcedRing = (opts) => {
        const initOpts = reinforcedRingOpts(opts);
        const modelProperties = reinforcedRingProps(initOpts);
        const {
          height,
          baseThickness,
          ringBlankRadius,
          ringHoleCutRadius,
          ringIntReinfBlankRadius
        } = modelProperties.dims;
        const ringReinfBase = ringReinforcementBase({
          baseThickness,
          ringBlankRadius,
          ringHoleCutRadius
        });
        const ringReinfInnerEdge = ringReinforcementInnerEdge({
          height,
          ringIntReinfBlankRadius,
          ringHoleCutRadius
        });
        const lightRingAssemblyParts = [
          position.ctrMin(ringReinfBase),
          position.ctrMin(ringReinfInnerEdge)
        ];
        const ringAssembly = union(...lightRingAssemblyParts);
        const mainModel = position.ctr(ringAssembly);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const mediumReinforcedRing = (opts) => {
        const initOpts = reinforcedRingOpts(opts);
        const modelProperties = reinforcedRingProps(initOpts);
        const {
          height,
          baseThickness,
          reinforcementThickness,
          ringBlankRadius,
          ringBlankDiam,
          ringHoleCutRadius,
          ringIntReinfBlankRadius
        } = modelProperties.dims;
        const ringReinfBase = ringReinforcementBase({
          baseThickness,
          ringBlankRadius,
          ringHoleCutRadius
        });
        const ringReinfInnerEdge = ringReinforcementInnerEdge({
          height,
          ringIntReinfBlankRadius,
          ringHoleCutRadius
        });
        const ringReinfSpokes = ringReinforcementSpokes({
          reinforcementThickness,
          height,
          ringBlankDiam,
          ringHoleCutRadius
        });
        const mediumRingAssemblyParts = [
          position.ctrMin(ringReinfBase),
          position.ctrMin(ringReinfInnerEdge),
          position.ctrMin(ringReinfSpokes)
        ];
        const ringAssembly = union(...mediumRingAssemblyParts);
        const mainModel = position.ctr(ringAssembly);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const heavyReinforcedRing = (opts) => {
        const initOpts = reinforcedRingOpts(opts);
        const modelProperties = reinforcedRingProps(initOpts);
        const {
          height,
          baseThickness,
          reinforcementThickness,
          ringBlankRadius,
          ringBlankDiam,
          ringHoleCutRadius,
          ringIntReinfBlankRadius,
          ringExtReinfHoleCutRadius
        } = modelProperties.dims;
        const ringReinfBase = ringReinforcementBase({
          baseThickness,
          ringBlankRadius,
          ringHoleCutRadius
        });
        const ringReinfInnerEdge = ringReinforcementInnerEdge({
          height,
          ringIntReinfBlankRadius,
          ringHoleCutRadius
        });
        const ringReinfSpokes = ringReinforcementSpokes({
          reinforcementThickness,
          height,
          ringBlankDiam,
          ringHoleCutRadius
        });
        const ringReinfOuterEdge = ringReinforcementOuterEdge({
          height,
          ringBlankRadius,
          ringExtReinfHoleCutRadius
        });
        const heavyRingAssemblyParts = [
          position.ctrMin(ringReinfBase),
          position.ctrMin(ringReinfInnerEdge),
          position.ctrMin(ringReinfSpokes),
          position.ctrMin(ringReinfOuterEdge)
        ];
        const ringAssembly = union(...heavyRingAssemblyParts);
        const mainModel = position.ctr(ringAssembly);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: reinforcedRingDefaults,
        props: reinforcedRingProps,
        lightReinforcedRing,
        mediumReinforcedRing,
        heavyReinforcedRing
      };
    };
    module2.exports = {
      init: reinforcedRingInit
    };
  }
});

// packages/swcad-js-components/src/reinforcements/index.js
var require_reinforcements2 = __commonJS({
  "packages/swcad-js-components/src/reinforcements/index.js"(exports2, module2) {
    var boxSupportModule = require_box_support();
    var reinforcedJoistModule = require_reinforced_joist();
    var reinforcedRectPanelModule = require_reinforced_rect_panel();
    var reinforcedRingModule = require_reinforced_ring();
    var reinforcementsInit = ({ jscad, swcadJs }) => {
      const boxSupport = boxSupportModule.init({ jscad, swcadJs });
      const reinforcedJoist = reinforcedJoistModule.init({ jscad, swcadJs });
      const reinforcedRectPanel = reinforcedRectPanelModule.init({ jscad, swcadJs });
      const reinforcedRing = reinforcedRingModule.init({ jscad, swcadJs });
      return {
        boxSupport,
        reinforcedJoist,
        reinforcedRectPanel,
        reinforcedRing
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
        beadsBits: beadsBits2d
      } = swcadJs.profiles;
      const {
        beadsBits
      } = swcadJs.components;
      const modelDefaults = () => {
        const defaultValues = {
          constants: {},
          opts: {},
          dims: {
            size: [
              math.inchesToMm(3),
              math.inchesToMm(6),
              math.inchesToMm(2)
            ],
            height: math.inchesToMm(2),
            radius: [math.inchesToMm(1.5), math.inchesToMm(3)]
          },
          points: {},
          components: {},
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
        const defaultOpts = {
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
          bottomBitOpts = defaults.opts.bottomBitOpts
        } = opts;
        const initOpts = {
          size,
          topBit,
          topBitOpts,
          bottomBit,
          bottomBitOpts
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
          bottomBitOpts = defaults.opts.bottomBitOpts
        } = opts;
        const initOpts = {
          height,
          radius,
          topBit,
          topBitOpts,
          bottomBit,
          bottomBitOpts
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
          bottomBitOpts
        } = opts;
        const modelConstants = defaults.vals.constants;
        const modelOpts = {
          topBit,
          bottomBit
        };
        const modelDims = {
          size,
          height,
          radius,
          topBit: topBitOpts,
          bottomBit: bottomBitOpts
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
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
      const { translate } = jscad.transforms;
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
        const eText = union(lineSegments);
        return position.ctr(eText);
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

// packages/swcad-js-components/src/reinforcements/reinforced-joist-line.js
var require_reinforced_joist_line = __commonJS({
  "packages/swcad-js-components/src/reinforcements/reinforced-joist-line.js"(exports2, module2) {
    "use strict";
    var reinforcedJoistLineInit = ({ jscad, swcadJs }) => {
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
        geometry
      } = swcadJs.calcs;
      const {
        reinforcements
      } = swcadJs.components;
      const reinforcedJoistLineDefaults = () => {
        const defaultValues = {
          constants: {
            interfaceThickness: standards.INTERFACE_THICKNESS
          },
          opts: {
            reinforcementLevel: 1
          },
          dims: {
            width: math.inchesToMm(1.125),
            unitLength: math.inchesToMm(1),
            endOffset: 0
          },
          points: {
            startPt: [0, 0],
            endPt: [math.inchesToMm(3), math.inchesToMm(4)]
          },
          components: {},
          types: {}
        };
        const defaultOpts = {
          startPt: defaultValues.points.startPt,
          endPt: defaultValues.points.endPt,
          width: defaultValues.dims.width,
          endOffset: defaultValues.dims.endOffset,
          unitLength: defaultValues.dims.unitLength,
          reinforcementLevel: defaultValues.opts.reinforcementLevel,
          interfaceThickness: defaultValues.constants.interfaceThickness
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const reinforcedJoistLineOpts = (opts) => {
        const defaults = reinforcedJoistLineDefaults();
        console.log("reinforcedJoistLineOpts() -- opts", opts);
        const {
          startPt = defaults.opts.startPt,
          endPt = defaults.opts.endPt,
          width = defaults.opts.width,
          endOffset = defaults.opts.endOffset,
          unitLength = defaults.opts.unitLength,
          reinforcementLevel = defaults.opts.reinforcementLevel,
          interfaceThickness = defaults.opts.interfaceThickness
        } = opts;
        const initOpts = {
          startPt,
          endPt,
          width,
          endOffset,
          unitLength,
          reinforcementLevel,
          interfaceThickness
        };
        console.log("reinforcedJoistLineOpts() -- initOpts", initOpts);
        return initOpts;
      };
      const reinforcedJoistLineProps = (opts) => {
        const defaults = reinforcedJoistLineDefaults();
        console.log("reinforcedJoistLineProps() -- prop opts", opts);
        const {
          startPt,
          endPt,
          width,
          endOffset,
          unitLength,
          reinforcementLevel,
          interfaceThickness
        } = opts;
        const lineComponentDetails = geometry.lines.lineComponentDetails({
          startPt,
          endPt,
          endOffset
        });
        const {
          midPt,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        } = lineComponentDetails;
        const modelConstants = defaults.vals.constants;
        const modelOpts = {
          reinforcementLevel
        };
        const modelDims = {
          width,
          endOffset,
          unitLength,
          interfaceThickness,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        };
        const modelPoints = {
          startPt,
          endPt,
          midPt
        };
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        console.log("reinforcedJoistLineProps() -- modelProperties", modelProperties);
        return modelProperties;
      };
      const reinfJoist = (modelProps) => {
        const {
          reinforcementLevel
        } = modelProps.opts;
        const {
          width,
          endOffset,
          unitLength,
          interfaceThickness,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        } = modelProps.dims;
        const {
          startPt,
          endPt,
          midPt
        } = modelProps.points;
        const rJoistOpts = {
          length: offsetLineLength,
          width,
          unitLength,
          reinforcementLevel,
          interfaceThickness
        };
        const rJoist = reinforcements.reinforcedJoist(rJoistOpts)[0];
        return rJoist;
      };
      const reinforcedJoistLine = (opts) => {
        const defaults = reinforcedJoistLineDefaults();
        const initOpts = reinforcedJoistLineOpts(opts);
        const modelProperties = reinforcedJoistLineProps(initOpts);
        const {
          width,
          endOffset,
          unitLength,
          interfaceThickness,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        } = modelProperties.dims;
        const {
          startPt,
          endPt,
          midPt
        } = modelProperties.points;
        const reinforcedJoist = reinfJoist(modelProperties);
        let adjJoist = rotate([0, 0, lineComponentAngle], reinforcedJoist);
        adjJoist = translate(midPt, adjJoist);
        let mainModel = adjJoist;
        let modelParts = {
          reinforcedJoist
        };
        return [mainModel, modelParts, modelProperties];
      };
      return reinforcedJoistLine;
    };
    module2.exports = {
      init: reinforcedJoistLineInit
    };
  }
});

// packages/swcad-js-components/src/reinforcements/brackets.js
var require_brackets = __commonJS({
  "packages/swcad-js-components/src/reinforcements/brackets.js"(exports2, module2) {
    "use strict";
    var bracketsInit = ({ jscad, swcadJs }) => {
      const {
        cuboid
      } = jscad.primitives;
      const {
        align,
        rotate,
        translate
      } = jscad.transforms;
      const {
        union
      } = jscad.booleans;
      const {
        measureBoundingBox
      } = jscad.measurements;
      const { TAU } = jscad.maths.constants;
      const {
        standards
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        reinforcements
      } = swcadJs.components;
      const bracketsDefaults = () => {
        const defaultValues = {
          constants: {},
          opts: {
            numReinforcements: 4
          },
          dims: {
            size: [
              math.inchesToMm(1.5),
              math.inchesToMm(0.5),
              math.inchesToMm(0.75)
            ]
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
          interfaceThickness: standards.INTERFACE_THICKNESS,
          size: defaultValues.dims.size,
          numReinforcements: defaultValues.opts.numReinforcements
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const bracketsOpts = (opts) => {
        const defaults = bracketsDefaults();
        const {
          size = defaults.opts.size,
          numReinforcements = defaults.opts.numReinforcements,
          interfaceThickness = defaults.opts.interfaceThickness
        } = opts;
        const initOpts = {
          size,
          numReinforcements,
          interfaceThickness
        };
        return initOpts;
      };
      const bracketsProps = (opts) => {
        const defaults = bracketsDefaults();
        const {
          size,
          numReinforcements,
          interfaceThickness
        } = opts;
        const length = size[0];
        const width = size[1];
        const height = size[2];
        const modelConstants = defaults.vals.constants;
        const modelOpts = {
          numReinforcements
        };
        const modelDims = {
          size,
          length,
          width,
          height,
          interfaceThickness
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const rightAngleBracket = (opts) => {
        const initOpts = bracketsOpts(opts);
        const modelProperties = bracketsProps(initOpts);
        const {
          numReinforcements
        } = modelProperties.opts;
        const {
          size,
          length,
          width,
          height,
          interfaceThickness
        } = modelProperties.dims;
        let bracketReinf = reinforcements.boxSupport.boxSupportQuarter({
          size: [height, width]
        })[0];
        bracketReinf = position.ctrMin(rotate([0, TAU / -4, 0], bracketReinf));
        const reinforcementsPtsLength = length - interfaceThickness;
        const reinforcementsSpacing = reinforcementsPtsLength / (numReinforcements - 1);
        const bracketReinforcements = [];
        for (let bReinfIdx = 0; bReinfIdx < numReinforcements; bReinfIdx++) {
          const currentOffset = [reinforcementsSpacing * bReinfIdx, 0, 0];
          bracketReinforcements.push(translate(
            currentOffset,
            bracketReinf
          ));
        }
        const bracketReinforcementsAssembly = union(
          ...bracketReinforcements
        );
        const sidePanel = cuboid({ size: [length, interfaceThickness, height] });
        const basePanel = cuboid({ size: [length, width, interfaceThickness] });
        const bracketBodyBase = union(
          align({ modes: ["center", "min", "min"] }, sidePanel),
          align({ modes: ["center", "min", "min"] }, basePanel)
        );
        const rightAngleBracketAssembly = union(
          bracketBodyBase,
          align({ modes: ["center", "min", "min"] }, bracketReinforcementsAssembly)
        );
        const mainModel = position.ctr(rightAngleBracketAssembly);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const rightAngleCornerBracket = (opts) => {
        const initOpts = bracketsOpts(opts);
        const modelProperties = bracketsProps(initOpts);
        const {
          numReinforcements
        } = modelProperties.opts;
        const {
          size,
          length,
          width,
          height,
          interfaceThickness
        } = modelProperties.dims;
        const sidePanelX = cuboid({ size: [length, interfaceThickness, height] });
        const sidePanelY = cuboid({ size: [interfaceThickness, width, height] });
        const basePanel = cuboid({ size: [length, width, interfaceThickness] });
        const cornerBracketBodyBase = union(
          align({ modes: ["min", "min", "min"] }, sidePanelX),
          align({ modes: ["min", "min", "min"] }, sidePanelY),
          align({ modes: ["min", "min", "min"] }, basePanel)
        );
        let numReinfs = numReinforcements;
        if (typeof jointNumConnectors == "number") {
          numReinfs = [
            numReinforcements,
            numReinforcements
          ];
        }
        let bracketReinfX = reinforcements.boxSupport.boxSupportQuarter({
          size: [height, width / 2]
        })[0];
        bracketReinfX = position.ctrMin(rotate([0, TAU / -4, 0], bracketReinfX));
        const reinforcementsPtsLengthX = length - interfaceThickness;
        const reinforcementsSpacingX = reinforcementsPtsLengthX / numReinfs[0];
        const bracketReinforcementsX = [];
        for (let bReinfXIdx = 0; bReinfXIdx < numReinfs[0]; bReinfXIdx++) {
          const currentOffset = [reinforcementsSpacingX * bReinfXIdx, 0, 0];
          bracketReinforcementsX.push(translate(
            currentOffset,
            bracketReinfX
          ));
        }
        const bracketReinforcementsXAssembly = union(
          ...bracketReinforcementsX
        );
        let bracketReinfY = reinforcements.boxSupport.boxSupportQuarter({
          size: [height, length / 2]
        })[0];
        bracketReinfY = position.ctrMin(rotate([0, TAU / -4, TAU / -4], bracketReinfY));
        const reinforcementsPtsLengthY = width - interfaceThickness;
        const reinforcementsSpacingY = reinforcementsPtsLengthY / numReinfs[1];
        const bracketReinforcementsY = [];
        for (let bReinfYIdx = 0; bReinfYIdx < numReinfs[1]; bReinfYIdx++) {
          const currentOffset = [0, reinforcementsSpacingY * bReinfYIdx, 0];
          bracketReinforcementsY.push(translate(
            currentOffset,
            bracketReinfY
          ));
        }
        const bracketReinforcementsYAssembly = union(
          ...bracketReinforcementsY
        );
        const cornerBracketBodyBaseBbox = measureBoundingBox(cornerBracketBodyBase);
        const xAssemblyPt = [cornerBracketBodyBaseBbox[1][0], 0, 0];
        const yAssemblyPt = [0, cornerBracketBodyBaseBbox[1][1], 0];
        const cornerBracketAssembly = union(
          cornerBracketBodyBase,
          align({
            modes: ["max", "min", "min"],
            relativeTo: xAssemblyPt
          }, bracketReinforcementsXAssembly),
          align({
            modes: ["min", "max", "min"],
            relativeTo: yAssemblyPt
          }, bracketReinforcementsYAssembly)
        );
        const mainModel = position.ctr(cornerBracketAssembly);
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: bracketsDefaults,
        props: bracketsProps,
        rightAngleBracket,
        rightAngleCornerBracket
      };
    };
    module2.exports = {
      init: bracketsInit
    };
  }
});

// packages/swcad-js-components/src/reinforcements/reinforced-length.js
var require_reinforced_length = __commonJS({
  "packages/swcad-js-components/src/reinforcements/reinforced-length.js"(exports2, module2) {
    "use strict";
    var reinforcedLengthInit = ({ jscad, swcadJs }) => {
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
        standards
      } = swcadJs.data;
      const {
        math,
        position
      } = swcadJs.calcs;
      const {
        reinforcements
      } = swcadJs.components;
      const reinforcedLengthDefaults = () => {
        const defInterfaceThickness = standards.INTERFACE_THICKNESS;
        const defFitGap = standards.FIT_GAP;
        const defaultValues = {
          constants: {},
          opts: {},
          dims: {
            size: [
              math.inchesToMm(3.5),
              math.inchesToMm(5 / 16),
              math.inchesToMm(1 / 8)
            ],
            unitLength: math.inchesToMm(1),
            baseThickness: defInterfaceThickness,
            reinforcementThickness: 1.125
          },
          points: {},
          components: {}
        };
        const defaultOpts = {
          size: defaultValues.dims.size,
          unitLength: defaultValues.dims.unitLength,
          baseThickness: defaultValues.dims.baseThickness,
          reinforcementThickness: defaultValues.dims.reinforcementThickness
        };
        return {
          vals: defaultValues,
          opts: defaultOpts
        };
      };
      const reinforcedLengthOpts = (opts) => {
        const defaults = reinforcedLengthDefaults();
        const {
          size = defaults.opts.size,
          unitLength = defaults.opts.unitLength,
          baseThickness = defaults.opts.baseThickness,
          reinforcementThickness = defaults.opts.reinforcementThickness
        } = opts;
        const initOpts = {
          size,
          unitLength,
          baseThickness,
          reinforcementThickness
        };
        return initOpts;
      };
      const reinforcedLengthProps = (opts) => {
        const defaults = reinforcedLengthDefaults();
        const {
          size,
          unitLength,
          baseThickness,
          reinforcementThickness
        } = opts;
        const length = size[0];
        const width = size[1];
        const height = size[2];
        const modelConstants = defaults.vals.constants;
        const modelOpts = defaults.vals.opts;
        const modelDims = {
          size,
          unitLength,
          baseThickness,
          reinforcementThickness,
          length,
          width,
          height
        };
        const modelPoints = defaults.vals.points;
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        return modelProperties;
      };
      const reinforcementUnitBase = (opts) => {
        const {
          length,
          width,
          baseThickness
        } = opts;
        return cuboid({ size: [length, width, baseThickness] });
      };
      const lightLengthReinforcement = (opts) => {
        const {
          length,
          reinforcementThickness,
          spineHeight
        } = opts;
        const spine = cuboid({ size: [length, reinforcementThickness, spineHeight] });
        return spine;
      };
      const mediumLengthReinforcement = (opts) => {
        const {
          length,
          width,
          reinforcementThickness,
          spineHeight
        } = opts;
        const spine = cuboid({ size: [length, reinforcementThickness, spineHeight] });
        const spacing = width / 3;
        const spines = [
          translate([0, spacing / 2 + reinforcementThickness / 2, 0], spine),
          translate([0, spacing / -2 - reinforcementThickness / 2, 0], spine)
        ];
        return union(spines);
      };
      const heavyLengthReinforcement = (opts) => {
        const {
          length,
          width,
          thickness,
          reinforcementThickness
        } = opts;
        return reinforcements.reinforcedRectPanel({
          size: [length, width, thickness],
          reinforcementPattern: "x",
          reinforcementThickness: [reinforcementThickness, reinforcementThickness, reinforcementThickness]
        })[0];
      };
      const lightReinforcedLengthUnit = (opts) => {
        const {
          size,
          baseThickness,
          reinforcementThickness
        } = opts;
        const lightReinfUnitBase = reinforcementUnitBase({
          length: size[0],
          width: size[1],
          baseThickness
        });
        const lightReinfUnitReinforcement = lightLengthReinforcement({
          length: size[0],
          reinforcementThickness,
          spineHeight: size[2]
        });
        const endPiece = cuboid({
          size: [
            reinforcementThickness,
            size[1],
            size[2]
          ]
        });
        const endPiece1 = align(
          {
            modes: ["min", "center", "min"],
            relativeTo: [size[0] / -2, 0, 0]
          },
          endPiece
        );
        const endPiece2 = align(
          {
            modes: ["max", "center", "min"],
            relativeTo: [size[0] / 2, 0, 0]
          },
          endPiece
        );
        const lightReinfUnitAssembly = union(
          position.ctrMin(lightReinfUnitBase),
          position.ctrMin(lightReinfUnitReinforcement),
          endPiece1,
          endPiece2
        );
        return position.ctr(lightReinfUnitAssembly);
      };
      const mediumReinforcedLengthUnit = (opts) => {
        const {
          size,
          baseThickness,
          reinforcementThickness
        } = opts;
        const mediumReinfUnitBase = reinforcementUnitBase({
          length: size[0],
          width: size[1],
          baseThickness
        });
        const mediumReinfUnitReinforcement = mediumLengthReinforcement({
          length: size[0],
          width: size[1],
          reinforcementThickness,
          spineHeight: size[2]
        });
        const endPiece = cuboid({
          size: [
            reinforcementThickness,
            size[1],
            size[2]
          ]
        });
        const endPiece1 = align(
          {
            modes: ["min", "center", "min"],
            relativeTo: [size[0] / -2, 0, 0]
          },
          endPiece
        );
        const endPiece2 = align(
          {
            modes: ["max", "center", "min"],
            relativeTo: [size[0] / 2, 0, 0]
          },
          endPiece
        );
        const mediumReinfUnitAssembly = union(
          position.ctrMin(mediumReinfUnitBase),
          position.ctrMin(mediumReinfUnitReinforcement),
          endPiece1,
          endPiece2
        );
        return position.ctr(mediumReinfUnitAssembly);
      };
      const heavyReinforcedLengthUnit = (opts) => {
        const {
          size,
          baseThickness,
          reinforcementThickness
        } = opts;
        const reinfUnitBase = reinforcementUnitBase({
          length: size[0],
          width: size[1],
          baseThickness
        });
        const reinfUnitReinforcement = heavyLengthReinforcement({
          length: size[0],
          width: size[1],
          thickness: size[2],
          reinforcementThickness
        });
        const reinfUnitAssembly = union(
          position.ctrMin(reinfUnitBase),
          position.ctrMin(reinfUnitReinforcement)
        );
        return position.ctr(reinfUnitAssembly);
      };
      const outputKeepBox = (opts) => {
        const { size } = opts;
        return cuboid({
          size: [
            size[0],
            size[1] * 1.5,
            size[2] * 1.5
          ]
        });
      };
      const lightReinforcedLength = (opts) => {
        const initOpts = reinforcedLengthOpts(opts);
        const modelProperties = reinforcedLengthProps(initOpts);
        const {
          size,
          unitLength,
          baseThickness,
          reinforcementThickness
        } = modelProperties.dims;
        const lightLengthUnitBase = lightReinforcedLengthUnit({
          size: [unitLength, size[1], size[2]],
          baseThickness,
          reinforcementThickness
        });
        const numUnits = Math.ceil(size[0] / unitLength) + 1;
        const lengthOffset = unitLength - reinforcementThickness;
        let lightReinfLengthAssembly = lightLengthUnitBase;
        for (let assemblyIdx = 1; assemblyIdx < numUnits; assemblyIdx++) {
          const currentOffset = assemblyIdx * lengthOffset;
          lightReinfLengthAssembly = union(
            lightReinfLengthAssembly,
            translate(
              [currentOffset, 0, 0],
              lightLengthUnitBase
            )
          );
        }
        const lightReinfLength = intersect(
          position.ctr(lightReinfLengthAssembly),
          outputKeepBox({ size })
        );
        const endPiece = cuboid({
          size: [
            reinforcementThickness,
            size[1],
            size[2]
          ]
        });
        const endPiece1 = align(
          {
            modes: ["min", "center", "center"],
            relativeTo: [size[0] / -2, 0, 0]
          },
          endPiece
        );
        const endPiece2 = align(
          {
            modes: ["max", "center", "center"],
            relativeTo: [size[0] / 2, 0, 0]
          },
          endPiece
        );
        const mainModel = union(lightReinfLength, endPiece1, endPiece2);
        const modelParts = {
          mainModel,
          unit: lightLengthUnitBase
        };
        return [mainModel, modelParts, modelProperties];
      };
      const mediumReinforcedLength = (opts) => {
        const initOpts = reinforcedLengthOpts(opts);
        const modelProperties = reinforcedLengthProps(initOpts);
        const {
          size,
          unitLength,
          baseThickness,
          reinforcementThickness
        } = modelProperties.dims;
        const mediumLengthUnitBase = mediumReinforcedLengthUnit({
          size: [unitLength, size[1], size[2]],
          baseThickness,
          reinforcementThickness
        });
        const numUnits = Math.ceil(size[0] / unitLength) + 1;
        const lengthOffset = unitLength - reinforcementThickness;
        let mediumReinfLengthAssembly = mediumLengthUnitBase;
        for (let assemblyIdx = 1; assemblyIdx < numUnits; assemblyIdx++) {
          const currentOffset = assemblyIdx * lengthOffset;
          mediumReinfLengthAssembly = union(
            mediumReinfLengthAssembly,
            translate(
              [currentOffset, 0, 0],
              mediumLengthUnitBase
            )
          );
        }
        const mediumReinfLength = intersect(
          position.ctr(mediumReinfLengthAssembly),
          outputKeepBox({ size })
        );
        const endPiece = cuboid({
          size: [
            reinforcementThickness,
            size[1],
            size[2]
          ]
        });
        const endPiece1 = align(
          {
            modes: ["min", "center", "center"],
            relativeTo: [size[0] / -2, 0, 0]
          },
          endPiece
        );
        const endPiece2 = align(
          {
            modes: ["max", "center", "center"],
            relativeTo: [size[0] / 2, 0, 0]
          },
          endPiece
        );
        const mainModel = union(mediumReinfLength, endPiece1, endPiece2);
        const modelParts = {
          mainModel,
          unit: mediumLengthUnitBase
        };
        return [mainModel, modelParts, modelProperties];
      };
      const heavyReinforcedLength = (opts) => {
        const initOpts = reinforcedLengthOpts(opts);
        const modelProperties = reinforcedLengthProps(initOpts);
        const {
          size,
          unitLength,
          baseThickness,
          reinforcementThickness
        } = modelProperties.dims;
        const heavyLengthUnitBase = heavyReinforcedLengthUnit({
          size: [unitLength, size[1], size[2]],
          baseThickness,
          reinforcementThickness
        });
        const numUnits = Math.ceil(size[0] / unitLength) + 1;
        const lengthOffset = unitLength - reinforcementThickness;
        let heavyReinfLengthAssembly = heavyLengthUnitBase;
        for (let assemblyIdx = 1; assemblyIdx < numUnits; assemblyIdx++) {
          const currentOffset = assemblyIdx * lengthOffset;
          heavyReinfLengthAssembly = union(
            heavyReinfLengthAssembly,
            translate(
              [currentOffset, 0, 0],
              heavyLengthUnitBase
            )
          );
        }
        const heavyReinfLength = intersect(
          position.ctr(heavyReinfLengthAssembly),
          outputKeepBox({ size })
        );
        const endPiece = cuboid({
          size: [
            reinforcementThickness,
            size[1],
            size[2]
          ]
        });
        const endPiece1 = align(
          {
            modes: ["min", "center", "center"],
            relativeTo: [size[0] / -2, 0, 0]
          },
          endPiece
        );
        const endPiece2 = align(
          {
            modes: ["max", "center", "center"],
            relativeTo: [size[0] / 2, 0, 0]
          },
          endPiece
        );
        const mainModel = union(heavyReinfLength, endPiece1, endPiece2);
        const modelParts = {
          mainModel,
          unit: heavyLengthUnitBase
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: reinforcedLengthDefaults,
        props: reinforcedLengthProps,
        lightReinforcedLength,
        mediumReinforcedLength,
        heavyReinforcedLength
      };
    };
    module2.exports = {
      init: reinforcedLengthInit
    };
  }
});

// packages/swcad-js-components/src/reinforcements/reinforced-line.js
var require_reinforced_line = __commonJS({
  "packages/swcad-js-components/src/reinforcements/reinforced-line.js"(exports2, module2) {
    "use strict";
    var reinforcedLineInit = ({ jscad, swcadJs }) => {
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
        geometry
      } = swcadJs.calcs;
      const {
        reinforcements
      } = swcadJs.components;
      const reinforcedLineDefaults = () => {
        const defInterfaceThickness = standards.INTERFACE_THICKNESS;
        const defaultValues = {
          constants: {
            interfaceThickness: defInterfaceThickness
          },
          opts: {},
          dims: {
            width: math.inchesToMm(5 / 16),
            height: math.inchesToMm(1 / 8),
            unitLength: math.inchesToMm(1),
            endOffset: 0,
            baseThickness: defInterfaceThickness,
            reinforcementThickness: 1.125
          },
          points: {
            startPt: [0, 0],
            endPt: [math.inchesToMm(3), math.inchesToMm(4)]
          },
          components: {},
          types: {}
        };
        const defaultOpts = {
          startPt: defaultValues.points.startPt,
          endPt: defaultValues.points.endPt,
          width: defaultValues.dims.width,
          height: defaultValues.dims.height,
          endOffset: defaultValues.dims.endOffset,
          unitLength: defaultValues.dims.unitLength,
          baseThickness: defaultValues.dims.baseThickness,
          reinforcementThickness: defaultValues.dims.reinforcementThickness
        };
        return {
          opts: defaultOpts,
          vals: defaultValues
        };
      };
      const reinforcedLineOpts = (opts) => {
        const defaults = reinforcedLineDefaults();
        console.log("reinforcedLineOpts() -- opts", opts);
        const {
          startPt = defaults.opts.startPt,
          endPt = defaults.opts.endPt,
          width = defaults.opts.width,
          height = defaults.opts.height,
          endOffset = defaults.opts.endOffset,
          unitLength = defaults.opts.unitLength,
          baseThickness = defaults.opts.baseThickness,
          reinforcementThickness = defaults.opts.reinforcementThickness
        } = opts;
        const initOpts = {
          startPt,
          endPt,
          width,
          height,
          endOffset,
          unitLength,
          baseThickness,
          reinforcementThickness
        };
        console.log("reinforcedLineOpts() -- initOpts", initOpts);
        return initOpts;
      };
      const reinforcedLineProps = (opts) => {
        const defaults = reinforcedLineDefaults();
        console.log("reinforcedLineProps() -- prop opts", opts);
        const {
          startPt,
          endPt,
          width,
          height,
          endOffset,
          unitLength,
          baseThickness,
          reinforcementThickness
        } = opts;
        const lineComponentDetails = geometry.lines.lineComponentDetails({
          startPt,
          endPt,
          endOffset
        });
        const {
          midPt,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        } = lineComponentDetails;
        const modelConstants = defaults.vals.constants;
        const modelOpts = defaults.vals.opts;
        const modelDims = {
          width,
          height,
          endOffset,
          unitLength,
          baseThickness,
          reinforcementThickness,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        };
        const modelPoints = {
          startPt,
          endPt,
          midPt
        };
        const modelComponents = defaults.vals.components;
        const modelProperties = {
          constants: modelConstants,
          opts: modelOpts,
          dims: modelDims,
          points: modelPoints,
          components: modelComponents
        };
        console.log("reinforcedLineProps() -- modelProperties", modelProperties);
        return modelProperties;
      };
      const lightReinforcedLine = (opts) => {
        const defaults = reinforcedLineDefaults();
        const initOpts = reinforcedLineOpts(opts);
        const modelProperties = reinforcedLineProps(initOpts);
        const {
          width,
          height,
          endOffset,
          unitLength,
          baseThickness,
          reinforcementThickness,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        } = modelProperties.dims;
        const {
          startPt,
          endPt,
          midPt
        } = modelProperties.points;
        const rOpts = {
          size: [
            offsetLineLength,
            width,
            height
          ],
          unitLength,
          baseThickness,
          reinforcementThickness
        };
        const lightReinfLength = reinforcements.reinforcedLength.lightReinforcedLength(rOpts)[0];
        let adjLightReinfLength = rotate([0, 0, lineComponentAngle], lightReinfLength);
        adjLightReinfLength = translate(midPt, adjLightReinfLength);
        const mainModel = adjLightReinfLength;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const mediumReinforcedLine = (opts) => {
        const defaults = reinforcedLineDefaults();
        const initOpts = reinforcedLineOpts(opts);
        const modelProperties = reinforcedLineProps(initOpts);
        const {
          width,
          height,
          endOffset,
          unitLength,
          baseThickness,
          reinforcementThickness,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        } = modelProperties.dims;
        const {
          startPt,
          endPt,
          midPt
        } = modelProperties.points;
        const rOpts = {
          size: [
            offsetLineLength,
            width,
            height
          ],
          unitLength,
          baseThickness,
          reinforcementThickness
        };
        const mediumReinfLength = reinforcements.reinforcedLength.mediumReinforcedLength(rOpts)[0];
        let adjMediumReinfLength = rotate([0, 0, lineComponentAngle], mediumReinfLength);
        adjMediumReinfLength = translate(midPt, adjMediumReinfLength);
        const mainModel = adjMediumReinfLength;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      const heavyReinforcedLine = (opts) => {
        const defaults = reinforcedLineDefaults();
        const initOpts = reinforcedLineOpts(opts);
        const modelProperties = reinforcedLineProps(initOpts);
        const {
          width,
          height,
          endOffset,
          unitLength,
          baseThickness,
          reinforcementThickness,
          lineLength,
          offsetLineLength,
          lineComponentAngle
        } = modelProperties.dims;
        const {
          startPt,
          endPt,
          midPt
        } = modelProperties.points;
        const rOpts = {
          size: [
            offsetLineLength,
            width,
            height
          ],
          unitLength,
          baseThickness,
          reinforcementThickness
        };
        const heavyReinfLength = reinforcements.reinforcedLength.heavyReinforcedLength(rOpts)[0];
        let adjHeavyReinfLength = rotate([0, 0, lineComponentAngle], heavyReinfLength);
        adjHeavyReinfLength = translate(midPt, adjHeavyReinfLength);
        const mainModel = adjHeavyReinfLength;
        const modelParts = {
          mainModel
        };
        return [mainModel, modelParts, modelProperties];
      };
      return {
        defaults: reinforcedLineDefaults,
        props: reinforcedLineProps,
        lightReinforcedLine,
        mediumReinforcedLine,
        heavyReinforcedLine
      };
    };
    module2.exports = {
      init: reinforcedLineInit
    };
  }
});

// packages/swcad-js-components/src/index.js
var require_src4 = __commonJS({
  "packages/swcad-js-components/src/index.js"(exports2, module2) {
    "use strict";
    var beadsBitsModule = require_beads_bits2();
    var componentLineModule = require_component_line();
    var fittingsModule = require_fittings();
    var meshModule = require_mesh2();
    var reinforcementsModule = require_reinforcements2();
    var routedShapesModule = require_routed_shapes();
    var textModule = require_text2();
    var reinforcedJoistLineModule = require_reinforced_joist_line();
    var reinforcementBracketsModule = require_brackets();
    var reinforcedLengthModule = require_reinforced_length();
    var reinforcedLineModule = require_reinforced_line();
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
      const initReinforcements = reinforcementsModule.init({ jscad, swcadJs: preLib });
      preLib.components = {
        beadsBits,
        routedShapes,
        mesh,
        componentLine,
        reinforcements: initReinforcements
      };
      const setupReinforcements = {
        ...initReinforcements,
        reinforcedJoistLine: reinforcedJoistLineModule.init({ jscad, swcadJs: preLib }),
        brackets: reinforcementBracketsModule.init({ jscad, swcadJs: preLib }),
        reinforcedLength: reinforcedLengthModule.init({ jscad, swcadJs: preLib })
      };
      preLib.components.reinforcements = setupReinforcements;
      const finalReinforcements = {
        ...setupReinforcements,
        reinforcedLine: reinforcedLineModule.init({ jscad, swcadJs: preLib })
      };
      const components = {
        beadsBits,
        routedShapes,
        mesh,
        componentLine,
        fittings: fittingsModule.init({ jscad, swcadJs: preLib }),
        reinforcements: finalReinforcements,
        text: textModule.init({ jscad, swcadJs: preLib })
      };
      return components;
    };
    module2.exports = {
      init: componentsInit
    };
  }
});

// packages/swcad-js-core/src/index.js
var require_src5 = __commonJS({
  "packages/swcad-js-core/src/index.js"(exports2, module2) {
    "use strict";
    var coreInit = ({ jscad }) => {
      const swcadJsCore = {
        data: require_src().init({ jscad }),
        calcs: null,
        profiles: null,
        components: null
      };
      let swcadJsAssembly = swcadJsCore;
      const assemblyCalcs = require_src2().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.calcs = assemblyCalcs;
      const assemblyProfiles = require_src3().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.profiles = assemblyProfiles;
      const assemblyComponents = require_src4().init({ jscad, swcadJs: swcadJsAssembly });
      swcadJsAssembly.components = assemblyComponents;
      const swcadJs = {
        data: swcadJsAssembly.data,
        calcs: swcadJsAssembly.calcs,
        profiles: swcadJsAssembly.profiles,
        components: swcadJsAssembly.components
      };
      return swcadJs;
    };
    module2.exports = {
      init: coreInit
    };
  }
});

// src/index.js
var coreModule = require_src5();
var init = ({ jscad }) => {
  const swcadJs = coreModule.init({ jscad });
  return swcadJs;
};
module.exports = { init };
