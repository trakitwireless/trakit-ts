
	/// <summary>
	/// A numeric value input control with multiple contexts available.
	/// </summary>
	/// <remarks>
	/// For this field, the <see cref="FormFieldBase.kind"/> is just a helper for the UI, and does not affect input validation.
	/// </remarks>
	export class FormFieldNumeric extends FormFieldBase {
		/// <summary>
		/// These are the numeric control types.
		/// </summary>
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

		/// <summary>
		/// A context hint for the kind of numeric size for this field.
		/// Used only for <see cref="FormFieldType.distance"/>, <see cref="FormFieldType.weight"/>, <see cref="FormFieldType.volume"/>,
		/// and <see cref="FormFieldType.speed"/>.
		/// </summary>
		public size: FormFieldNumericSize;
		/// <summary>
		/// Number of decimal places of accuracy are required.
		/// </summary>
		public precision: byte = NaN;
		/// <summary>
		/// The numeric value increments by this amount.
		/// </summary>
		public step: double = NaN;
		/// <summary>
		/// An optional suffix for this numeric value, like "%" or "ppm".
		/// This value is ignored for <see cref="FormFieldType.distance"/>, <see cref="FormFieldType.weight"/>,
		/// <see cref="FormFieldType.volume"/>, <see cref="FormFieldType.speed"/>, and <see cref="FormFieldType.area"/> field types.
		/// And for <see cref="FormFieldType.currency"/> fields it acts as a prefix, like "$" or "USD".
		/// </summary>
		public units: string = "";
		/// <summary>
		/// The (optional) minimum value.
		/// </summary>
		public minimum: double = NaN;
		/// <summary>
		/// The (optional) maximum value.
		/// </summary>
		public maximum: double = NaN;
	}