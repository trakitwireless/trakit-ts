﻿



	/**
	 * An abstract class used as a base for all Geofence type classes.
	 * @deprecated
	 */
	export abstract class GeofenceType {
		/**
		 * The supported shape of geofence.
		 */
		public type: PlaceType;
		/**
		 * The maximum number of unique geofences supported by the device.
		 */
		public maxGeofenceCount: uint = NaN;
	}