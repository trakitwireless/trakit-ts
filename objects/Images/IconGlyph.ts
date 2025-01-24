
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
		public tags: string[] = [];
		/**
		 * Path to the image.
		 */
		public src: string = "";
		/**
		 * Size of the glyph in pixels.
		 */
		public size: Size;
		/**
		 * The offset from the lat/long in pixels.
		 */
		public anchor: Point;
		/**
		 * The layer on which this glyph is displayed.
		 */
		public layer: IconLayer;
		/**
		 * The z-order of this glyph compared to other glyphs on the same layer.
		 */
		public zIndex: ushort = NaN;
		/**
		 * Indicates that this glyph rotate based on GPS bearing.
		 */
		public rotates: boolean = false;
	}