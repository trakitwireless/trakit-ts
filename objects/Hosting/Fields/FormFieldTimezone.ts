
	/**
	 * A {@link Timezone} selection control.
	 */
	export class FormFieldTimezone extends FormFieldBase {
		/**
		 * Just {@link FormFieldType.timezone} control type.
		 */
		protected override FormFieldType[] supported => new[] {
			FormFieldType.timezone,
		};
	}