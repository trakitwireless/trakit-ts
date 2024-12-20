
	/// <summary>
	/// The types of geography the system supports
	/// </summary>
	/// <override name="PlaceType"/>
	export enum PlaceType {
		/// <summary>
		/// A lat/long coordinate pair.
		/// Places of this type do not contain the <see cref="Vorgon.PlaceGeneral.radius"/> or <see cref="Vorgon.PlaceGeneral.shape"/> keys.
		/// </summary>
		point,
		/// <summary>
		/// Defined as a radius around a lat/long pair used to create a circular boundary.
		/// Places of this type do not contain the <see cref="Vorgon.PlaceGeneral.shape"/> key.
		/// </summary>
		radial,
		/// <summary>
		/// The <see cref="Vorgon.PlaceGeneral.shape"/> is an array of lat/long coordinates used to create a boundary.
		/// Places of this type do not contain the <see cref="Vorgon.PlaceGeneral.radius"/> key.
		/// </summary>
		polygon,
		/// <summary>
		/// The <see cref="Vorgon.PlaceGeneral.shape"/> is an array of two lat/long coordinates defined as north-east and south-west corners.
		/// Places of this type do not contain the <see cref="Vorgon.PlaceGeneral.radius"/> key.
		/// </summary>
		rectangle,
	}