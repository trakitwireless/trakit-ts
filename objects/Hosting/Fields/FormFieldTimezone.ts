
	/**
	 * A <see cref="Timezone"/> selection control.
	 */
	export class FormFieldTimezone extends FormFieldBase {
		/**
		 * Just <see cref="FormFieldType.timezone"/> control type.
		 */
		protected override FormFieldType[] supported => new[] {
			FormFieldType.timezone,
		};
	}