
	/// <summary>
	/// Definition for the name bubble above the icon on a map.
	/// </summary>
	export class IconLabel {
		/// <summary>
		/// The offset from the lat/long in pixels.
		/// </summary>
		public anchor: Point;
		/// <summary>
		/// Determines which corner of the label is attached to the anchor.
		/// </summary>
		public align: string = "";
		/// <summary>
		/// Background colour of the label.
		/// </summary>
		public colour: string = "";
	}