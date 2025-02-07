/**
 * The kinds of interactions had with a Place.
 */
export enum AssetPlaceStatusType {
	/**
	 * Occurs when an asset is outside a Place, then goes inside the boundary.
	 */
	enter = "enter",
	/**
	 * Occurs when the asset was inside the boundary before, and is still inside the boundary now.
	 */
	inside = "inside",
	/**
	 * Occurs when an asset was inside the boundary of a Place, but then moves outside the boundary.
	 */
	exit = "exit",
}