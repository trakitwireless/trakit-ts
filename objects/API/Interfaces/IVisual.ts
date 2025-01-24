
/**
 * An interface for objects that make them more easily visually identifiable.
*/
export interface IVisual {
	/**
	 * The background colour of the graphic.
	 */
	fill: colour;
	/**
	 * Outline and graphic colour.
	 */
	stroke: colour;
	/**
	 * The name of the symbol for this object.
	 */
	graphic: codified;
}