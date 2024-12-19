
	/// <summary>
	/// A <see cref="Timezone"/> selection control.
	/// </summary>
	export class FormFieldTimezone extends FormFieldBase {
		/// <summary>
		/// Just <see cref="FormFieldType.timezone"/> control type.
		/// </summary>
		protected override FormFieldType[] supported => new[] {
			FormFieldType.timezone,
		};
	}