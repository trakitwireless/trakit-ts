


	/// <summary>
	/// Details about the lifetime of a <see cref="DispatchStep"/>.
	/// </summary>
	export class DispatchStepState {
		/// <summary>
		/// A timestamp from when the lifetime was updated.
		/// </summary>
		public updated: Date = DATE();
		/// <summary>
		/// The coordinates from the <see cref="Asset"/> when the update happened.
		/// </summary>
		public latlng: LatLng;
	}