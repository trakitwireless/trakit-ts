
	/// <summary>
	/// Seldom changing details about a trailer.
	/// </summary>
	export class TrailerGeneral extends AssetGeneral {
		/// <summary>
		/// The license plate.
		/// </summary>
		/// <override max-length="50" />
		public plate: string = "";
		/// <summary>
		/// Manufacturer's unique identification number for this trailer.
		/// </summary>
		/// <override max-length="50" />
		public serial: string = "";
		/// <summary>
		/// Manufacturer's name.
		/// </summary>
		/// <override max-length="50" />
		public make: string = "";
		/// <summary>
		/// Manufacturer's model name/number.
		/// </summary>
		/// <override max-length="50" />
		public model: string = "";
		/// <summary>
		/// Year of manufacturing.
		/// </summary>
		public year: ushort = NaN;
		/// <summary>
		/// Primary colour of the trailer (given in 24bit hex; #RRGGBB)
		/// </summary>
		/// <override max-length="22" format="colour" />
		public colour: string = "";
	}