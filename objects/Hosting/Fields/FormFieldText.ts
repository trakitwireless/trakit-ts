
	/// <summary>
	/// A text input control.
	/// </summary>
	export class FormFieldText extends FormFieldBase {
		/// <summary>
		/// Just <see cref="FormFieldType.text"/> control type.
		/// </summary>
		protected override FormFieldType[] supported => new[] {
			FormFieldType.text,
		};
		/// <summary>
		/// The number of rows of text to display.
		/// </summary>
		/// <remarks>
		/// The control should grow to display all entered text even if the UI must add more rows.
		/// </remarks>
		public rows: byte = NaN;
		/// <summary>
		/// Minimum length of entered text to make it a valid entry.
		/// </summary>
		public minimum: ushort = NaN;
		/// <summary>
		/// Maximum length of entered text to make it a valid entry.
		/// </summary>
		public maximum: ushort = NaN;
	}