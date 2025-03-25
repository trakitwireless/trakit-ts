/**
 * The layers of the map used to visualize the icon.
 */
export enum IconLayer {
	/**
	 * An SVG only layer just above the roads used for solid Places and accuracy radius fill.
	 */
	fills = "fills",
	/**
	 * An HTML only layer intended for use by an icon's drop-shadow.
	 */
	shadows = "shadows",
	/**
	 * An SVG only layer intended for use by shape and accuracy radius outlines.
	 */
	outlines = "outlines",
	/**
	 * An HTML only layer intended for use by an icon's main images.
	 */
	markers = "markers",
	/**
	 * An HTML only layer intended for use by an icon's label.
	 */
	labels = "labels",
	/**
	 * An SVG only layer for special drawing controls.  Icons should not use this layer.
	 */
	drawings = "drawings",
	/**
	 * An HTML only layer for special drawing controls.  Icons should not use this layer.
	 */
	edits = "edits",
}