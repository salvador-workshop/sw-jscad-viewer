"use strict"

const mouldBuilder = ({ lib, swLib }) => {
  const { measureBoundingBox } = lib.measurements
  const { extrudeLinear, extrudeRotate } = lib.extrusions
  const { union, intersect } = lib.booleans
  const { rotate, align, translate, mirror } = lib.transforms
  const { cuboid, cylinder } = lib.primitives

  /**
   * Builds a cuboid with given 2D profile placed on one edge.
   * @param {Object} opts
   * @param {number[]} opts.size - size (x, y, z)
   * @param {geom2.Geom2} opts.geomProfile - 2D positive cross-section profile
   * @param {string} opts.alignment - where to align when profile size differs from
   *     base cuboid ('top' | 'middle' | 'bottom'). Defaults to 'middle'
   */
  const cuboidOneEdge = (opts) => {
    const profileBbox = measureBoundingBox(opts.geomProfile);
    const profileSize = [profileBbox[1][0] - profileBbox[0][0], profileBbox[1][1] - profileBbox[0][1]];

    const baseBlock = cuboid({ size: [opts.size[0] - profileSize[0], opts.size[1], opts.size[2]] });
    const edgeBlock = rotate([Math.PI / 2, 0, 0], extrudeLinear({ height: opts.size[1] }, opts.geomProfile));
    const baseBlockBbox = measureBoundingBox(baseBlock);
    const alignedEdgeBlock = align({ modes: ['min', 'max', 'none'], relativeTo: baseBlockBbox[1] }, edgeBlock);

    return align({ modes: ['center', 'center', 'none'] }, union(baseBlock, alignedEdgeBlock));
  }

  return {
    cuboidOneEdge,
    /**
     * Positive moulding for a cuboid with the given 2D profile placed onto all the side edges.
     * @param {Object} opts
     * @param {number[]} opts.size - size (x, y, z)
     * @param {geom2.Geom2} opts.geomProfile - 2D positive cross-section profile
     */
    cuboidEdge: (opts) => {
      // // X axis
      const xHalfSize = [opts.size[0] / 2, opts.size[1], opts.size[2]];
      const xHalfBlock = align({ modes: ['min', 'center', 'none'] }, cuboidOneEdge({ size: xHalfSize, geomProfile: opts.geomProfile }));
      const xBlock = union(xHalfBlock, mirror({ normal: [1, 0, 0] }, xHalfBlock));

      // // Y axis
      const yHalfSize = [opts.size[1] / 2, opts.size[0], opts.size[2]];
      const yHalfBlock = rotate([0, 0, Math.PI / -2], cuboidOneEdge({ size: yHalfSize, geomProfile: opts.geomProfile }));
      const yHalfBlockAdj = align({ modes: ['center', 'max', 'none'] }, yHalfBlock);
      const yBlock = union(yHalfBlockAdj, mirror({ normal: [0, 1, 0] }, yHalfBlockAdj));

      // return [
      //   // xBlock,
      //   // yHalfBlock,
      //   // yHalfBlockAdj,
      //   yBlock,
      // ];

      return intersect(xBlock, yBlock);
    },
    /**
     * Positive moulding for a cylinder with the given 2D profile placed onto the edge.
     * @param {Object} opts
     * @param {number} opts.radius - Cylinder radius.
     * @param {number} opts.height - Cylinder height.
     * @param {number} opts.segments - Cylinder height.
     * @param {geom2.Geom2} opts.geomProfile - 2D positive cross-section profile
     */
    circularEdge: (opts) => {
      const profileBbox = measureBoundingBox(opts.geomProfile);
      const profileSize = [profileBbox[1][0] - profileBbox[0][0], profileBbox[1][1] - profileBbox[0][1]];
      const baseCylRad = opts.radius - profileSize[0];
      // cylinder expanded by a tiny amount to ensure no gaps
      const baseCyl = cylinder({ radius: baseCylRad + 0.05, height: opts.height });

      const adjProfile = translate([baseCylRad + profileSize[0] / 2], opts.geomProfile);
      const edgeMoulding = extrudeRotate({ segments: opts.segments || 48 }, adjProfile);

      return union(baseCyl, edgeMoulding);
    },
    /**
     * Negative mould for a rectangular sunken panel, to be placed on a wall/ceiling surface
     * @param {Object} opts
     * @param {number[]} opts.edge - size (x, y)
     * @param {geom2.Geom2} opts.geomProfile - 2D positive cross-section profile for edge
     */
    sunkenPanelRect: (opts) => {
      return null;
    },
    /**
     * Negative mould for a circular sunken panel, to be placed on a wall/ceiling surface
     * @param {Object} opts
     * @param {number} opts.radius - panel radius
     * @param {geom2.Geom2} opts.geomProfile - 2D positive cross-section profile for edge
     */
    sunkenPanelCirc: (opts) => {
      return null;
    },
  }
}

/**
 * Builds positive mouldings and negative moulds for various ornaments.
 * These would then be subtracted from a shape to produce the final result.
 * Input 2D profiles must be centred at (0, 0, 0)
 * @module mouldBuilder
 * @version 1.0.0
 */
module.exports = { init: mouldBuilder }
