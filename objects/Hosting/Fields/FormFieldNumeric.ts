
	/**
	 * A numeric value input control with multiple contexts available.
	 *  <remarks>
	 * For this field, the {@link FormFieldBase.kind} is just a helper for the UI, and does not affect input validation.
	 *  </remarks>
	 */
	export class FormFieldNumeric extends FormFieldBase {
		/**
		 * These are the numeric control types.
		 */
		protected override FormFieldType[] supported => new[] {
			FormFieldType.numeric,
			FormFieldType.range,
			FormFieldType.distance,
			FormFieldType.area,
			FormFieldType.temperature,
			FormFieldType.weight,
			FormFieldType.volume,
			FormFieldType.pressure,
			FormFieldType.speed,
			FormFieldType.fuelEconomy,
			FormFieldType.currency,
		};

		/**
		 * A context hint for the kind of numeric size for this field.
		 * Used only for {@link FormFieldType.distance}, {@link FormFieldType.weight}, {@link FormFieldType.volume},
		 * and {@link FormFieldType.speed}.
		 */
		size: FormFieldNumericSize;
		/**
		 * Number of decimal places of accuracy are required.
		 */
		precision: byte = NaN;
		/**
		 * The numeric value increments by this amount.
		 */
		step: double = NaN;
		/**
		 * An optional suffix for this numeric value, like "%" or "ppm".
		 * This value is ignored for {@link FormFieldType.distance}, {@link FormFieldType.weight},
		 *  {@link FormFieldType.volume}, {@link FormFieldType.speed}, and {@link FormFieldType.area} field types.
		 * And for {@link FormFieldType.currency} fields it acts as a prefix, like "$" or "USD".
		 */
		units: string = "";
		/**
		 * The (optional) minimum value.
		 */
		minimum: double = NaN;
		/**
		 * The (optional) maximum value.
		 */
		maximum: double = NaN;
	}