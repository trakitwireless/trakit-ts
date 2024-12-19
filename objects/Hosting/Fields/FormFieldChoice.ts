


	/// <summary>
	/// A single- or multiple-choice input control.
	/// </summary>
	export class FormFieldChoice extends FormFieldBase {
		/// <summary>
		/// Just <see cref="FormFieldType.choice"/> control type.
		/// </summary>
		protected override FormFieldType[] supported => new[] {
			FormFieldType.choice,
			FormFieldType.dropdown,
		};
		/// <summary>
		/// The list of choices available and their values.
		/// </summary>
		public choices: Map<string, string>;
		/// <summary>
		/// Minimum number of choices that must be selected.
		/// </summary>
		public minimum: byte = NaN;
		/// <summary>
		/// Maximum number of choices that must be selected.
		/// </summary>
		public maximum: byte = NaN;
	}