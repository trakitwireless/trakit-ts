


	/**
	 * A geofence whose boundary is a "rectangle" defined by corner coordinates.
	 * @deprecated
	 */
	export class ProviderGeofenceRectangle extends GeofenceType {
		/**
		 * The smallest possible diameter for this geofence.
		 *  <override type="System.UInt32" />
		 */
		public maxLength: int = NaN;
		/**
		 * The smallest possible diameter for this geofence.
		 *  <override type="System.UInt32" />
		 */
		public maxWidth: int = NaN;
	}