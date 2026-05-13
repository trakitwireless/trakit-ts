/**
 * The four supported types of trackable things.
 */
export enum AssetType {
	/**
	 * Generic thing.
	 */
	asset = "asset",
	/**
	 * Human (or alien) Person.
	 */
	person = "person",
	/**
	 * A towed vehicle without an engine.
	 */
	trailer = "trailer",
	/**
	 * A vehicle that moves with its own power.
	 */
	vehicle = "vehicle",
}