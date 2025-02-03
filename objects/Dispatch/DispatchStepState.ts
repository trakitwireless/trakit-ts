


	/**
	 * Details about the lifetime of a {@link DispatchStep}.
	 */
	export class DispatchStepState {
		/**
		 * A timestamp from when the lifetime was updated.
		 */
		updated: Date = DATE();
		/**
		 * The coordinates from the {@link Asset} when the update happened.
		 */
		latlng: LatLng;
	}