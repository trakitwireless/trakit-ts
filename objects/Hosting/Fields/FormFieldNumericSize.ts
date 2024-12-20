
	/// <summary>
	/// A context hint for the size of a measurements.
	/// </summary>
	export enum FormFieldNumericSize {
		/// <summary>
		/// A small measurement.
		/// For <see cref="FormFieldType.distance"/>: <see cref="Units.CENTIMETER"/>/<see cref="Units.INCH"/>
		/// For <see cref="FormFieldType.weight"/>: <see cref="Units.GRAM"/>/<see cref="Units.OUNCE"/>
		/// For <see cref="FormFieldType.volume"/>: <see cref="Units.MILLILITER"/>/<see cref="Units.OUNCE"/>
		/// For <see cref="FormFieldType.speed"/>: <see cref="Units.CENTIMETER_PER_SECOND"/>/<see cref="Units.INCH_PER_SECOND"/>
		/// For <see cref="FormFieldType.area"/>: <see cref="Units.SQUARE_METRE"/>/<see cref="Units.SQUARE_FOOT"/>
		/// </summary>
		small,
		/// <summary>
		/// A medium measurement.
		/// For <see cref="FormFieldType.distance"/>: <see cref="Units.METER"/>/<see cref="Units.FOOT"/>
		/// For <see cref="FormFieldType.weight"/>: <see cref="Units.KILOGRAM"/>/<see cref="Units.POUND"/>
		/// For <see cref="FormFieldType.volume"/>: same as <see cref="FormFieldNumericSize.small"/>
		/// For <see cref="FormFieldType.speed"/>: <see cref="Units.METER_PER_SECOND"/>/<see cref="Units.FOOT_PER_SECOND"/>
		/// For <see cref="FormFieldType.area"/>: <see cref="Units.SQUARE_KILOMETRE"/>/<see cref="Units.SQUARE_MILE"/>
		/// </summary>
		medium,
		/// <summary>
		/// A large measurement.
		/// For <see cref="FormFieldType.distance"/>: <see cref="Units.KILOMETER"/>/<see cref="Units.MILE"/>
		/// For <see cref="FormFieldType.weight"/>: <see cref="Units.TONNE"/>/<see cref="Units.TON"/>
		/// For <see cref="FormFieldType.volume"/>: <see cref="Units.LITER"/>/<see cref="Units.GALLON"/>
		/// For <see cref="FormFieldType.speed"/>: <see cref="Units.KILOMETER_PER_HOUR"/>/<see cref="Units.MILE_PER_HOUR"/>
		/// For <see cref="FormFieldType.area"/>: <see cref="Units.HECTARE"/>/<see cref="Units.ACRE"/>
		/// </summary>
		large,
	}