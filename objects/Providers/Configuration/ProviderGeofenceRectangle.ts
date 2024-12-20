


	/// <summary>
	/// A geofence whose boundary is a "rectangle" defined by corner coordinates.
	/// </summary>
	[Obsolete]
	export class ProviderGeofenceRectangle extends GeofenceType {
		/// <summary>
		/// The smallest possible diameter for this geofence.
		/// </summary>
		/// <override type="System.UInt32" />
		public maxLength: int = NaN;
		/// <summary>
		/// The smallest possible diameter for this geofence.
		/// </summary>
		/// <override type="System.UInt32" />
		public maxWidth: int = NaN;
	}