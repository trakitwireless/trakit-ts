
	/// <summary>
	/// Part of the White-labelling profile definitions.
	/// </summary>
	export class ColourStyle {
		/// <summary>
		/// The colour of the background.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public fill: string = "";
		/// <summary>
		/// The colour of the text or outline.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public stroke: string = "";
	}