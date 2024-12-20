



	/// <summary>
	/// An abstract class used as a base for all Geofence type classes.
	/// </summary>
	[Obsolete]
	export abstract class GeofenceType {
		/// <summary>
		/// The supported shape of geofence.
		/// </summary>
		public type: PlaceType;
		/// <summary>
		/// The maximum number of unique geofences supported by the device.
		/// </summary>
		public maxGeofenceCount: uint = NaN;
	}