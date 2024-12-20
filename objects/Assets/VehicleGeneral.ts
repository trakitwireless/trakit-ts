
	/// <summary>
	/// Seldom changing details about a vehicle.
	/// </summary>
	export class VehicleGeneral extends AssetGeneral {
		/// <summary>
		/// Manufacturer's unique identification number (Vehicle Identification Number).
		/// </summary>
		/// <override max-length="50" />
		public vin: string = "";
		/// <summary>
		/// The license plate.
		/// </summary>
		/// <override max-length="50" />
		public plate: string = "";
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
		/// Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
		/// </summary>
		/// <override max-length="22" format="colour" />
		public colour: string = "";
	}