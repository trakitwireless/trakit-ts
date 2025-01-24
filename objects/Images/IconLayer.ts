
	/**
	 * The layers of the map used to visualize the icon.
	 */
	export enum IconLayer {
		/**
		 * An SVG only layer just above the roads used for solid Places and accuracy radius fill.
		 */
		fills,
		/**
		 * An HTML only layer intended for use by an icon's drop-shadow.
		 */
		shadows,
		/**
		 * An SVG only layer intended for use by shape and accuracy radius outlines.
		 */
		outlines,
		/**
		 * An HTML only layer intended for use by an icon's main images.
		 */
		markers,
		/**
		 * An HTML only layer intended for use by an icon's label.
		 */
		labels,
		/**
		 * An SVG only layer for special drawing controls.  Icons should not use this layer.
		 */
		drawings,
		/**
		 * An HTML only layer for special drawing controls.  Icons should not use this layer.
		 */
		edits,
	}