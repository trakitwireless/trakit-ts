


	/**
	 * Details about the lifetime of a <see cref="DispatchStep"/>.
	 */
	export class DispatchStepState {
		/**
		 * A timestamp from when the lifetime was updated.
		 */
		public updated: Date = DATE();
		/**
		 * The coordinates from the <see cref="Asset"/> when the update happened.
		 */
		public latlng: LatLng;
	}