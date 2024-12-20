
	/// <summary>
	/// The kinds of interactions had with a Place.
	/// </summary>
	export enum AssetPlaceStatusType {
		/// <summary>
		/// Occurs when an asset is outside a Place, then goes inside the boundary.
		/// </summary>
		enter,
		/// <summary>
		/// Occurs when the asset was inside the boundary before, and is still inside the boundary now.
		/// </summary>
		inside,
		/// <summary>
		/// Occurs when an asset was inside the boundary of a Place, but then moves outside the boundary.
		/// </summary>
		exit,
	}