
	/// <summary>
	/// Visual style identification helper.
	/// </summary>
	export class LabelStyle implements INamed implements IVisual {
		/// <summary>
		/// The name of this visual style.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// The codified name of this style
		/// </summary>
		/// <override readonly="true" format="codified" />
		public code: string = "";
		/// <summary>
		/// The background colour given to this style for easy visual identification.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public fill: string = "";
		/// <summary>
		/// The text/graphic colour given to this style for easy visual identification.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public stroke: string = "";
		/// <summary>
		/// The codified graphic name given to this script for easy visual identification.
		/// </summary>
		/// <override max-length="22" format="codified" />
		public graphic: string = "";
		/// <summary>
		/// Notes!
		/// </summary>
		public notes: string = "";
	}