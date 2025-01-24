


	/**
	 * A geofence defined by a centre coordinate and a threshold value to indicate the boundary around that point.
	 *  <override skip="false" name="" />
	 * @deprecated
	 */
	export class ProviderGeofenceCircular extends GeofenceType {
		/**
		 * The smallest possible radius for this geofence.
		 */
		public minRadius: uint = NaN;
		/**
		 * The largest possible radius for this geofence.
		 */
		public maxRadius: uint = NaN;
	}