
	/**
	 * A context hint for the size of a measurements.
	 */
	export enum FormFieldNumericSize {
		/**
		 * A small measurement.
		 * For {@link FormFieldType.distance}: {@link Units.CENTIMETER}/{@link Units.INCH}
		 * For {@link FormFieldType.weight}: {@link Units.GRAM}/{@link Units.OUNCE}
		 * For {@link FormFieldType.volume}: {@link Units.MILLILITER}/{@link Units.OUNCE}
		 * For {@link FormFieldType.speed}: {@link Units.CENTIMETER_PER_SECOND}/{@link Units.INCH_PER_SECOND}
		 * For {@link FormFieldType.area}: {@link Units.SQUARE_METRE}/{@link Units.SQUARE_FOOT}
		 */
		small,
		/**
		 * A medium measurement.
		 * For {@link FormFieldType.distance}: {@link Units.METER}/{@link Units.FOOT}
		 * For {@link FormFieldType.weight}: {@link Units.KILOGRAM}/{@link Units.POUND}
		 * For {@link FormFieldType.volume}: same as {@link FormFieldNumericSize.small}
		 * For {@link FormFieldType.speed}: {@link Units.METER_PER_SECOND}/{@link Units.FOOT_PER_SECOND}
		 * For {@link FormFieldType.area}: {@link Units.SQUARE_KILOMETRE}/{@link Units.SQUARE_MILE}
		 */
		medium,
		/**
		 * A large measurement.
		 * For {@link FormFieldType.distance}: {@link Units.KILOMETER}/{@link Units.MILE}
		 * For {@link FormFieldType.weight}: {@link Units.TONNE}/{@link Units.TON}
		 * For {@link FormFieldType.volume}: {@link Units.LITER}/{@link Units.GALLON}
		 * For {@link FormFieldType.speed}: {@link Units.KILOMETER_PER_HOUR}/{@link Units.MILE_PER_HOUR}
		 * For {@link FormFieldType.area}: {@link Units.HECTARE}/{@link Units.ACRE}
		 */
		large,
	}