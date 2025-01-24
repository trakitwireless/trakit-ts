
	/**
	 * The image source and defined status tags which need to be applied to an asset in order to show the image.
	 */
	export class IconGlyph {
		/**
		 * A list of codified status tag names.  Any of the tags must be applied to the asset for the image to appear.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		tags: string[] = [];
		/**
		 * Path to the image.
		 */
		src: string = "";
		/**
		 * Size of the glyph in pixels.
		 */
		size: Size;
		/**
		 * The offset from the lat/long in pixels.
		 */
		anchor: Point;
		/**
		 * The layer on which this glyph is displayed.
		 */
		layer: IconLayer;
		/**
		 * The z-order of this glyph compared to other glyphs on the same layer.
		 */
		zIndex: ushort = NaN;
		/**
		 * Indicates that this glyph rotate based on GPS bearing.
		 */
		rotates: boolean = false;
	}