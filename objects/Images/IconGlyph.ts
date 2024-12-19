
	/// <summary>
	/// The image source and defined status tags which need to be applied to an asset in order to show the image.
	/// </summary>
	export class IconGlyph {
		/// <summary>
		/// A list of codified status tag names.  Any of the tags must be applied to the asset for the image to appear.
		/// </summary>
		/// <override>
		/// <values format="codified">
		/// <seealso cref="LabelStyle.code" />
		/// </values>
		/// </override>
		public tags: string[] = [];
		/// <summary>
		/// Path to the image.
		/// </summary>
		public src: string = "";
		/// <summary>
		/// Size of the glyph in pixels.
		/// </summary>
		public size: Size;
		/// <summary>
		/// The offset from the lat/long in pixels.
		/// </summary>
		public anchor: Point;
		/// <summary>
		/// The layer on which this glyph is displayed.
		/// </summary>
		public layer: IconLayer;
		/// <summary>
		/// The z-order of this glyph compared to other glyphs on the same layer.
		/// </summary>
		public zIndex: ushort = NaN;
		/// <summary>
		/// Indicates that this glyph rotate based on GPS bearing.
		/// </summary>
		public rotates: boolean = false;
	}