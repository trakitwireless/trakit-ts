/**
 * The types of geography the system supports
 */
export enum PlaceType {
	/**
	 * A lat/long coordinate pair.
	 * Places of this type do not contain the {@link Vorgon.PlaceGeneral.radius} or {@link Vorgon.PlaceGeneral.shape} keys.
	 */
	point = "point",
	/**
	 * Defined as a radius around a lat/long pair used to create a circular boundary.
	 * Places of this type do not contain the {@link Vorgon.PlaceGeneral.shape} key.
	 */
	radial = "radial",
	/**
	 * The {@link Vorgon.PlaceGeneral.shape} is an array of lat/long coordinates used to create a boundary.
	 * Places of this type do not contain the {@link Vorgon.PlaceGeneral.radius} key.
	 */
	polygon = "polygon",
	/**
	 * The {@link Vorgon.PlaceGeneral.shape} is an array of two lat/long coordinates defined as north-east and south-west corners.
	 * Places of this type do not contain the {@link Vorgon.PlaceGeneral.radius} key.
	 */
	rectangle = "rectangle",
}