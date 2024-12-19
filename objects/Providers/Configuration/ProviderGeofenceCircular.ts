


	/// <summary>
	/// A geofence defined by a centre coordinate and a threshold value to indicate the boundary around that point.
	/// </summary>
	/// <override skip="false" name="" />
	[Obsolete]
	export class ProviderGeofenceCircular extends GeofenceType {
		/// <summary>
		/// The smallest possible radius for this geofence.
		/// </summary>
		public minRadius: uint = NaN;
		/// <summary>
		/// The largest possible radius for this geofence.
		/// </summary>
		public maxRadius: uint = NaN;
	}