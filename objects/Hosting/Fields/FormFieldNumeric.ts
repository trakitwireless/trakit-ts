
	/**
	 * A numeric value input control with multiple contexts available.
	 *  <remarks>
	 * For this field, the <see cref="FormFieldBase.kind"/> is just a helper for the UI, and does not affect input validation.
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
		 * Used only for <see cref="FormFieldType.distance"/>, <see cref="FormFieldType.weight"/>, <see cref="FormFieldType.volume"/>,
		 * and <see cref="FormFieldType.speed"/>.
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
		 * This value is ignored for <see cref="FormFieldType.distance"/>, <see cref="FormFieldType.weight"/>,
		 *  <see cref="FormFieldType.volume"/>, <see cref="FormFieldType.speed"/>, and <see cref="FormFieldType.area"/> field types.
		 * And for <see cref="FormFieldType.currency"/> fields it acts as a prefix, like "$" or "USD".
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