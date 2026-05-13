/**
 * A coordinate on a flat surface.
 */
export interface IPoint {
    /**
     * Horizontal coordinate.
     */
    x: number;
    /**
     * Vertical coordinate.
     */
    y: number;
}
/**
 * Returns true if the given point conforms to the {@link IPoint} interface.
 * @param dot
 * @returns
 */
export declare function IPoint_instanceOf(dot: any): dot is IPoint;
/**
 *
 * @param dot
 * @returns
 */
export declare function IPoint_clone(dot: IPoint): IPoint;
/**
 * A boundary on a flat surface based on a centre point and a radius.
 */
export interface IRadial extends IPoint {
    /**
     * Radius.
     */
    r: number;
}
/**
 * The types used to extend a {@link Radial}'s radius.
 */
export type RadialExpansion = IPoint | IRadial | RadialExpansion[];
/**
 * Returns true if the given radial conforms to the {@link IRadial} interface.
 * @param radial
 * @returns
 */
export declare function IRadial_instanceOf(radial: any): radial is IRadial;
/**
 *
 * @param circle
 * @returns
 */
export declare function IRadial_clone(circle: IRadial): IRadial;
/**
 * A rectangular boundary on a flat surface.
 */
export interface IRectangle {
    /**
     * Left-most horizontal coordinate
     */
    left: number;
    /**
     * Highest vertical coordinate.
     */
    top: number;
    /**
     * Right-most horizontal coordinate
     */
    right: number;
    /**
     * Lowest vertical coordinate
     */
    bottom: number;
}
/**
 * Returns true if the given rect conforms to the {@link Rectangle} interface.
 * @param rect
 */
export declare function IRectangle_instanceOf(rect: any): rect is IRectangle;
/**
 *
 * @param rect
 * @returns
 */
export declare function IRectangle_clone(rect: IRectangle): IRectangle;
/**
 * The types used to extend a {@link Rectangle}'s edges.
 */
export type RectangleExpansion = IPoint | IRectangle | IRadial | RectangleExpansion[];
/**
 * Dimensions on a flat surface.
 */
export interface ISize {
    /**
     * Width.
     */
    width: number;
    /**
     * Height.
     */
    height: number;
}
/**
 * Returns true if the given size conforms to the {@link Size} interface.
 * @param size
 * @returns
 */
export declare function ISize_instanceOf(size: any): size is ISize;
/**
 *
 * @param size
 * @returns
 */
export declare function ISize_clone(size: ISize): ISize;
//# sourceMappingURL=Interfaces.d.ts.map