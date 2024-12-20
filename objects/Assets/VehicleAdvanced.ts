
	/// <summary>
	/// Often changing details about a vehicle.
	/// </summary>
	export class VehicleAdvanced extends AssetAdvanced {
		/// <summary>
		/// The cumulative duration that the vehicle's engine has been running (in decimal hours).
		/// </summary>
		public engineHours: double = NaN;
	}