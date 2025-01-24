
	/**
	 * A text input control.
	 */
	export class FormFieldText extends FormFieldBase {
		/**
		 * Just <see cref="FormFieldType.text"/> control type.
		 */
		protected override FormFieldType[] supported => new[] {
			FormFieldType.text,
		};
		/**
		 * The number of rows of text to display.
		 *  <remarks>
		 * The control should grow to display all entered text even if the UI must add more rows.
		 *  </remarks>
		 */
		rows: byte = NaN;
		/**
		 * Minimum length of entered text to make it a valid entry.
		 */
		minimum: ushort = NaN;
		/**
		 * Maximum length of entered text to make it a valid entry.
		 */
		maximum: ushort = NaN;
	}